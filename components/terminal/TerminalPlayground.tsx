import { terminal } from "@/constants/common-constants";

export const TerminalPlayground = ({
  containerRef,
  outputText,
  data,
}: {
  containerRef: any;
  outputText: any;
  data: any;
}) => {
  return (
    <div
      ref={containerRef}
      className="max-h-64 flex flex-col gap-2 overflow-auto"
    >
      <div className="flex gap-4">
        <span className="text-gray-300 font-mono font-bold !leading-9 md:text-lg text-sm">
          {terminal.TERMINAL_NAME}
        </span>
        <pre className="text-gray-400 font-mono md:text-lg !leading-9 text-sm whitespace-break-spaces">
          {terminal.TERMINAL_NOTE}
        </pre>
      </div>
      <div ref={containerRef} className="flex flex-col gap-2">
        {outputText?.map((prompt: Array<string>, index: number) => {
          return (
            <div key={index} className="flex gap-4">
              <span className="text-gray-300 font-mono !leading-9 font-bold md:text-lg text-sm">
                {terminal.TERMINAL_NAME}
              </span>
              <pre className="whitespace-break-spaces md:text-lg text-sm font-mono !leading-9 text-gray-400">
                {prompt}
              </pre>
            </div>
          );
        })}

        {data.map((datalist: any, index: number) => {
          return (
            <div key={index} className="pl-70 flex gap-4">
              <span className="whitespace-break-spaces md:text-lg text-sm font-mono text-gray-400">
                {datalist}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
