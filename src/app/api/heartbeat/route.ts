import { supabaseServer } from "@/lib/supabase-server";

export async function GET() {
  try {
    const db = supabaseServer();
    const { error } = await db.from("portfolio_documents").select("id", { count: "exact", head: true }).limit(1);
    if (error) throw error;
    return Response.json({ ok: true, timestamp: new Date().toISOString() });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
