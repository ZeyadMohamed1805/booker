import { Intro, FeatureItem, PropertyItem, GuestItem, Mail } from "@/components";
import client from "@/utils/client";
import { featureList, propertyList } from "@/utils/constants";

const Home = async () => {
    const { data: guestItems } = await client.get("/hotels?limit=3");

    return (
        <>
            <Intro />
            <div className="flex flex-col gap-20 items-center">
                <div className="w-full max-w-[1400px] mt-24 flex flex-col items-center gap-16 z-10 p-5">
                    <div className="w-full flex flex-wrap justify-between gap-10 max-xl:mt-20 max-[780px]:justify-center">
                        {
                            featureList.map((feature, index) => (
                                <FeatureItem key={index} index={index} content={feature} />
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
                            propertyList.map((item, index) => (
                                <PropertyItem key={index} index={index} content={item} />
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