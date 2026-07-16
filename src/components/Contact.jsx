import { useState } from 'react';
import { FiMail, FiLinkedin, FiBriefcase, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'El nombre es obligatorio';
    if (!formData.email.trim()) {
      tempErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'El correo electrónico no es válido';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'El asunto es obligatorio';
    if (!formData.message.trim()) tempErrors.message = 'El mensaje es obligatorio';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    // Simulate sending email
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Reset success state after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      title: "Correo Electrónico",
      value: "byronstevepinedaluna@gmail.com",
      link: "mailto:byronstevepinedaluna@gmail.com",
      icon: FiMail,
      color: "text-rose-500 bg-rose-500/10 hover:bg-rose-500/20"
    },
    {
      title: "Teléfono / WhatsApp",
      value: "+502 3698 9854",
      link: "https://wa.me/50236989854",
      icon: FiPhone,
      color: "text-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20"
    },
    {
      title: "LinkedIn",
      value: "Byron Steve Pineda Luna",
      link: "https://www.linkedin.com/in/byron-steve-pineda-luna-481508358/",
      icon: FiLinkedin,
      color: "text-blue-500 bg-blue-500/10 hover:bg-blue-500/20"
    },
    {
      title: "CompuTrabajo",
      value: "Perfil de Candidato",
      link: "https://gt.computrabajo.com/",
      icon: FiBriefcase,
      color: "text-violet-500 bg-violet-500/10 hover:bg-violet-500/20"
    },
    {
      title: "Ubicación",
      value: "Ciudad de Guatemala, Guatemala",
      link: null,
      icon: FiMapPin,
      color: "text-cyan-500 bg-cyan-500/10"
    }
  ];

  return (
    <section id="contacto" className="py-20 relative overflow-hidden bg-slate-100/30 dark:bg-portfolio-bg/25">
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Ponte en <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Contacto</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            ¿Tienes alguna propuesta o quieres que trabajemos juntos? Envíame un mensaje o contáctame directamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Información de Contacto</h3>
            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                const isLink = info.link !== null;
                const CardWrapper = isLink ? 'a' : 'div';
                
                return (
                  <CardWrapper
                    key={idx}
                    href={info.link}
                    target={isLink ? "_blank" : undefined}
                    rel={isLink ? "noopener noreferrer" : undefined}
                    className={`flex items-start gap-4 p-4 bg-white/70 dark:bg-portfolio-surface/60 backdrop-blur-md border border-slate-200/50 dark:border-portfolio-surface/50 rounded-2xl shadow-lg transition-all duration-300 ${
                      isLink ? 'hover:-translate-y-1 hover:border-primary/20 dark:hover:border-accent/20 cursor-pointer' : ''
                    }`}
                  >
                    <div className={`p-3.5 rounded-xl ${info.color} flex-shrink-0 transition-colors duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{info.title}</span>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 break-all">{info.value}</span>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/70 dark:bg-portfolio-surface/60 backdrop-blur-md border border-slate-200/50 dark:border-portfolio-surface/50 rounded-2xl p-8 shadow-xl dark:shadow-slate-950/20">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Envíame un Mensaje</h3>
              
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-8 text-center animate-fadeIn">
                  <FiCheckCircle className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">¡Mensaje Enviado!</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                    Muchas gracias por contactarme, Byron. Te responderé en el menor tiempo posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Nombre Completo</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50/50 dark:bg-portfolio-bg/40 border ${
                          errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200/50 dark:border-portfolio-surface/80 focus:ring-primary/20 focus:border-primary'
                        } text-slate-850 dark:text-slate-100 text-sm focus:outline-none focus:ring-4 transition-all duration-300`}
                        placeholder="Byron Pineda"
                      />
                      {errors.name && <p className="text-[10px] text-red-500 mt-1.5 font-semibold">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Correo Electrónico</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50/50 dark:bg-portfolio-bg/40 border ${
                          errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200/50 dark:border-portfolio-surface/80 focus:ring-primary/20 focus:border-primary'
                        } text-slate-850 dark:text-slate-100 text-sm focus:outline-none focus:ring-4 transition-all duration-300`}
                        placeholder="tu@correo.com"
                      />
                      {errors.email && <p className="text-[10px] text-red-500 mt-1.5 font-semibold">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Asunto</label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50/50 dark:bg-portfolio-bg/40 border ${
                        errors.subject ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200/50 dark:border-portfolio-surface/80 focus:ring-primary/20 focus:border-primary'
                      } text-slate-850 dark:text-slate-100 text-sm focus:outline-none focus:ring-4 transition-all duration-300`}
                      placeholder="Propuesta de proyecto / Consulta"
                    />
                    {errors.subject && <p className="text-[10px] text-red-500 mt-1.5 font-semibold">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Mensaje</label>
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50/50 dark:bg-portfolio-bg/40 border ${
                        errors.message ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200/50 dark:border-portfolio-surface/80 focus:ring-primary/20 focus:border-primary'
                      } text-slate-850 dark:text-slate-100 text-sm focus:outline-none focus:ring-4 transition-all duration-300 resize-none`}
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                    {errors.message && <p className="text-[10px] text-red-500 mt-1.5 font-semibold">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-2xl text-white bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Enviar Mensaje <FiSend className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
