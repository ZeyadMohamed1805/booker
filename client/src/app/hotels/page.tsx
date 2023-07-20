import { FilterItem, Search } from "@/components";
import client from "@/utils/client";

const Hotels = async ({ params, searchParams }: any) => {
    const { data } = await client.get(`/hotels/search?city=${searchParams.city}&sort=${searchParams.sort}&range=${searchParams.range}`);
    console.log(searchParams);
    
    return (
        <>
            <div className="w-full flex justify-center p-5">
                <div className="w-full max-w-[1400px] flex-col flex gap-3">
                    <Search params={searchParams} />
                    <div className="w-full  max-w-[1400px] flex flex-col gap-6">
                        {
                            !data.length ?
                            <h1 className="text-3xl text-primary font-semibold text-center py-52">
                                No Hotels Found...
                            </h1> :
                            data.map((item: any) => (
                                <FilterItem key={item._id} content={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
  
  export default Hotels;