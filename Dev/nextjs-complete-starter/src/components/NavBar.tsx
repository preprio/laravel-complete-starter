'use client'
 
import Logo from '@/components/Logo'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from "@/components/Button";
 
export default function NavBar() {
    const router = useRouter()
 
    const navItems = [
        {
            text: 'Find a car',
            href: '/catalog',
        },
        {
            text: 'About Acme',
            href: '#',
        },
        {
            text: 'Blog',
            href: '#',
        },
        {
            text: 'Contacts',
            href: '#',
        },
        {
            text: <Button buttonType='secondary'>CALCULATOR</Button>,
            href: '#',
        },
    ]
 
    return (
        <nav className='bg-blue-100 px-8 py-2.5 md:px-10 lg:px-16 xl:px-20'>
            <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 sm:justify-between'>
                <a href='/'>
                    <span className='flex md:hidden'>
                        <Logo text={false} />
                    </span>
                    <span className='hidden md:flex'>
                        <Logo />
                    </span>
                </a>
                <div>
                    <ul className='flex flex-wrap items-center justify-center gap-6 lg:gap-12'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className='text-base text-neutral-900 hover:text-blue-700'>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}