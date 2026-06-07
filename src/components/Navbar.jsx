import { Moon, Sun } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/40 backdrop-blur shadow">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-xl text-sky-500">SR Portfolio</h1>

        <div className="flex gap-6 text-sm font-medium">
          {["home", "about", "skills", "projects", "education", "contact"].map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="hover:text-sky-500">
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
}