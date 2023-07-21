import { ChildrenType } from "@/utils/types";

const AuthLayout = ({ children }: ChildrenType) => {
    return (
        <div className="w-full min-h-screen flex">
            <div className="w-full shadow-2xl max-lg:hidden bg-[url('https://as2.ftcdn.net/v2/jpg/04/03/43/37/1000_F_403433712_LaJr5p5r4hLGnXw3FxGOltmAdeAt1LkC.jpg')] bg-no-repeat bg-cover">
                <div className="w-full h-screen bg-black bg-opacity-40" />
            </div>
            <div className="w-[400px] max-lg:w-full h-screen grid place-items-center bg-customWhite shadow-black shadow-2xl p-5">
                <div className="min-h-[35rem] max-w-[500px] rounded-md flex flex-col justify-between items-center gap-6 p-3 overflow-hidden">
                    <img src="/images/main-logo.png" alt="Booker" className="w-[300px] rounded-md -mt-12" />
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout;