import { DocsConstants } from "@/constants/common-constants";

export const ProjectTab = () => {
  
  return (
    <div className="flex flex-col md:gap-10 gap-6">
      <h4 className="md:text-4xl text-2xl  font-semibold">{DocsConstants.PROJECTS}</h4>
      <span className="text-gray-400">Deploying......</span>
    </div>
  );
};
