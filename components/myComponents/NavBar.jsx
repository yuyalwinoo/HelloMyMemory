"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavBar = () => {
    const pathname = usePathname();
    return (
        <nav className='bg-primary p-5 flex justify-between'>
            <Link className={`link ${pathname === '/' ? 'active' : ''} text-2xl`} href="/">
                HELLO MY MRMOEY
            </Link>

            <div className='flex justify-center space-x-10'>
                <Link
                    className={`link ${pathname === '/games' ? 'active' : ''}`}
                    href="/games"
                >
                    Games
                </Link>
                <Link
                    className={`link ${pathname === '/profile' ? 'active' : ''}`}
                    href="/about"
                >
                    Profile
                </Link>
            </div>
        </nav>
    )
}

export default NavBar