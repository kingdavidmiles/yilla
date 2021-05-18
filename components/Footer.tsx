import React, { Fragment } from "react";
import Link from "next/link";

export default function Footer() {
  interface IFooter {
    title: string;
    description: Array<{
      name: string;
      link: string;
    }>;
  }
  const footers: IFooter[] = [
    {
      title: "About",
      description: [
        { name: "About us", link: "/about/" },
        { name: "Our Vision", link: "/about/vision" },
        { name: "Contact Us", link: "/contact" },
      ],
    },
    {
      title: "Social",
      description: [
        { name: "Twitter", link: "#" },
        { name: "Facebook", link: "#" },
      ],
    },
    {
      title: "Sales",
      description: [{ name: "Pricing Calculator", link: "/pricing/calculator" }],
    },
    {
      title: "Legal",
      description: [
        { name: "Terms for humans", link: "/legal/terms" },
        { name: "Privacy for humans", link: " /legal/privacy" },
      ],
    },
  ];

  const downloadStrimObj = [
    {
      type: "android",
      img:
        "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",
    },
    // {
    //   type: "ios",
    //   img:
    //     "https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png",
    // },
  ];

  return (
    <Fragment>
      {/* get started hero */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-red-700">Create your account today.</span>
          </h2>
          <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/auth/signup/?ref=fooiio">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-500">
                  Get started
                </a>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-white hover:bg-red-70">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* </get started hero> */}

      <div className="grid grid-cols-2 md:grid-cols-5 p-4 md:space-x-8 md:text-center text-left bg-gray-50">
        <div className="hidden md:block text-left">
          <img src="/strim-logo.png" className="h-11 w-56 object-contain" /> <br />
          Bringing people together through live experiences
        </div>

        {footers.map((footer) => (
          <div className="text-base">
            <dt className="uppercase text-gray-700 font-extrabold font-mono leading-8">
              {footer.title}
            </dt>
            <ul className="list-inside  text-gray-500 bg-rose-200 leading-loose mx-auto mb-5">
              {footer.description.map((desc) => (
                <li className="">
                  <Link href={desc.link}>{desc.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr />
      <div className="text-center my-5 font-mono mx-auto block font-medium text-sm rounded-md">
        © 2020, Strim, Inc. All Rights Reserved.
      </div>
    </Fragment>
  );
}
