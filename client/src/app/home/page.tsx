import { Intro, FeatureItem, PropertyItem, GuestItem, Mail } from "@/components";
import client from "@/utils/client";

const Home = async () => {
    const { data: featureItems } = await client.get("/hotels?limit=3");
    const { data: propertyItems } = await client.get("/hotels?limit=4");
    const { data: guestItems } = await client.get("/hotels?limit=3");

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
                            featureItems.map((feature: any, index: number) => (
                                <FeatureItem key={index} count={featureItems.length} content={feature} />
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
                            propertyItems.map((item: any, index: number) => (
                                <PropertyItem key={index} count={propertyItems.length} content={item} />
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
                            guestItems.map((item: any, index: number) => (
                                <GuestItem key={index} content={item} />
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