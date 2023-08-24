import { DocsRoutesItems } from ".";

export type routesItems = {
  name: string;
  route: string;
};
export const DocsSideNav = () => {
  const routes = [
    {
      name: "Introduction",
      route: "/docs",
    },
    {
      name: "Skills",
      route: "/docs/skills",
    },
    {
      name: "Work",
      route: "/docs/work",
    },
    {
      name: "Projects",
      route: "/docs/projects",
    },
    {
      name: "Blogs",
      route: "/docs/blogs",
    },
    {
      name: "Terminal",
      route: "/docs/terminal",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {routes.map((route: routesItems) => {
        return (
          <div key={route.name}>
            <DocsRoutesItems route={route} />
          </div>
        );
      })}
    </div>
  );
};
