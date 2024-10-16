/* eslint-disable @next/next/no-img-element */
import { PageHeader } from "@/components/header/page-header";
import { services } from "@/constants";

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-28 px-6 md:px-0">
      <PageHeader
        title="Services"
        description="We offer a wide range of services to help you grow your business and increase the reach of your brand."
      />
      <div className="flex flex-col py-14 md:py-24 space-y12 items-center">
        <div className="md:w-2/3 space-y-24">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`flex md:space-y-12 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
          >
            <div className="w-1/3 flex flex-col items-center">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover h-auto"
              />
            </div>
            <div className="w-2/3">
              <h2 className="md:text-lg font-bold main-text">{service.title}</h2>
              <p className="text-slate-500 text-justify">
                {service.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
