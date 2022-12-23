import "tailwindcss-elevation";
import React, { useEffect, useState } from "react";
import { animated } from "react-spring";
import { useSpring } from "react-spring/web";
import ScrollpositionAnimation from "../../hooks/OnScroll";
/*

<div className="justify-center container bg-transparent mx-auto w-full h-full rounded-xl">
    <h1 style={{ fontFamily: "Cookie-Regular" }}  className={'justify-center text-center mx-auto text-5xl text-bold text-black'}>RoadMap</h1>
  <div className="relative wrap overflow-hidden p-10 h-full">
    <div className="border-2-2 absolute border-opacity-0 border-gray-700 h-full border"></div>

    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
      </div>
      <div className="order-1 bg-yellow-400 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:scale-105 transition-all duration-500 hover:bg-red-400">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">Slap dat turkey in the oven yo!</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Please Preheat to well over 400 degrees</p>
      </div>
    </div>

    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
      </div>
      <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:scale-105 transition-all duration-500 hover:bg-orange-400">
        <h3 className="mb-3 font-bold text-white text-xl">Baste dat MuhFuckah</h3>
        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Best basting practices start with caution.</p>
      </div>
    </div>
    
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
      </div>
      <div className="order-1 bg-yellow-400 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:scale-105 transition-all duration-500 hover:bg-red-400">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">Gravy time!</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Ery'body loves dem gravy.</p>
      </div>
    </div>

    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className=" flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
      </div>
      <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:scale-105 transition-all duration-500 hover:bg-orange-400">
        <h3 className="mb-3 font-bold text-white text-xl">Metaverse releasing soon!</h3>
        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Please stay in tune for our metaverse released for turkeys. Are you a turkey?</p>
      </div>
    </div>
  </div>
</div> 
*/
export default function TimeLineComponent() {
    return (
<div className="flex flex-col justify-center items-center content-center w-full mx-auto px-10">
<h1 style={{ fontFamily: "Cookie-Regular" }}  className={'justify-center text-center mx-auto text-5xl text-bold text-white'}>Chef's Cook Map</h1>
<ol className="items-center md:flex">
    <li className="relative mb-6 md:mb-0">
        <div className="flex items-center">
            <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 style={{ fontFamily: "Cookie-Regular" }}  className="text-3xl font-semibold text-gray-900 dark:text-white">Prepping Instruction 1: </h3>

            <p className="text-base font-normal w-96 text-gray-800 dark:text-gray-400">Compliment the chef (Shill for Organic growth)
100 Eaters (holders)
Get stuffed (buy and hold the floor) 
Menu (Website v1)
Hygiene and Safety (SAFU)</p>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 style={{ fontFamily: "Cookie-Regular" }}  className="text-3xl font-semibold text-gray-900 dark:text-white">Cooking Instruction 2:</h3>

            <p className="text-base font-normal mb-2 text-gray-800 dark:text-gray-400">Turn the heat up: 
Call the waiters and waitresses (Callers)
Prep the trimmings (extend lock at certain MC)</p>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 style={{ fontFamily: "Cookie-Regular" }}  className="text-lg font-semibold text-3xl text-gray-900 dark:text-white">Instruction 4: Serve Up!</h3>

            <p className="text-base font-normal text-gray-800 dark:text-gray-400">Type of Gravy (utility Reveal)
Fill your plate (NFT Development)</p>
        </div>
    </li>
</ol>
</div>

    )
}