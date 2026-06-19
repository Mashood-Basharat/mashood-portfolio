import {
  env,
  pipeline,
  type FeatureExtractionPipeline,
} from "@huggingface/transformers";

const MODEL_ID = "Xenova/bge-small-en-v1.5";
const EMBEDDING_DIMENSION = 384;
const QUERY_PREFIX =
  "Represent this sentence for searching relevant passages: ";

type EmbeddingMode = "query" | "document";

class EmbeddingPipeline {
  private static instance: FeatureExtractionPipeline | null = null;

  static async getInstance(): Promise<FeatureExtractionPipeline> {
    if (!EmbeddingPipeline.instance) {
      env.cacheDir = "./.cache/transformers";
      env.allowLocalModels = true;

      EmbeddingPipeline.instance = await pipeline(
        "feature-extraction",
        MODEL_ID
      );
    }

    return EmbeddingPipeline.instance;
  }
}

function prepareInput(text: string, mode: EmbeddingMode): string {
  const trimmed = text.trim();

  if (!trimmed) {
    throw new Error("Cannot generate embedding for empty text.");
  }

  return mode === "query" ? `${QUERY_PREFIX}${trimmed}` : trimmed;
}

export async function generateEmbedding(
  text: string,
  options?: { mode?: EmbeddingMode }
): Promise<number[]> {
  const mode = options?.mode ?? "query";
  const extractor = await EmbeddingPipeline.getInstance();
  const output = await extractor(prepareInput(text, mode), {
    pooling: "mean",
    normalize: true,
  });

  const embedding = Array.from(output.data as Float32Array | number[]);

  if (embedding.length !== EMBEDDING_DIMENSION) {
    throw new Error(
      `Expected ${EMBEDDING_DIMENSION} dimensions, got ${embedding.length}.`
    );
  }

  return embedding;
}
