import { DocsConstants } from "@/constants/common-constants";

export const SkillsTab = () => {
  const languages = ["JavaScript", "TypeScript", "HTML", "CSS"];
  const framework = ["React.js", "Remix.js", "Next.js", "Meteor.js"];
  const website = ["Webflow", "WordPress"];
  const databse = [
    "Prisma",
    "MongoDB",
    "Supabase",
  ];
  const testing = [
    "Cypress",
    // "Tailwind CSS",
    // "Docker"
  ];
  return (
    <div className="flex flex-col gap-10">
      <h4 className="text-4xl font-semibold">{DocsConstants.SKILLS}</h4>

      <div className="flex flex-col gap-4">
        <span className="text-gray-400 text-2xl">
          Here are some of the key skills and technologies I have acquired and
          worked on:
        </span>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <span>{DocsConstants.LANGUAGES} -</span>
            {languages.map((ln) => {
              return (
                <span className="text-gray-400 px-2" key={ln}>
                  {ln}
                </span>
              );
            })}
          </div>
          <div className="flex gap-2">
            <span>{DocsConstants.FRAMEWORKS} -</span>
            {framework.map((framework) => {
              return (
                <span className="text-gray-400 px-2" key={framework}>
                  {framework}
                </span>
              );
            })}
          </div>
          <div className="flex gap-2">
            <span>{DocsConstants.WEBSITE_BUILDING_TOOLS} -</span>
            {website.map((website) => {
              return (
                <span className="text-gray-400 px-2" key={website}>
                  {website}
                </span>
              );
            })}
          </div>
          <div className="flex gap-2">
            <span>{DocsConstants.DATABSE_ORM} -</span>
            {databse.map((databse) => {
              return (
                <span className="text-gray-400 px-2" key={databse}>
                  {databse}
                </span>
              );
            })}
          </div>
          <div className="flex gap-2">
            <span>{DocsConstants.TESTING} -</span>
            {testing.map((testing) => {
              return (
                <span className="text-gray-400 px-2" key={testing}>
                  {testing}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
