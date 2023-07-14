import '@/styles/globals.css';
import type { Metadata } from 'next';
import { ChildrenType } from '@/utils/types';
import { Navbar, Header, Footer } from '@/components';

export const metadata: Metadata = {
    title: 'Booker | Hotel Booking App',
    description: 'Hotel Booking Web Application',
}

const RootLayout = ({ children }: ChildrenType) => (
    <html lang="en">
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </head>
        <body className="font-primary">
            <Navbar />
            <Header />
            {children}
            <Footer />
        </body>
    </html>
)

export default RootLayout;