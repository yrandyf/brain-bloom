
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DynamicHeroIcon } from "../ui/DynamicHeroIcon";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";


function NavLink({ link, expandedMenuItems, toggleMenu }) {
    const pathname = usePathname();
    console.log(pathname, link)


    if (link.children) {
        return <li className={clsx("hs-accordion", {
            active: pathname.startsWith(link.url)
        })}>
            <button
                type="button"
                onClick={() => toggleMenu(link.id, !expandedMenuItems.includes(link.id))}
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-11/12 mx-auto text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
                <DynamicHeroIcon icon={link.icon} />
                {link.title}
                {expandedMenuItems.includes(link.id) ?
                    <ChevronUpIcon className="ms-auto w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width={20} /> :
                    <ChevronDownIcon className="ms-auto w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width={20} />
                }

            </button>
            <div
                id="users-accordion"
                className={clsx("hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700", {
                    // hidden: !expandedMenuItems.includes(link.id),
                    // 'max-h-96': expandedMenuItems.includes(link.id),
                    // 'max-h-[1000px]': expandedMenuItems.includes(link.id),
                })}
            >
                <ul
                    className="hs-accordion-group ps-3 pt-2"
                    data-hs-accordion-always-open=""
                >
                    {link.children.map(subLink =>
                        <li key={subLink.id} className="hs-accordion" id="users-accordion-sub-1">
                            <Link href={subLink.url} className={clsx("flex mb-1.5 items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600", {
                                "bg-gray-100": subLink.url.startsWith(pathname)
                            })} >
                                {subLink.title}
                            </Link>
                        </li>

                    )}
                </ul>
            </div>
        </li>
    }



    return (
        <li>
            <Link
                className={clsx("flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600", {
                    "bg-gray-100": link.url.startsWith(pathname)
                })}
                href={link.url}
            >
                <DynamicHeroIcon icon={link.icon} />
                {link.title}
            </Link>
        </li>
    )
}

export default NavLink