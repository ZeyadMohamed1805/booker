import { IconDefinition } from "@fortawesome/fontawesome-svg-core"


// Props Types
export type ChildrenType = {
    children: React.ReactNode
}

export type HotelsPageProps = {
    params: Object,
    searchParams: {
        city: string,
        sort: string,
        range: string
    }
}

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

export type HomeComponentsProps = {
    content: HotelsType
}

export type HotelComponentsProps = {
    content: HotelsType
}

// Hooks Types

export type OptionsType = {
    Adults: number,
    Children: number,
    Rooms: number
}

export type useApiType = ( key: string, endpoint: string ) => {
    isLoading: boolean,
    error: unknown,
    data: any
}

export type useUserType = () => {
    user: UserType,
    loading: boolean
}

// API Types
export type ReservationType = {
    _id: string,
    hotelName: string,
    startDate: Date,
    endDate: Date,
    board: string,
    price: number
}

export type UserType = {
    _id: string,
    username: string,
    email: string,
    password: string,
    isAdmin: boolean,
    reservations: Array<ReservationType>,
    createdAt: Date,
    updatedAt: Date,
    __v: number
}

export type HotelsType = {
    _id: string,
    name: string,
    type: string,
    city: string,
    address: string,
    distance: number,
    photos: Array<string>,
    title: string,
    description: string,
    rating: number,
    rooms: Array<string>,
    books: number,
    cheapestPrice: number,
    featured: boolean,
    __v: number,
    createdAt: Date,
    updatedAt: Date
}

export type HotelApiType = {
    data: HotelsType
}

export type HotelsApiType = {
    data: Array<HotelsType>
}

// Constants Type

export type HeaderListItemType = {
    icon: IconDefinition,
    title: string
}

export type FooterLinkType = {
    header: string,
    links: Array<{ name: string, href: string }>
}

export type HeaderListType = Array<HeaderListItemType>

export type FooterLinksType = Array<FooterLinkType>