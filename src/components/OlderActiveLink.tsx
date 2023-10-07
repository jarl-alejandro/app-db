"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'

interface Prop {
    title: string;
    url: string;
    icon: string;
}

export default function OlderActiveLink(props: Prop){
    const pathname = usePathname()
    const activeLink = pathname === props.url ? "active-nav-link" : "";

    return (
        <Link href={props.url}
              className={`${activeLink} flex items-center text-white py-4 pl-6 nav-item`}>
            <i className={props.icon}></i>
            { props.title }
        </Link>
    )
}
