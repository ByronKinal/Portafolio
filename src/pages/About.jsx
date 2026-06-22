import { FiCheckCircle as CheckCircle2, FiMail, FiPhone, FiCalendar, FiBookOpen, FiUser, FiBriefcase } from 'react-icons/fi';

const About = () => {
  const lenguajes = [
    { name: "Java", percentage: 100, color: "from-blue-500 to-indigo-600" },
    { name: "SQL", percentage: 95, color: "from-purple-500 to-pink-600" },
    { name: "JavaScript", percentage: 80, color: "from-amber-400 to-orange-500" },
    { name: "HTML5 & CSS3", percentage: 50, color: "from-emerald-400 to-teal-500" },
  ];

  const toolCategories = [
    {
      title: "Frontend & Móvil",
      items: ["React", "React Native", "JavaFX", "TailwindCSS", "Vite", "WebXR & Three.js"]
    },
    {
      title: "Backend & Arquitectura",
      items: ["Node.js & Express", "Java EE", "JWT & Auth", "Microservicios"]
    },
    {
      title: "Bases de Datos",
      items: ["MongoDB", "PostgreSQL"]
    },
    {
      title: "Herramientas & Redes",
      items: ["Docker", "Git & GitHub", "Postman", "Trello", "CCNA (Redes)"]
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/10">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-5 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none animate-blob"></div>
      <div className="absolute bottom-1/4 right-5 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Mí</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Desarrollador apasionado con bases sólidas en desarrollo Frontend, Backend y redes.
          </p>
        </div>

        {/* Main Grid: Info card & Skills card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Biography & Datos Generales */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white/70 dark:bg-portfolio-surface/60 backdrop-blur-md border border-slate-200/50 dark:border-portfolio-surface/50 rounded-2xl p-8 md:p-10 shadow-xl dark:shadow-slate-950/20">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <FiUser className="text-primary w-6 h-6" /> ¿Quién soy?
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                <p>
                  ¡Hola! Soy <strong className="text-primary dark:text-accent">Byron Pineda</strong>, un apasionado desarrollador Full Stack y estudiante en la fundación <a href="https://www.kinal.org.gt/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-indigo-500 dark:text-accent dark:hover:text-primary transition-colors underline decoration-dotted">Kinal</a>. Mi viaje en el mundo de la programación comenzó con la curiosidad de entender cómo funcionan las cosas en la web, y desde entonces no he parado de aprender y crear.
                </p>
                <p>
                  Me especializo en construir aplicaciones web desde cero, abordando tanto el frontend con tecnologías modernas como React, como el backend desarrollando APIs eficientes. Disfruto enfrentarme a nuevos retos y transformar problemas complejos en soluciones elegantes e intuitivas.
                </p>
              </div>
            </div>

            {/* Datos Generales Card */}
            <div className="bg-white/70 dark:bg-portfolio-surface/60 backdrop-blur-md border border-slate-200/50 dark:border-portfolio-surface/50 rounded-2xl p-8 shadow-xl dark:shadow-slate-950/20">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Datos Generales</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-indigo-500/10 rounded-lg text-primary"><FiUser className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Nombre Completo</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Byron Steve Pineda Luna</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-pink-500/10 rounded-lg text-pink-500"><FiCalendar className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Edad</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">18 años</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-500"><FiBookOpen className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Formación Actual</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Estudiante activo en <a href="https://www.kinal.org.gt/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-indigo-500 dark:text-accent dark:hover:text-primary transition-colors underline decoration-dotted">Kinal</a>
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500"><FiBriefcase className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Experiencia</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Proyectos prácticos académicos</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500"><FiPhone className="w-5 h-5" /></div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Teléfono / WhatsApp</span>
                    <a href="tel:+50236989854" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-primary transition-colors">+502 3698 9854</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-violet-500/10 rounded-lg text-violet-500"><FiMail className="w-5 h-5" /></div>
                  <div className="overflow-hidden">
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Correo Electrónico</span>
                    <a href="mailto:byronstevepinedaluna@gmail.com" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-primary transition-colors break-all">byronstevepinedaluna@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="lg:col-span-5 space-y-8">
            {/* Programming Languages */}
            <div className="bg-white/70 dark:bg-portfolio-surface/60 backdrop-blur-md border border-slate-200/50 dark:border-portfolio-surface/50 rounded-2xl p-8 shadow-xl dark:shadow-slate-950/20">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Lenguajes de Programación</h3>
              <div className="space-y-6">
                {lenguajes.map((skill, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm md:text-base">{skill.name}</span>
                      <span className="text-xs font-bold px-2 py-0.5 bg-indigo-500/10 text-primary dark:text-accent rounded-full">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-portfolio-surface rounded-full h-2 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000 ease-out`} 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Grid */}
            <div className="bg-white/70 dark:bg-portfolio-surface/60 backdrop-blur-md border border-slate-200/50 dark:border-portfolio-surface/50 rounded-2xl p-8 shadow-xl dark:shadow-slate-950/20">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Tecnologías y Herramientas</h3>
              <div className="space-y-6">
                {toolCategories.map((category, catIndex) => (
                  <div key={catIndex} className="border-b border-slate-100 dark:border-portfolio-surface/80 last:border-0 last:pb-0 pb-4">
                    <h4 className="text-sm font-bold text-primary dark:text-accent mb-3 uppercase tracking-wider">{category.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((tech, index) => (
                        <span 
                          key={index} 
                          className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-slate-100/80 dark:bg-portfolio-surface/40 text-slate-700 dark:text-slate-300 border border-slate-200/30 dark:border-portfolio-surface/30 hover:border-primary/30 dark:hover:border-accent/30 transition-all duration-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;