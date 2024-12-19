"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const ShiftingUnderline = ({ checkpathname,name, ...props }) => {
     const pathname = usePathname();
    const [hovered, setHovered] = useState(false);

    return (
        <div className="relative">
        <Link
            {...props}
            className={`link    ${pathname === checkpathname ? 'active' : ''} px-2 group text-lg font-semibold text-gray-800`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {name}
        </Link>
        <span
            className={`absolute left-0 bottom-0 w-full h-1 bg-primary transition-all ease-in-out duration-300
            ${hovered ? 'translate-x-0 bg-primary' : 'translate-x-full bg-transparent'} 
            group-hover:translate-x-0 group-active:translate-x-0`}
        ></span>
        </div>
    );
};

export default ShiftingUnderline;
