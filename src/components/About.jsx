import { GraduationCap, Database, BarChart3, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Computer Science & Mathematics Graduate",
    },
    {
      icon: Database,
      title: "Data Skills",
      description: "SQL, Python, Data Cleaning & Analysis",
    },
    {
      icon: BarChart3,
      title: "Visualization",
      description: "Power BI Dashboards & Reporting",
    },
    {
      icon: Target,
      title: "Focus",
      description: "Business-driven, data-backed decisions",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-slate-950"
    >
      {/* subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A data-driven analyst focused on clarity, accuracy, and impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT TEXT */}
          <div className="space-y-6">
            <p className="text-slate-400 text-lg leading-relaxed">
              I am a <span className="text-slate-200 font-medium">Data Analyst</span>{" "}
              with a strong academic background in{" "}
              <span className="text-slate-200 font-medium">
                Computer Science and Mathematics
              </span>.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed">
              My work focuses on analyzing structured data, writing efficient
              SQL queries, and building interactive dashboards using{" "}
              <span className="text-slate-200 font-medium">
                Power BI and Python
              </span>.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed">
              I enjoy transforming raw datasets into meaningful insights that
              help organizations understand trends, monitor performance, and
              make informed decisions.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 border border-white/10 rounded-xl
                           hover:border-blue-500/40 hover:bg-white/10
                           transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-blue-400" size={24} />
                </div>

                <h3 className="text-white font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
