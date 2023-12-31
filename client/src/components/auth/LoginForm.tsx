"use client";

import Link from "next/link";
import useAuth from "@/utils/useAuth";
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { mutate, isLoading } = useAuth("signin", "/auth/login");

    const onSubmit = ({ username, password }: any) => {
        mutate({ username: username, password: password });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-between gap-16">
            <div className="w-full flex flex-col gap-3">
                <input {...register("username", { required: "Username is required.", minLength: { value: 8, message: "Username is less than 8 digits" } })} type="text" placeholder="Username" className="w-full p-3 rounded-md border-solid border-gray-400 border-2 text-gray-400" />
                <span className="text-red-500">
                    { errors?.username?.message?.toString() }
                </span>
                <input {...register("password", { required: "Password is required.", minLength: { value: 8, message: "Password is less than 8 digits" } })} type="password" placeholder="Password" className="w-full p-3 rounded-md border-solid border-gray-400 border-2 text-gray-400" />
                <span className="text-red-500">
                    { errors?.password?.message?.toString() }
                </span>
                <button disabled={isLoading ? true : false} type="submit" className={`w-full bg-primary p-3 text-customWhite hover:bg-opacity-50 font-bold ${isLoading && "bg-opacity-50"} ${isLoading ? "cursor-not-allowed" : "cursor-pointer"} rounded-md duration-200`}>
                    {
                        isLoading ?
                        "Loading..." :
                        "Submit"
                    }
                </button>
            </div>
            <div className="w-full flex flex-col gap-3">
                <p className="w-full text-gray-400 text-center">
                    New To Our Website?
                </p>
                <Link prefetch href="/signup" className="w-full bg-primary p-3 text-center text-customWhite font-bold hover:bg-opacity-50 cursor-pointer rounded-md duration-200">
                    Sign Up
                </Link>
            </div>
        </form>
    )
}

export default LoginForm;