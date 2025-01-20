"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";

export const menuItems = [
  {
    area: "item1",
    title: "Multi-Channel Integration",
    desc: "Create and deploy targeted email and SMS campaigns effortlessly.",
    path: "/media/item-9.svg",
    href: "/multi-channel-integration",
  },
  {
    area: "item2",
    title: "Team Collaboration Tools",
    desc: "Foster collaboration and teamwork among team members with built-in communication and collaboration tools.",
    path: "/media/item-5.svg",
    href: "/user-access-control-and-security",
  },
  {
    area: "item3",
    title: "Campaign Management",
    desc: "Create, schedule, and analyze email and SMS campaigns with ease.",
    path: "/media/item-1.svg",
    href: "/campaign-management",
  },
  {
    area: "item4",
    title: "Real-Time Analytics and Reporting",
    desc: "Access real-time analytics and reporting dashboards to track key performance metrics and monitor business performance.",
    path: "/media/item-6.svg",
    href: "/real-time-analytics-and-reporting",
  },
  // {
  //   area: "item5",
  //   title: "Ticketing System",
  //   desc: "Organize and prioritize customer inquiries and support requests with a ticketing system.",
  //   path: "/media/item-2.svg",
  //   href: "/multi-channel-integration",
  // },
  // {
  //   area: "item6",
  //   title: "Customizable Workflows and Automation",
  //   desc: "Create customized workflows and automation rules to streamline processes and automate repetitive tasks.",
  //   path: "/media/item-7.svg",
  //   href: "/survey-creation-and-analysis",
  // },
  // {
  //   area: "item7",
  //   title: "Customer Management",
  //   desc: "Manage customer relationships effectively with a comprehensive CRM module.",
  //   path: "/media/item-3.svg",
  //   href: "/multi-channel-integration",
  // },
  {
    area: "item8",
    title: "User Access Control and Security",
    desc: "Ensure data security and compliance with robust user access control features.",
    path: "/media/item-8.svg",
    href: "/user-access-control-and-security",
  },
  {
    area: "item9",
    title: "Survey Creation and Analysis",
    desc: "Design and deploy surveys to gather valuable feedback and insights from customers",
    path: "/media/item-4.svg",
    href: "/survey-creation-and-analysis",
  },
];

export default function Header() {
  const [clicked, setClicked] = useState(false);
  const [mobileClicked, setMobileClicked] = useState(false);

  return (
    <header className="max-w-[1440px] mx-auto w-full">
      <div className="hidden md:flex items-center justify-between md:px-[4rem] lg:px-[8rem] py-7">
        <Link href="https://www.circlehq.co" className="mr-[27px]">
          <ExportedImage
            src="/media/circlehq_logo.svg"
            alt="Logo"
            width={72}
            height={27}
            placeholder="blur"
          />
        </Link>
        <nav className="flex items-center ml-auto mr-auto">
          <div className="flex gap-9">
            <div className="flex gap-[24px] items-center ">
              <menu className="relative">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                    setClicked(!clicked);
                  }}
                >
                  <h2 className="nav-weight text-[1.6rem] leading-[2.4rem] text-black">Features</h2>
                  <ExportedImage
                    src="/media/arrow-down.svg"
                    alt="arrow down"
                    width={20}
                    height={20}
                    placeholder="blur"
                  />
                </div>
                {clicked && (
                  <motion.div
                    // initial={{ opacity: 0, scale: 0.5, y: -10 }}
                    // animate={{ opacity: 1, scale: 1, y: 0 }}
                    // transition={{ duration: 0.5 }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="absolute md:left-[-120px] lg:left-[-80px] top-[60px]"
                  >
                    <div className="bg-white shadow-lg px-[1.2rem] py-[22px] md:w-[75rem] lg:w-[90rem]">
                      <div className="grid grid-cols-2">
                        {menuItems.map((item) => {
                          return (
                            <Link
                              href={`https://www.circlehq.co${item.href}`}
                              className="flex cursor-pointer gap-[11px] py-[17px] px-[7px] hover:bg-[#f4f4f4]"
                            >
                              <div className="basis-1/12">
                                <ExportedImage
                                  src={item?.path}
                                  alt="arrow down"
                                  width={41}
                                  height={41}
                                  placeholder="blur"
                                />
                              </div>
                              <div className="basis-11/12">
                                <h2 className="text-[14px] font-[700] text-primary leading-[20px]">
                                  {item?.title}
                                </h2>
                                <p className="text-grey text-[10px]">
                                  {item?.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </menu>
              <Link
                href="/"
                className="font-circular-regular font-[450] text-[1.6rem]"
              >
                Blog
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex gap-6 items-center">
          <div>
            <Link
              href="https://app.circlehq.co/login"
              className="text-[1.6rem] font-medium leading-[2rem] text-black"
            >
              Login
            </Link>
          </div>
          <div>
            <button className="w-[11.5rem] h-[4rem] text-[1.6rem] bg-primary text-white rounded-[0.8rem]">
              <Link
                href="https://www.app.circlehq.co/sign-up"
                className="text-[1.6rem] font-medium leading-[2rem]"
              >
                Get Started
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="flex md:hidden justify-between items-center p-[24px]">
        <div className="relative">
          <ExportedImage
            src="/media/circlehq_logo.svg"
            alt="Logo"
            width={72}
            height={27}
            placeholder="blur"
          />
          {mobileClicked && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="absolute top-[71px] min-w-[320px]"
            >
              <div className="bg-white w-full px-[5px] py-[12px]  shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.1)_0px_4px_6px_-2px_rgba(16,24,40,0.05)]">
                {menuItems.map((item, idx) => {
                  return (
                    <Link
                      href={`https://www.circlehq.co${item.href}`}
                      key={idx}
                      className="flex gap-x-4 gap-y-8 w-full py-2 cursor-pointer"
                    >
                      <img src={item.path} className="h-[20px] w-[20px]" />
                      <p>{item.title}</p>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>

        {mobileClicked ? (
          <div
            onClick={() => {
              setMobileClicked(false);
            }}
          >
            <img src="/assets/close.svg" className="h-[24px] w-[24px]" />{" "}
          </div>
        ) : (
          <div
            onClick={() => {
              setMobileClicked(true);
            }}
          >
            <img src="/assets/menu.svg" />{" "}
          </div>
        )}
      </div>
    </header>
  );
}
