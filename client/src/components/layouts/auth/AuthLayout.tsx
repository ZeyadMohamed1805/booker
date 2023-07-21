import { ChildrenType } from "@/utils/types";

const AuthLayout = ({ children }: ChildrenType) => {
    return (
        <div className="w-full h-screen flex justify-center items-center relative overflow-hidden">
            <div className="min-w-[1550px] w-full shadow-2xl bg-black bg-opacity-90 overflow-hidden relative">
                <div className="h-full w-full absolute bg-black bg-opacity-40" />
                <video loop autoPlay className="min-w-[1550px] w-full">
                    <source src="https://v.ftcdn.net/03/59/85/85/700_F_359858552_pVdUzBErdg2JYKSNOFhgF4BwBFFeEA0t_ST.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="min-h-[35rem] w-[350px] max-[500px]:w-4/5 rounded-md flex flex-col justify-between items-center gap-6 p-3 overflow-hidden z-20 bg-customWhite absolute">
                <img src="/images/main-logo.png" alt="Booker" className="w-[300px] rounded-md -mt-12" />
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;