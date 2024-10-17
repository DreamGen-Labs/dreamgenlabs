/* eslint-disable @next/next/no-img-element */
"use client";

import { PageHeader } from "@/components/header/page-header";
import { services } from "@/constants";
import { Facebook, Github, Instagram, Linkedin, Mail, Phone, X } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="pt-24 md:pt-28 px-6 md:px-0">
      <PageHeader
        title="Contact Us"
        description="Explore exciting career opportunities and join our talented team to make a difference."
      />
      <div className="flex gap-4 py-16 justify-center">
        <div className="flex flex-col md:flex-row md:w-2/3 gap-8">
          <div className="mx-auto mb-auto w-1/3">
            <img src="./contact.png" alt="Careers" className="" />
            <div className="py-2">
              <div className="flex">
                <Phone className="bg-primary p-1 text-white rounded-md mr-2" />
                <a href="tel:+94787786616" className="underline text-slate-500">
                  +94765536046
                </a>
              </div>
              <div className="flex my-1">
                <Mail className="bg-primary p-1 text-white rounded-md mr-2" />
                <a
                  className="underline text-slate-500"
                  href="mailto:dreamgenlabs@gmail.com"
                >
                  dreamgenlabs@gmail.com
                </a>
              </div>
              <div className="flex my-1">
                <Linkedin className="bg-primary p-1 text-white rounded-md mr-2" />
                <a
                  className="underline text-slate-500"
                  href="https://www.linkedin.com/company/dreamgen-labs/"
                >
                  dreamgen-labs
                </a>
              </div>
              <div className="flex my-1">
                <Github className="bg-primary p-1 text-white rounded-md mr-2" />
                <a
                  className="underline text-slate-500"
                  href="https://github.com/DreamGen-Labs"
                >
                  DreamGen-Labs
                </a>
              </div>
              <div className="flex my-1">
                <X className="bg-primary p-1 text-white rounded-md mr-2" />
                <a
                  className="underline text-slate-500"
                  href="https://x.com/dreamgenlabs"
                >
                  dreamgenlabs
                </a>
              </div>
              <div className="flex my-1">
                <Facebook className="bg-primary p-1 text-white rounded-md mr-2" />
                <a
                  className="underline text-slate-500"
                  href="https://www.facebook.com/profile.php?id=61558384975264&mibextid=LQQJ4d"
                >
                  DreamGen Labs 
                </a>
              </div>
              <div className="flex my-1">
                <Instagram className="bg-primary p-1 text-white rounded-md mr-2" />
                <a
                  className="underline text-slate-500"
                  href="https://www.instagram.com/dreamgenlabs/"
                >
                  dreamgenlabs
                </a>
              </div>
            </div>
          </div>
          <form
            className="mx-auto mt-2 max-w-xl sm:mt-8 w-full"
            // onSubmit={handleSubmit}
          >
            <div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2 mb-4">
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    // value={formData.name}
                    // onChange={handleChange}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Company
                </label>
                <div className="mt-2 mb-4">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    // value={formData.company}
                    // onChange={handleChange}
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2 mb-4">
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="relative mt-2 mb-4">
                  <input
                    required
                    type="tel"
                    name="phone"
                    id="phone"
                    // value={formData.phone}
                    // onChange={handleChange}
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2 mb-4">
                  <textarea
                    required
                    name="description"
                    id="description"
                    // value={formData.description}
                    // onChange={handleChange}
                    rows={4}
                    className="resize-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 gradient-button"
              >
                Let&#39;s Talk
              </button>

              <style jsx>{`
                .gradient-button {
                  background: linear-gradient(to right, #4f46e5, #3b82f6);
                  transition: background 0.3s ease;
                }
                .gradient-button:hover {
                  background: linear-gradient(to right, #3b82f6, #4f46e5);
                }
              `}</style>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
