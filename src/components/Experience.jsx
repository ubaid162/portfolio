import { Briefcase, GraduationCap, LineChart } from "lucide-react";

const Experience = () => {
  const timeline = [
    {
      icon: Briefcase,
      title: "Junior Data Analyst",
      organization: "Zephyr Technology and Solution Pvt. Ltd.",
      period: "Aug 2025 – Jan 2026",
      description:
        "Worked as a full-time Junior Data Analyst focusing on business data analysis, reporting, and dashboard development.",
      gradient: "from-blue-500 to-blue-400",
      achievements: [
        "Analyzed sales, HR, and operational datasets using SQL and Python",
        "Built Power BI dashboards for management reporting",
        "Delivered insights to support data-driven business decisions",
      ],
    },
    {
      icon: Briefcase,
      title: "Junior Data Analyst Intern",
      organization: "Zephyr Technology and Solution Pvt. Ltd.",
      period: "Apr 2025 – Jun 2025",
      description:
        "Completed a hands-on internship working with real-world datasets and business intelligence tools.",
      gradient: "from-blue-500 to-blue-400",
      achievements: [
        "Performed data cleaning and exploratory data analysis",
        "Assisted in building Power BI dashboards",
        "Worked closely with senior analysts on live projects",
      ],
    },
    {
      icon: LineChart,
      title: "Data Science Trainee",
      organization: "Zephyr Technology and Solution Pvt. Ltd.",
      period: "Dec 2024 – Apr 2025",
      description:
        "Completed an intensive data science training program covering analytics, visualization, and ML fundamentals.",
      gradient: "from-blue-500 to-blue-400",
      achievements: [
        "Learned Python, Pandas, NumPy, and data visualization",
        "Built analytics and prediction projects",
        "Worked on real-world datasets and case studies",
      ],
    },
    {
      icon: GraduationCap,
      title: "B.Sc. Computer Science & Mathematics",
      organization: "University College Mangalore",
      period: "2021 – 2024",
      description:
        "Completed undergraduate studies with a strong foundation in computer science and mathematics.",
      gradient: "from-blue-500 to-blue-400",
      achievements: [
        "Studied databases, algorithms, and programming",
        "Completed coursework in statistics and linear algebra",
        "Developed strong analytical and problem-solving skills",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Journey
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            My academic and professional growth in data analytics
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/30"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:pl-12"
                  }`}
                >
                  <div className="
                    bg-white/5 border border-white/10 rounded-xl p-6
                    hover:bg-white/10 hover:border-blue-500/40
                    hover:shadow-lg hover:shadow-blue-500/10
                    transition-all duration-300
                  ">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center`}
                      >
                        <item.icon className="text-white" size={22} />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-slate-400 text-sm">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    <span className="inline-block mb-3 text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {item.period}
                    </span>

                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <ul className="space-y-2">
                      {item.achievements.map((point, i) => (
                        <li
                          key={i}
                          className="text-slate-400 text-sm flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 top-8 w-4 h-4 -ml-2 bg-slate-950 border-2 border-blue-400 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
