import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Terminal } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PortfolioConsole from "./PortfolioConsole"; // adjust path if needed

const PortfolioConsoleSheet = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Trigger Button */}
      <SheetTrigger asChild>
        <Button
          className="fixed z-50 bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-tr from-orange-500 to-blue-500 text-white shadow-xl hover:scale-105 transition-transform"
          size="icon"
          aria-label="Open Console"
        >
          <Terminal className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      {/* Bottom Sheet Content */}
      <SheetContent
        side="bottom"
        className="p-0 border-none bg-black w-full h-[90vh] flex items-center justify-center"
      >
        <div className="w-[95vw] max-w-6xl h-full">
          <PortfolioConsole />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PortfolioConsoleSheet;
