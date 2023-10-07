import React from "react";
import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import '../styles/globals.css';

interface Prop {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Loandgame store',
  description: 'Crea tiendas para alquilar tus juegos',
}

const roboto = Roboto_Condensed({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'optional',
});

export default function RootLayout({ children, }: Prop) {
    return (
      <html lang="es" className={roboto.className}>
        <body>
            <main className="w-full flex-grow">{ children }</main>
        </body>
      </html>
    )
  }
