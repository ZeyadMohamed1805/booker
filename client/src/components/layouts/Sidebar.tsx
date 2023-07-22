"use client";

import useUser from "@/utils/useUser";

const Sidebar = () => {
    const { user, loading } = useUser();

    return (
        <div className="z-50 w-full flex p-5 justify-center left-0 rounded-md absolute top-24">
            <ul className="z-50 max-w-[1400px] gap-5 bg-customBlue p-5 rounded-md w-full text-center text-primary text-xl duration-200 font-semibold hidden max-[500px]:flex flex-col">
                {
                    loading ?
                    <h1 className="text-xl font-semibold text-customWhite">
                        Loading...
                    </h1> :
                    user.username ?
                    <h1 className="text-xl font-semibold text-customWhite">
                        {
                            user.username
                        }
                    </h1> :
                    <>
                        <li className="w-full z-50 cursor-pointer p-2 rounded-md uppercase bg-customWhite hover:bg-opacity-50 duration-200">
                            <a href="/signup">
                                Sign Up
                            </a>
                        </li>
                        <li className="w-full z-50 cursor-pointer p-2 rounded-md uppercase bg-customWhite hover:bg-opacity-50 duration-200">
                            <a href="/signin">
                                Sign In
                            </a>
                        </li>
                    </>
                }
            </ul>
        </div>
    )
}

export default Sidebar