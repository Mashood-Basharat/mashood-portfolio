-- Enable the vector extension for AI searches
create extension if not exists vector;

-- Portfolio document chunks for RAG chatbot
create table if not exists portfolio_documents (
  id bigserial primary key,
  content text not null,
  document_type text not null,
  source_title text,
  embedding vector(384),
  created_at timestamp default now()
);

-- Structured project cards for the portfolio page
create table if not exists projects (
  id bigserial primary key,
  title text not null,
  description text not null,
  live_url text,
  github_url text,
  tech_stack text[],
  featured boolean default false,
  created_at timestamp default now()
);

-- Vector similarity search for chatbot retrieval
create or replace function match_portfolio_documents (
  query_embedding vector(384),
  match_count int default 5
)
returns table (
  id bigint,
  content text,
  document_type text,
  source_title text,
  similarity float
)
language sql stable
as $$
  select
    portfolio_documents.id,
    portfolio_documents.content,
    portfolio_documents.document_type,
    portfolio_documents.source_title,
    1 - (portfolio_documents.embedding <=> query_embedding) as similarity
  from portfolio_documents
  where portfolio_documents.embedding is not null
  order by portfolio_documents.embedding <=> query_embedding
  limit match_count;
$$;

-- Allow public read access to featured projects from the browser
alter table projects enable row level security;

create policy "Public can read projects"
on projects
for select
to anon, authenticated
using (true);

-- Lock down document chunks — no direct public insert/update/delete
alter table portfolio_documents enable row level security;

create policy "Public can read portfolio_documents"
on portfolio_documents
for select
to anon, authenticated
using (true);
