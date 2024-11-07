import type {Metadata} from "next";
import './globals.css'
import {Ubuntu} from "next/font/google";

const ubuntu = Ubuntu({weight: ['400', '700'], subsets: ['latin']})

export const metadata: Metadata = {
    title: "Prepr advanced starter",
    description: "Showing the power of personalization and A/B testing",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
	        <body className={ubuntu.className}>
		        {children}
	        </body>
        </html>
    );
}
