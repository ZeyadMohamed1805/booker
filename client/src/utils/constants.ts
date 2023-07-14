import { faBed, faCar, faHeart, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";

export const headerList = [
    { icon: faBed, title: "Stays" },
    { icon: faPlane, title: "Flights" },
    { icon: faCar, title: "Car Rentals" },
    { icon: faHeart, title: "Attractions" },
    { icon: faTaxi, title: "Airport Taxis" }
];

export const features = [
    { header: "Dublin", subheader: 123, image: "/images/features.jpeg" },
    { header: "Austin", subheader: 532, image: "/images/features.jpeg" },
    { header: "Reno", subheader: 942, image: "/images/features.jpeg" }
]

export const propertyList = [
    ...features,
    { header: "Texas", subheader: 415, image: "/images/features.jpeg" },
    { header: "Ohio", subheader: 735, image: "/images/features.jpeg" }
]