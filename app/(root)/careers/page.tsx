/* eslint-disable @next/next/no-img-element */
import { PageHeader } from "@/components/header/page-header";
import { services } from "@/constants";

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-28 px-6 md:px-14">
      <PageHeader
        title="Careers"
        description="Explore exciting career opportunities and join our talented team to make a difference."
      />
      <div className="flex gap-4 py-16 justify-center">
        <div className="flex flex-col md:flex-row md:w-2/3 gap-8">
          <img src="./careers.png" alt="Careers" className="m-auto w-1/3" />
          <div className="w-2/3 flex flex-col gap-2">
            <div className="space-y-2">
              <h1 className="main-text font-bold">Vacancies</h1>
              <hr />
              <h1 className="text-slate-500">No vacancies at the moment.</h1>
            </div>
            <div className="space-y-2">
              <h1 className="main-text font-bold">Life at DreamGen Labs</h1>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
