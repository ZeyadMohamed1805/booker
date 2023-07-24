import { footerLinks } from "@/utils/constants";

const Footer = () => {
    return (
        <footer className="w-full p-5 flex justify-center">
            <div className="w-full max-w-[1400px] flex flex-col items-center">
                <div className="w-full flex max-[825px]:flex-col max-[825px]:items-center justify-between gap-10 mb-10">
                    <img src="/images/main-logo.png" alt="Logo" className="w-[300px] h-fit" />
                    <div className="w-full flex flex-wrap justify-end max-[825px]:justify-between items-center gap-10">
                        {
                            footerLinks.map((section, index) => (
                                <div key={index} className="flex flex-col gap-6">
                                    <h1 className="text-xl font-semibold">
                                        {
                                            section.header
                                        }
                                    </h1>
                                    <ul className="flex flex-col gap-3">
                                        {
                                            section.links.map((link, index) => (
                                                <li key={index} className="text-primary hover:text-opacity-50 duration-200 cursor-pointer">
                                                    <a href={link.href}>
                                                        {
                                                            link.name
                                                        }
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="grid place-items-center">
                    <p className="text-center text-primary font-semibold">
                        Copyright &copy; 2023 Zeyad Mohamed
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;