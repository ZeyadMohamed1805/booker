import { FeatureItem, PropertyItem, GuestItem } from "@/components";
import { featureList, propertyList, guestList } from "@/utils/constants";

const Home = () => (
    <div className="flex flex-col gap-20 items-center p-5">
        <div className="w-full max-w-[1200px] mt-24 flex flex-col items-center gap-16 z-10">
            <div className="w-full flex flex-wrap justify-between gap-10 max-xl:mt-20 max-[780px]:justify-center">
                {
                    featureList.map((feature, index) => (
                        <FeatureItem key={index} content={feature} />
                    ))
                }
            </div>
        </div>
        <div className="w-full max-w-[1200px] flex flex-col gap-10">
            <h1 className="text-3xl font-bold">
                  Browse By Property Type
            </h1>
            <div className="w-full flex flex-wrap justify-between items-center gap-10 max-[480px]:justify-center">
                {
                    propertyList.map((item, index) => (
                        <PropertyItem key={index} content={item} />
                    ))
                }
            </div>
        </div>
        <div className="w-full max-w-[1200px] flex flex-col gap-10">
            <h1 className="text-3xl font-bold">
                Home Guests Love
            </h1>
            <div className="w-full flex flex-wrap justify-between gap-10 max-[780px]:justify-center">
                {
                    guestList.map((item, index) => (
                        <GuestItem key={index} content={item} />
                    ))
                }
            </div>
        </div>
    </div>
)

export default Home;