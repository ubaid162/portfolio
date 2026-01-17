import { Database, BarChart3, Code2, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Data Analysis",
      icon: Database,
      skills: [
        "SQL",
        "Data Cleaning",
        "Data Wrangling",
        "Exploratory Data Analysis",
      ],
    },
    {
      category: "Visualization & BI",
      icon: BarChart3,
      skills: [
        "Power BI",
        "Dashboard Design",
        "DAX Basics",
        "Excel",
      ],
    },
    {
      category: "Programming",
      icon: Code2,
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
    },
    {
      category: "Tools & Workflow",
      icon: GitBranch,
      skills: [
        "Git & GitHub",
        "Jupyter Notebook",
        "VS Code",
        "Data Reporting",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            Technologies and tools I use to analyze data and deliver insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="
                group p-6 bg-white/5 border border-white/10 rounded-xl
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:bg-white/10
                hover:border-blue-500/60
                hover:shadow-lg hover:shadow-blue-500/10
              "
            >
              <div
                className="
                  w-12 h-12 rounded-lg flex items-center justify-center mb-4
                  bg-blue-500/20
                  group-hover:bg-blue-500/30
                  transition-colors duration-300
                "
              >
                <category.icon className="text-blue-400" size={24} />
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {category.category}
              </h3>

              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-slate-400 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
