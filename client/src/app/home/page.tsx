import { Features } from "@/components";

const Home = () => (
    <div className="flex flex-col gap-20 items-center">
        <div className="w-full max-w-[1200px] mt-24 flex flex-col items-center gap-16 z-10">
            <div className="w-full flex flex-wrap justify-between gap-10 max-xl:mt-20">
                <Features />
                <Features />
                <Features />
            </div>
        </div>
        <div className="w-full max-w-[1200px]">
            <h1 className="text-3xl font-bold">
                  Browse By Property Type
            </h1>
        </div>
    </div>
)

export default Home;