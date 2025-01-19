import Footer from './components/Footer';
import Header from './components/Header'; // Importación del componente Header.
import './globals.css'; // Importación de los estilos globales (por ejemplo, Tailwind y otros).

export default function Layout({
  children,
}: {
  children: React.ReactNode; // Los componentes o contenido que se pasen a este Layout.
}) {
  return (
    <html lang="es"> {/* Se define el idioma de la página como español. */}
      <head>
        {/* Script para aplicar el tema antes de renderizar */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark'); // Aplica la clase 'dark' si está en modo oscuro.
                } else {
                  document.documentElement.classList.remove('dark'); // Elimina la clase 'dark' si está en modo claro.
                }
              })();
            `,
          }}
        />
      </head>
      <body className="bg-gradient-to-r from-slate-400 via-slate-200 to-red-200 animate-gradient dark:bg-gradient-to-r dark:from-gray-700 dark:via-blue-800 dark:to-gray-900 dark:animate-gradient-night bg-cover relative">
        {/* Fondo dinámico */}
        <div className="absolute inset-0 bg-gradient-to-r from-violeta via-morado to-rojo animate-gradient filter blur-2xl opacity-30"></div>

        {/* Header Fijo */}
        <Header /> {/* Componente Header que contiene el menú de navegación. */}

        {/* Espaciado para que el contenido no se superponga al header */}
        <div className=""> {/* Se agrega un padding-top de 16 para evitar que el contenido se superponga al header fijo. */}
          {children} {/* Aquí se renderiza el contenido o los componentes pasados al Layout. */}
        </div>
        <Footer />
      </body>
    </html>
  );
}
