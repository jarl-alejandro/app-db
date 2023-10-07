import Link from 'next/link';
import React from 'react';
import {usePathname} from 'next/navigation';

interface Props {
 title: string;
 url: string;
 icon: React.ReactNode
}

export default function LinkActive({ icon, title, url }: Props) {
    const pathname = usePathname()
    const activeLink = pathname === url ? "bg-gray-900 shadow-lg" : "";
    const activeTextLink = pathname === url ? "text-white" : "";

    return (
        <Link href={url}>
            <div className={`${activeLink} flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto`}>
                { icon }
                <h3 className={`text-base text-gray-800 group-hover:text-white font-semibold ${activeTextLink}`}>
                        {title}
                </h3>
            </div>
        </Link>
    )
}
