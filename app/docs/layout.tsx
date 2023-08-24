import { DocsContainer, DocsHeader } from "@/components/Docs";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:px-24">
      <DocsHeader />
      <div className="flex gap-24">
        <DocsContainer />
        <section className="h-[100vh] w-3/5 py-32 overflow-auto">{children}</section>
      </div>
    </div>
  );
}
