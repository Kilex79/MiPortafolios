const SobreMi = () => {
    return (
        <div className="min-h-screen p-8 pt-28 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violeta via-morado to-rojo dark:text-white">
                    Sobre mí
                </h1>
                <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Soy un programador apasionado con experiencia en el desarrollo de aplicaciones multiplataforma y sitios web. 
                    A lo largo de mi carrera, he trabajado con tecnologías modernas como <strong>React</strong>, <strong>Next.js</strong> y <strong>Tailwind CSS</strong>, y me encanta aprender nuevas herramientas y mejorar mis habilidades para crear aplicaciones más eficientes y de alto rendimiento.
                </p>
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-center text-rojo">
                    Habilidades Técnicas
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
                    <li className="flex items-center space-x-2">
                        <span className="text-2xl text-rojo">🗄️</span>
                        <span>SQL</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SobreMi;
