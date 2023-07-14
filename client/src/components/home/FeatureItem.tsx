import { FeatureItemProps } from "@/utils/types";

const FeatureItem = ({ content }: FeatureItemProps) => (
    <>
        <div className="relative text-customWhite rounded-md overflow-hidden w-[350px] shadow-lg cursor-pointer">
            <img src={content.image} alt={content.header} className="w-full object-cover" />
            <div>
                <h1 className="absolute bottom-12 left-10 text-2xl font-semibold">
                    {
                        content.header
                    }
                </h1>
                <h2 className="absolute bottom-5 left-10 text-xl">
                    {
                        `${content.subheader} properties`
                    }
                </h2>
            </div>
        </div>
    </>
)


export default FeatureItem;