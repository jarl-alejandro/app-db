"use client";

import Link from 'next/link';
import React from 'react';
import OlderActiveLink from './OlderActiveLink';

export default function AsideMenu() {
    return (
        <aside className="relative bg-sidebar h-screen hidden sm:block shadow-xl">
            <div className="p-6">
                <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                    <i className="fas fa-plus mr-3"></i>
                    Mi tienda
                </button>
            </div>
            <nav className="text-white text-base font-semibold pt-3">
                <OlderActiveLink url="/store/game" title="Juegos" icon="fas fa-tachometer-alt mr-3" />
                <OlderActiveLink url="/store/customer" title="Cliente" icon="fas fa-sticky-note mr-3" />
                <OlderActiveLink url="/store/loan" title="Préstamo" icon="fas fa-table mr-3" />
                <OlderActiveLink url="/store/study" title="Estudio" icon="fas fa-align-left mr-3" />
                <OlderActiveLink url="/store/collaborator" title="Colaboradores" icon="fas fa-tablet-alt mr-3" />
                <OlderActiveLink url="/store/category" title="Categoria" icon="fas fa-calendar mr-3" />
            </nav>

            <Link href="/"
                  className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
                <i className="fas fa-arrow-circle-up mr-3"></i>
                Cerrar sesion
            </Link>
        </aside>
    )
}
