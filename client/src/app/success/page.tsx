import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Success = () => {
    return (
        <div className="bg-[url('https://as1.ftcdn.net/v2/jpg/02/71/27/14/1000_F_271271493_LtZg2GKAzUc7AcL0guKaiapI7xbqVGih.jpg')] bg-cover bg-no-repeat w-full min-h-screen grid place-items-center p-5">
            <div className="w-full h-screen bg-green-400 bg-opacity-10 absolute" />
            <div className="w-fit p-10 flex flex-col justify-center items-center text-center gap-6 bg-customWhite rounded-xl z-20 shadow-2xl shadow-black">
                <FontAwesomeIcon icon={faCheckCircle} className="max-w-[150px] max-[500px]:max-w-[100px] text-[100px] text-green-400" />
                <h1 className="text-5xl font-bold max-[500px]:text-3xl">
                    Success
                </h1>
                <h2 className="text-3xl font-semibold max-[500px]:text-xl">
                    You have successfully booked the Hotel Room!
                </h2>
                <a href="/home" className="bg-green-400 text-customWhite text-center font-semibold p-3 rounded-md hover:bg-opacity-50 duration-200">
                    Homepage
                </a>
            </div>
        </div>
    )
}

export default Success