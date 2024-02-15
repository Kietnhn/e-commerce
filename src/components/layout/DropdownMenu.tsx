// components/DropdownMenu.js
import { DropDownMenu } from "@/lib/definitions";
import React, { useState } from "react";

const DropdownMenu = ({ items }: { items: DropDownMenu[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={toggleDropdown}
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    <div className="h-10 w-10 bg-white"></div>
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 8.293l-6.293 6.292a1 1 0 01-1.414-1.414l7-7a1 1 0 011.414 0l7 7a1 1 0 01-1.414 1.414L10 8.293z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {/* Dropdown panel */}
            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1">
                        {items.map((item, index) => (
                            <a
                                key={index}
                                href={item.to}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
