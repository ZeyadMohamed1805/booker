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
    content: {
        id: string,
        header: string,
        subheader: number,
        image: string
    }
}

export type GuestItemProps = {
    content: {
        id: string
        header: string,
        subheader: string,
        image: string,
        price: number,
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