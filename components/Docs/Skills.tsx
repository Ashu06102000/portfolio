import { DocsConstants } from "@/constants/common-constants";

export const SkillsTab = () => {
  const languages = ["JavaScript", "TypeScript", "HTML", "CSS"];
  const framework = ["React.js", "Remix.js", "Next.js", "Meteor.js"];
  const website = ["Webflow", "WordPress"];
  const database = ["Prisma", "MongoDB", "Supabase"];
  const testing = ["Cypress"];
  const state_management = ["Zustand"];
  const ui_libraries = [
    "Material UI",
    "Framer Motion",
    "Ant Design",
    "Iconify",
  ];
  const cloud = ["AWS"];
  const miscellaneous = [
    "Tailwind CSS",
    "Docker",
    "Git",
    "Github",
    "Vercel",
    "Sendgrid",
    "Accessibility"
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
                <span className="text-gray-400 px-1.5" key={ln}>
                  {ln}
                </span>
              );
            })}
          </div>
          <div className="flex gap-2">
            <span>{DocsConstants.FRAMEWORKS} -</span>
            {framework.map((framework) => {
              return (
                <span className="text-gray-400 px-1.5" key={framework}>
                  {framework}
                </span>
              );
            })}
          </div>
          <div className="flex gap-2">
            <span>{DocsConstants.WEBSITE_BUILDING_TOOLS} -</span>
            {website.map((website) => {
              return (
                <span className="text-gray-400 px-1.5" key={website}>
                  {website}
                </span>
              );
            })}
          </div>
          <div className="flex gap-2">
            <span>{DocsConstants.DATABASE_ORM} -</span>
            {database.map((database) => {
              return (
                <span className="text-gray-400 px-1.5" key={database}>
                  {database} 
                </span>
              );
            })}
          </div>
          <div className="flex gap-2">
            <span>{DocsConstants.TESTING} -</span>
            {testing.map((testing) => {
              return (
                <span className="text-gray-400 px-1.5" key={testing}>
                  {testing}
                </span>
              );
            })}
          </div>
          <div className="flex gap-2">
            <span>{DocsConstants.STATE_MANAGEMENT} -</span>
            {state_management.map((sm) => {
              return (
                <span className="text-gray-400 px-1.5" key={sm}>
                  {sm}
                </span>
              );
            })}
          </div>
          <div className="flex gap-2">
            <span>{DocsConstants.UI_LIBRARIES} -</span>
            {ui_libraries.map((ul) => {
              return (
                <span className="text-gray-400 px-1.5" key={ul}>
                  {ul}
                </span>
              );
            })}
          </div>
          <div className="flex gap-2">
            <span>{DocsConstants.CLOUD} -</span>
            {cloud.map((cloud) => {
              return (
                <span className="text-gray-400 px-1.5" key={cloud}>
                  {cloud}
                </span>
              );
            })}
          </div>
          <div className="flex gap-2">
            <span>{DocsConstants.MISCELLANEOUS} -</span>
            {miscellaneous.map((miscellaneous) => {
              return (
                <span className="text-gray-400 px-1.5" key={miscellaneous}>
                  {miscellaneous}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
