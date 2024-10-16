import { PageHeader } from "@/components/header/page-header";

export default function BlogsPage() {
  return (
    <div className="pt-24 md:pt-28 px-6 md:px-0">
    <PageHeader title="Blogs" description="We offer a wide range of services to help you grow your business and increase the reach of your brand." />
    <div className="flex flex-col py-14 md:py-14 space-y-12 items-center">
    <div className="grid w-2/3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="grid-cols-1 h-40 bg-black w-full"></div>
      <div className="grid-cols-1 h-40 bg-black w-full"></div>
      <div className="grid-cols-1 h-40 bg-black w-full"></div>
      <div className="grid-cols-1 h-40 bg-black w-full"></div>
    </div>
    </div>
  </div>
  );
}