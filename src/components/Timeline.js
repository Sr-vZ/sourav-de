// src/components/Timeline.js

import {StarIcon} from "@heroicons/react/solid";
import React from "react";
import {timeline} from "../data";

export default function Timeline() {

    return (
        <section id="timeline">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <StarIcon className="w-10 inline-block mb-4"/>
                    <h1
                        className="sm:text-4xl text-3xl font-medium title-font text-purple-600 mb-4">
                        Timeline
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        My journey throughout these recent years
                    </p>
                </div>
                <div className="flex justify-center p-4">
                    {/* <ol class="relative border-l border-gray-200 dark:border-gray-700">
                        {timeline.map((timeline_events) => (
                            <li class="mb-10 ml-6">
                                <span
                                    class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <img
                                        class="rounded-full shadow-lg"
                                        src="https://www.pngfind.com/pngs/m/191-1916304_png-file-svg-checkered-flag-icon-png-transparent.png"
                                        alt="Bonnie image"/>
                                </span>
                                <div
                                    class="justify-between -translate-x-full items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                    <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">{timeline_events.year}</time>
                                    <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved
                                        <a
                                            href="#"
                                            class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a>
                                        to
                                        <span
                                            class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>
                                    </div>
                                </div>
                            </li>
                        ))}

                    </ol> */}
                    <div className="w-full mx-auto lg:max-w-4xl">
                        <div className="relative">
                            {/* Vertical middle line*/}
                            <div
                                className="absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"/>
                            <div className="space-y-12 lg:space-y-8">

                                {timeline.map((timeline_event) => (

                                    <div>
                                        <div className="flex flex-col items-center">
                                            <div
                                                className={`flex items-center ${timeline_event.id % 2 === 0
                                                ? `justify-start`
                                                : `justify-end`} w-full mx-auto`}>
                                                <div
                                                    className={`w-full lg:w-1/2 ${timeline_event.id % 2 === 0
                                                    ? `lg:pr-8`
                                                    : `lg:pl-8`}`}>
                                                    {/* <div className="p-4 bg-white rounded shadow-lg shadow-cyan-300">
                                                            <p>Lorem, ipsum dolor sit amet consectetur dolor elit.
                                                            </p>
                                                        </div> */}
                                                    <div
                                                        className="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-lg shadow-blue-300 sm:flex dark:bg-gray-700 dark:border-gray-600">
                                                        <img src={timeline_event.logo} className="w-20 bg-white rounded-lg"></img>
                                                        <time className="mb-1 text-md font-normal text-gray-400 sm:order-last sm:mb-0">{timeline_event.year}</time>
                                                        {/* <div className="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved
                                                            <a
                                                                href="#"
                                                                className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a>
                                                            to
                                                            <span
                                                                class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>
                                                        </div> */}
                                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                                            <h6 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">{timeline_event.title}</h6>
                                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{timeline_event.organisation}</p>
                                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{timeline_event.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                                                <span className="text-white">{timeline_event.icon()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}