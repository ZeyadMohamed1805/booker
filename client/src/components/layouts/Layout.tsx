"use client";

import { ChildrenType } from "@/utils/types";
import AuthLayout from "./auth/AuthLayout";
import MainLayout from "./main/mainLayout";
import { usePathname } from "next/navigation";

const Layout = ({ children }: ChildrenType) => {
    const pathname = usePathname();

    return (
        <>
            {
                pathname.includes("sign") ?
               <AuthLayout>
                    { children }
                </AuthLayout> :
               pathname !== "/success" ?
               <MainLayout>
                    { children }
               </MainLayout> :
               children
            }
        </>
    )
}

export default Layout;