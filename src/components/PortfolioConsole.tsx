
import React, { useRef, useState, useEffect } from "react";
import { Terminal } from "lucide-react";

const gradient =
  "bg-gradient-to-tr from-orange-500 via-orange-400 to-blue-500 shadow-lg";

const suggestions = [
  { command: "help", description: "Show help menu" },
  { command: "about", description: "About me" },
  { command: "projects", description: "Show project list" },
  { command: "contact", description: "Contact info" }
];

function interpretCommand(cmd: string): string {
  switch (cmd.trim().toLowerCase()) {
    case "help":
      return suggestions
        .map((s) => `${s.command} — ${s.description}`)
        .join("\n");
    case "about":
      return "I'm a passionate engineering student focused on frontend and AI. Type 'projects' to see some recent work.";
    case "projects":
      return "- AI-Powered Task Manager\n- Real-Time Chat Platform\n- Data Visualization Dashboard\n- E-commerce Mobile App";
    case "contact":
      return "Email: soumya@example.com\nLinkedIn: linkedin.com";
    case "":
      return "";
    default:
      return `Command not recognized: ${cmd}\nType "help" for list of commands.`;
  }
}

export default function PortfolioConsole({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [history, setHistory] = useState<string[]>([
    "Welcome to the Portfolio Console.",
    'Type "help" to get started.'
  ]);
  const [input, setInput] = useState<string>("");
  const consoleRef = useRef<HTMLDivElement>(null);
  const [promptLabel] = useState("visitor@surface-tension:~$");

  useEffect(() => {
    if (open && consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [history, open]);

  useEffect(() => {
    if (!open) {
      setInput("");
    }
  }, [open]);

  const handleInput = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    setHistory((h) => [
      ...h,
      `${promptLabel} ${cmd}`,
      interpretCommand(cmd)
    ]);
    setInput("");
  };

  // Allow pressing Up key to traverse command history (optional/primitive impl)
  // Could be extended for richer experience as needed

  return (
    <div className={`w-full md:w-[520px] max-w-full rounded-lg shadow-2xl overflow-hidden ${gradient} flex flex-col`}>
      <div className="flex items-center gap-2 p-3 border-b border-white/10 bg-white/5">
        <Terminal className="h-5 w-5 text-white drop-shadow" />
        <span className="font-mono font-bold text-white text-base">Portfolio Console</span>
        <button className="ml-auto text-white/70 hover:text-white px-2 py-1 text-sm" onClick={onClose}>
          Close
        </button>
      </div>
      <div
        ref={consoleRef}
        className="flex-1 px-4 py-2 h-60 md:h-[260px] font-mono text-[15px] bg-black bg-opacity-60 text-white overflow-auto"
        style={{
          scrollbarColor: "#fb923c #3b82f6",
          scrollbarWidth: "thin"
        }}
      >
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-line leading-snug">{line}</div>
        ))}
      </div>
      <form onSubmit={handleInput} className="bg-black bg-opacity-70 flex items-center px-4 py-2 border-t border-white/10">
        <span className="text-orange-300 font-mono mr-2 hidden md:inline">{promptLabel}</span>
        <input
          autoFocus={open}
          type="text"
          className="flex-1 bg-transparent outline-none border-none text-white placeholder:text-white/40 font-mono"
          placeholder="Type a command..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}
