import { Award, BookOpen, BarChart3, Database } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Data Science & Analytics Program",
      organization: "Zephyr Technology and Solution Pvt. Ltd.",
      period: "Dec 2024 – Apr 2025",
      icon: BookOpen,
      points: [
        "Hands-on training in Python, Pandas, NumPy, and data analysis",
        "Worked on real-world datasets and case studies",
        "Built analytics and machine learning projects",
      ],
    },
    {
      title: "Power BI & Data Visualization",
      organization: "Zephyr Technology and Solution Pvt. Ltd.",
      period: "2025",
      icon: BarChart3,
      points: [
        "Designed interactive dashboards and reports",
        "Learned KPI tracking, data modeling, and DAX basics",
        "Applied Power BI for business decision-making",
      ],
    },
    {
      title: "SQL for Data Analysis",
      organization: "Zephyr Technology and Solution Pvt. Ltd.",
      period: "2025",
      icon: Database,
      points: [
        "Wrote complex SQL queries for data extraction",
        "Used joins, subqueries, and aggregations",
        "Applied SQL in real-world analytics scenarios",
      ],
    },
    {
  title: "Deep Learning Fundamentals",
  organization: "Kaggle",
  period: "2025",
  icon: BookOpen,
  points: [
    "Learned fundamentals of neural networks and deep learning concepts",
    "Hands-on practice with model training and evaluation",
    "Gained foundational understanding of deep learning workflows",
  ],
},
    {
      title: "Computer Science & Mathematics Degree",
      organization: "University College Mangalore",
      period: "2021 – 2024",
      icon: Award,
      points: [
        "Strong foundation in computer science and mathematics",
        "Studied statistics, linear algebra, and algorithms",
        "Developed analytical and problem-solving skills",
      ],
    },
  ];

  return (
    <section id="certificates" className="py-24 bg-slate-950 relative">
      {/* subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & Specialization
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Formal training and specialization supporting my data analytics expertise
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="
                bg-white/5 border border-white/10 rounded-xl p-6
                hover:bg-white/10 hover:border-blue-500/40
                hover:shadow-lg hover:shadow-blue-500/10
                transition-all duration-300
              "
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <cert.icon className="text-blue-400" size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {cert.organization} · {cert.period}
                  </p>
                </div>
              </div>

              <ul className="space-y-2">
                {cert.points.map((point, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
