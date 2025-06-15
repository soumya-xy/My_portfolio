
import PortfolioConsole from "@/components/PortfolioConsole";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
const PortfolioConsoleSheet = () => {
  const [consoleOpen, setConsoleOpen] = useState(false);
  return (
    <Sheet open={consoleOpen} onOpenChange={setConsoleOpen}>
      <SheetTrigger asChild>
        <button
          className="fixed z-50 right-5 bottom-5 rounded-full p-[2px] shadow-lg focus:outline-none transition-all"
          style={{
            background: "linear-gradient(135deg, #ff9800 0%, #2196f3 100%)"
          }}
          aria-label="Open Portfolio Console"
        >
          <span className="block bg-background rounded-full w-14 h-14 flex items-center justify-center text-lg font-mono font-bold text-[#ff9800] hover:scale-105 transition-transform border-2 border-white/20">
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
