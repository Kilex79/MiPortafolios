export default function Home() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-violeta via-morado to-rojo bg-clip-text text-transparent animate-fade-in">
          ¡Hola! 👋 Soy Ismael Torrús
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-medium animate-fade-in-delay">
          Desarrollador especializado en <span className="text-rojo font-semibold">aplicaciones multiplataforma</span> y <span className="text-rojo font-semibold">páginas web modernas</span>.
        </p>
        <div className="mt-8 flex space-x-4 justify-center animate-fade-in-delay">
          <div className="mockup-code bg-opacity-55">
            <pre data-prefix="$"><code>npm i iTorrúsDev</code></pre>
            <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
            <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
          </div>
        </div>
      </div>

      {/* Elemento decorativo */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-rojo via-morado to-violeta opacity-50 blur-xl"></div>
    </div>
  );
}
