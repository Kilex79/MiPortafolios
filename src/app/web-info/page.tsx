const InformacionWeb = () => {
    return (
        <div className="min-h-screen p-8 pt-28 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violeta via-morado to-rojo dark:text-white">
                    Información sobre esta <span className="text-rojo">web</span>
                </h1>
                <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Esta página web ha sido desarrollada por <span className="font-semibold">Ismael Torrús</span>, un programador con estudios de desarrollo de aplicaciones multiplataforma y experiencia en desarrollo de sitios web adquirida durante las prácticas profesionales. Utilizando tecnologías modernas como <strong>React</strong>, <strong>Next.js</strong> y <strong>Tailwind CSS</strong>, este sitio refleja mi enfoque en crear experiencias web interactivas, accesibles y visualmente atractivas.
                </p>
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-center text-rojo">
                    Tecnologías utilizadas
                </h2>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-lg text-gray-700 dark:text-gray-300">
                    <li className="flex items-center space-x-2">
                        <span className="text-2xl text-rojo">🛠️</span>
                        <span>JavaScript / TypeScript</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="text-2xl text-rojo">⚛️</span>
                        <span>React / Next.js</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="text-2xl text-rojo">💅</span>
                        <span>Tailwind CSS</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="text-2xl text-rojo">🔧</span>
                        <span>Node.js</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default InformacionWeb;
