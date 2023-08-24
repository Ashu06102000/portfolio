import { terminal } from "@/constants/common-constants";
import { useEffect, useRef } from "react";

export const TerminalPromptForm = ({
  handleInputSubmit,
  inputValue,
  handleInputChange,
}: {
  handleInputSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  handleInputChange: (e:React.ChangeEvent<HTMLInputElement>)=>void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    // Scroll the container to its maximum height after content updates
    if (inputRef?.current) {
      inputRef.current?.focus();
    }
  }, []);
  return (
    <form onSubmit={handleInputSubmit} className="flex gap-4">
      <span className="text-gray-300 font-mono font-bold md:text-lg text-sm">
        {terminal.TERMINAL_NAME}
      </span>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        autoFocus
        ref={inputRef}
        className="bg-transparent text-lg text-gray-400 font-mono w-full border-none focus-visible:outline-none"
      />
    </form>
  );
};
