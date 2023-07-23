const Browse = () => (
    <div className="w-full mt-24 bg-primary text-customWhite flex flex-col items-center gap-6 p-16 text-center">
        <h1 className="text-3xl font-bold">
            Best Hotel Collection!
        </h1>
        <span className="text-lg max-w-[480px]">
            Start now and book your room in one of our Hotels.
            We have the best hotels with the best prices!
        </span>
        <a href="/hotels?city=&sort=alphabetically&range=0,999999999" className="p-3 rounded-md bg-customBlue text-lg hover:opacity-50 font-semibold">
            Browse Hotels
        </a>
    </div>
)


export default Browse;