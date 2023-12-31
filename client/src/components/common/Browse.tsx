import Link from "next/link";

const Browse = () => (
    <div className="w-full mt-24 bg-primary text-customWhite flex flex-col items-center gap-6 p-16 text-center">
        <h1 className="text-3xl font-bold">
            Best Hotel Collection!
        </h1>
        <span className="text-lg max-w-[480px]">
            Start now and book your room in one of our Hotels.
            We have the best hotels with the best prices!
        </span>
        <Link prefetch href="/hotels?city=&sort=alphabetically&range=0,999999999" className="p-3 rounded-md bg-customBlue text-lg hover:opacity-50 font-semibold duration-200">
            Browse Hotels
        </Link>
    </div>
)


export default Browse;