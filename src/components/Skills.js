// src/components/Skills.js

import {BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid";
import React from "react";
import {skills} from "../data.js";

export default function Skills() {
    return (
        <section id="skills" className="hero-bg">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4"/>
                    <h1
                        className="sm:text-4xl text-3xl font-medium title-font text-purple-600 mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Some of my Experience on Skills and technologies I have learned and still
                        learning or worked with over the years through my professional journey.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div className="p-2 sm:w-1/2 w-full">
                            <a
                                className="bg-gray-800 rounded flex p-4 items-center hover-trigger"
                                role="button"
                                data-bs-toggle="collapse"
                                href={"#skill" + skill.id}
                                aria-expanded="false"
                                aria-controls={"skill" + skill.id}>
                                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
                                <span className="title-font font-medium text-white">
                                    {skill.title}
                                </span>

                            </a>
                            <div
                                className="collapse flex w-full hover-target p-4 rounded-lg shadow-xl bg-white"
                                id={"skill" + skill.id}>
                                {skill.subtitle}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}