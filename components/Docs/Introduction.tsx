import { DocsConstants } from "@/constants/common-constants";

export const Introduction = () => {
  return (
    <div className="flex flex-col md:gap-10 gap-6">
      <h4 className="md:text-4xl text-2xl  font-semibold">{DocsConstants.INTRODUCTION}</h4>
      <div className="flex flex-col gap-4">
        <h4 className="md:text-2xl text-xl text-gray-200">{DocsConstants.WORK}</h4>
        <span className="md:text-lg text-base text-gray-400">
          👨‍💻 Hi, I am Yash aka ashu, a passionate software developer with a
          knack for turning complex code into elegant solutions. With a degree
          in electrical engineering, I bring a unique blend of technical skills
          and creative problem-solving to the world of software development.
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="md:text-2xl text-xl text-gray-200">{DocsConstants.GAMING}</h4>
        <span className="md:text-lg text-base text-gray-400">
          🕹️ When I am not immersed in lines of code, you will often find me
          exploring virtual worlds and mastering various gaming realms. Gaming
          isn it just a pastime for me; it is a way to unwind, learn strategy,
          and connect with friends online.
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="md:text-2xl text-xl text-gray-200">{DocsConstants.EDUCATION}</h4>
        <span className="md:text-lg text-base text-gray-400">
        🎓 Armed with a background in electrical engineering, I have honed my ability to analyze intricate systems and find innovative ways to optimize their performance. This skill set has been invaluable in crafting efficient and user-friendly software solutions.
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="md:text-2xl text-xl text-gray-200">{DocsConstants.GLITTER}</h4>
        <span className="md:text-lg text-base text-gray-400">
        🌟 Whether it is debugging a stubborn issue, developing sleek user interfaces, or collaborating with a team to bring a project to life, I thrive on the challenges that software development presents. My dedication to continuous learning keeps me up-to-date with the latest industry trends and technologies.
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="md:text-2xl text-xl text-gray-200">{DocsConstants.SHUTTLE}</h4>
        <span className="md:text-lg text-base text-gray-400">
        🚀 Beyond the world of code, I am always seeking new adventures and opportunities to learn and grow. From solving complex algorithms to leveling up in my favorite games, I am driven by curiosity and a passion for excellence.
        </span>
      </div>
    </div>
  );
};
