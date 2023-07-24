import { faBed, faCar, faHeart, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FooterLinksType, HeaderListType } from "./types";

export const headerList: HeaderListType = [
    { icon: faBed, title: "Stays" },
    { icon: faPlane, title: "Flights" },
    { icon: faCar, title: "Car Rentals" },
    { icon: faHeart, title: "Attractions" },
    { icon: faTaxi, title: "Airport Taxis" }
];

export const footerLinks: FooterLinksType = [
    {
        header: "Priorities",
        links: [{ name: "Highest Rating", href: "/hotels?city=&sort=highest_rating&range=0,999999999" }, { name: "Lowest Price", href: "/hotels?city=&sort=lowest_price&range=0,999999999" }, { name: "Newest", href: "/hotels?city=&sort=newest&range=0,999999999" }],
    },
    {
        header: "Cities",
        links: [{ name: "Madrid", href: "/hotels?city=Madrid&sort=alphabetically&range=0,999999999" }, { name: "Arizona", href: "/hotels?city=Arizona&sort=alphabetically&range=0,999999999" }, { name: "Rome", href: "/hotels?city=Rome&sort=alphabetically&range=0,999999999" }],
    },
    {
        header: "Budget",
        links: [{ name: "$0 - $500", href: "/hotels?city=&sort=alphabetically&range=0,500" }, { name: "$500 - $1000", href: "/hotels?city=&sort=alphabetically&range=500,1000" }, { name: "$1000 - $2000", href: "/hotels?city=&sort=alphabetically&range=1000,2000" }],
    },
]