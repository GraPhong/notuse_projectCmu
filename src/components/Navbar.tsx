"use client";

import Link from "next/link";
import React, { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import clsx from "clsx";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const activeClassName = "nav-active"
  const navlinks = [
    {
      labe: "ค้นหา",
      link: "home"
    },
    {
      labe: "GenEd&รีวิว",
      link: "reviwe"
    },
    {
      labe: "ตารางเรียน",
      link: "table"
    },
    {
      labe: "กำหนดการ",
      link: "schedule"
    },
    {
      labe: "หลักสูตร",
      link: "curriculum"
    }
  ];

  return (
    <main>
      <nav className=" dark:bg-violet-500 flex justify-between px-8 items-center py-6   ">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* logo */}
            <Link href={"/"} className="text-5xl font-mono">
              CMU
            </Link>
          </section>
          
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className= " hidden lg:block text-2xl text-gray-100 hover:text-black"
              href={d.link}
            >
              {d.labe}
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-white bg-white dark:bg-violet-400 flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="flex justify-end mt-0 mb-8 text-3xl  cursor-pointer "
            />

            {navlinks.map((d, i) => (
              <Link key={i} className="font-bold" href={d.link}>
                {d.labe}
              </Link>
            ))}
          </section>
        </div>

        <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-5xl cursor-pointer lg:hidden"
            />
        </section>       
        
        
      </nav>
      <hr className=" " />
    </main>
  );
}