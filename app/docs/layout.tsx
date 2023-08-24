import { DocsContainer, DocsHeader } from "@/components/Docs";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:px-24 px-4">
      <DocsHeader />
      <div className="flex md:gap-24 gap-6">
        <DocsContainer />
        <section className="h-[100vh] md:w-3/5 md:py-32 py-24 overflow-auto">{children}</section>
      </div>
    </div>
  );
}
