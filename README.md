# Mashood Basharat — Portfolio

Single-page portfolio built with **Next.js 16 (App Router)**, featuring an AI chatbot with RAG pipeline, course video showcases, and a dark indigo-purple theme.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Database:** Supabase (PostgreSQL + vector search)
- **AI Chatbot:** Groq (llama-3.3-70b-versatile) + HuggingFace embeddings (bge-small-en-v1.5)
- **Video:** react-player (YouTube)
- **Fonts:** Geist (Vercel)

## Features

- Hero, About, Skills, Experience, Projects, Courses, Contact sections
- AI chatbot with RAG — asks questions about my work, skills, and experience
- Vector similarity search on a Supabase knowledge base
- Course video demos with custom start times
- Fully responsive with mobile hamburger menu
- Dark theme throughout

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
GROQ_API_KEY=
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Lint check |
| `npm run db:seed` | Re-seed the chatbot knowledge base |

## Project Structure

```
src/
  app/
    layout.tsx       — Root layout with chat bubble
    page.tsx         — Single-page portfolio
    api/
      chat/route.ts  — RAG chatbot endpoint
      seed/route.ts  — Re-seed knowledge base
  components/
    chat-bubble.tsx  — Floating AI chatbot
    project-card.tsx — Project display card
    video-embed.tsx  — YouTube player
  lib/
    embeddings.ts    — Embedding pipeline
    seed.ts          — Knowledge base content
    supabase.ts      — Public Supabase client
    supabase-server.ts — Service-role client
```
