"use client"

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdPerson,
  MdPendingActions,

  MdGames,
  MdCategory,
  MdOutlineApartment,


  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout, MdPersonalInjury,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import Link from "next/link";
import LinkActive from "./LinkActive";

function SideNavbar() {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
             
          <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              LOAND GAME STORE
            </h1>

            {/* store  */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <LinkActive
                  title="Customer"
                  url="/store/customer"
                  icon={
                    <MdPerson className="text-2xl text-gray-600 group-hover:text-white " />
                  }
              />
              <LinkActive
                  title="Colaboradores"
                  url="/store/collaborator"
                  icon={
                    <MdPersonalInjury className="text-2xl text-gray-600 group-hover:text-white " />
                  }
              />

            </div>

            {/* games  */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <LinkActive
                  title="Games"
                  url="/store/game"
                  icon={
                    <MdGames className="text-2xl text-gray-600 group-hover:text-white " />
                  }
              />

              <LinkActive
                  title="Categories"
                  url="/store/category"
                  icon={
                    <MdCategory className="text-2xl text-gray-600 group-hover:text-white " />
                  }
              />
              <LinkActive
                  title="Study"
                  url="/store/study"
                  icon={
                    <MdOutlineApartment className="text-2xl text-gray-600 group-hover:text-white " />
                  }
              />

            </div>

            {/* logout */}
            <div className=" my-4">

                <LinkActive
                    title="Logout"
                    url="/"
                    icon={
                        <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                    }
                />
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
