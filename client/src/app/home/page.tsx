import { Intro, FeatureItem, PropertyItem, GuestItem, Mail } from "@/components";
import client from "@/utils/client";

const Home = async () => {
    const { data: featureItems } = await client.get("/hotels/city?cities=berlin,madrid,london");
    const { data: propertyItems } = await client.get("/hotels/type?types=hotels,apartments,resorts,villas,cabins");
    const { data: guestItems } = await client.get("/hotels?limit=3");

    return (
        <>
            <Intro />
            <div className="flex flex-col gap-20 items-center">
                <div className="w-full max-w-[1400px] mt-24 flex flex-col items-center gap-16 z-10 p-5">
                    <div className="w-full flex flex-wrap justify-between gap-10 max-xl:mt-20 max-[780px]:justify-center">
                        {
                            featureItems.map((feature: any, index: number) => (
                                <FeatureItem key={index} count={featureItems.length} content={feature} />
                            ))
                        }
                    </div>
                </div>
                <div className="w-full max-w-[1400px] flex flex-col gap-10 p-5">
                    <h1 className="text-3xl font-bold">
                        Browse By Property Type
                    </h1>
                    <div className="w-full flex flex-wrap justify-between items-center gap-10 max-[480px]:justify-center">
                        {
                            propertyItems.map((item: any, index: number) => (
                                <PropertyItem key={index} count={propertyItems.length} content={item} />
                            ))
                        }
                    </div>
                </div>
                <div className="w-full max-w-[1400px] flex flex-col gap-10 p-5">
                    <h1 className="text-3xl font-bold">
                        Home Guests Love
                    </h1>
                    <div className="w-full flex flex-wrap justify-between gap-10 max-[780px]:justify-center">
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