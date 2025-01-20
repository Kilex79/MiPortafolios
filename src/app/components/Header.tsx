'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { InformationCircleIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";

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
                <div className="hidden lg:flex items-center space-x-10">
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
                    <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                </div>

                {/* Menú hamburguesa para dispositivos móviles */}
                <div className="lg:hidden flex items-center space-x-4">
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
                    <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                </div>
            )}
        </header>
    );
};

export default Header;
