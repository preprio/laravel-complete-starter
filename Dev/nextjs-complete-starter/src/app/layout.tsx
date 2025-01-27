import type {Metadata} from "next";
import NavBar from "@/components/NavBar";
import './globals.css'
import {Ubuntu} from "next/font/google";
import Script from 'next/script'
 
const ubuntu = Ubuntu({weight: ['400', '700'], subsets: ['latin']})
 
export const metadata: Metadata = {
    title: "Prepr advanced starter",
    description: "Showing the power of personalization and A/B testing",
};
 
export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <head>
                <Script
                id={'prepr_script'}
                dangerouslySetInnerHTML={{
                    __html: `! function (e, t, p, r, n, a, s) {
    e[r] || ((n = e[r] = function () {
    n.process ? n.process.apply(n, arguments) : n.queue.push(arguments)
    }).queue = [], n.t = +new Date, (a = t.createElement(p)).async = 1, a.src = "https://cdn.tracking.prepr.io/js/prepr_v2.min.js?t=" + 864e5 * Math.ceil(new Date / 864e5), (s = t.getElementsByTagName(p)[0]).parentNode.insertBefore(a, s))
    }(window, document, "script", "prepr"), prepr("init", "ac_85dc269749f49a0be94a4d8f6d6968f78e73dc514780e3d6a7a7a587921b6e9d"), prepr("event", "pageload");`,
                }}></Script>
            </head>
	        <body className={ubuntu.className}>
		        <NavBar/>
		        {children}
	        </body>
        </html>
    );
}