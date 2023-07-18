import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListItemProps } from "@/utils/types";

const ListItem = ({ listItem }: ListItemProps) => {
    return (
        <div className={`flex items-center gap-3 border-solid border-2 py-2 px-4 rounded-full border-customWhite`}>
            <FontAwesomeIcon icon={listItem.icon} className="w-6" />
            <span>
                {
                    listItem.title
                }
            </span>
        </div>
    )
}

export default ListItem;