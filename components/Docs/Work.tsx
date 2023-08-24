import { DocsConstants } from "@/constants/common-constants";

export const WorkTab = () => {
  return (
    <div className="flex flex-col gap-10">
      <h4 className="text-4xl font-semibold">{DocsConstants.WORK}</h4>
      <div className="flex gap-24">
        <span className="text-sm whitespace-pre text-gray-400">APRIL 2022 - PRESENT</span>
        <div className="flex flex-col">
          <span>
            Software Developer -{" "}
            <a target="_blank" href="https://www.copods.co/">
              copods
            </a>
          </span>
          <span className="text-gray-400">Frontend Developer</span>
          <span className="mt-2 text-gray-400">
            I strive to deliver projects that are optimized for the client
            needs, with pixel-perfect attention to detail. Accessibility is
            always top of mind when building these projects, to ensure they are
            market-ready and can be enjoyed by all. In addition to my web
            development experience, I have worked on building websites as well.
            My journey is still in progress, but I remain committed to honing my
            skills and delivering the best possible results for clients.{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
