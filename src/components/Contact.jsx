import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! You can also contact me directly via email or LinkedIn.");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mahammadubaid162@gmail.com",
      link: "mailto:mahammadubaid162@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "6362208815",
      link: "tel:6362208815",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mangalore, Karnataka, India",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/mahammad-ubaidulla/",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/ubaid162",
    },
    {
      icon: Mail,
      label: "Email",
      link: "mailto:mahammadubaid162@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-slate-950">
      {/* subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            Let’s connect for data analytics, Power BI projects, or opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex items-start gap-4 p-4 bg-white/5
                    border border-white/10 rounded-xl
                    hover:bg-white/10 hover:border-blue-500/40
                    transition-all duration-300
                  "
                >
                  <div className="w-11 h-11 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <item.icon className="text-blue-400" size={22} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{item.label}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-white font-medium hover:text-blue-400 transition"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold text-white mb-4">
              Find Me Online
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12 h-12 bg-white/5 border border-white/10 rounded-xl
                    flex items-center justify-center
                    hover:bg-blue-500/20 hover:border-blue-500/40
                    hover:scale-110 transition-all duration-300
                  "
                >
                  <social.icon className="text-blue-400" size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="
                bg-white/5 border border-white/10 rounded-xl p-8
                hover:border-blue-500/40 transition-all
              "
            >
              <div className="mb-5">
                <label className="block text-slate-300 text-sm mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                    w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg
                    text-white placeholder-slate-500
                    focus:outline-none focus:border-blue-500
                  "
                  placeholder="Your name"
                />
              </div>

              <div className="mb-5">
                <label className="block text-slate-300 text-sm mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                    w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg
                    text-white placeholder-slate-500
                    focus:outline-none focus:border-blue-500
                  "
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-slate-300 text-sm mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="
                    w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg
                    text-white placeholder-slate-500 resize-none
                    focus:outline-none focus:border-blue-500
                  "
                  placeholder="Brief message or opportunity details"
                ></textarea>
              </div>

              <button
                type="submit"
                className="
                  w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg
                  hover:bg-blue-600 hover:scale-[1.02]
                  transition-all duration-300 flex items-center justify-center gap-2
                "
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center border-t border-white/10 pt-8">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Mahammad Ubaid · Junior Data Analyst
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
