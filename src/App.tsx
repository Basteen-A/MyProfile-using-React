import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code, 
  Database, 
  Server, 
  Award, 
  Calendar,
  BookOpen,
  Briefcase,
  Star,
  ChevronRight,
  Download,
  User,
  ArrowUp,
  Menu,
  X,
  Target,
  Zap,
  Globe,
  Smartphone,
  FileText,
  Monitor,
  Coffee,
  GitBranch,
  Eye,
  Code2
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowScrollTop(currentScrollY > 500);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'repositories', 'education', 'achievements', 'contact'];
      const scrollPosition = currentScrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = [
    { name: 'Java', level: 85, icon: Code, color: 'from-orange-400 to-red-500' },
    { name: 'PHP', level: 80, icon: Server, color: 'from-purple-400 to-indigo-500' },
    { name: 'JavaScript', level: 90, icon: Code, color: 'from-yellow-400 to-orange-500' },
    { name: 'React.js', level: 88, icon: Code, color: 'from-blue-400 to-cyan-500' },
    { name: 'Node.js', level: 82, icon: Server, color: 'from-green-400 to-emerald-500' },
    { name: 'MySQL', level: 85, icon: Database, color: 'from-blue-500 to-indigo-600' },
    { name: 'Git', level: 75, icon: Code, color: 'from-gray-400 to-gray-600' },
  ];

  const projects = [
    {
      title: 'Farm Tractor Mobile App',
      description: 'Mobile App for Tractor Service Automation in Rural India',
      tech: ['React Native', 'Node.js', 'MySQL', 'UPI Integration'],
      highlights: [
        'Reduced billing errors by 95%',
        'Integrated UPI payment gateways (Google Pay, PhonePe, Paytm)',
        'Optimized for low-connectivity rural environments',
        'Cross-platform mobile app using React Native and Expo'
      ],
      impact: 'Automated tractor usage tracking and billing for rural farmers',
      icon: Smartphone,
      gradient: 'from-green-400 to-blue-500'
    },
    {
      title: 'Inter College Meet Portal',
      description: 'Web Application for Event Management',
      tech: ['PHP', 'MySQL'],
      highlights: [
        'Streamlined event coordination across departments',
        'Real-time communication system',
        'Role-based access control',
        'Live results tracking and management'
      ],
      impact: 'Improved event execution speed and reduced manual workload',
      icon: Globe,
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  const repositories = [
    {
      name: 'Farm-Tractor-App',
      description: 'React Native mobile application for tractor service automation in rural India with UPI payment integration',
      tech: ['React Native', 'Node.js', 'MySQL', 'Expo'],
      stars: 12,
      forks: 5,
      demoLink: 'https://expo.dev/accounts/bastee/projects/TRACKTOR',
      repoLink: 'https://github.com/Basteen-A/Farm-Tract',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      name: 'Event-Management-Portal',
      description: 'PHP-based web application for managing inter-college events with real-time tracking and role-based access',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      stars: 8,
      forks: 3,
      demoLink: 'https://aacinter.infinityfreeapp.com',
      repoLink: 'https://github.com/Basteen-A/INTER-COLLEGE-MEET-EVENT-PORTAL-USING-PHP-MYSQL',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Portfolio-Website',
      description: 'Modern responsive portfolio website built with React.js and Tailwind CSS featuring smooth animations',
      tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'AOS'],
      stars: 15,
      forks: 7,
      demoLink: 'https://basteen-a.github.io/My_Portfoliyo/index',
      repoLink: 'https://github.com/Basteen-A/My_Portfoliyo',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Blood Donor App Using PHP and MySQL',
      description: 'RESTful API Advanced Blood Donor Application For College Institute in Emergency situation',
      tech: ['PHP', 'MySQL', 'MongoDB', 'JWT'],
      stars: 6,
      forks: 2,
      demoLink: 'https://coe.aactni.edu.in/apr24/22csc103/',
      repoLink: 'https://github.com/Basteen-A/E-Commerce-API',
      gradient: 'from-emerald-400 to-teal-500'
    },
    {
      name: 'Todo-list-App',
      description: 'Full-stack task management application with real-time updates and collaborative features',
      tech: ['React.js', 'Node.js', 'Socket.io', 'PostgreSQL'],
      stars: 10,
      forks: 4,
      demoLink: 'https://basteen-a.github.io/Todo-list-using-JavaScript ',
      repoLink: 'https://github.com/Basteen-A/Task-Manager-App',
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      name: 'Weather-Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts and beautiful data visualizations',
      tech: ['JavaScript', 'Chart.js', 'OpenWeather API', 'CSS3'],
      stars: 9,
      forks: 3,
      demoLink: 'https://basteen-a.github.io/Simple-Weather-app-using-Javascript/',
      repoLink: 'https://github.com/Basteen-A/Simple-Weather-app-using-Javascript',
      gradient: 'from-sky-400 to-blue-500'
    }
  ];

  const certifications = [
    { name: 'Programming in Java – NPTEL', grade: 'Elite', icon: Award, color: 'bg-orange-500' },
    { name: 'Basics of Python – Infosys Springboard', grade: 'Certified', icon: Award, color: 'bg-blue-500' },
    { name: 'JavaScript – SoloLearn', grade: 'Certified', icon: Award, color: 'bg-yellow-500' },
    { name: 'Web Development – SoloLearn', grade: 'Certified', icon: Award, color: 'bg-green-500' },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Repositories', 'Education', 'Contact'];

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left side - Profile and Brand */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg">
                  <img 
                    src="https://avatars.githubusercontent.com/u/138352742?v=4" 
                    alt="Basteen Santhiyagu A"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden sm:block">
                  <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Basteen.dev
                  </div>
                  <div className="text-xs text-gray-500">Full Stack Developer</div>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full ${
                    activeSection === item.toLowerCase() ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Right side - Social Links and Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Social Links - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-3">
                <a 
                  href="https://github.com/Basteen-A" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/basteen-santhiyagu-a-029443222/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:santhiyagubasteen@gmail.com"
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-xl transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-gray-600 hover:text-blue-600 font-medium py-3 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                {item}
              </button>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex justify-center gap-4 pt-4 border-t border-gray-200">
              <a 
                href="https://github.com/Basteen-A" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/basteen-santhiyagu-a-029443222/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:santhiyagubasteen@gmail.com"
                className="p-3 bg-gray-100 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-80 h-80 bg-white/5 rounded-full blur-3xl top-1/2 -right-40 animate-pulse delay-1000"></div>
          <div className="absolute w-64 h-64 bg-white/10 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Content */}
            <div className="text-white space-y-8" data-aos="fade-right">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Hi all, I'm <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Basteen</span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                  A passionate Full Stack Web Developer and Mobile App Developer having an experience of building web applications with 
                  <span className="text-yellow-300 font-semibold"> JavaScript / React.js / Node.js / PHP / Java</span> and some other cool libraries and frameworks and Cross Platform Mobile Apps With 
                  <span className="text-yellow-300 font-semibold"> React Native</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group flex items-center gap-3 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Mail size={20} />
                  Contact Me
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button 
                  className="group flex items-center gap-3 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <FileText size={20} />
                 <a  href="https://drive.google.com/file/d/1MnfeC42iNiGf1kpaPsbjCWfI2Q4okX4B/view?usp=drivesdk">See My Resume</a> 
                  <Download size={16} className="group-hover:translate-y-1 transition-transform duration-200"  />
                </button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a 
                  href="https://github.com/Basteen-A" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/basteen-santhiyagu-a-029443222/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:santhiyagubasteen@gmail.com"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                >
                  <Mail size={24} />
                </a>
                <a 
                  href="tel:+919345318251"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                >
                  <Phone size={24} />
                </a>
              </div>
            </div>

            {/* Right Content - Developer Illustration */}
            <div className="relative" data-aos="fade-left" data-aos-delay="200">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                {/* Developer Setup Illustration */}
                <div className="relative">
                  {/* Desk */}
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-4 rounded-lg mb-4"></div>
                  
                  {/* Monitor */}
                  <div className="bg-gray-800 rounded-lg p-4 mb-4 relative">
                    <div className="bg-gray-900 rounded h-32 flex items-center justify-center">
                      <Monitor className="text-blue-400" size={48} />
                    </div>
                    <div className="bg-gray-700 h-2 rounded-b-lg"></div>
                  </div>
                  
                  {/* Laptop */}
                  <div className="bg-gray-700 rounded-lg p-2 mb-4 transform -rotate-12 relative -mt-8 ml-8">
                    <div className="bg-gray-900 rounded h-16 flex items-center justify-center">
                      <Code className="text-green-400" size={24} />
                    </div>
                  </div>
                  
                  {/* Coffee Cup */}
                  <div className="absolute top-4 right-4 bg-yellow-600 rounded-full w-8 h-8 flex items-center justify-center">
                    <Coffee className="text-white" size={16} />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -left-4 bg-yellow-400 rounded-full w-6 h-6 animate-bounce"></div>
                  <div className="absolute -bottom-2 -right-2 bg-green-400 rounded-full w-4 h-4 animate-bounce delay-300"></div>
                  <div className="absolute top-1/2 -left-6 bg-purple-400 rounded-full w-3 h-3 animate-bounce delay-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <User className="text-blue-600" size={32} />
                  Professional Summary
                </h3>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    I'm a passionate Full Stack Developer with practical experience in building scalable and responsive 
                    web and mobile applications. My expertise spans across multiple technologies including Java, PHP, 
                    React.js, and Node.js.
                  </p>
                  <p className="text-lg">
                    I'm proficient in both front-end and back-end development, RESTful API integration, and database design. 
                    I follow Agile methodologies and maintain clean code practices using version control systems like Git.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="group text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">2+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="group text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">10+</div>
                  <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6" data-aos="fade-left">
              <div className="group flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="100">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Location</div>
                  <div className="text-gray-600">Dindigul, Tamil Nadu</div>
                </div>
              </div>
              
              <div className="group flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="200">
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                  <Phone className="text-white" size={28} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Phone</div>
                  <div className="text-gray-600">+91 9345318251</div>
                </div>
              </div>
              
              <div className="group flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="300">
                <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
                  <Mail className="text-white" size={28} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Email</div>
                  <div className="text-gray-600">santhiyagubasteen@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name} 
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${skill.color} rounded-xl shadow-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{skill.name}</h3>
                  </div>
                  
                  <div className="relative">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-600 font-medium">Proficiency</span>
                      <span className="text-lg font-bold text-gray-900">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out transform origin-left`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white border-8 border-blue-600 rounded-full p-6 mb-12 shadow-2xl">
                <Briefcase className="text-blue-600" size={40} />
              </div>
              
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl max-w-3xl w-full hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Web Developer Intern</h3>
                  <p className="text-lg sm:text-xl text-blue-600 font-bold mb-2">Sputnik InfoTech, Tamil Nadu</p>
                  <p className="text-gray-500 flex items-center justify-center gap-2 text-lg">
                    <Calendar size={20} />
                    November 2022 – April 2023
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl" data-aos="fade-right" data-aos-delay="300">
                    <Target className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700 leading-relaxed">
                      Contributed to full-stack web development projects using HTML, CSS, JavaScript, PHP, and MySQL, 
                      assisting in responsive UI design and backend integration during a six-month internship.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl" data-aos="fade-left" data-aos-delay="400">
                    <Zap className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700 leading-relaxed">
                      Collaborated with senior developers to enhance website performance and user experience by optimizing 
                      code, improving load times, and implementing best development practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 border border-gray-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 bg-gradient-to-r ${project.gradient} rounded-2xl shadow-lg`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{project.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">{project.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Highlights:</h4>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3" data-aos="fade-right" data-aos-delay={300 + idx * 100}>
                            <Star className="text-yellow-500 mt-1 flex-shrink-0" size={18} />
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-semibold shadow-lg`}
                            data-aos="zoom-in"
                            data-aos-delay={400 + idx * 50}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`p-6 bg-gradient-to-r ${project.gradient} bg-opacity-10 rounded-2xl`} data-aos="fade-up" data-aos-delay="500">
                      <p className="text-gray-800 font-semibold text-lg">
                        <span className="text-gray-600">Impact:</span> {project.impact}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GitHub Repositories Section */}
      <section id="repositories" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">GitHub Repositories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Explore my open-source projects and contributions on GitHub
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repositories.map((repo, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`h-1 bg-gradient-to-r ${repo.gradient}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 bg-gradient-to-r ${repo.gradient} rounded-lg`}>
                        <GitBranch className="text-white" size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {repo.name}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {repo.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.tech.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {repo.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                        +{repo.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star size={14} />
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitBranch size={14} />
                        <span>{repo.forks}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <a 
                      href={repo.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                    >
                      <Eye size={16} />
                      Demo
                    </a>
                    <a 
                      href={repo.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all duration-300"
                    >
                      <Code2 size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
            <a 
              href="https://github.com/Basteen-A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Github size={24} />
              View All Repositories
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div 
              className="group bg-gradient-to-br from-blue-50 to-indigo-100 p-8 sm:p-10 rounded-3xl border-2 border-blue-200 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              data-aos="fade-right"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                  <BookOpen className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Master of Computer Application</h3>
                  <p className="text-blue-600 font-bold text-lg">NANDHA ENGINEERING COLLEGE, Erode</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/70 rounded-xl" data-aos="fade-up" data-aos-delay="100">
                  <span className="text-gray-600 font-medium">Duration:</span>
                  <span className="font-bold text-gray-900">Sep 2023 - May 2025</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/70 rounded-xl" data-aos="fade-up" data-aos-delay="200">
                  <span className="text-gray-600 font-medium">CGPA:</span>
                  <span className="font-bold text-green-600 text-xl">8.2</span>
                </div>
              </div>
            </div>
            
            <div 
              className="group bg-gradient-to-br from-green-50 to-emerald-100 p-8 sm:p-10 rounded-3xl border-2 border-green-200 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              data-aos="fade-left"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-lg">
                  <BookOpen className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Bachelor of Computer Science</h3>
                  <p className="text-green-600 font-bold text-lg">ARUL ANANDAR COLLEGE, Madurai</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/70 rounded-xl" data-aos="fade-up" data-aos-delay="100">
                  <span className="text-gray-600 font-medium">Duration:</span>
                  <span className="font-bold text-gray-900">Jul 2020 - Apr 2023</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/70 rounded-xl" data-aos="fade-up" data-aos-delay="200">
                  <span className="text-gray-600 font-medium">CGPA:</span>
                  <span className="font-bold text-green-600 text-xl">7.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">Achievements & Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div 
              className="group bg-white p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100"
              data-aos="fade-right"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-lg">
                  <Award className="text-white" size={40} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Coding Platforms</h3>
                  <p className="text-gray-600 text-lg">Problem Solving Excellence</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Solved 60+ questions on various coding platforms to strengthen data structures and algorithm skills.
              </p>
              
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full text-sm font-semibold shadow-lg">
                  LeetCode
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-sm font-semibold shadow-lg">
                  HackerRank
                </span>
              </div>
            </div>
            
            <div 
              className="group bg-white p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100"
              data-aos="fade-left"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                  <Star className="text-white" size={40} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Best Project Award</h3>
                  <p className="text-gray-600 text-lg">Department Recognition</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Awarded Best Project in department for building a comprehensive web application using PHP and MySQL 
                with advanced features and excellent user experience.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="text-center">
                    <div className={`p-4 ${cert.color} rounded-2xl inline-block mb-6 shadow-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-4 text-lg leading-tight">{cert.name}</h4>
                    <span className={`px-4 py-2 ${cert.color} text-white rounded-full text-sm font-semibold shadow-lg`}>
                      {cert.grade}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Let's Work Together</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full mb-8"></div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="group flex items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg">
                  <Mail className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Email</h4>
                  <p className="opacity-90 text-lg">santhiyagubasteen@gmail.com</p>
                </div>
              </div>
              
              <div className="group flex items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
                  <Phone className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Phone</h4>
                  <p className="opacity-90 text-lg">+91 9345318251</p>
                </div>
              </div>
              
              <div className="group flex items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
                <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Location</h4>
                  <p className="opacity-90 text-lg">Dindigul, Tamil Nadu, India</p>
                </div>
              </div>
              
              <div className="flex space-x-6 pt-8" data-aos="fade-up" data-aos-delay="400">
                <a 
                  href="https://github.com/Basteen-A" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <Github size={28} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/basteen-santhiyagu-a-029443222/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <Linkedin size={28} />
                </a>
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <ExternalLink size={28} />
                </a>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 sm:p-10 rounded-3xl shadow-2xl" data-aos="fade-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div data-aos="fade-up" data-aos-delay="100">
                  <label className="block text-sm font-semibold mb-3">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 backdrop-blur-sm transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                  <label className="block text-sm font-semibold mb-3">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 backdrop-blur-sm transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <label className="block text-sm font-semibold mb-3">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 resize-none backdrop-blur-sm transition-all duration-300"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  data-aos="fade-up" 
                  data-aos-delay="400"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <p className="text-gray-400 text-lg">
              ©Basteen Santhiyagu A. All rights reserved.
            </p>
            <p className="text-gray-500 mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50"
          data-aos="zoom-in"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Portfolio;