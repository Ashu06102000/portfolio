import { DocsConstants } from "@/constants/common-constants";

export const ProjectTab = () => {
  
  return (
    <div className="flex flex-col gap-10">
      <h4 className="text-4xl font-semibold">{DocsConstants.PROJECTS}</h4>
      <span className="text-gray-400">Deploying......</span>
    </div>
  );
};
