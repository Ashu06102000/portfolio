import { DocsConstants } from "@/constants/common-constants";
import Link from "next/link";

export const DocsHeader = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  bg-zinc-900/500  border-zinc-800 px-24 py-4 flex justify-between items-center">
      <Link href={"/"}>{DocsConstants.BACK_TEXT}</Link>
      <div>
        <span className="text-gray-400">{DocsConstants.DOCS_TEXT}</span>
      </div>
    </div>
  );
};
