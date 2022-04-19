// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
// const images = require.context('../img/', true)

// require('../img/Digital_Sign_app.png')

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 body-font bg-gradient-to-b from-gray-800 via-gray-600 to-gray-200" >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Few examples of Apps I have developed or working on.
          </p>
        </div>
        {/* <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div> */}
        

          
        <section className="md:overflow-x-scroll">
        <div className="container flex p-5 py-12 mx-auto md:p-20 max-w-7xl">
          <div className="flex flex-wrap mx-auto md:flex-nowrap">
            {projects.map((project)=>(
              // const img = require(`${project.image}`);
              <a href={project.link} target="_blank">
              <div className="flex flex-col w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:hover:-translate-x-16 md:hover:-translate-y-8">
                  <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={project.image} alt="app" />
                  <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-Poppins text-neutral-600">
                      <span className>{project.title}
                      </span></h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relax"> {project.description} </p>
                  </div>
                </div>
              </div>
            </a>
            ))}
            {/* <a href>
              <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:hover:-translate-x-16 md:hover:-translate-y-8">
                  <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="./images/ogtwitter.png" alt="blog" />
                  <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                      <span className>Entry
                      </span></h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relax"> Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you. </p>
                  </div>
                </div>
              </div>
            </a> */}
            {/* <a href>
              <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                  <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="https://wickedbackgrounds.com/images/opengraphTwitter.png" alt="blog" />
                  <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                      <span className>Entry
                      </span></h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relax"> Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you. </p>
                  </div>
                </div>
              </div>
            </a>
            <a href>
              <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                  <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="https://wickedpopups.com/images/ogTwitter.png" alt="blog" />
                  <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                      <span className>Entry
                      </span></h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relax"> Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you. </p>
                  </div>
                </div>
              </div>
            </a>
            <a href>
              <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                  <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="https://ph-files.imgix.net/f4e3679c-25d7-4a6d-b4a4-5b5052f8bb32.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&fit=max&dpr=2" alt="blog" />
                  <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                      <span className>Entry
                      </span></h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relax"> Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you. </p>
                  </div>
                </div>
              </div>
            </a>
            <a href>
              <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                  <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="https://www.york.ac.uk/media/news-and-events/pressreleases/2020/Random%20feat.jpg" alt="blog" />
                  <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                      <span className>Entry
                      </span></h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relax"> Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you. </p>
                  </div>
                </div>
              </div>
            </a>
            <a href>
              <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                  <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="https://www.york.ac.uk/media/news-and-events/pressreleases/2020/Random%20feat.jpg" alt="blog" />
                  <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                      <span className>Entry
                      </span></h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relax"> Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you. </p>
                  </div>
                </div>
              </div>
            </a>
            <a href>
              <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                  <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="https://www.york.ac.uk/media/news-and-events/pressreleases/2020/Random%20feat.jpg" alt="blog" />
                  <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                      <span className>Entry
                      </span></h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relax"> Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you. </p>
                  </div>
                </div>
              </div>
            </a>
            <a href>
              <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                  <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="https://www.york.ac.uk/media/news-and-events/pressreleases/2020/Random%20feat.jpg" alt="blog" />
                  <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                      <span className>Entry
                      </span></h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relax"> Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you. </p>
                  </div>
                </div>
              </div>
            </a>
            <a href>
              <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                  <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="https://www.york.ac.uk/media/news-and-events/pressreleases/2020/Random%20feat.jpg" alt="blog" />
                  <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                      <span className>Entry
                      </span></h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relax"> Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you. </p>
                  </div>
                </div>
              </div>
            </a> */}
          </div>
        </div>
      </section>
      </div>
    </section>
  );
}