import { faBed, faCar, faHeart, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { v4 } from "uuid";

export const headerList = [
    { icon: faBed, title: "Stays" },
    { icon: faPlane, title: "Flights" },
    { icon: faCar, title: "Car Rentals" },
    { icon: faHeart, title: "Attractions" },
    { icon: faTaxi, title: "Airport Taxis" }
];

export const featureList = [
    { id: v4(), header: "Dublin", subheader: 123, image: "/images/features.jpeg" },
    { id: v4(), header: "Austin", subheader: 532, image: "/images/features.jpeg" },
    { id: v4(), header: "Reno", subheader: 942, image: "/images/features.jpeg" }
]

export const propertyList = [
    ...featureList,
    { id: v4(), header: "Texas", subheader: 415, image: "/images/features.jpeg" },
    { id: v4(), header: "Ohio", subheader: 735, image: "/images/features.jpeg" }
]

export const guestList = [
    { id: v4(), header: "Aparthotel Stare Miasto", subheader: "Madrid", image: "/images/features.jpeg", price: 128, rating: 8.9, grade: "Excellent" },
    { id: v4(), header: "Prisco El Tisa", subheader: "El Salvador", image: "/images/features.jpeg", price: 547, rating: 8.4, grade: "Excellent" },
    { id: v4(), header: "Bueno", subheader: "Rome", image: "/images/features.jpeg", price: 354, rating: 9.2, grade: "Excellent" }
]

export const filterItems = [
    { id: v4(), image: "/images/features.jpeg", header: "Tower Street Apartments", distance: "500m from center", taxi: "Free Aiport Taxi", detailsHeader: "Studio Apartment With Air Conditioner", detailsSubheader: "Entire Studio + 1 Bathroom + 21m + 1 Full Bed", cancelHeader: "Free Cancellation", cancelSubheader: "You can cancel later, so lock in this great price today!", grade: "Excellent", ratings: 8.9, price: 123 },
    { id: v4(), image: "/images/features.jpeg", header: "Tower Street Apartments", distance: "500m from center", taxi: "Free Aiport Taxi", detailsHeader: "Studio Apartment With Air Conditioner", detailsSubheader: "Entire Studio + 1 Bathroom + 21m + 1 Full Bed", cancelHeader: "Free Cancellation", cancelSubheader: "You can cancel later, so lock in this great price today!", grade: "Excellent", ratings: 8.9, price: 123 },
    { id: v4(), image: "/images/features.jpeg", header: "Tower Street Apartments", distance: "500m from center", taxi: "Free Aiport Taxi", detailsHeader: "Studio Apartment With Air Conditioner", detailsSubheader: "Entire Studio + 1 Bathroom + 21m + 1 Full Bed", cancelHeader: "Free Cancellation", cancelSubheader: "You can cancel later, so lock in this great price today!", grade: "Excellent", ratings: 8.9, price: 123 },
    { id: v4(), image: "/images/features.jpeg", header: "Tower Street Apartments", distance: "500m from center", taxi: "Free Aiport Taxi", detailsHeader: "Studio Apartment With Air Conditioner", detailsSubheader: "Entire Studio + 1 Bathroom + 21m + 1 Full Bed", cancelHeader: "Free Cancellation", cancelSubheader: "You can cancel later, so lock in this great price today!", grade: "Excellent", ratings: 8.9, price: 123 },
    { id: v4(), image: "/images/features.jpeg", header: "Tower Street Apartments", distance: "500m from center", taxi: "Free Aiport Taxi", detailsHeader: "Studio Apartment With Air Conditioner", detailsSubheader: "Entire Studio + 1 Bathroom + 21m + 1 Full Bed", cancelHeader: "Free Cancellation", cancelSubheader: "You can cancel later, so lock in this great price today!", grade: "Excellent", ratings: 8.9, price: 123 },
    { id: v4(), image: "/images/features.jpeg", header: "Tower Street Apartments", distance: "500m from center", taxi: "Free Aiport Taxi", detailsHeader: "Studio Apartment With Air Conditioner", detailsSubheader: "Entire Studio + 1 Bathroom + 21m + 1 Full Bed", cancelHeader: "Free Cancellation", cancelSubheader: "You can cancel later, so lock in this great price today!", grade: "Excellent", ratings: 8.9, price: 123 },
    { id: v4(), image: "/images/features.jpeg", header: "Tower Street Apartments", distance: "500m from center", taxi: "Free Aiport Taxi", detailsHeader: "Studio Apartment With Air Conditioner", detailsSubheader: "Entire Studio + 1 Bathroom + 21m + 1 Full Bed", cancelHeader: "Free Cancellation", cancelSubheader: "You can cancel later, so lock in this great price today!", grade: "Excellent", ratings: 8.9, price: 123 },
    { id: v4(), image: "/images/features.jpeg", header: "Tower Street Apartments", distance: "500m from center", taxi: "Free Aiport Taxi", detailsHeader: "Studio Apartment With Air Conditioner", detailsSubheader: "Entire Studio + 1 Bathroom + 21m + 1 Full Bed", cancelHeader: "Free Cancellation", cancelSubheader: "You can cancel later, so lock in this great price today!", grade: "Excellent", ratings: 8.9, price: 123 },
    { id: v4(), image: "/images/features.jpeg", header: "Tower Street Apartments", distance: "500m from center", taxi: "Free Aiport Taxi", detailsHeader: "Studio Apartment With Air Conditioner", detailsSubheader: "Entire Studio + 1 Bathroom + 21m + 1 Full Bed", cancelHeader: "Free Cancellation", cancelSubheader: "You can cancel later, so lock in this great price today!", grade: "Excellent", ratings: 8.9, price: 123 },
    { id: v4(), image: "/images/features.jpeg", header: "Tower Street Apartments", distance: "500m from center", taxi: "Free Aiport Taxi", detailsHeader: "Studio Apartment With Air Conditioner", detailsSubheader: "Entire Studio + 1 Bathroom + 21m + 1 Full Bed", cancelHeader: "Free Cancellation", cancelSubheader: "You can cancel later, so lock in this great price today!", grade: "Excellent", ratings: 8.9, price: 123 }
]

export const footerLinks = [
    {
        header: "Routes",
        links: [{ name: "Sign In", href: "/signin" }, { name: "Sign Up", href: "/signup" }, { name: "Hotels", href: "/hotels?city=&sort=alphabetically&range=0,999999999" }],
    },
    {
        header: "Cities",
        links: [{ name: "Madrid", href: "/hotels?city=Madrid&sort=alphabetically&range=0,999999999" }, { name: "Arizona", href: "/hotels?city=Arizona&sort=alphabetically&range=0,999999999" }, { name: "Rome", href: "/hotels?city=Rome&sort=alphabetically&range=0,999999999" }],
    },
    {
        header: "Priorities",
        links: [{ name: "Highest Rating", href: "/hotels?city=&sort=highest_rating&range=0,999999999" }, { name: "Lowest Price", href: "/hotels?city=&sort=lowest_price&range=0,999999999" }, { name: "Newest", href: "/hotels?city=&sort=newest&range=0,999999999" }],
    },
    {
        header: "Budget",
        links: [{ name: "$0 - $500", href: "/hotels?city=&sort=alphabetically&range=0,500" }, { name: "$500 - $1000", href: "/hotels?city=&sort=alphabetically&range=500,1000" }, { name: "$1000 - $2000", href: "/hotels?city=&sort=alphabetically&range=1000,2000" }],
    },
]