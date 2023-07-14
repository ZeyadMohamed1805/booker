const Mail = () => {
    return (
        <div className="w-full mt-24 bg-primary text-customWhite flex flex-col items-center gap-6 p-16 text-center">
            <h1 className="text-3xl font-bold">
                Save Time, Save Money!
            </h1>
            <span className="text-lg">
                Sign Up and we will send the best deals for you!
            </span>
            <div className="max-w-[500px] flex items-center">
                <input type="text" placeholder="Your Email" className="w-full p-5 rounded-l-md text-gray-500 text-lg outline-none" />
                <button className="p-5 rounded-r-md bg-customBlue text-lg hover:opacity-50">
                    Subscribe
                </button>
            </div>
        </div>
    )
}

export default Mail;