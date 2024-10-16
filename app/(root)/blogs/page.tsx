import { PageHeader } from "@/components/header/page-header";

export default function BlogsPage() {
  return (
    <div className="pt-24 md:pt-28 px-6 md:px-14">
    <PageHeader title="Blogs" description="We offer a wide range of services to help you grow your business and increase the reach of your brand." />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-14">
      <div className="grid-cols-1 h-40 bg-black w-full"></div>
      <div className="grid-cols-1 h-40 bg-black w-full"></div>
      <div className="grid-cols-1 h-40 bg-black w-full"></div>
      <div className="grid-cols-1 h-40 bg-black w-full"></div>
    </div>
  </div>
  );
}