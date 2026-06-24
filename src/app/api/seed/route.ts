import { generateEmbedding } from "@/lib/embeddings";
import { seedPortfolioDocuments, seedProjects } from "@/lib/seed";
import { supabaseServer } from "@/lib/supabase-server";

export const maxDuration = 120;

export async function POST() {
  try {
    const db = supabaseServer();
    const docs = await seedPortfolioDocuments(generateEmbedding, db);
    const projectCount = await seedProjects(db);

    return Response.json({
      success: true,
      documents: docs.length,
      projects: projectCount,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Seed API error:", message);
    return Response.json({ success: false, error: message }, { status: 500 });
  }
}
