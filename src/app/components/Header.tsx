'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { SunIcon, MoonIcon, InformationCircleIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
    const pathname = usePathname(); // Ruta actual
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isThemeLoaded, setIsThemeLoaded] = useState(false); // Estado para evitar renderizado inicial
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú móvil
    const menuRef = useRef<HTMLDivElement>(null); // Referencia al menú desplegable

    // Cargar preferencia del usuario desde Local Storage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
        setIsThemeLoaded(true); // Marcar como cargado
    }, []);

    // Cambiar tema y guardar preferencia en Local Storage
    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        if (newTheme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    // Cerrar el menú si el usuario interactúa fuera del menú
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Mostrar un loader o nada mientras se carga el tema
    if (!isThemeLoaded) {
        return null;
    }

    return (
        <header className="w-full fixed z-50 select-none backdrop-blur-lg backdrop-saturate-200 bg-[rgba(17,25,40,0.56)] border border-[rgba(74,45,45,0.13)] p-6">
            <nav className="container mx-auto flex justify-between items-center px-6 md:px-12">
                {/* Logo o Nombre */}
                <div className="text-white text-2xl font-extrabold flex items-center space-x-4">
                    <Link href="/" className="flex items-center space-x-4">
                        <img
                            src="/iTorrusDevIcon.webp"
                            alt="Logo de iTorrús Dev"
                            className="w-8 h-8 md:w-8 md:h-8 rounded-full border-2 border-gray-500"
                        />
                        <span>iTorrús Dev</span>
                    </Link>
                </div>

                {/* Menú de Navegación para escritorio */}
                <div className="hidden md:flex items-center space-x-10">
                    <Link
                        href="/"
                        className={`relative text-lg font-medium transition-all ${pathname === "/"
                            ? "text-rojo after:absolute after:w-full after:h-[2px] after:bg-rojo after:left-0 after:-bottom-1"
                            : "text-white hover:text-rojo"
                            }`}
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/sobre-mi"
                        className={`relative text-lg font-medium transition-all ${pathname === "/sobre-mi"
                            ? "text-rojo after:absolute after:w-full after:h-[2px] after:bg-rojo after:left-0 after:-bottom-1"
                            : "text-white hover:text-rojo"
                            }`}
                    >
                        Sobre mí
                    </Link>
                    <Link
                        href="/proyectos"
                        className={`relative text-lg font-medium transition-all ${pathname === "/proyectos"
                            ? "text-rojo after:absolute after:w-full after:h-[2px] after:bg-rojo after:left-0 after:-bottom-1"
                            : "text-white hover:text-rojo"
                            }`}
                    >
                        Proyectos
                    </Link>
                    <Link
                        href="/web-info"
                        className={`relative text-lg font-medium transition-all ${pathname === "/web-info"
                            ? "text-rojo after:absolute after:w-full after:h-[2px] after:bg-rojo after:left-0 after:-bottom-1"
                            : "text-white hover:text-rojo"
                            }`}
                    >
                        <InformationCircleIcon className="w-6 h-6" />
                    </Link>
                    <div
                        onClick={toggleTheme}
                        className="relative flex items-center w-16 h-8 bg-[rgba(255,255,255,0.2)] rounded-full p-1 cursor-pointer transition-all"
                    >
                        <div
                            className={`absolute top-1 left-1 h-6 w-6 bg-white rounded-full shadow-md transition-transform ${isDarkMode ? "translate-x-8" : "translate-x-0"
                                }`}
                        ></div>
                        <SunIcon className={`w-5 h-5 absolute left-1.5 text-yellow-400 transition-opacity ${isDarkMode ? "opacity-0" : "opacity-100"
                            }`} />
                        <MoonIcon className={`w-5 h-5 absolute right-1.5 text-gray-400 transition-opacity ${isDarkMode ? "opacity-100" : "opacity-0"
                            }`} />
                    </div>
                </div>

                {/* Menú hamburguesa para dispositivos móviles */}
                <div className="md:hidden flex items-center space-x-4">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                        {isMenuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
                    </button>
                </div>
            </nav>

            {/* Menú desplegable móvil */}
            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="absolute top-16 right-6 bg-[rgba(17,25,40,0.8)] border border-[rgba(74,45,45,0.13)] px-6 py-4 space-y-4 rounded-lg shadow-lg"
                >
                    <Link
                        href="/"
                        className={`block text-lg font-medium transition-all ${pathname === "/"
                            ? "text-rojo"
                            : "text-white hover:text-rojo"
                            }`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/sobre-mi"
                        className={`block text-lg font-medium transition-all ${pathname === "/sobre-mi"
                            ? "text-rojo"
                            : "text-white hover:text-rojo"
                            }`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Sobre mí
                    </Link>
                    <Link
                        href="/proyectos"
                        className={`block text-lg font-medium transition-all ${pathname === "/proyectos"
                            ? "text-rojo"
                            : "text-white hover:text-rojo"
                            }`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Proyectos
                    </Link>
                    <Link
                        href="/web-info"
                        className="block text-lg font-medium text-white hover:text-rojo"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Web Info
                    </Link>
                    <div
                        onClick={toggleTheme}
                        className="relative flex items-center w-16 h-8 bg-[rgba(255,255,255,0.2)] rounded-full p-1 cursor-pointer transition-all"
                    >
                        <div
                            className={`absolute top-1 left-1 h-6 w-6 bg-white rounded-full shadow-md transition-transform ${isDarkMode ? "translate-x-8" : "translate-x-0"
                                }`}
                        ></div>
                        <SunIcon className={`w-5 h-5 absolute left-1.5 text-yellow-400 transition-opacity ${isDarkMode ? "opacity-0" : "opacity-100"
                            }`} />
                        <MoonIcon className={`w-5 h-5 absolute right-1.5 text-gray-400 transition-opacity ${isDarkMode ? "opacity-100" : "opacity-0"
                            }`} />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
