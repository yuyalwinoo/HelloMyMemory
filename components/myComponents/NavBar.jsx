"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import ShiftingUnderline from './ShiftingUnderline';

const NavBar = () => {
    const pathname = usePathname();
    return (
        <nav className='p-5 flex justify-between'>
            <Link className={`link text-3xl`} href="/">
                HELLO MY MRMOEY
            </Link>

            <div className='flex justify-center space-x-10'>

                <ShiftingUnderline  checkpathname = {"/games"}
                                    href="/games"
                                    name="Games"/>
                <ShiftingUnderline  checkpathname = {"/profile"}
                                    href="/profile"
                                    name="Profile"/>
            </div>
        </nav>
       
    )
}

export default NavBar