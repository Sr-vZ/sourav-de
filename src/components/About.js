import React from "react";
import potrait from '../img/Sourav_potrait2_better_light.png'

export default function About() {
    return (
        <section id="about" className="hero-bg">
            <div
                className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p className="font-Poppins text-blue-700">Hey There 👋 I am</p>
                    <h1
                        className="title-font sm:text-4xl text-3xl mb-4 font-Poppins font-bold text-black">
                        Sourav De
                    </h1>
                    <p className="text-2xl font-semibold text-[#540cb5]">Automation Build Specialist @<img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/cd/BT_logo_2019.svg"
                        className="w-10 h-10 mx-2 inline-flex"></img>
                    </p>

                    <br className="hidden lg:inline-block"/>
                    <p className="text-gray-700 text-xl font-Poppins">I love to build amazing apps
                        and deploy them to ☁️ platforms.</p>
                    <p className="mb-8 leading-relaxed font-normal">
                        {/* I have 7+ years of experience in Web app development and also have expertise in Network and Infrastructure Automation.
                        Currently I am learning and experimenting a lot in the DevOps segment. */}
                        I have 7+ years of experience in Network and Infrastructure automation and
                        currently involved in DevOps infrastructure and developing automation solutions.
                        I also do freelance Software and Web development, mostly on UpWork. I regularly
                        work on Python, NodeJS and develop solution in MS SharePoint,
                        PowerApps and PowerAutomate like low code solutions as well
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> */}
                <div className="flex p-4">
                    <img
                        className="object-cover object-center rounded-2xl shadow-2xl"
                        alt="hero"
                        src={potrait}/>
                </div>
            </div>
        </section>
    );
}