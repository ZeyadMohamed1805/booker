"use client";

import Sidebar from "./Sidebar";
import Image from "next/image";
import Link from "next/link";
import { faBars, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useUser from "@/utils/useUser";

const Navbar = () => {
    const [ open, setOpen ] = useState(false);
    const { user, loading } = useUser();

    return (
        <nav className="bg-primary flex justify-center p-5">
            <div className="w-full text-customWhite flex items-center justify-between max-w-[1400px] relative">
                <Image width={200} height={71} src="/images/navbar-logo.png" alt="Booker" className="w-[200px] max-w-[200px]" />
                {
                    loading ?
                    <h1 className="text-xl font-semibold max-[500px]:hidden">
                        Loading...
                    </h1>:
                    user.token ?
                    <div onClick={() => setOpen(previous => !previous)} className="flex gap-3 cursor-pointer max-[500px]:hidden">
                        <h1 className="text-xl font-semibold">
                            {
                                user.user.username
                            }
                        </h1>
                        <FontAwesomeIcon icon={faSortDown} className="w-6 text-xl" />
                    </div> :
                    <ul className="flex gap-5 text-primary text-xl duration-200 font-semibold max-[500px]:hidden">
                        <li className="cursor-pointer p-2 rounded-md uppercase bg-customWhite hover:bg-opacity-50 duration-200">
                            <Link prefetch href="/signup">
                                Sign Up
                            </Link>
                        </li>
                        <li className="cursor-pointer p-2 rounded-md uppercase bg-customWhite hover:bg-opacity-50 duration-200">
                            <Link prefetch href="/signin">
                                Sign In
                            </Link>
                        </li>
                    </ul>
                }
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