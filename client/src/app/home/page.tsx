export const revalidate = 1;

import { Intro, PopularItem, RecentItem, DealsItem, Browse } from "@/components";
import client from "@/utils/client";
import { HotelsApiType } from "@/utils/types";

const Home = async () => {
    const { data: popularItems }: HotelsApiType = await client.get("/hotels/popular");
    const { data: recentItems }: HotelsApiType = await client.get("/hotels/recent");
    const { data: dealItems }: HotelsApiType = await client.get("/hotels/deals");

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
                            popularItems.map(item => (
                                <PopularItem key={item._id} content={item} />
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
                            recentItems.map(item => (
                                <RecentItem key={item._id} content={item} />
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
                            dealItems.map(item => (
                                <DealsItem key={item._id} content={item} />
                            ))
                        }
                    </div>
                </div>
                <Browse />
            </div>
        </>
    )
}
export default Home;