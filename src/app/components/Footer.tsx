const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 border-t-4 border-rojo">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-gray-300">
                    <span className="font-bold">Desarrollado por Ismael Torrús</span>
                </p>
                <p className="mt-2 text-gray-400">
                    <a href="mailto:ismael@example.com" className="hover:text-rojo transition-all duration-200">
                        itorrusbonet2002b@gmail.com
                    </a>
                </p>
                <p className="mt-4 text-gray-400">
                    Actualmente trabajando en<span className="font-semibold text-rojo"> Trabajo Familiar / Buscando Trabajo de Desarrollador</span>.
                </p>
                <p className="mt-4 text-sm text-gray-500">
                    <span className="text-rojo">© 2025 Ismael Torrús</span> - Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
