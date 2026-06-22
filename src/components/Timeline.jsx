import { FiCode as Code, FiDatabase as Database, FiSmartphone as Smartphone, FiBookOpen as BookOpen } from 'react-icons/fi';

const Timeline = () => {
  const experience = [
    {
      year: "Actualidad (Este Año)",
      title: "KinalVR & Desarrollo Móvil",
      subtitle: "Expo Kinal & React Native",
      description: "Participando en el proyecto estelar para la Expo Kinal: KinalVR, un recorrido interactivo de las instalaciones con gafas de Realidad Virtual, permitiendo visualizar cuadros de momentos icónicos. Además, me encuentro estudiando React Native para expandir mis habilidades al desarrollo de aplicaciones móviles.",
      icon: Smartphone,
      color: "from-cyan-500 to-blue-600",
      shadowColor: "rgba(6, 182, 212, 0.2)"
    },
    {
      year: "Sexto Perito",
      title: "Especialización en Frontend Moderno",
      subtitle: "React & Arquitectura Web",
      description: "Profundización en el desarrollo web, dominando la biblioteca React para la creación de interfaces de usuario dinámicas, eficientes y modulares. Enfoque en optimización, hooks avanzados y diseño responsivo.",
      icon: Code,
      color: "from-indigo-500 to-purple-600",
      shadowColor: "rgba(79, 70, 229, 0.2)"
    },
    {
      year: "Quinto Perito",
      title: "Proyectos Destacados & Bases Full Stack",
      subtitle: "Java, Bases de Datos & Redes",
      description: "Durante este año consolidé mis bases en programación aprendiendo Java, JavaFX, Java Enterprise Edition (Java EE), JavaScript, HTML, CSS, uso de Postman para pruebas de API y fundamentos sólidos de redes con CCNA. Mis proyectos destacados de este período fueron la tienda SHOESKI y mi participación en la ExpoKinal.",
      icon: Database,
      color: "from-purple-500 to-pink-600",
      shadowColor: "rgba(168, 85, 247, 0.2)"
    }
  ];

  return (
    <section id="trayectoria" className="py-20 relative overflow-hidden bg-slate-50/50 dark:bg-portfolio-bg/20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Mi Trayectoria <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Académica</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Un recorrido por mi formación en Kinal, los proyectos clave que he desarrollado y las tecnologías que he dominado año tras año.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500 dark:from-cyan-500/40 dark:via-indigo-500/40 dark:to-purple-500/40 -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-20">
            {experience.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty space for balance on desktop */}
                  <div className="hidden md:block w-1/2 px-8"></div>

                  {/* Icon Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div 
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r ${item.color} p-2 text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110`}
                      style={{ boxShadow: `0 4px 20px ${item.shadowColor}` }}
                    >
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="bg-white/70 dark:bg-portfolio-surface/60 backdrop-blur-md border border-slate-200/50 dark:border-portfolio-surface/50 rounded-2xl p-6 md:p-8 shadow-xl dark:shadow-slate-950/20 hover:border-slate-300 dark:hover:border-portfolio-surface/70 transition-all duration-300 hover:-translate-y-1 relative group">
                      
                      {/* Decorative gradient corner */}
                      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-[0.03] group-hover:opacity-[0.07] rounded-tr-2xl rounded-bl-full transition-opacity duration-300 pointer-events-none`}></div>

                      {/* Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r ${item.color}`}>
                          {item.year}
                        </span>
                        <span className="text-sm font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4" />{' '}
                          <a 
                            href="https://www.kinal.org.gt/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-primary dark:hover:text-accent transition-colors underline decoration-dotted"
                          >
                            Kinal
                          </a>
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 mb-4 italic">
                        {item.subtitle}
                      </h4>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
