"use client";

import { useRouter } from "next/navigation";

const LoginForm = () => {
    const { push } = useRouter();
    
    return (
        <form className="w-full flex flex-col justify-between gap-16">
            <div className="w-full flex flex-col gap-3">
                <input type="text" placeholder="Username" className="w-full p-3 rounded-md border-solid border-gray-400 border-2 text-gray-400" />
                <input type="password" placeholder="Password" className="w-full p-3 rounded-md border-solid border-gray-400 border-2 text-gray-400" />
                <button type="submit" className="w-full bg-primary p-3 text-customWhite font-bold hover:bg-opacity-50 cursor-pointer rounded-md duration-200">
                    Submit
                </button>
            </div>
            <div className="w-full flex flex-col gap-3">
                <p className="w-full text-gray-400 text-center">
                    New To Our Website?
                </p>
                <a href="/signup" className="w-full bg-primary p-3 text-center text-customWhite font-bold hover:bg-opacity-50 cursor-pointer rounded-md duration-200">
                    Sign Up
                </a>
            </div>
        </form>
    )
}

export default LoginForm;