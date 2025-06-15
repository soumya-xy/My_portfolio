
import PortfolioConsole from "@/components/PortfolioConsole";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const PortfolioConsoleSheet = () => {
  const [consoleOpen, setConsoleOpen] = useState(false);
  return (
    <Sheet open={consoleOpen} onOpenChange={setConsoleOpen}>
      <SheetTrigger asChild>
        <button
          className="fixed z-50 right-5 bottom-5 rounded-full p-[2px] shadow-2xl focus:outline-none transition-all ring-2 ring-[#2196f3]/50 animate-scale-in"
          style={{
            background:
              "linear-gradient(135deg, #ff9800 0%, #ffb300 35%, #2196f3 70%, #1769aa 100%)",
            boxShadow:
              "0 0 40px 10px rgba(33,150,243,0.25), 0 0 40px 10px rgba(255,152,0,0.20)"
          }}
          aria-label="Open Portfolio Console"
        >
          <span className="block bg-background rounded-full w-16 h-16 flex items-center justify-center text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ff9800] via-[#ffb300] to-[#2196f3] border-2 border-white/30 shadow-lg hover:scale-105 transition-transform">
            $
          </span>
        </button>
      </SheetTrigger>
      <SheetContent side="bottom" className="max-w-full p-0 rounded-t-xl border-none">
        <div className="flex flex-col items-center p-5 pt-6">
          <PortfolioConsole />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PortfolioConsoleSheet;

