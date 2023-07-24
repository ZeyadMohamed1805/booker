"use client";

import client from "@/utils/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
    const { handleSubmit, register } = useForm();
    const { push } = useRouter();

    const onSubmit = async ({ username, email, password }: any) => {
        const { data } = await client.post("/auth/register", { username: username,email: email, password: password });
        localStorage.setItem("booker_user", JSON.stringify(data));
        push("/home");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-between gap-16">
            <div className="w-full flex flex-col gap-3">
                <input {...register("username", { required: "Username is required." })} type="text" placeholder="Username" className="w-full p-3 rounded-md border-solid border-gray-400 border-2 text-gray-400" />
                <input {...register("email", { required: "Email is required." })} type="email" placeholder="Email" className="w-full p-3 rounded-md border-solid border-gray-400 border-2 text-gray-400" />
                <input {...register("password", { required: "Password is required." })} type="password" placeholder="Password" className="w-full p-3 rounded-md border-solid border-gray-400 border-2 text-gray-400" />
                <button type="submit" className="w-full bg-primary p-3 text-customWhite font-bold hover:bg-opacity-50 cursor-pointer rounded-md duration-200">
                    Submit
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