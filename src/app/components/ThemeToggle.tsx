import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

interface ThemeToggleProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
    return (
        <div
            onClick={toggleTheme}
            className="relative flex items-center w-16 h-8 bg-[rgba(255,255,255,0.2)] rounded-full p-1 cursor-pointer transition-all"
        >
            <div
                className={`absolute top-1 left-1 h-6 w-6 bg-white rounded-full shadow-md transition-transform ${
                    isDarkMode ? "translate-x-8" : "translate-x-0"
                }`}
            ></div>
            <SunIcon
                className={`w-5 h-5 absolute left-1.5 text-yellow-400 transition-opacity ${
                    isDarkMode ? "opacity-0" : "opacity-100"
                }`}
            />
            <MoonIcon
                className={`w-5 h-5 absolute right-1.5 text-gray-400 transition-opacity ${
                    isDarkMode ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
    );
};

export default ThemeToggle;
