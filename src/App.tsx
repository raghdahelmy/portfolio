import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Code2, 
  Server, 
  Database, 
  Cpu, 
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
  Download,
  Zap
} from 'lucide-react';
import { NAV_LINKS, SKILLS, PROJECTS, EXPERIENCE, EDUCATION, PHILOSOPHY } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-yellow-100 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 via-violet-600 to-yellow-400 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-indigo-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Terminal className="text-white w-6 h-6 relative z-10" />
          </div>
          <span className="font-display font-black text-2xl tracking-tighter text-brand-heading">RH<span className="text-yellow-500 animate-pulse">.</span>DEV</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a 
            href="/cv.pdf" 
            download="Raghda_Helmy_CV.pdf"
            className="nav-link flex items-center gap-1"
          >
            CV <Download className="w-4 h-4" />
          </a>
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-indigo-500/25 hover:scale-105 active:scale-95 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Hire Me</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-brand-heading p-2 glass-card rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-indigo-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xl font-bold text-indigo-700 hover:text-brand-primary transition-colors flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Building Scalable Backend Systems.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="blob w-[600px] h-[600px] bg-indigo-200/30 top-[-10%] left-[-10%] animate-blob" />
      <div className="blob w-[500px] h-[500px] bg-yellow-200/30 bottom-[-10%] right-[-10%] animate-blob-delayed" />
      <div className="blob w-[400px] h-[400px] bg-violet-200/20 top-[20%] right-[10%] animate-blob-slow" />
      
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-indigo-500/[0.02] select-none pointer-events-none z-0 tracking-tighter">
        RH.DEV
      </div>
      
      {/* Floating Creative Elements */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-12 h-12 border-4 border-indigo-500/20 rounded-xl hidden lg:block" 
      />
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-yellow-400/20 rounded-full hidden lg:block" 
      />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-700 text-xs font-mono mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
            </span>
            Available for new opportunities
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[1] mb-8 min-h-[2.2em] md:min-h-[auto] text-brand-heading tracking-tight">
            {text}<span className="animate-pulse text-yellow-500">_</span>
          </h1>
          <p className="text-indigo-900/80 text-xl md:text-2xl mb-12 max-w-xl leading-relaxed font-medium">
            Hi, I'm <span className="text-indigo-600 font-black underline decoration-yellow-400 decoration-4 underline-offset-8">Raghda Helmy</span>. A Backend Architect crafting high-performance Laravel ecosystems.
          </p>
          <div className="flex flex-wrap gap-6">
            <a 
              href="#projects" 
              className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black transition-all flex items-center gap-3 group relative overflow-hidden shadow-2xl shadow-indigo-500/30 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Explore Work</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
            </a>
            <a 
              href="/cv.pdf" 
              download="Raghda_Helmy_CV.pdf"
              className="px-8 py-4 glass-card hover:bg-white text-brand-heading rounded-2xl font-bold transition-all flex items-center gap-2 group hover:scale-105 active:scale-95"
            >
              Download CV
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4">
              <a href="https://github.com/raghdahelmy" target="_blank" className="p-4 glass-card hover:bg-white transition-all hover:scale-110 hover:text-indigo-600 text-brand-heading">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/raghda-helmy-12b201129" target="_blank" className="p-4 glass-card hover:bg-white transition-all hover:scale-110 hover:text-indigo-600 text-brand-heading">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: 'spring' }}
          className="relative hidden md:block"
        >
          <div className="glass-card p-8 border-indigo-100 relative z-10 shadow-2xl shadow-indigo-500/5 group">
            <div className="flex items-center gap-2 mb-6 border-b border-yellow-50 pb-4">
              <div className="w-3 h-3 rounded-full bg-indigo-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-violet-400/80" />
              <span className="ml-2 text-xs font-mono text-yellow-600/60">raghda_helmy.php</span>
            </div>
            <pre className="font-mono text-sm leading-relaxed text-indigo-900/80">
              <code>{`class BackendDeveloper {
  public $name = "Raghda Helmy";
  public $role = "Backend Architect";
  public $stack = ["Laravel", "MySQL", "Redis"];

  public function getExpertise() {
    return [
      "RESTful APIs",
      "Multi-tenancy",
      "Database Optimization"
    ];
  }

  public function status() {
    return "Building the future of SaaS";
  }
}`}</code>
            </pre>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-400 to-yellow-400 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200 -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-white/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="creative-title"
          >
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h2>
          <p className="text-indigo-900/80 max-w-2xl mx-auto text-xl font-medium">
            Architecting high-performance backend systems with precision and modern PHP standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 hover:border-indigo-400 hover:-translate-y-3 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-10 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-indigo-500/10">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-black mb-8 text-brand-heading">{skill.category}</h3>
              <ul className="space-y-4">
                {skill.items.map(item => (
                  <li key={item} className="text-indigo-900/70 text-base font-medium flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 group-hover:bg-indigo-600 transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[30vw] font-black text-indigo-500/[0.01] select-none pointer-events-none rotate-90">
        DESIGN
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PHILOSOPHY.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[2.5rem] border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                item.color === 'indigo' ? 'bg-indigo-50/50 border-indigo-100 hover:border-indigo-300 hover:shadow-indigo-500/10' :
                item.color === 'yellow' ? 'bg-yellow-50/50 border-yellow-100 hover:border-yellow-300 hover:shadow-yellow-500/10' :
                'bg-violet-50/50 border-violet-100 hover:border-violet-300 hover:shadow-violet-500/10'
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg ${
                item.color === 'indigo' ? 'bg-indigo-600 text-white shadow-indigo-500/20' :
                item.color === 'yellow' ? 'bg-yellow-500 text-white shadow-yellow-500/20' :
                'bg-violet-600 text-white shadow-violet-500/20'
              }`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-brand-heading tracking-tight">{item.title}</h3>
              <p className="text-indigo-900/70 font-medium leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div>
            <h2 className="creative-title">Selected <span className="text-gradient">Works</span></h2>
            <p className="text-indigo-900/80 max-w-xl text-xl font-medium">
              A showcase of robust backend architectures and multi-tenant SaaS solutions.
            </p>
          </div>
          <a href="https://github.com/raghdahelmy" target="_blank" className="flex items-center gap-3 text-indigo-600 hover:text-indigo-700 font-black text-lg transition-all hover:gap-5 group">
            Explore GitHub <ExternalLink className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden group flex flex-col hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] relative"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
              <div className="p-12 flex-1 relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <h3 className="text-4xl font-black group-hover:text-indigo-600 transition-colors text-brand-heading tracking-tight">{project.title}</h3>
              <div className="flex gap-3">
                <a href={project.link} target="_blank" className="p-4 bg-indigo-50 hover:bg-indigo-600 hover:text-white rounded-2xl transition-all hover:scale-110 text-indigo-600 shadow-sm" title={project.link.includes('github.com') ? "Source Code" : "Live Preview"}>
                  {project.link.includes('github.com') ? <Github className="w-7 h-7" /> : <ExternalLink className="w-7 h-7" />}
                </a>
                {'liveLink' in project && project.liveLink && (
                  <a href={project.liveLink} target="_blank" className="p-4 bg-indigo-50 hover:bg-indigo-600 hover:text-white rounded-2xl transition-all hover:scale-110 text-indigo-600 shadow-sm" title="Live Preview">
                    <ExternalLink className="w-7 h-7" />
                  </a>
                )}
              </div>
                </div>
                <p className="text-indigo-900/80 mb-10 leading-relaxed text-xl font-medium">
                  {project.description}
                </p>
                <div className="space-y-5 mb-12">
                  {project.features.map(feature => (
                    <div key={feature} className="flex items-center gap-4 text-indigo-600/80 font-semibold">
                      <div className="w-6 h-6 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-yellow-600" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={tag} 
                      className={`creative-tag ${
                        i % 3 === 0 ? 'creative-tag-indigo' :
                        i % 3 === 1 ? 'creative-tag-yellow' :
                        'creative-tag-violet'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-white/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1">
            <h2 className="creative-title">Career <span className="text-gradient">Path</span></h2>
            <p className="text-indigo-900/80 mb-16 text-xl font-medium">
              A journey of growth, architecting scalable solutions and mastering the backend ecosystem.
            </p>
            <div className="space-y-12">
              {EDUCATION.map((edu) => (
                <div key={edu.degree} className="relative pl-12 border-l-4 border-indigo-100 group">
                  <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-white border-4 border-indigo-600 group-hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/20" />
                  <span className="text-sm font-black font-mono text-indigo-600 mb-3 block uppercase tracking-widest">{edu.period}</span>
                  <h4 className="text-2xl font-black text-brand-heading mb-3 tracking-tight">{edu.degree}</h4>
                  <p className="text-indigo-600/70 font-semibold">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            {EXPERIENCE.map((exp) => (
              <motion.div 
                key={exp.company} 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-12 relative group hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
                  <div>
                    <h3 className="text-4xl font-black text-indigo-600 mb-3 tracking-tight">{exp.role}</h3>
                    <p className="text-2xl text-brand-heading font-black">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="px-6 py-2 bg-yellow-100 border border-yellow-200 text-yellow-800 rounded-2xl text-sm font-black font-mono uppercase tracking-wider">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-6">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-5 text-indigo-900/80 leading-relaxed text-xl font-medium">
                      <div className="w-8 h-8 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0 mt-1 shadow-sm">
                        <Zap className="w-5 h-5 text-indigo-600" />
                      </div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-24 relative overflow-hidden group shadow-2xl shadow-indigo-500/10"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-200/20 blur-[150px] rounded-full -z-10 group-hover:bg-yellow-300/20 transition-colors duration-1000" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-200/20 blur-[120px] rounded-full -z-10 group-hover:bg-indigo-300/20 transition-colors duration-1000" />
          
          {/* Background Decorative Element */}
          <div className="absolute -left-20 bottom-0 text-[20vw] font-black text-indigo-500/[0.01] select-none pointer-events-none">
            HELLO
          </div>
          
        {/* تم تغيير الـ gap ليكون 12 في الموبايل و 20 في الشاشات الكبيرة */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
  <div>
    {/* تصغير الخط في الموبايل (text-3xl) وزيادته تدريجياً */}
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
      Let's build <span className="text-gradient">magic</span>.
    </h2>
    <p className="text-indigo-900/80 text-lg md:text-2xl mb-8 md:mb-16 leading-relaxed font-medium">
      Open for collaborations, interesting projects, or just a coffee chat about backend architecture.
    </p>
    
    {/* تقليل المسافات بين أزرار التواصل في الموبايل */}
    <div className="space-y-6 md:space-y-10">
      <motion.a 
        href="mailto:raghda.helmy82@gmail.com" 
        className="flex items-center gap-4 md:gap-8 group/item"
        whileHover="hover"
      >
        {/* تصغير حجم أيقونة الميل في الموبايل */}
        <motion.div 
          variants={{ hover: { rotate: 12, scale: 1.1 } }}
          className="w-14 h-14 md:w-20 md:h-20 bg-indigo-50 rounded-2xl md:rounded-[2rem] flex items-center justify-center text-indigo-600 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all duration-500 shadow-xl"
        >
          <Mail className="w-7 h-7 md:w-10 md:h-10" />
        </motion.div>
        {/* min-w-0 مع truncate عشان الإيميل الطويل ميكسرش الـ layout في الموبايل */}
        <div className="min-w-0 flex-1">
          <p className="text-[10px] md:text-xs font-black font-mono text-indigo-400 uppercase tracking-[0.3em] mb-1 md:mb-2">Direct Line</p>
          <p className="text-base md:text-2xl font-black text-brand-heading group-hover/item:text-indigo-600 transition-colors tracking-tight truncate">
            raghda.helmy82@gmail.com
          </p>
        </div>
      </motion.a>

      <motion.a 
        href="https://linkedin.com/in/raghda-helmy-12b201129" 
        target="_blank" 
        className="flex items-center gap-4 md:gap-8 group/item"
        whileHover="hover"
      >
        <motion.div 
          variants={{ hover: { rotate: -12, scale: 1.1 } }}
          className="w-14 h-14 md:w-20 md:h-20 bg-indigo-50 rounded-2xl md:rounded-[2rem] flex items-center justify-center text-indigo-600 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all duration-500 shadow-xl"
        >
          <Linkedin className="w-7 h-7 md:w-10 md:h-10" />
        </motion.div>
        <div>
          <p className="text-[10px] md:text-xs font-black font-mono text-indigo-400 uppercase tracking-[0.3em] mb-1 md:mb-2">Network</p>
          <p className="text-base md:text-2xl font-black text-brand-heading group-hover/item:text-indigo-600 transition-colors tracking-tight">LinkedIn Profile</p>
        </div>
      </motion.a>
    </div>
  </div>

  {/* WhatsApp Card: تعديل الـ padding والخطوط */}
  <div className="bg-white/60 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-indigo-100 flex flex-col items-center justify-center text-center relative overflow-hidden group/wa shadow-inner">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-yellow-500/5 opacity-0 group-hover/wa:opacity-100 transition-opacity duration-500" />
    <div className="w-20 h-20 md:w-28 md:h-28 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-6 md:mb-10 animate-float relative z-10 shadow-lg">
      <Zap className="w-10 h-10 md:w-14 md:h-14" />
    </div>
    <h3 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 relative z-10 text-brand-heading tracking-tight">Instant Chat</h3>
    <p className="text-indigo-900/80 mb-8 md:mb-12 text-base md:text-xl font-medium relative z-10 leading-relaxed">
      Need a quick response? Let's talk directly on WhatsApp.
    </p>
    <a 
      href="https://wa.me/201062980628" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-full py-4 md:py-6 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl md:rounded-[2rem] font-black transition-all shadow-xl flex items-center justify-center gap-3 md:gap-5 text-lg md:text-2xl relative z-10 hover:scale-[1.02] active:scale-95"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-10 md:h-10 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      Chat on WhatsApp
    </a>
  </div>
</div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-indigo-100 bg-white/30 backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-violet-600 to-yellow-400 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-indigo-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Terminal className="text-white w-6 h-6 relative z-10" />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter text-brand-heading">RH<span className="text-yellow-500 animate-pulse">.</span>DEV</span>
          </div>
          
          <div className="flex gap-10">
            <a href="https://github.com/raghdahelmy" target="_blank" className="text-indigo-400 hover:text-indigo-600 transition-all hover:scale-125 hover:-rotate-12">
              <Github className="w-7 h-7" />
            </a>
            <a href="https://linkedin.com/in/raghda-helmy-12b201129" target="_blank" className="text-indigo-400 hover:text-indigo-600 transition-all hover:scale-125 hover:rotate-12">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="mailto:raghda.helmy82@gmail.com" className="text-indigo-400 hover:text-indigo-600 transition-all hover:scale-125 hover:-rotate-12">
              <Mail className="w-7 h-7" />
            </a>
          </div>

          <p className="text-indigo-900/50 font-black font-mono text-sm uppercase tracking-widest">
            © {new Date().getFullYear()} • Crafted with <span className="text-yellow-500 animate-pulse">❤</span> by Raghda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen selection:bg-yellow-400/30 selection:text-indigo-900 cursor-default">
      {/* Custom Cursor Glow */}
      <div 
        className="fixed w-[400px] h-[400px] bg-indigo-400/5 blur-[100px] rounded-full pointer-events-none z-0 transition-transform duration-300 ease-out hidden md:block"
        style={{ 
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)` 
        }}
      />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Philosophy />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
