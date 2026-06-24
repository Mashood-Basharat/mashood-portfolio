import { groq } from "@ai-sdk/groq";
import { convertToModelMessages, streamText } from "ai";
import { generateEmbedding } from "@/lib/embeddings";
import { supabaseServer } from "@/lib/supabase-server";

export const maxDuration = 60;

function getLatestMessageText(messages: unknown[]): string | undefined {
  const latest = messages[messages.length - 1] as
    | {
        content?: string;
        parts?: Array<{ type: string; text?: string }>;
      }
    | undefined;

  if (!latest) {
    return undefined;
  }

  if (typeof latest.content === "string") {
    return latest.content;
  }

  return latest.parts
    ?.filter((part) => part.type === "text")
    .map((part) => part.text ?? "")
    .join("");
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const latestMessage = getLatestMessageText(messages);

    if (!latestMessage) {
      return Response.json({ error: "No message provided." }, { status: 400 });
    }

    const queryEmbedding = await generateEmbedding(latestMessage);

    const { data: documents, error } = await (supabaseServer() as any).rpc(
      "match_portfolio_documents",
      {
        query_embedding: queryEmbedding,
        match_count: 5,
      }
    );

    if (error) {
      console.error("Supabase vector search error:", error);
    }

    const contextText =
      documents
        ?.map((doc: { source_title?: string | null; document_type?: string; content?: string }) =>
          `Source: ${doc.source_title || doc.document_type}\n${doc.content}`
        )
        .join("\n\n") || "";

    const systemPrompt = `You are Mashood Basharat's Portfolio AI Assistant. Answer questions about Mashood's background, skills, projects, experience, and portfolio.

Portfolio Context:
${contextText}

Rules:
- Use "I" for yourself (e.g., "I am Mashood's assistant", "I can help with...").
- Answer directly. NEVER use prefixes like "According to the provided context", "Based on the context", or similar.
- Be extremely concise. When someone says "hi" or "hello", just say "Hi! I'm Mashood's AI assistant. How can I help you?" — nothing more.
- Format responses with bullet points and short sections when listing multiple items.
- Use **bold** for key terms like project names, skills, or tech stacks.
- Use the context to infer and reason. If you have relevant info (e.g., start dates, roles, skills), don't say "I don't know" — state what you know and let it speak. Only say "I don't have that information" if the context truly has nothing related. Do not invent anything.
- Distinguish between featured portfolio projects (those demoed or displayed on the site) and academic or background projects (like FYP). Clarify when something is not featured on the portfolio.
- If asked about hiring or collaboration, guide them to contact Mashood.`;

    const result = streamText({
      model: groq("llama-3.3-70b-versatile"),
      system: systemPrompt,
      messages: await convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Chat API error:", message, error);
    return Response.json({ error: message }, { status: 500 });
  }
}
