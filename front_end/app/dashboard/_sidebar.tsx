'use client'
// import Link from "next/link"
// import NavLink from "./_nav-link";
// import BrandLogo from "./_brand-logo";
// import { ChevronDownIcon, ChevronUpDownIcon, ChevronUpIcon, ExclamationCircleIcon, UserCircleIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';
// import { lazy, useState } from "react";
// import { DynamicHeroIcon } from "../ui/DynamicHeroIcon";
// import { fetcher } from "../lib/utils/api";
// import { without } from 'lodash'

import Link from "next/link";
import BrandLogo from "./_brand-logo";
import useSWR from 'swr'
import { fetcher } from "../lib/utils/api";


// function SideBar() {

//     const [expandedMenuItems, setExpandedMenuItems] = useState<number[]>([])
//     const { data, error } = useSWR('/api/profile-data', fetcher)
//     const links = data?.data.links


//     function toggleMenu(id: number, expand: boolean,) {
//         if (expand) {
//             setExpandedMenuItems(exLinks => [...exLinks, id])

//         } else {
//             console.log(without(links, [id]));
//             setExpandedMenuItems(exLinks => without(exLinks, id))
//         }
//     }

//     // TODO: handle errors
//     if (error) return <div>Failed to load</div>

//     return (

//         <>
//             {/* Navigation Toggle */}
//             <button
//                 type="button"
//                 className="text-gray-500 hover:text-gray-600"
//                 data-hs-overlay="#docs-sidebar"
//                 aria-controls="docs-sidebar"
//                 aria-label="Toggle navigation"
//             >
//                 <span className="sr-only">Toggle Navigation</span>
//                 <svg
//                     className="flex-shrink-0 w-4 h-4"
//                     width={16}
//                     height={16}
//                     fill="currentColor"
//                     viewBox="0 0 16 16"
//                 >
//                     <path
//                         fillRule="evenodd"
//                         d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
//                     />
//                 </svg>
//             </button>
//             {/* End Navigation Toggle */}
//             <div
//                 id="docs-sidebar"
//                 className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"
//             >
//                 <div className="px-6 flex justify-center">
//                     <Link
//                         className="flex-none text-xl font-semibold dark:text-white"
//                         href="/"
//                         aria-label="Brand"
//                     >
//                         <BrandLogo />
//                     </Link>
//                 </div>
//                 <nav
//                     className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
//                     data-hs-accordion-always-open=""
//                 >
//                     <ul className="space-y-1.5">
//                         {links && links.map(link =>
//                             <NavLink key={link.id} link={link} expandedMenuItems={expandedMenuItems} toggleMenu={toggleMenu} />
//                         )}

//                     </ul>

//                     {!data && <ul className="mt-5 space-y-5">
//                         <li className="w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700"></li>
//                         <li className="w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700"></li>
//                         <li className="w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700"></li>
//                         <li className="w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700"></li>
//                     </ul>}
//                 </nav>
//             </div>
//         </>

//     )
// }

// export default SideBar

export default function SideBar() {
    const { data, error } = useSWR('/api/profile-data', fetcher)
    const links = data?.data.links

    return (
        <div
            id="application-sidebar"
            className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"
        >
            <div className="px-6">
                <Link
                    className="flex-none flex justify-center text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/"
                    aria-label="Brand"
                >
                    {/* TODO: change aria stuff too */}
                    <BrandLogo />
                </Link>
            </div>
            <nav
                className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
                data-hs-accordion-always-open=""
            >
                {/* <ul className="space-y-1.5">
                    {links && links.map(link =>
                        <NavLink key={link.id} link={link} expandedMenuItems={expandedMenuItems} toggleMenu={toggleMenu} />
                    )}

                </ul> */}



                <ul className="space-y-1.5">
                    {/* <li>
                        <a
                            className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href="#"
                        >
                            <svg
                                className="flex-shrink-0 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            Dashboard
                        </a>
                    </li> */}
                    <li className="hs-accordion" id="users-accordion">
                        <button
                            type="button"
                            className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                            <svg
                                className="flex-shrink-0 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx={9} cy={7} r={4} />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            Users
                            <svg
                                className="hs-accordion-active:block ms-auto hidden w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m18 15-6-6-6 6" />
                            </svg>
                            <svg
                                className="hs-accordion-active:hidden ms-auto block w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                        <div
                            id="users-accordion-child"
                            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                        >
                            <ul
                                className="hs-accordion-group ps-3 pt-2"
                                data-hs-accordion-always-open=""
                            >
                                <li className="hs-accordion" id="users-accordion-sub-1">
                                    <button
                                        type="button"
                                        className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    >
                                        Sub Menu 1
                                        <svg
                                            className="hs-accordion-active:block ms-auto hidden w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                        <svg
                                            className="hs-accordion-active:hidden ms-auto block w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                    <div
                                        id="users-accordion-sub-1-child"
                                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                    >
                                        <ul className="pt-2 ps-2">
                                            <li>
                                                <a
                                                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                    href="#"
                                                >
                                                    Link 1
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                    href="#"
                                                >
                                                    Link 2
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                    href="#"
                                                >
                                                    Link 3
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hs-accordion" id="users-accordion-sub-2">
                                    <button
                                        type="button"
                                        className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    >
                                        Sub Menu 2
                                        <svg
                                            className="hs-accordion-active:block ms-auto hidden w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                        <svg
                                            className="hs-accordion-active:hidden ms-auto block w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                    <div
                                        id="users-accordion-sub-2-child"
                                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden ps-2"
                                    >
                                        <ul className="pt-2 ps-2">
                                            <li>
                                                <a
                                                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                    href="#"
                                                >
                                                    Link 1
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                    href="#"
                                                >
                                                    Link 2
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                    href="#"
                                                >
                                                    Link 3
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="hs-accordion" id="account-accordion">
                        <button
                            type="button"
                            className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                            <svg
                                className="flex-shrink-0 mt-0.5 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx={18} cy={15} r={3} />
                                <circle cx={9} cy={7} r={4} />
                                <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                                <path d="m21.7 16.4-.9-.3" />
                                <path d="m15.2 13.9-.9-.3" />
                                <path d="m16.6 18.7.3-.9" />
                                <path d="m19.1 12.2.3-.9" />
                                <path d="m19.6 18.7-.4-1" />
                                <path d="m16.8 12.3-.4-1" />
                                <path d="m14.3 16.6 1-.4" />
                                <path d="m20.7 13.8 1-.4" />
                            </svg>
                            Account
                            <svg
                                className="hs-accordion-active:block ms-auto hidden w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m18 15-6-6-6 6" />
                            </svg>
                            <svg
                                className="hs-accordion-active:hidden ms-auto block w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                        <div
                            id="account-accordion-child"
                            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                        >
                            <ul className="pt-2 ps-2">
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="#"
                                    >
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="#"
                                    >
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        href="#"
                                    >
                                        Link 3
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a
                            className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href="#"
                        >
                            <svg
                                className="flex-shrink-0 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
                                <line x1={16} x2={16} y1={2} y2={6} />
                                <line x1={8} x2={8} y1={2} y2={6} />
                                <line x1={3} x2={21} y1={10} y2={10} />
                                <path d="M8 14h.01" />
                                <path d="M12 14h.01" />
                                <path d="M16 14h.01" />
                                <path d="M8 18h.01" />
                                <path d="M12 18h.01" />
                                <path d="M16 18h.01" />
                            </svg>
                            Calendar
                        </a>
                    </li>
                    <li>
                        <a
                            className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href="#"
                        >
                            <svg
                                className="flex-shrink-0 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                            Documentation
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}