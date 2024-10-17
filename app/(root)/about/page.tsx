/* eslint-disable @next/next/no-img-element */
import { PageHeader } from "@/components/header/page-header";
import { about_us, teamMembers } from "@/constants";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const iconStyles = {
    width: 16,
    height: 16,
  };

  return (
    <div className="pt-24 md:pt-28 px-6 md:px-0">
      <PageHeader
        title="About Us"
        description="We offer a wide range of services to help you grow your business and increase the reach of your brand."
      />
      <div className="flex flex-col py-14 md:py-24 space-y12 items-center">
        <div className="md:w-2/3 space-y-24">
          {about_us.map((about, index) => (
            <div
              key={index}
              className={`flex gap-12 md:space-y-12 ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/3 flex flex-col items-center">
                <img
                  src={about.image}
                  alt={about.title}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="w-2/3">
                <h2 className="md:text-lg font-bold main-text">
                  {about.title}
                </h2>
                <p className="text-slate-500 text-justify">
                  {about.description}
                </p>
              </div>
            </div>
          ))}
          <hr />
          <div>
            <h1 className="text-center text-2xl font-bold main-text">
              Our Team
            </h1>
            <div className={`flex flex-wrap justify-center md:justify-between py-8 md:py-14`}>
              {teamMembers.map((teamMember, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="flex flex-col items-center p-4 gap-8 border-slate-300 rounded-md "
                >
                  <img
                    src={teamMember.image}
                    alt={teamMember.name}
                    width={150}
                    height={150}
                  />
                  <div className="text-center gap-2">
                    <h3 className="text-primary font-semibold">
                      {teamMember.name}
                    </h3>
                    <p>{teamMember.designation}</p>
                    <div className="flex items-center justify-center gap-2 py-2">
                      <Link
                        href={teamMember.link.facebook}
                        className="text-white bg-custom-gradient p-1 rounded-lg"
                      >
                        <Facebook style={iconStyles} />
                      </Link>
                      <Link
                        href={teamMember.link.instragram}
                        className="text-white bg-custom-gradient p-1 rounded-lg"
                      >
                        <Instagram style={iconStyles} />
                      </Link>
                      <Link
                        href={teamMember.link.linkedin}
                        className="text-white bg-custom-gradient p-1 rounded-lg"
                      >
                        <Linkedin style={iconStyles} />
                      </Link>
                      <Link
                        href={teamMember.link.github}
                        className="text-white gradient bg-custom-gradient p-1 rounded-lg"
                      >
                        <Github style={iconStyles} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
