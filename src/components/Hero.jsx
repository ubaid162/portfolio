import { Download, Mail, Github, Linkedin, Sparkles, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Data Analyst",
  "Power BI Developer",
  "SQL Specialist",
  "Python Analyst",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!deleting && charIndex < currentRole.length) {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (deleting && charIndex > 0) {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!deleting && charIndex === currentRole.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, deleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-slate-900 animate-gradient"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-10 animate-float"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div className="text-center lg:text-left">
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-white/10 mb-6">
    <Sparkles size={16} className="text-blue-400" />
    <span className="text-sm text-slate-300">
      Hi, I’m
    </span>
  </div>

          {/* NAME */}
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-6">
            <span className="text-white">Mahammad</span>
            <br />
            <span className="bg-gradient-to-r from-slate-200 via-blue-400 to-slate-200 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] inline-block hover:-translate-y-1 transition-transform duration-300">
              Ubaidulla
            </span>
          </h1>

          {/* TYPED ROLE */}
          <p className="text-xl md:text-2xl text-slate-300 mb-4">
            {text}
            <span className="text-blue-400 ml-1 animate-pulse">|</span>
          </p>

          <p className="text-lg text-slate-400 max-w-xl mb-10">
            I transform raw data into meaningful insights through data
            analysis, visualization, and business intelligence to support
            smarter decision-making.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-blue-500 rounded-xl text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:scale-105 transition-all"
            >
              View Projects
            </button>

            <a
              href="Public/Resume(DA).pdf"
              download
              className="px-8 py-4 bg-white/5 backdrop-blur border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 hover:scale-105 transition-all flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            {[
              { icon: Mail, link: "mailto:mahammadubaid162@gmail.com" },
              { icon: Github, link: "https://github.com/ubaid162" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/mahammad-ubaidulla/" },
              { icon: Instagram, link: "https://www.instagram.com/ubaiiddd.__?igsh=MXV5NmQzNXh4Z3U2ZQ==" },

            ].map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-white hover:bg-blue-500/20 hover:scale-110 transition-all"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full"></div>
            <img
              src="\public\profile.jpg"
              alt="Mahammad Ubaid"
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl object-cover border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
