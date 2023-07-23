import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export type ChildrenType = {
    children: React.ReactNode
}

// Props Types

export type HotelPageProps = {
    params: {
        id: string
    }
}

export type ListItemProps = {
    listItem: { icon: IconDefinition, title: string }
}

export type OptionProps = {
    option: [ string, number ],
    setOption: (name: string, opertion: string) => void
}

export type PopularItemProps = {
    content: {
        _id: string,
        name: string,
        photos: Array<string>,
        subheader: number,
        image: string,
        city: string
    }
}

export type DealsItemProps = {
    content: {
        _id: string
        name: string,
        city: string,
        photos: Array<string>,
        cheapestPrice: number,
        rating: number,
        grade: string
    }
}

export type RecentItemProps = PopularItemProps;

// Hooks Types

export type OptionsType = {
    Adults: number,
    Children: number,
    Rooms: number
}