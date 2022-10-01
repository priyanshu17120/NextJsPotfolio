import React from 'react'
import Head from 'next/Head'
import { createClient } from "next-sanity";
import Script from 'next/script';

const Navbar = ({ profile }) => {
  return (
    <>   
    
      <Head>
      {/* <meta charset="utf-8" />
  
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
  
    <meta
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
      name="viewport"
    />
  
  
    <meta property="og:title" content="Homepage | Atom Template" />
  
    <meta property="og:locale" content="en_US" />
  
    <link
      rel="canonical"
      href="//"
    />
  
    <meta
      property="og:url"
      content="//"
    />
  
    <meta
      name="description"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
  
    <link rel="icon" type="image/png" href="/assets/img/favicon.png" />
  
    <meta name="theme-color" content="#5540af" />
  
    <meta property="og:site_name" content="Atom Template" />
  
    <meta property="og:image" content="//assets/img/social.jpg" />
  
    <meta name="twitter:card" content="summary_large_image" />
  
    <meta name="twitter:site" content="@tailwindmade" /> */}
      <link
        crossorigin="crossorigin"
        href="https://fonts.gstatic.com"
        rel="preconnect"
      />

      <link
        as="style"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
        rel="preload"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />

      <link
        crossorigin="anonymous"
        href="/assets/styles/main.min.css"
        media="screen"
        rel="stylesheet"
      />

      <script
        defer
        src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
      ></script>

      <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>



    </Head>
      <div>
        <div className="w-full z-50 top-0 py-3 sm:py-5  absolute bg-[#4c399d]">
          <div className="container flex items-center justify-between">
            <div>
              <a href='/' className='cursor-pointer'><h2 className='text-white text-3xl font-bold'>{profile.name}</h2></a>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">

                <li className="group pl-6">

                  <a href="/#about"><span
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>
                  </a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#services"><span
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span></a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#portfolio"> <span
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span></a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>



                <li className="group pl-6">

                  <a href="/#work"><span
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span></a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#statistics"><span
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span></a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#blog"><span
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span></a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#contact"><span
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span></a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

              </ul>
            </div>
            <div className="block lg:hidden">
              <button id='ham'>
                <i className="bx bx-menu text-4xl text-white"></i>
              </button>
            </div>
          </div>
        </div>
        <div id="aaa1" className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity">
          <div id="aaa2" className="hidden absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
            <button className="absolute top-0 right-0 mt-4 mr-4" id='closebutton'>
              <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" />
            </button>

            <ul className="mt-8 flex flex-col">

<a href='/#about'>
              <li className="py-2">
                <span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>
              </li>
</a>

              <a href='/#services'>
              <li className="py-2">
                <span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span>
              </li>
</a>

              <a href='/#portfolio'>
              <li className="py-2">
                <span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span>
              </li>
</a>

             
              <a href='/#work'>
              <li className="py-2">
              
                <span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span>

              </li>
              </a>
              <a href='/#statistics'>
              <li className="py-2">
                <span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span>
              </li>
</a>

              <a href='/#blog'>
              <li className="py-2">
                <span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span>
              </li>
</a>

              <a href='/#contact'>
              <li className="py-2">
                <span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>
              </li>
</a>

            </ul>
          </div>
        </div>
      </div>
      <script src="/assets/js/navbar.js"></script>
    </>
  )
}

export default Navbar