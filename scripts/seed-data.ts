import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function main() {
  const { generateEmbedding } = await import("../src/lib/embeddings");
  const { supabaseServer } = await import("../src/lib/supabase-server");
  const { seedPortfolioDocuments, seedProjects } = await import("../src/lib/seed");

  console.log("Seeding portfolio_documents...");
  const docs = await seedPortfolioDocuments(generateEmbedding, supabaseServer);
  docs.forEach((title) => console.log(`  inserted: ${title}`));

  console.log("Seeding projects...");
  const count = await seedProjects(supabaseServer);
  console.log(`  inserted ${count} projects`);

  console.log("Seed complete.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
