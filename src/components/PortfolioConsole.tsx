import React, { useState, useRef, useEffect } from "react";

export default function PortfolioConsole() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "Welcome to the Portfolio Console! Type 'help' to get started.",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, string> = {
    help:
      "Available commands:\n - help\n - about\n - skills\n - experience\n - contact\n - clear",
    about: "Soumya jain,\n passionate about building intuitive web apps, exploring AI, and solving real-world problems with tech.",
    skills:
      "Skills:\n - Frontend: React, Next.js, Tailwind CSS\n - Backend: Node.js, MongoDB, PostgreSQL\n - ML: Python, TensorFlow, Deep Learning",
    experience:
      "Experience:\n  - Freelance Web Dev (2024–Present)\n - Campus Ambassador @ IIT Bombay (Jun–Aug 2024)",
    contact:
      "Email: 23ucs717@lnmiit.ac.in\nLinkedIn: https://linkedin.com/in/soumya \nGitHub: https://github.com/soumya-xy",
  };

  const handleCommand = (cmd: string) => {
    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    const output = commands[cmd.toLowerCase()] || `Command not found: ${cmd}. Type 'help'.`;
    setHistory((prev) => [
      ...prev,
      { type: "input", text: cmd },
      { type: "output", text: output },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    handleCommand(input.trim());
    setInput("");
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="relative bg-[#0d0d0d] text-white p-6 font-mono text-sm w-full h-full rounded-t-xl flex flex-col overflow-hidden border-t border-gray-800">
      {/* Terminal Output */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar text-sm">
        {history.map((entry, idx) =>
          entry.type === "input" ? (
            <div key={idx} className="text-green-400">{`$ ${entry.text}`}</div>
          ) : entry.type === "output" ? (
            <pre key={idx} className="text-gray-300 whitespace-pre-wrap">{entry.text}</pre>
          ) : (
            <div key={idx} className="text-yellow-400">{entry.text}</div>
          )
        )}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="mt-3 flex items-center">
        <span className="text-green-400 mr-2">$</span>
        <input
          className="flex-1 bg-transparent text-white outline-none caret-green-400 placeholder-gray-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={64}
          autoFocus
          placeholder="Type a command..."
          autoComplete="off"
        />
      </form>
    </div>
  );
}
