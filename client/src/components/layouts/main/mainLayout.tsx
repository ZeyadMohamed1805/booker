import { ChildrenType } from "@/utils/types";
import { Navbar, Footer, Header } from '@/components';

const MainLayout = ({ children }: ChildrenType) => {
    return (
        <>
            <Navbar />
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout;