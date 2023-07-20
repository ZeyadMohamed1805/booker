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

export type FeatureItemProps = {
    count: number,
    content: {
        _id: string,
        name: string,
        photos: Array<string>,
        subheader: number,
        image: string,
        city: string
    }
}

export type GuestItemProps = {
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

export type PropertyItemProps = FeatureItemProps;

// Hooks Types

export type OptionsType = {
    Adults: number,
    Children: number,
    Rooms: number
}