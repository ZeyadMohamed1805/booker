import { PropertyItemProps } from "@/utils/types"

const PropertyItem = ({ content }: PropertyItemProps) => {
  return (
    <div className="rounded-md overflow-hidden cursor-pointer shadow-lg">
        <img src={content.image} alt={content.header} className="w-[200px] object-cover" />
        <div className="p-3">
            <h1 className="text-2xl font-semibold">
                {
                    content.header
                }
            </h1>
            <h2 className="text-xl">
                {
                    `${content.subheader} hotels`
                }
            </h2>
        </div>
    </div>
  )
}

export default PropertyItem