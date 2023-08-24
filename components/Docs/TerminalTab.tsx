import { DocsConstants } from "@/constants/common-constants";

export const TerminalTab = () => {
  const commands =[
    {
      command:'list',
      work:'To show all available commands'
    },
    {
      command:'help',
      work:'To show help information'
    },
    {
      command:'about',
      work:'To show my information'
    },
    {
      command:'skills',
      work:'To show list of skills'
    },
    {
      command:'work',
      work:'To show my work experience'
    },
    {
      command:'version',
      work:'To show my versions'
    },
    {
      command:'hobbies',
      work:'To show list of my hobbies'
    }
  ]
  return (
    <div className="flex flex-col md:gap-10 gap-6">
      <h4 className="md:text-4xl text-2xl  font-semibold">{DocsConstants.TERMINAL}</h4>
      <div className="flex flex-col gap-4">
        <span>{DocsConstants.TERMINAL_COMMANDS}</span>
        <div className="flex flex-col gap-2">
          {commands.map((command) =>{
            return(
              <div key={command.command} className="flex gap-4">
                <span className="text-gray-200">{command.command}:</span>
                <span className="text-gray-400">{command.work}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};
