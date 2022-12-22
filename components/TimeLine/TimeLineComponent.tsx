import "tailwindcss-elevation";
import React, { useEffect, useState } from "react";
import { animated } from "react-spring";
import { useSpring } from "react-spring/web";
import ScrollpositionAnimation from "../../hooks/OnScroll";

export default function TimeLineComponent() {
    return (

<div className="container bg-transparent mx-auto w-full h-full rounded-xl">
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
    )
}