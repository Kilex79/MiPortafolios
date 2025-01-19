// pages/proyectos.tsx

/*const Proyectos = () => {
    const proyectos = [
        {
            nombre: "Proyecto 1",
            descripcion: "Descripción breve del proyecto 1.",
            tecnologias: "React, Tailwind CSS",
            enlace: "https://github.com/tu-usuario/proyecto1"
        },
        {
            nombre: "Proyecto 2",
            descripcion: "Descripción breve del proyecto 2.",
            tecnologias: "Next.js, Node.js",
            enlace: "https://github.com/tu-usuario/proyecto2"
        }
        // Agrega más proyectos aquí...
    ];

    return (
        <div className="text-white min-h-screen p-8">
            <h1 className="text-4xl font-bold text-white">Mis Proyectos</h1>
            <div className="mt-8 space-y-6">
                {proyectos.map((proyecto, index) => (
                    <div key={index} className="bg-slate-600 bg-opacity-75 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold text-rojo">{proyecto.nombre}</h2>
                        <p className="text-xl mt-2">{proyecto.descripcion}</p>
                        <p className="mt-4 text-lg">Tecnologías: {proyecto.tecnologias}</p>
                        <a
                            href={proyecto.enlace}
                            target="_blanck" //Abrir la pestaña en una ventana nueva
                            rel="noopener noreferrer" //Seguridad adicional
                            className="text-black hover:text-blue-400 mt-4 inline-block">
                            
                            Ver en GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Proyectos;*/



// pages/proyectos.tsx

const Proyectos = () => {
    const proyectos = [
        {
            nombre: "Proyecto 1",
            descripcion: "Descripción breve del proyecto 1.",
            tecnologias: "React, Tailwind CSS",
            enlace: "https://github.com/tu-usuario/proyecto1"
        },
        {
            nombre: "Proyecto 2",
            descripcion: "Descripción breve del proyecto 2.",
            tecnologias: "Next.js, Node.js",
            enlace: "https://github.com/tu-usuario/proyecto2"
        },
        {
            nombre: "Proyecto 2",
            descripcion: "Descripción breve del proyecto 2.",
            tecnologias: "Next.js, Node.js",
            enlace: "https://github.com/tu-usuario/proyecto2"
        },
        {
            nombre: "Proyecto 2",
            descripcion: "Descripción breve del proyecto 2.",
            tecnologias: "Next.js, Node.js",
            enlace: "https://github.com/tu-usuario/proyecto2"
        },
        {
            nombre: "Proyecto 2",
            descripcion: "Descripción breve del proyecto 2.",
            tecnologias: "Next.js, Node.js",
            enlace: "https://github.com/tu-usuario/proyecto2"
        },
        {
            nombre: "Proyecto 2",
            descripcion: "Descripción breve del proyecto 2.",
            tecnologias: "Next.js, Node.js",
            enlace: "https://github.com/tu-usuario/proyecto2"
        },
        {
            nombre: "Proyecto 2",
            descripcion: "Descripción breve del proyecto 2.",
            tecnologias: "Next.js, Node.js",
            enlace: "https://github.com/tu-usuario/proyecto2"
        },
        {
            nombre: "Proyecto 2",
            descripcion: "Descripción breve del proyecto 2.",
            tecnologias: "Next.js, Node.js",
            enlace: "https://github.com/tu-usuario/proyecto2"
        },
        {
            nombre: "Proyecto 2",
            descripcion: "Descripción breve del proyecto 2.",
            tecnologias: "Next.js, Node.js",
            enlace: "https://github.com/tu-usuario/proyecto2"
        },
        {
            nombre: "Proyecto 2",
            descripcion: "Descripción breve del proyecto 2.",
            tecnologias: "Next.js, Node.js",
            enlace: "https://github.com/tu-usuario/proyecto2"
        },
        {
            nombre: "Proyecto 2",
            descripcion: "Descripción breve del proyecto 2.",
            tecnologias: "Next.js, Node.js",
            enlace: "https://github.com/tu-usuario/proyecto2"
        }
        // Agrega más proyectos aquí...
    ];

    return (
        <div className="min-h-screen p-8 pt-28">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violeta via-morado to-rojo dark:text-white">
                    Mis Proyectos
                </h1>
                <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    A continuación, podrás explorar algunos de los proyectos que he desarrollado utilizando tecnologías como React, Next.js, Tailwind CSS, entre otras.
                    Cada proyecto está disponible en GitHub para que puedas ver más detalles sobre el código y su implementación.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {proyectos.map((proyecto, index) => (
                    <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600 hover:text-red-600 ">
                        <h2 className="text-2xl font-semibold text-gradient bg-clip-text bg-gradient-to-r">{proyecto.nombre}</h2>
                        <p className="text-lg mt-2 text-titulo2">{proyecto.descripcion}</p>
                        <p className="mt-4 text-sm text-titulo3">Tecnologías: <span className="font-semibold">{proyecto.tecnologias}</span></p>
                        <a
                            href={proyecto.enlace}
                            target="_blank" //Abrir la pestaña en una ventana nueva
                            rel="noopener noreferrer" //Seguridad adicional
                            className="text-blue-500 mt-4 inline-block transition-all duration-200 hover:text-blue-400 font-medium"
                        >
                            Ver en GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Proyectos;

