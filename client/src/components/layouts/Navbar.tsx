"use client";

import Sidebar from "./Sidebar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = () => {
    const [ open, setOpen ] = useState(false);

    return (
        <nav className="bg-primary flex justify-center p-5">
            <div className="w-full text-customWhite flex items-center justify-between max-w-[1400px]">
                <img src="/images/navbar-logo.png" alt="Booker" className="w-48" />
                <ul className="flex gap-5 text-primary text-xl duration-200 font-semibold max-[500px]:hidden">
                    <li className="cursor-pointer p-2 rounded-md uppercase bg-customWhite hover:bg-opacity-50 duration-200">
                        <a href="/register">
                            Sign Up
                        </a>
                    </li>
                    <li className="cursor-pointer p-2 rounded-md uppercase bg-customWhite hover:bg-opacity-50 duration-200">
                        <a href="/login">
                            Sign In
                        </a>
                    </li>
                </ul>
                <FontAwesomeIcon icon={faBars} onClick={() => setOpen(previous => !previous)} className="max-[500px]:flex hidden w-10 cursor-pointer text-3xl text-customWhite" />
                {
                    open &&
                    <Sidebar />
                }
            </div>
        </nav>
    )
}


export default Navbar;