import { HotelPageProps } from "@/utils/types";
import HotelDetails from "@/components/hotels/HotelDetails";

const Hotel = ( { params: { id } }: HotelPageProps ) => {
    return (
        <div className="flex justify-center">
            <HotelDetails />
        </div>
    )
}
  
export default Hotel;