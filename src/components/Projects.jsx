import {
  Github,
  TrendingUp,
  Shield,
  Home,
  Activity,
  DollarSign,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description:
        "Built a churn prediction model to identify at-risk customers using historical usage and engagement data.",
      icon: TrendingUp,
      tags: ["Python", "Pandas", "Scikit-learn", "Classification"],
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/ubaid162/Customer_Churn_Prediction.git",
    },
    {
      title: "UPI Fraud Detection",
      description:
        "Developed a fraud detection system to flag suspicious UPI transactions based on behavioral patterns.",
      icon: Shield,
      tags: ["Python", "Machine Learning", "Classification"],
      image:
        "https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/ubaid162/UPI-Fraud-Detection-Web-App-Flask-Machine-Learning",
    },
    {
      title: "House Price Prediction",
      description:
        "Regression-based model to estimate property prices using location, size, and market indicators.",
      icon: Home,
      tags: ["Python", "Regression", "Feature Engineering"],
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/ubaid162/Hosse_price_prediction",
    },
    {
      title: "Kidney Stone Detection",
      description:
        "Data-driven healthcare project to classify kidney stone presence using structured medical data.",
      icon: Activity,
      tags: ["Python", "Data Analysis", "Healthcare"],
      image:
        "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/ubaid162/project-placeholder",
    },
    
    {
      title: "Telecom Customer Churn Prediction",
      description:
        "Analyzed telecom customer data to predict churn and identify key factors influencing customer retention.",
      icon: TrendingUp,
      tags: ["Python", "EDA", "Classification", "Customer Analytics"],
      image:
        "https://images.pexels.com/photos/8866792/pexels-photo-8866792.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/ubaid162/Customer_Churn_Prediction.git",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-slate-400 text-lg">
            Real-world data analytics and machine learning projects
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-white/5 border border-white/10 rounded-xl overflow-hidden
                hover:bg-white/10 hover:border-blue-500/40
                hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>

                <div className="absolute top-4 right-4 w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <project.icon className="text-blue-400" size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2 px-4 py-2
                    bg-white/5 border border-white/10 rounded-lg
                    text-slate-400 hover:text-white hover:bg-white/10
                    transition
                  "
                >
                  <Github size={18} />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
