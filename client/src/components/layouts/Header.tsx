import ListItem from "../layouts/ListItem";
import { headerList } from "@/utils/constants";

const Header = () => (
    <header className="bg-primary text-white flex flex-col items-center gap-10 p-5">
        <div className="w-full max-w-[1400px] relative flex flex-col gap-6">
            <div className="w-full">
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {
                        headerList.map((listItem, index) => (
                            <ListItem key={index} listItem={listItem} />
                        ))
                    }
                </div>
            </div>
        </div>
    </header>
)

export default Header