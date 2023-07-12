import '@/styles/globals.css';
import type { Metadata } from 'next';
import { ChildrenType } from '@/utils/types';

export const metadata: Metadata = {
    title: 'Booker | Hotel Booking App',
    description: 'Hotel Booking Web Application',
}

const RootLayout = ({ children }: ChildrenType) => (
    <html lang="en">
        <body>
            {children}
        </body>
    </html>
)

export default RootLayout;