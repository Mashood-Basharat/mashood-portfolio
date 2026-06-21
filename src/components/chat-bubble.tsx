"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { MessageSquare, Send, X, Bot, User } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

function getMessageText(message: {
  parts: Array<{ type: string; text?: string }>;
}): string {
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text ?? "")
    .join("");
}

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    sendMessage({ text: trimmed });
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white p-4 rounded-full shadow-2xl shadow-indigo-600/40 hover:shadow-indigo-600/60 hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-ring"
        >
          <MessageSquare size={24} className="group-hover:scale-110 transition-transform duration-200" />
        </button>
      )}

      {isOpen && (
        <div className="bg-zinc-950/95 backdrop-blur-xl border border-zinc-800/80 w-[420px] h-[580px] rounded-2xl shadow-2xl shadow-indigo-600/20 flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="p-1.5 bg-white/15 rounded-lg">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Mashood&apos;s AI Assistant</h3>
                <p className="text-[10px] text-white/70">Ask me anything about his work</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm chat-scrollbar">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center px-6">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4">
                  <Bot size={32} />
                </div>
                <p className="text-zinc-300 font-semibold text-sm mb-1">
                  Hi! I&apos;m Mashood&apos;s AI assistant
                </p>
                <p className="text-zinc-500 text-xs leading-relaxed max-w-xs">
                  Ask me about his projects, skills, experience, courses, or anything AI-related.
                </p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-2 mt-0.5">
                    <Bot size={14} className="text-white" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-tr-md"
                      : "bg-zinc-900/80 border border-zinc-800/60 text-zinc-300 rounded-tl-md prose prose-invert prose-sm max-w-none"
                  }`}
                >
                  {message.role === "user" ? (
                    getMessageText(message)
                  ) : (
                    <ReactMarkdown
                      components={{
                        strong: ({ children }) => (
                          <span className="font-semibold text-zinc-100">{children}</span>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc list-inside space-y-1 my-1">{children}</ul>
                        ),
                        li: ({ children }) => (
                          <li className="text-zinc-300">{children}</li>
                        ),
                        p: ({ children }) => (
                          <p className="mb-1 last:mb-0">{children}</p>
                        ),
                      }}
                    >
                      {getMessageText(message)}
                    </ReactMarkdown>
                  )}
                </div>
                {message.role === "user" && (
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center ml-2 mt-0.5">
                    <User size={14} className="text-zinc-400" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-2 mt-0.5">
                  <Bot size={14} className="text-white" />
                </div>
                <div className="p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800/60 text-zinc-400 text-xs rounded-tl-md">
                  <span className="inline-flex space-x-1">
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-4 border-t border-zinc-800/80 flex gap-2 bg-zinc-950"
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about Mashood's work..."
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white p-2.5 rounded-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all duration-200"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
