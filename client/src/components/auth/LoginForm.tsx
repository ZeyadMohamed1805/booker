"use client";

import useAuth from "@/utils/useAuth";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { isLoading, mutate, data, isError, error } = useAuth("signin", "/auth/login");
    const [ isSubmitted, setIsSubmitted ] = useState(false);
    const { push } = useRouter();

    const onSubmit = ({ username, password }: any) => {
        mutate({ username: username, password: password });
        setIsSubmitted(true);
    }

    useEffect(() => {
        if ( !isLoading && isSubmitted && typeof data !== undefined ) {
            if ( isError ) { setIsSubmitted(false); alert(error); }
            else {
                data &&
                localStorage.setItem("booker_user", JSON.stringify(data));
                push("/home");
            }
        }
    }, [ isSubmitted, isLoading, data ]);

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
                <a href="/signup" className="w-full bg-primary p-3 text-center text-customWhite font-bold hover:bg-opacity-50 cursor-pointer rounded-md duration-200">
                    Sign Up
                </a>
            </div>
        </form>
    )
}

export default LoginForm;