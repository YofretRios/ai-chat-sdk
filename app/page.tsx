"use client";

import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col">
        {messages.map((m) => (
          <div key={m.id}>
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </main>
  );
}
