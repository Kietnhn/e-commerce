"use client";
import {
    PowerIcon,
    UserCircleIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function OpenUser() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="relative inline-block text-left">
            <button
                className="relative flex h-11 w-11 items-center justify-center rounded-md border "
                onClick={toggleDropdown}
            >
                <UserCircleIcon className="h-4" />
            </button>

            {/* Dropdown panel */}
            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-52 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1">
                        <button className="flex w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                            <Cog6ToothIcon className="w-6" />
                            <div className="hidden md:block">Settings</div>
                        </button>
                        <form>
                            <button className="flex w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                                <PowerIcon className="w-6" />
                                <div className="hidden md:block">Sign Out</div>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
