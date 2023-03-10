import "tailwindcss-elevation";
import React, { useEffect, useState } from "react";
import { animated } from "react-spring";
import { useSpring } from "react-spring/web";
import ScrollpositionAnimation from "../../hooks/OnScroll";
export default function TripleCardComponent() {
  if (typeof window !== "undefined") {
    useEffect(() => {
      // Update the document title using the browser API
      ScrollpositionAnimation();
    }, [window.scrollY]);
  }
  return (
    <div>
      <div className="flex space-y-5 my-20 js-show-on-scroll mx-5 text-center justify-center flex-col ... ">
      <h1
          style={{ fontFamily: "Cookie-Regular" }}
          className={
            "justify-center text-center mx-auto text-5xl text-bold text-black"
          }
        >
          Cookenomics <br />
        </h1>
        <h1
          style={{ fontFamily: "Cookie-Regular" }}
          className={
            "justify-center text-center mx-auto text-4xl text-bold text-black"
          }
        >
          Taxes 5/5 <br /> Total Supply: 100,000,000
        </h1>
        <div className="flex justify-between items-center content-center flex-col md:flex-row ...">
         
<div className="mb-5 max-w-sm p-6 px-14 bg-creamorange border mx-5 text-center  border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">4%</h5>
    </a>
    <p className="mb-3 font-normal text-gray-800 dark:text-gray-400">Marketing</p>
</div>

<div className="mb-5 max-w-sm p-6 px-10 bg-creamorange border mx-5 text-center  border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">3%</h5>
    </a>
    <p className="mb-3 font-normal text-gray-800 dark:text-gray-400">Development</p>

</div>

<div className="mb-5  max-w-sm p-6 px-14 bg-creamorange border mx-5 items-center text-center justify-center border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">2%</h5>
    </a>
    <p className="mb-3 font-normal text-gray-800 dark:text-gray-400">Burn</p>

</div>
<div className="mb-5 max-w-sm p-6 px-14 bg-creamorange border mx-5 items-center text-center justify-center border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">1%</h5>
    </a>
    <p className="mb-3 font-normal text-gray-800 dark:text-gray-400">Liquidity</p>

</div>

        </div>
      </div>
    </div>
  );
}
