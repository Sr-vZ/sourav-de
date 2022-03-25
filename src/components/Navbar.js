// src/components/Navbar.js

import {ArrowRightIcon} from "@heroicons/react/solid";
import React from "react";
import logo from '../dES.png'

export default function Navbar() {
    return (
        <nav
            className="flex items-center justify-between max-w-8xl p-4 mx-auto bg-white-800 bg-gradient-to-r from-blue-800 shadow-lg">
            <a>
                <div className="px-3 py-2 md:text-4xl xs:text-sm font-semibold flex flex-row">
                    {/* <a
                    className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg"
                    href="/">
                    👋
                </a> */}
                    <img src={logo} className="w-10 h-10 mx-2"></img>
                      Sourav De
                </div>
            </a>
            <ul className="flex items-center space-x-2 text-sm font-medium text-gray-500">
                <li className="hidden lg:block">
                    <a className="px-3 py-2 rounded-lg" href="/">
                        Home
                    </a>
                </li>

                <li>
                    <a className="px-3 py-2 rounded-lg" href="">
                        Projects
                    </a>
                </li>

                <li>
                    <a
                        className="inline-flex items-center px-3 py-2 rounded-lg"
                        href=""
                        target="_blank">
                        External
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="ml-1.5 w-4 h-4">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
}