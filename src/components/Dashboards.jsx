import {
  ShoppingCart,
  Building2,
  BarChart3,
  HeartPulse,
  DollarSign,
  Github,
} from "lucide-react";

const Dashboards = () => {
  const dashboards = [
    {
      title: "Hospital Operations Dashboard",
      description:
        "Monitored patient flow, department utilization, and operational KPIs to support healthcare planning.",
      icon: HeartPulse,
      image:
        "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800",
      tools: ["Power BI", "Excel"],
      github: "https://github.com/ubaid162/Hospital-PowerBI-Dashboard",
    },
    {
      title: "Blinkit Sales Dashboard",
      description:
        "Analyzed sales performance, order trends, and category-wise contribution to support retail decision-making.",
      icon: ShoppingCart,
      image:
        "https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg?auto=compress&cs=tinysrgb&w=800",
      tools: ["Power BI", "Excel", "SQL"],
      github: "https://github.com/ubaid162/Blinkit-PowerBI-Dashboard",
    },
    {
      title: "Zephyr Sales & HR Dashboard",
      description:
        "Combined sales analytics and HR metrics to monitor revenue growth, employee performance, and workforce trends.",
      icon: Building2,
      image:
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
      tools: ["Power BI", "Excel"],
      github: "https://github.com/ubaid162/Zephyr-Technologies---HR-Analytics-Sales-Performance-Dashboard",
    },
    {
      title: "Global Chocolate Sales Dashboard",
      description:
        "Visualized global sales distribution, country-wise performance, and product profitability insights.",
      icon: BarChart3,
      image:
        "https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=800",
      tools: ["Power BI", "DAX"],
      github: "https://github.com/yourusername/chocolate-sales-dashboard",
    },
    
    {
      title: "Financial Market Analysis Dashboard",
      description:
        "Built a finance dashboard using web-scraped Screener data to analyze company fundamentals and support investment decisions.",
      icon: DollarSign,
      image:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      tools: ["Power BI", "Python", "Web Scraping"],
      github: "https://github.com/yourusername/finance-dashboard",
    },
  ];

  return (
    <section id="dashboards" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dashboards
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Business intelligence dashboards built using Power BI for real-world
            decision support
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {dashboards.map((dashboard, index) => (
            <div
              key={index}
              className="
                bg-white/5 border border-white/10 rounded-xl overflow-hidden
                hover:bg-white/10 hover:border-blue-500/40
                hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10
                transition-all duration-300
                flex flex-col
              "
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dashboard.image}
                  alt={dashboard.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>

                <div className="absolute top-4 right-4 w-11 h-11 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <dashboard.icon className="text-blue-400" size={22} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {dashboard.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {dashboard.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {dashboard.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              <div className="px-6 pb-6">
  <a
    href={dashboard.github}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-2 px-4 py-2
      bg-white/5 border border-white/10 rounded-lg
      text-sm font-medium text-slate-400
      hover:text-white hover:bg-white/10 hover:border-blue-500/40
      transition-all duration-300
    "
  >
    <Github size={18} />
    GitHub
  </a>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboards;
