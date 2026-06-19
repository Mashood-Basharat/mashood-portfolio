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
  const { messages } = await req.json();

  const latestMessage = getLatestMessageText(messages);

  if (!latestMessage) {
    return Response.json({ error: "No message provided." }, { status: 400 });
  }

  const queryEmbedding = await generateEmbedding(latestMessage);

  const { data: documents, error } = await supabaseServer.rpc(
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
      ?.map((doc: {
        source_title?: string | null;
        document_type?: string;
        content?: string;
      }) => {
        return `Source: ${doc.source_title || doc.document_type}\n${doc.content}`;
      })
      .join("\n\n") || "";

  const systemPrompt = `
You are Mashood Basharat's Portfolio AI Assistant.

Your job is to answer questions about Mashood's background, skills, projects, experience, and portfolio.

Use the provided context when answering.

Portfolio Context:
${contextText}

Rules:
- Answer accurately based on the provided context.
- If the answer is not available in the context, say that you do not have enough information.
- Do not invent fake projects, links, companies, or achievements.
- Keep answers clear, professional, and helpful.
- If the visitor asks about hiring or collaboration, guide them to contact Mashood.
`;

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"),
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
