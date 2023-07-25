"use client";

import client from "@/utils/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const { handleSubmit, register } = useForm();
    const { push } = useRouter();

    const onSubmit = async ({ username, password }: any) => {
        const { data, status } = await client.post("/auth/login", { username: username, password: password });

        if ( status >= 200 && status < 300 ) {
            try {
                localStorage.setItem("booker_user", JSON.stringify(data));
                push("/home");
            } catch (error) {
                throw error;   
            }
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-between gap-16">
            <div className="w-full flex flex-col gap-3">
                <input {...register("username", { required: "Username is required." })} type="text" placeholder="Username" className="w-full p-3 rounded-md border-solid border-gray-400 border-2 text-gray-400" />
                <input {...register("password", { required: "Password is required." })} type="password" placeholder="Password" className="w-full p-3 rounded-md border-solid border-gray-400 border-2 text-gray-400" />
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