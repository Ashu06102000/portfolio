"use client";

import Link from "next/link";
import { routesItems } from "./DocsSideNav";
import { usePathname } from "next/navigation";
export const DocsRoutesItems = ({ route }: { route: routesItems }) => {
  const pathname = usePathname();
  return (
    <div>
      <Link
        className={`hover:red ${
          pathname === route.route ? "white" : "text-gray-400"
        }`}
        href={route.route}
      >
        {route.name}
      </Link>
    </div>
  );
};
