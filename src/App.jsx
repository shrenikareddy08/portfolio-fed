import { useState } from "react";
import profile from "./assets/profile.jpg";

export default function App() {
  const [dark, setDark] = useState(false);

  const theme = dark
    ? "bg-[#0b1220] text-white"
    : "bg-[#f5f7fb] text-gray-900";

  const card = dark
    ? "bg-[#111827] border border-white/10"
    : "bg-white shadow-sm border border-gray-100";

  return (
    <div className={`${theme} font-sans scroll-smooth min-h-screen`}>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-[#2b2d42] text-white z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
          <h1 className="font-bold tracking-wide">
            FrontEnd & UI Portfolio
          </h1>

          <div className="hidden md:flex gap-6 text-sm">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "education",
              "contact",
            ].map((i) => (
              <a
                key={i}
                href={`#${i}`}
                className="hover:text-[#cdb4db] transition"
              >
                {i.toUpperCase()}
              </a>
            ))}
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="text-xs border px-3 py-1 rounded hover:bg-white hover:text-black transition"
          >
            {dark ? "LIGHT" : "DARK"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="scroll-mt-20 pt-28 pb-12 text-center"
      >
        <div className="w-[110px] h-[139px] mx-auto rounded-full overflow-hidden border-4 border-white mb-[15px]">
  <img
    src={profile}
    alt="profile"
    className="w-full h-full object-cover"
  />
</div>

        <h1 className="text-3xl font-bold mt-4">
          Shrenika Reddy
        </h1>

        <p className="text-sm text-[#6d6875] mt-1">
          Frontend Developer | UI Designer | React Enthusiast
        </p>

        <p className="text-sm opacity-80 max-w-xl mx-auto mt-3">
          I am an undergraduate student passionate about
          frontend development and UI design, focused on
          building clean, responsive and user-friendly web
          applications.
        </p>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 scroll-mt-20"
      >
        <div className={`${card} p-6 rounded-lg`}>
          <h2 className="text-lg font-semibold mb-2">
            About
          </h2>

          <p className="text-sm leading-relaxed">
            I enjoy building interactive and modern web
            applications using React and Tailwind CSS.
            My focus is on creating intuitive UI experiences
            with clean structure and usability. I am looking
            for opportunities to work and enhance my skills
            by doing several projects.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="max-w-5xl mx-auto px-6 mt-6 scroll-mt-20"
      >
        <div className={`${card} p-6 rounded-lg`}>
          <h2 className="text-lg font-semibold mb-3">
            Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind",
              "TypeScript",
              "Java",
              "DSA",
            ].map((s) => (
              <span
                key={s}
                className="px-3 py-1 text-sm bg-[#cdb4db] text-black rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 mt-6 scroll-mt-20"
      >
        <div className={`${card} p-6 rounded-lg`}>
          <h2 className="text-lg font-semibold mb-3">
            Projects
          </h2>

          <div className="space-y-3 text-sm">
            <p>
              <b>University Website</b> — HTML/CSS/JS —{" "}
              <a
                href="https://shrenikareddy08.github.io/University-Website/"
                className="text-purple-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </p>

            <p>
              <b>Lost & Found Portal</b> — JavaScript —{" "}
              <a
                href="https://shrenikareddy08.github.io/Lost-and-Found-Portal/"
                className="text-purple-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </p>

            <p>
              <b>Portfolio</b> — HTML/CSS —{" "}
              <a
                href="https://shrenikareddy08.github.io/Portfolio/"
                className="text-purple-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="max-w-5xl mx-auto px-6 mt-6 scroll-mt-20"
      >
        <div className={`${card} p-6 rounded-lg`}>
          <h2 className="text-lg font-semibold mb-2">
            Education
          </h2>

          <p className="text-sm">
            KL University — B.Tech CSE — CGPA: 9.86
          </p>

          <p className="text-sm">
            Excellencia Junior College — MPC — 98.6%
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 mt-6 mb-10 scroll-mt-20"
      >
        <div className={`${card} p-6 rounded-lg`}>
          <h2 className="text-lg font-semibold mb-3">
            Contact
          </h2>

          <p className="text-sm">
            📧{" "}
            <a
              href="mailto:punreddy.shrenika@klh.edu.in"
              className="text-purple-500 hover:underline"
            >
              punreddy.shrenika@klh.edu.in
            </a>
          </p>

          <p className="text-sm mt-2">
            📞 9827523490
          </p>

          <p className="text-sm mt-2">
            💻{" "}
            <a
              href="https://github.com/shrenikareddy08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:underline"
            >
              github.com/shrenikareddy08
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`py-6 text-center border-t ${
          dark
            ? "border-white/10 bg-[#0b1220] text-gray-400"
            : "border-gray-200 bg-white text-gray-600"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm">
            © {new Date().getFullYear()} Shrenika Reddy.
            All Rights Reserved.
          </p>

          <div className="flex justify-center gap-6 mt-3 text-sm">
            <a
              href="https://github.com/shrenikareddy08"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              GitHub
            </a>

            <a
              href="mailto:punreddy.shrenika@klh.edu.in"
              className="hover:text-purple-500 transition"
            >
              Email
            </a>

            <a
              href="#home"
              className="hover:text-purple-500 transition"
            >
              Back to Top ↑
            </a>
          </div>

          <p className="text-xs mt-3 opacity-75">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}