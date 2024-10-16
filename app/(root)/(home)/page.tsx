"use client";

import { whyUsDetails } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-28">
    <div className="md:w-3/4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-14">
        <div className="md:w-1/2 md:px-4">
          <section>
            <div>
              <div className="p-2">
                <h3
                  className="flex items-center main-text text-2xl sm:text-5xl md:text-6xl font-extrabold"
                  data-aos="fade-down"
                >
                  TRANSFORMING
                </h3>
                <h3
                  data-aos="fade-down"
                  className="flex items-center main-text text-2xl sm:text-5xl md:text-6xl font-extrabold"
                >
                  DREAMS INTO REALITY
                </h3>
                <br />
                <p
                  data-aos="fade-right"
                  className="gradient-text text-justify text-base sm:text-2xl md:text-base font-quicksand font-semibold tablet:w-[80%]"
                >
                  Welcome to DreamGen Labs, your gateway to innovative web
                  development and digital marketing solutions. Explore our
                  impactful strategies tailored to your needs. Let&apos;s get
                  started on unlocking the full potential of your online
                  presence today.
                </p>
                <br />
                <div
                  data-aos="fade-up"
                  className="flex flex-col sm:flex-row sm:gap-2 md:py-2"
                >
                  <Link href="/contact">
                    <button className="p-2 text-white w-full sm:w-[150px] h-[50px] hover-gradient bg-custom-gradient border-2 font-bold border-[#1145BE]  shadow-md rounded-lg box-border mb-2 sm:mb-0">
                      Contact Us
                    </button>
                  </Link>
                  <Link href="/estimate">
                    <button className="p-2 bg-white  w-full sm:w-[150px] h-[50px] font-quicksand font-bold text-center border-2 border-[#1145BE] text-[#1145BE] shadow-md rounded-lg box-border">
                      Get Estimate
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="md:block md:w-1/2">
          <img
            src="./background.png"
            className="w-80 md:w-full"
            alt="logo"
          />
        </div>
      </div>

      {/* why us section */}
      <section className="px-5 tablet:px-20 justify-center items-center pt-16">
        <div className="md:flex md:gap-4">
          <div className="md:w-1/3 flex flex-col gap-6 justify-center">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl main-text mb-6">
              Why Us
            </h1>
            <p className="text-slate-500 text-justify text-sm sm:text-base md:text-lg">
              Don&apos;t miss the opportunity to work with the best. We are here
              to help you grow your business and take it to new heights. With
              our expertise, you can streamline your operations, enhance
              productivity, and achieve sustainable growth. Whether you&apos;re
              just starting or looking to expand, we offer tailored solutions
              designed to meet your unique needs. Partner with us, and
              let&apos;s build a brighter future for your business together!
            </p>
            <Link href="/project">
              <button className="p-2 text-white w-full sm:w-[200px] h-[50px] hover-gradient bg-custom-gradient border-2 font-bold border-[#1145BE]  shadow-md rounded-lg box-border mb-2 sm:mb-0">
                Explore Project
              </button>
            </Link>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-2 mt-10 mb-20">
            {whyUsDetails.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="items-center p-6 border border-slate-300 rounded-md cursor-default"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="mb-2 mt-2 w-10 h-10"
                  />
                  <h3 className="text-primary font-semibold mb-2">
                    {data.title}
                  </h3>
                </div>
                <p className="">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* why us section */}
      <section className="px-5 tablet:px-20 justify-center items-center pb-8">
        <div className="md:flex gap-4">
          <div className="hidden md:w-1/2 md:flex md:flex-col justify-center">
            <img src="./service.png" alt="logo" width={800} height={200} />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center gap-6">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl main-text mb-6">
              Our Services
            </h1>
            <p className="text-slate-500 text-justify text-sm sm:text-base md:text-lg">
              We offer a wide range of services to help you grow your business
              and increase the reach of your brand. From strategic marketing and
              digital solutions to tailored business consulting, our expert team
              is dedicated to providing innovative strategies that drive
              results. Whether you&apos;re looking to expand your online
              presence, streamline operations, or enter new markets, we have the
              tools and expertise to help you succeed. Let us partner with you
              to unlock your business&apos;s full potential and achieve your
              long-term goals.
            </p>
            <Link href="/services">
              <button className="p-2 text-white w-full sm:w-[200px] h-[50px] hover-gradient bg-custom-gradient border-2 font-bold border-[#1145BE]  shadow-md rounded-lg box-border mb-2 sm:mb-0">
                Explore Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
