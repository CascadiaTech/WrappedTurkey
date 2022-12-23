//import 'tw-elements'
import "tailwindcss-elevation";
//import { Stickynavbar } from 'flowbite-react'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import React from "react";
//import Image from "next/image";
import Link from "next/link";
import Image from "next/image";
//import MarsereumLogo from "assets/images/Marsereum-Logo.png";
//import turkeylogo2 from "../../assets/images/turkeylogo2.png"
import { ConnectWallet } from "../Web3Modal/WalletConnect";
import { Dropdown } from "flowbite-react";
import turkeylogo4 from "../../assets/images/turkeylogo4.png";
export default function HeaderComponent() {
  //    backgroundImage: `url(${backgroundimage})`,

  return (
    <div>
      <nav className="bg-creamorange px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-nowrap justify-left items-center mx-auto">
          <div></div>
          <div className="md:order-2">
            <ConnectWallet></ConnectWallet>
          </div>
          <div className="bg-gradient-to-r bg-creamorange border-white hover:from-red-500 hover:to-red-700 rounded-lg sm:visible md:hidden">
            <Dropdown color={"rgb(0.30,0.65,1.00)"} label="Navigation">
              <Dropdown.Header>
                <span className="block text-sm">Navigation</span>
              </Dropdown.Header>
              <Dropdown.Item>
                <a href="https://t.me/WrappedTurkey_ERC20">
                  <p className="cursor-pointer block py-2 pr-4 pl-3 text-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
                    Telegram{" "}
                  </p>
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="https://twitter.com/WrappedTurkey1">
                  <p className="cursor-pointer block py-2 pr-4 pl-3 text-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
                   Twitter{" "}
                  </p>
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="https://link.medium.com/bSLh5ooiQvb">
                  <p className="cursor-pointer block py-2 pr-4 pl-3 text-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
                   Medium{" "}
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
            <ul className="invisible md:visible h-auto flex flex-row justify-left text-left items-left  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Image
                alt="Your Company"
                className=""
                src={turkeylogo4}
                height={120}
                width={120}
              />
              <li>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
