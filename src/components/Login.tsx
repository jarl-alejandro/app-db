'use client'

import {useState} from 'react';
import {useRouter} from 'next/navigation';

interface LoginForm {
    email: string;
    password: string;
}

export default function Login() {
    const router = useRouter();
    const [data, setData] = useState<LoginForm>({
        email: "",
        password: ""
    });

    const handleChange = (event: any) => {
        const { target: { name, value } }: { target: { name: string, value: string } } = event;
        setData(data => Object.assign( {}, data, {
            [name]: value
        }))
    }

    const handleLogin = async (event: any) => {
        event.preventDefault();

        try {
            const response =  await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const json = await response.json();
            if (json.login) {
                router.push("/store/game");
                router.refresh();
                return;
            }

            alert("usuario erroneo")
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                ENTRAR A LOAND GAME STORE
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="text" onChange={handleChange} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                    <input type="password" onChange={handleChange} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>

                <button type="submit" className="w-full text-white inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-900 ">
                    Entrar
                </button>

            </form>
        </div>
    )
}
