import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo2.png";
import NavItems from "./NavItems";
import NavProfile from "./NavProfile";
import NavNotification from "./NavNotification";

function MobileNavbar() {
    return (
        <div>
            <Popover>
                {
                    ({ open }) => (
                        <>
                            {/* Mobile menu button */}
                            <Popover.Button className="sm:hidden border-0 rounded-md p-2 hover:bg-blue-200 focus:outline-none">
                                <MenuIcon className="h-5 rounded-md" />
                            </Popover.Button>

                            <Popover.Overlay className={`${open ? "opacity-5 fixed inset-0" : "opacity-0"} bg-black`}
                            />

                            {/* Transition animation when open.close popover */}
                            <Transition
                                show={open}
                                as={Fragment}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                             >

                                {/* Popover content */}
                                <Popover.Panel className="absolute z-10 top-0 left-0 w-full border border-gray-300 rounded-lg bg-white sm:hidden">
                                    <div className="p-2 flex justify-between items-center">
                                        <Link className="pl-4 pt-1 flex items-center space-x-3 whitespace-nowrap uppercase text-blue-900 text-sm font-bold "
                                            to="/">
                                            <img className="h-9 w-9"
                                                src={logo}
                                                alt="Logo"
                                            />
                                            <span>Field Construct</span>
                                        </Link>
                                        <Popover.Button className="border-0 rounded-md text-center p-1 ml-1 hover:bg-blue-200 focus:outline-none">
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>

                                    <NavItems view={"popover"} />

                                    <div className="border-t border-gray-300 rounded-lg flex flex-row-reverse justify-between py-4 px-6">
                                        <NavNotification />
                                        <NavProfile />
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )
                }
            </Popover>
        </div>
    );
}

export default MobileNavbar;
