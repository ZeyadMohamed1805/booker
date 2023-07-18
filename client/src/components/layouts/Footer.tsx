import { footerLinks } from "@/utils/constants";

const Footer = () => {
    return (
        <footer className="w-full p-5 flex justify-center">
            <div className="w-full max-w-[1400px] flex flex-col items-center">
                <div className="w-full flex max-[825px]:flex-col max-[825px]:items-center justify-between gap-10 mb-10">
                    <img src="/images/main-logo.png" alt="Logo" className="w-[300px] h-fit" />
                    <div className="w-full flex flex-wrap justify-end max-[825px]:justify-between items-center gap-10">
                        {
                            Array.from(Array(4).keys()).map((list, index) => (
                                <ul key={index} className="flex flex-col justify-center gap-3">
                                    {
                                        footerLinks.map((link, index) => (
                                            <li key={index} className="text-customBlue cursor-pointer">
                                                {
                                                    link
                                                }
                                            </li>
                                        ))
                                    }
                                </ul>
                            ))
                        }
                    </div>
                </div>
                <div className="grid place-items-center">
                    <p className="text-center text-customBlue">
                        Copyright &copy; 2023 Zeyad Mohamed
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;