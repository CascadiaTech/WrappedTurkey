//import 'tw-elements'
import "tailwindcss-elevation";
//import { Stickynavbar } from 'flowbite-react'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import React from "react";
//import Image from "next/image";
import Link from "next/link";
import Image from "next/image";
import MarsereumLogo from "assets/images/Marsereum-Logo.png";
import { ConnectWallet } from "../Web3Modal/WalletConnect";
import { Dropdown } from "flowbite-react";
export default function HeaderComponent() {
  //    backgroundImage: `url(${backgroundimage})`,

  return (
    <div>
      <nav className="bg-black px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-nowrap justify-left items-center mx-auto">
          <div></div>
          <div className="md:order-2">
            <ConnectWallet></ConnectWallet>
          </div>
          <div className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-500 hover:to-red-700 rounded-lg sm:visible md:hidden">
            <Dropdown color={"rgb(0.30,0.65,1.00)"} label="Navigation">
              <Dropdown.Header>
                <span className="block text-sm">Navigation</span>
              </Dropdown.Header>
              <Dropdown.Item>
                <a href="https://www.welcomebacktrump.net/">
                  <p className="cursor-pointer block py-2 pr-4 pl-3 text-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
                    Website{" "}
                  </p>
                </a>
              </Dropdown.Item>
              <Dropdown.Divider />
            </Dropdown>
          </div>
          <div
            className="h-0 justify-left items-left text-left w-full md:flex md:h-fit md:w-auto order-1"
            id="navbar-sticky"
          >
            <ul className="invisible md:visible h-auto flex flex-row justify-left text-left items-left p-4 mt-4 bg-black rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Image
                alt="Your Company"
                className="h-20 w-auto sm:h-10"
                src={MarsereumLogo}
                height={30}
                width={180}
              />
              <li>
                <a href="https://preview.webflow.com/preview/marsereum?utm_medium=preview_link&utm_source=dashboard&utm_content=marsereum&preview=59f5b90e71b35e9aafa792f461ab70af&pageId=634ed847fc477aff074f9b50&workflow=preview">
                  <p className="cursor-pointer block py-2 pr-4 ml-12 text-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                    Website{" "}
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
