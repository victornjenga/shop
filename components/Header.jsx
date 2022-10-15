import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  FlagIcon,
  HomeIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import civrot from "../public/assets/civrot.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";

function Header() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [open, setOpen] = useState();
  const [openSearch, setOpenSearch] = useState();
  return (
    <>
      <div className="block  fixed z-10 bg-slate-200 w-full  items-center">
        <div className="text-center flex space-x-10 justify-evenly md:justify-center">
          <div className="flex space-x-4 items-center">
            <div className="flex md:flex">
              <AiOutlineMenu
                className="cursor-pointer text-2xl md:hidden"
                onClick={() => setOpen(true)}
              />
            </div>
            <div className="pt-2">
              <Link href="/">
                <a>
                  <Image width={50} height={50} src={civrot} alt="/" />
                </a>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex space-x-10 items-center justify-center  ">
            <div>
              <h2>Home</h2>
            </div>
            <div>
              <h2>Discover</h2>
            </div>

            <div className="flex items-center border  ml-2 rounded-full p-2 bg-gray-100">
              <SearchIcon className="h-6 text-gray-600" />
              <input
                className=" hidden md:inline-flex flex-shrink ml-2 items-center bg-transparent outline-none placeholder-gray-500:"
                type="text"
                placeholder="Search Products"
              />
            </div>
            <div>
              <BellIcon className="h-6 text-gray-600" />
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>{" "}
            <SearchIcon
              onClick={() => setOpenSearch(!openSearch)}
              className=" cursor-pointer block md:hidden duration-300 h-6 text-gray-600"
            />
             <Link href="/cart">
            <div className="relative text-4xl  cursor-pointer">
              <ShoppingCartIcon className="h-6 text-gray-600" />
              <span className="absolute top-0 right-[-4px] bg-red-600 h-3 w-3 justify-center items-center flex text-white  rounded-full text-sm ">
              {totalQuantities}
              </span>
            </div></Link>
          </div>
        </div>
        <div>
          {openSearch && (
            <div className="flex duration-300 md:hidden h-8 pb-2 items-center rounded-full mx-4 py-2 border-gray-700 px-[10%] border">
              <SearchIcon className="text-7xl text-gray-600" />
              <input
                className=" flex-shrink ml-2 items-center bg-transparent outline-none placeholder-gray-500:"
                type="text"
                placeholder="Search Products"
              />
            </div>
          )}
        </div>
      </div>

      {open && (
        <div className="bg-gray-100 md:hidden top-0 h-full px-5 w-[75%] b-0 fixed z-10">
          <div className="flex py-5 items-center justify-between">
            <h2
              onClick={() => setOpen(false)}
              className="text-xl font-bold italic"
            >
              <Link href="/">
                <Image width={70} height={70} src={civrot} alt="/" />
              </Link>
            </h2>

            <AiOutlineClose
              onClick={() => setOpen(false)}
              className="text-3xl cursor-pointer shadow-lg shadow-slate-600 p-1 rounded-full font-bold "
            />
          </div>
          <div className="mx-1 text-xl border-b border-gray-600 border-solid ">
            <p className="py-5">Lets Build Something Legendary Together</p>
          </div>
          <div className="justify-center items-center block">
            <ul className="block space-y-4 pt-5">
              {/* <li onClick={() => setOpen(false)} className="  font-sm ">
                <Link href="/">App Development</Link>
              </li> */}
              <li onClick={() => setOpen(false)} className="font-sm ">
                <Link href="/web-solutions">Web Development</Link>
              </li>
              <li onClick={() => setOpen(false)} className="font-sm ">
                <Link href="/graphic-design">Graphic Design</Link>
              </li>
            </ul>
          </div>
          <h2 className="pt-5 text-xl   text-pink-600">Lets Connect</h2>
        </div>
      )}
    </>
  );
}

export default Header;
