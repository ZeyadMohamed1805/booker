import { Intro, PopularItem, RecentItem, DealsItem, Mail } from "@/components";
import client from "@/utils/client";

const Home = async () => {
    const { data: popularItems } = await client.get("/hotels/popular");
    const { data: recentItems } = await client.get("/hotels/recent");
    const { data: dealItems } = await client.get("/hotels/deals");

    return (
        <>
            <Intro />
            <div className="flex flex-col gap-20 items-center">
                <div className="w-full max-w-[1400px] mt-24 flex flex-col items-center gap-10 z-10 p-5">
                    <h1 className="w-full text-3xl font-bold max-xl:mt-20">
                        Most Popular
                    </h1>
                    <div className="w-full flex flex-wrap justify-between gap-10 max-[880px]:justify-center">
                        {
                            popularItems.map((feature: any, index: number) => (
                                <PopularItem key={index} content={feature} />
                            ))
                        }
                    </div>
                </div>
                <div className="w-full max-w-[1400px] flex flex-col gap-10 p-5">
                    <h1 className="text-3xl font-bold">
                        Recently Added
                    </h1>
                    <div className="w-full flex flex-wrap justify-between items-center gap-10 max-[680px]:justify-center">
                        {
                            recentItems.map((item: any, index: number) => (
                                <RecentItem key={index} content={item} />
                            ))
                        }
                    </div>
                </div>
                <div className="w-full max-w-[1400px] flex flex-col gap-10 p-5">
                    <h1 className="text-3xl font-bold">
                        Hotest Deals
                    </h1>
                    <div className="w-full flex flex-wrap justify-between gap-10 max-[880px]:justify-center">
                        {
                            dealItems.map((item: any, index: number) => (
                                <DealsItem key={index} content={item} />
                            ))
                        }
                    </div>
                </div>
                <Mail />
            </div>
        </>
    )
}
export default Home;