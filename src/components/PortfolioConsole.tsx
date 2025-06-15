
import React, { useState, useRef, useEffect } from "react";

const initialHistory = [
  { type: "system", text: "Welcome to the Portfolio Console! Type 'help' to get started." }
];

const commands = {
  help: "Available commands: help, about, skills, experience, clear, contact",
  about: "I'm a passionate engineering student who loves tech and innovation!",
  skills: "React, Next.js, Tailwind CSS, Python, Deep Learning, TensorFlow, Node.js, MongoDB, PostgreSQL, Docker, AWS, Git",
  experience:
    "Frontend Developer Intern at TechCorp Solutions (Jun-Aug 2024); Freelance Web Developer (2024-Present)",
  contact: "Email: soumya@example.com | LinkedIn: linkedin.com | GitHub: github.com",
};

export default function PortfolioConsole() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState(initialHistory);
  const endRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    let output = commands[cmd as keyof typeof commands] || `Command not found: ${cmd}. Type 'help'.`;
    setHistory(prev => [
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
    <div className="bg-black text-white rounded-lg p-4 font-mono text-sm w-full h-[350px] max-w-full flex flex-col overflow-auto" style={{border: '1px solid #232323'}}>
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {history.map((entry, idx) =>
          entry.type === "input" ? (
            <div key={idx} className="text-blue-400">$ {entry.text}</div>
          ) : entry.type === "output" ? (
            <div key={idx} className="text-green-400 whitespace-pre-line">{entry.text}</div>
          ) : (
            <div key={idx} className="text-orange-400">{entry.text}</div>
          )
        )}
        <div ref={endRef} />
      </div>
      <form onSubmit={handleSubmit} className="mt-3 flex">
        <span className="text-blue-400 mr-2">$</span>
        <input
          className="flex-1 bg-transparent text-white border-0 outline-none"
          value={input}
          autoFocus
          maxLength={64}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a command..."
        />
      </form>
    </div>
  );
}
