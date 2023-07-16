import { Filters, FilterItem } from "@/components";

const Hotels = () => (
    <>
        <div className="w-full flex justify-center mt-10 p-5">
            <div className="w-full max-w-[1400px] flex justify-end gap-3">
                  <Filters />
                  <div className="w-full  max-w-[1400px] flex flex-col gap-6">
                      <FilterItem />
                      <FilterItem />
                      <FilterItem />
                      <FilterItem />
                      <FilterItem />
                      <FilterItem />
                      <FilterItem />
                  </div>
            </div>
        </div>
    </>
)
  
  export default Hotels;