"use client";

import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full items-start justify-between font-mono text-sm lg:flex flex-col divide-y divide-solid divide-black">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`w-full ${
              m.role === "user" ? "bg-neutral-100" : "bg-transparent"
            }`}
          >
            <div className="p-2 max-w-5xl mx-auto">
              {m.role === "user" ? "User: " : "AI: "}
              {m.content}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-5xl py-6">
        <input
          className="block p-4 w-full text-sm text-gray-900 bg-neutral-100 rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        <div className="relative">
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send!
          </button>
        </div>
      </form>
    </main>
  );
}
