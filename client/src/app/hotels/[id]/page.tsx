export const revalidate = 1;

import { HotelApiType, HotelPageProps } from "@/utils/types";
import HotelDetails from "@/components/hotels/HotelDetails";
import client from "@/utils/client";

const Hotel = async ( { params: { id } }: HotelPageProps ) => {
    const { data }: HotelApiType = await client.get(`/hotels/${id}`);

    return (
        <div className="flex justify-center">
            <HotelDetails content={data} />
        </div>
    )
}
  
export default Hotel;