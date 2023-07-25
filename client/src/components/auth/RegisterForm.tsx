"use client";

import useAuth from "@/utils/useAuth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const RegisterForm = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { isLoading, mutate, error } = useAuth("signup", "/auth/register");
    const [ isSubmitted, setIsSubmitted ] = useState(false);
    const { push } = useRouter();

    const onSubmit = async ({ username, email, password }: any) => {
        mutate({ username: username, email: email, password: password });
        setIsSubmitted(true);
    }

    useEffect(() => {
        if ( !isLoading && isSubmitted ) {
            if ( error ) { setIsSubmitted(false); throw error }
            else push("/signin");
        }
    }, [ isSubmitted, isLoading ]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-between gap-16">
            <div className="w-full flex flex-col gap-3">
                <input {...register("username", { required: "Username is required.", minLength: { value: 8, message: "Username is less than 8 digits" } })} type="text" placeholder="Username" className="w-full p-3 rounded-md border-solid border-gray-400 border-2 text-gray-400" />
                <span className="text-red-500">
                    { errors?.username?.message?.toString() }
                </span>
                <input {...register("email", { required: "Email is required." })} type="email" placeholder="Email" className="w-full p-3 rounded-md border-solid border-gray-400 border-2 text-gray-400" />
                <span className="text-red-500">
                    { errors?.email?.message?.toString() }
                </span>
                <input {...register("password", { required: "Password is required.", minLength: { value: 8, message: "Password is less than 8 digits" } })} type="password" placeholder="Password" className="w-full p-3 rounded-md border-solid border-gray-400 border-2 text-gray-400" />
                <span className="text-red-500">
                    { errors?.password?.message?.toString() }
                </span>
                <button disabled={isLoading ? true : false} type="submit" className={`w-full bg-primary p-3 text-customWhite font-bold hover:bg-opacity-50 ${isLoading ? " cursor-not-allowed" : "cursor-pointer"} ${isLoading && "bg-opacity-50"} rounded-md duration-200`}>
                    {
                        isLoading ?
                        "Loading..." :
                        "Submit"
                    }
                </button>
            </div>
            <div className="w-full flex flex-col gap-3">
                <p className="w-full text-gray-400 text-center">
                    Already have an account?
                </p>
                <a href="/signin" className="w-full bg-primary p-3 text-center text-customWhite font-bold hover:bg-opacity-50 cursor-pointer rounded-md duration-200">
                    Sign In
                </a>
            </div>
        </form>
    )
}
  
export default RegisterForm;