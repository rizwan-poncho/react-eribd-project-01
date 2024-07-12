import React from 'react';
import { useEffect } from "react";
// index.js or App.js
import 'tw-elements';
import logo from "../assets/eri-logo-full.png"

import { Tooltip, initTWE,  Collapse,
  Ripple, } from "tw-elements";
const HeaderComponent =  () => {

    useEffect(() => {
        initTWE({ Tooltip,Collapse, Ripple });
      }, []);

  return (
    <>
<header>
  <nav
    class="relative lg:px-20  flex w-full items-center justify-between bg-white py-2 shadow-dark-mild dark:bg-body-dark lg:flex-wrap lg:justify-start lg:py-6"
    data-twe-navbar-ref>
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <div class="flex justify-between items-center w-full">

      <div className='md:hidden block'>
             <img src={logo} className='h-12 object-contain'  />
            </div>
        <div>
        <button
          class="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-twe-collapse-init
          data-twe-target="#navbarSupportedContentY"
          aria-controls="navbarSupportedContentY"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span
            class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </span>
        </button>
        </div>
      </div>

      <div
        class="!visible hidden grow basis-[100%] items-center text-center lg:!flex lg:basis-auto lg:text-left"
        id="navbarSupportedContentY"
        data-twe-collapse-item>
          <div className='flex w-full md:justify-between justify-center mt-3 md:mt-0 md:items-center w-full'>
            <div className='md:block hidden'>
             <img src={logo} className='h-12 object-contain'  />
            </div>
            <div>
            <ul
          class="me-auto flex flex-col lg:flex-row"
          data-twe-navbar-nav-ref>
          <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <a
              class="block uppercase text-blue-800 tracking-wide font-semibold transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              href="#!"
              data-twe-nav-link-ref
              data-twe-ripple-init
              data-twe-ripple-color="light"
              >Company</a
            >
          </li>
          <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <a
              class="block uppercase text-blue-800 tracking-wide font-semibold transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              href="#!"
              data-twe-nav-link-ref
              data-twe-ripple-init
              data-twe-ripple-color="light"
              >Services</a
            >
          </li>
          <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <a
              class="block uppercase text-blue-800 tracking-wide font-semibold transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              href="#!"
              data-twe-nav-link-ref
              data-twe-ripple-init
              data-twe-ripple-color="light"
              >Project</a
            >
          </li>
          <li class="mb-2 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <a
              class="block uppercase text-blue-800 tracking-wide font-semibold transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              href="#!"
              data-twe-nav-link-ref
              data-twe-ripple-init
              data-twe-ripple-color="light"
              >Certificate</a
            >
          </li>
          <li class="mb-2 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <a
              class="block uppercase text-blue-800 tracking-wide font-semibold transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              href="#!"
              data-twe-nav-link-ref
              data-twe-ripple-init
              data-twe-ripple-color="light"
              >Contact</a
            >
          </li>
        </ul>
            </div>
          
          </div>
        
      </div>
    </div>
  </nav>
</header>
    </>
  );
};

export default HeaderComponent;