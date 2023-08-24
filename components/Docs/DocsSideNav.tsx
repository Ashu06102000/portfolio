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
        route: "/skills",
    },
    {
        name: "Projects",
        route: "/projects",
    },
    {
        name: "Blogs",
        route: "/blogs",
    },
    {
        name: "Terminal",
        route: "/terminal",
    }
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
