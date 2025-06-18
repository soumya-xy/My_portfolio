import React from "react";

const LoadingAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#1a1a1a] z-50">
      <div className="relative flex items-center gap-2.5">
        <div className="text-[#00ff9d] text-8xl font-bold animate-pulse">
          &lt;
        </div>
        <div className="w-0.5 h-10 bg-[#00ff9d] animate-blink text-2xl" />
        <div className="text-[#00ff9d] text-8xl font-bold animate-pulse">
          &gt;
        </div>
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#00ff9d] text-2xl opacity-0 animate-fade">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
