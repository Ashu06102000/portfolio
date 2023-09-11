"use client";

import React, { useEffect, useRef, useState } from "react";
import { terminal } from "../../constants/common-constants";
import { TerminalCommands } from "./TerminalCommands";
import {
  TerminalContainerDocs,
  TerminalHeader,
  TerminalPlayground,
  TerminalPromptForm,
} from ".";

const Terminal = () => {
  const [inputValue, setInputValue] = useState("");
  const [outputText, setOutputText] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const containerRef = useRef<HTMLBodyElement>(null);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const commandOutput = executeCommand(inputValue);
    if (inputValue === "") {
      return null;
    }
    if (inputValue === "clear") {
      setOutputText([]);
      setInputValue("");
    } else {
      const test = `${inputValue + " "}${
        commandOutput === undefined ? "" : commandOutput
      }`;

      setOutputText((prevOutput: any) => [...prevOutput, test]);
      setInputValue("");
    }
  };
  useEffect(() => {
    // Scroll the container to its maximum height after content updates
    if (containerRef?.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [outputText, inputValue]);
  const executeCommand = (command: string) => {
    if (command) {
      if (command === "list") {
        setOutputText([]);
        setData([]);
        return setData(TerminalCommands["list"]);
      } else if (command === "version") {
        setOutputText([]);
        setData([]);
        return setData(TerminalCommands.version);
      } else if (command === "about") {
        setOutputText([]);
        setData([]);
        return setData(TerminalCommands.about);
      } else if (command === "help") {
        setOutputText([]);
        setData([]);
        return setData(TerminalCommands.help);
      } else if (command === "hobbies") {
        setOutputText([]);
        setData([]);
        return setData(TerminalCommands.hobbies);
      } else if (command === "skills") {
        setOutputText([]);
        setData([]);
        return setData(TerminalCommands.skills);
      } else if (command === "work") {
        setOutputText([]);
        setData([]);
        return setData(TerminalCommands.work);
      } else {
        setData([]);
        return terminal.TERMINAL_COMMAND_NOT_FOUND;
      }
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-12 justify-between">
      <TerminalContainerDocs />
      <div className="bg-[#252525] md:rounded-3xl rounded-lg md:w-600 md:min-h-400">
        <TerminalHeader />
        <div className="md:px-7 p-4 md:py-5 flex flex-col gap-2">
          <TerminalPlayground
            containerRef={containerRef}
            outputText={outputText}
            data={data}
          />

          <TerminalPromptForm
            handleInputSubmit={handleInputSubmit}
            inputValue={inputValue}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};
export default Terminal;
