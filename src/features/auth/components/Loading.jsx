import React from "react";

const Loading = ({ fullScreen = true, message = "Loading..." }) => {
  const containerClasses = fullScreen
    ? "fixed inset-0 z-50 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex justify-center items-center"
    : "flex justify-center items-center py-20";

  return (
    <div className={containerClasses}>
      {/* Animated background elements */}
      {fullScreen && (
        <>
          <div className="absolute top-20 right-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </>
      )}

      {/* Loading content */}
      <div className="relative flex flex-col items-center gap-6">
        {/* Animated spinner */}
        <div className="relative w-16 h-16">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-4 border-slate-700/30"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-500 border-r-red-500 animate-spin"></div>

          {/* Middle pulsing ring */}
          <div className="absolute inset-2 rounded-full border-2 border-red-500/30 animate-pulse"></div>

          {/* Inner rotating ring */}
          <div
            className="absolute inset-3 rounded-full border-2 border-transparent border-b-red-600 border-l-red-600 animate-spin"
            style={{ animationDirection: "reverse" }}
          ></div>
        </div>

        {/* Animated text */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-400 to-red-600 animate-pulse">
            {message}
          </h2>

          {/* Animated dots */}
          <div className="flex gap-2 justify-center">
            <span
              className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></span>
            <span
              className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></span>
            <span
              className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></span>
          </div>
        </div>

        {/* Animated progress bar */}
        <div className="w-40 h-1 bg-slate-700/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-red-500 to-red-600 rounded-full animate-[pulse]"
            style={{ width: "30%", animation: "shimmer 2s infinite" }}
          ></div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style>{`
        @keyframes shimmer {
          0% {
            width: 30%;
            opacity: 1;
          }
          50% {
            width: 70%;
            opacity: 0.8;
          }
          100% {
            width: 30%;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
