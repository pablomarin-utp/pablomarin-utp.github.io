import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Brain, Bot, Code, Send, Users, Cpu, MessageSquare, Zap, Lightbulb } from 'lucide-react';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [techTip, setTechTip] = useState('');
  const [showTip, setShowTip] = useState(false);

  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });
  const { ref: techRef, inView: techInView } = useInView({ triggerOnce: true });

  const technologies = [
    {
      name: 'Python',
      icon: 'https://www.python.org/static/community_logos/python-logo-generic.svg',
      url: 'https://www.python.org'
    },
    {
      name: 'PyTorch',
      icon: 'https://pytorch.org/assets/images/pytorch-logo.png',
      url: 'https://pytorch.org'
    },
    {
      name: 'TensorFlow',
      icon: 'https://www.tensorflow.org/images/tf_logo_social.png',
      url: 'https://www.tensorflow.org'
    },
    {
      name: 'Keras',
      icon: 'https://keras.io/img/logo.png',
      url: 'https://keras.io'
    },
    {
      name: 'Scikit-learn',
      icon: 'https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png',
      url: 'https://scikit-learn.org'
    },
    {
      name: 'OpenCV',
      icon: 'https://opencv.org/wp-content/uploads/2022/05/logo.png',
      url: 'https://opencv.org'
    },
    {
      name: 'NumPy',
      icon: 'https://numpy.org/images/logo.svg',
      url: 'https://numpy.org'
    },
    {
      name: 'Pandas',
      icon: 'https://pandas.pydata.org/static/img/pandas_white.svg',
      url: 'https://pandas.pydata.org'
    },
    {
      name: 'AWS',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      url: 'https://aws.amazon.com'
    },
    {
      name: 'Docker',
      icon: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
      url: 'https://www.docker.com'
    },
    {
      name: 'FastAPI',
      icon: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png',
      url: 'https://fastapi.tiangolo.com'
    },
    {
      name: 'GitHub',
      icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      url: 'https://github.com'
    }
  ];

  const techTips = [
    "AI Tip: Neural networks learn through backpropagation!",
    "Python Tip: Use list comprehensions for cleaner code",
    "ML Tip: Always normalize your input data",
    "CV Tip: Consider image augmentation for better results",
    "React Tip: Hooks can replace class components",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const showRandomTip = () => {
    const newTip = techTips[Math.floor(Math.random() * techTips.length)];
    setTechTip(newTip);
    setShowTip(true);
    setTimeout(() => setShowTip(false), 3000);
  };

  const skills = {
    technical: [
      { name: 'Machine Learning', level: 95, icon: Brain },
      { name: 'Computer Vision', level: 90, icon: Cpu },
      { name: 'Python', level: 95, icon: Code },
      { name: 'Deep Learning', level: 85, icon: Zap },
    ],
    soft: [
      { name: 'Team Leadership', level: 90, icon: Users },
      { name: 'Communication', level: 95, icon: MessageSquare },
      { name: 'Problem Solving', level: 95, icon: Brain },
      { name: 'Project Management', level: 85, icon: Code },
    ]
  };

  return (
    <div className="min-h-screen bg-primary-950 text-gray-100">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-primary-950/90 backdrop-blur-sm z-50 border-b border-primary-800">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-xl font-bold text-primary-100">PM</a>
              <div className="hidden md:flex space-x-6">
                <a href="#about" className="hover:text-primary-300 transition-colors">About</a>
                <a href="#skills" className="hover:text-primary-300 transition-colors">Skills</a>
                <a href="#projects" className="hover:text-primary-300 transition-colors">Projects</a>
                <a href="#contact" className="hover:text-primary-300 transition-colors">Contact</a>
              </div>
            </div>
            <button
              onClick={showRandomTip}
              className="p-2 rounded-full bg-primary-800 hover:bg-primary-700 transition-colors"
              aria-label="Show random tech tip"
            >
              <Lightbulb className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Tech Tip Toast */}
      {showTip && (
        <div className="fixed top-20 right-4 max-w-sm bg-primary-800 text-white p-4 rounded-lg shadow-lg animate-fade-in">
          {techTip}
        </div>
      )}
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-primary-950" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="overflow-hidden inline-block">
              <h1 className="text-responsive-hero mb-6 text-white whitespace-nowrap overflow-hidden border-r-4 border-primary-400 animate-typing">
                Pablo Marín
              </h1>
            </div>
            <p className="text-responsive-subtitle mb-8 text-primary-200 animate-fade-in">
              AI Research Engineer & Developer
            </p>
            <p className="text-lg sm:text-xl text-primary-300 mb-12 animate-fade-in">
              Crafting intelligent solutions at the intersection of AI and human experience
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-primary-400 hover:bg-primary-500 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 animate-glow"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className={`py-16 sm:py-20 bg-primary-900 transition-all duration-500 ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-responsive-section mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Circular motion app',
                description: 'Physics simulation of circular motion with real-time data visualization and matplotlib grafication',
                image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=800',
                tech: ['Python', 'Opencv', 'Matplotlib']
              },
              {
                title: 'AI Chat Assistant',
                description: 'Contextual chatbot with natural language understanding capabilities',
                image: 'https://images.unsplash.com/photo-1676320831395-7b7d2c808801?auto=format&fit=crop&q=80&w=800',
                tech: ['PyTorch', 'FastAPI', 'React']
              },
              {
                title: 'Smart Data Analysis',
                description: 'Automated data analysis platform using machine learning',
                image: 'https://images.unsplash.com/photo-1668004417206-467d234fa323?auto=format&fit=crop&q=80&w=800',
                tech: ['Scikit-learn', 'pandas', 'Node.js']
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="bg-primary-950 rounded-lg overflow-hidden transition-all duration-300 shadow-xl hover:animate-card-hover"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-primary-800 rounded-full text-sm hover:bg-primary-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Technologies Section */}
<section 
  id="technologies" 
  ref={techRef} 
  className={`py-16 sm:py-20 bg-primary-800 transition-all duration-500 ${
    techInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  <div className="container mx-auto px-4">
    <h2 className="text-responsive-section mb-12 text-center">Technologies</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-8 max-w-6xl mx-auto justify-items-center">
      {technologies.map((tech, index) => (
        <a
          key={index}
          href={tech.url}
          target="_blank"
          rel="noopener noreferrer"
          className="tech-icon group animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-16 h-16 object-scale-down bg-primary-900 rounded p-0 group-hover:animate-float"
          />
          <span className="sr-only">{tech.name}</span>
        </a>
      ))}
    </div>
  </div>
</section>
      {/* About Section */}
      <section id="about" ref={aboutRef} className={`py-16 sm:py-20 bg-primary-900 transition-all duration-500 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-responsive-section mb-12 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              <div className="group hover:transform hover:scale-105 transition-all duration-300">
                <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-primary-300 mb-6 group-hover:text-primary-200 transition-colors" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Background</h3>
                <p className="text-gray-400">
                I specialize in creating intelligent systems that solve real-world problems.
I'm currently pursuing a degree in Systems and Computer Engineering while also learning extensively on my own.
I've worked collaboratively on various projects, strengthening both my technical and teamwork skills.
My goal is to make AI more accessible and beneficial for everyday applications.
                </p>
              </div>
              <div className="group hover:transform hover:scale-105 transition-all duration-300">
                <Code className="w-10 h-10 sm:w-12 sm:h-12 text-primary-300 mb-6 group-hover:text-primary-200 transition-colors" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Current Focus</h3>
                <p className="text-gray-400">
                I'm currently exploring the frontiers of reinforcement learning and working on projects that combine multiple AI disciplines.
I'm specializing in artificial intelligence for scientific development and applying computer vision to support environmental solutions.
My goal is to make AI more accessible and beneficial for everyday applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
  id="skills"
  ref={skillsRef}
  className={`py-16 sm:py-20 bg-primary-950 transition-all duration-500 ${
    skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  <div className="container mx-auto px-4">
    <h2 className="text-responsive-section mb-12 text-center font-pixel">Key Skills</h2>
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 text-center md:text-left">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-primary-200 font-pixel">
            Technical Skills
          </h3>
          <div className="space-y-6">
            {skills.technical.map((skill, index) => (
              <div
                key={index}
                className="group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-300 mr-2" />
                  <span className="font-medium">{skill.name}</span>
                </div>
                <div className="h-2 bg-primary-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: skillsInView ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-primary-200 font-pixel">
            Soft Skills
          </h3>
          <div className="space-y-6">
            {skills.soft.map((skill, index) => (
              <div
                key={index}
                className="group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-300 mr-2" />
                  <span className="font-medium">{skill.name}</span>
                </div>
                <div className="h-2 bg-primary-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: skillsInView ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" ref={contactRef} className={`py-16 sm:py-20 bg-primary-950 transition-all duration-500 ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-responsive-section mb-12 text-center">Get in Touch</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  <a target="_blank" 
  rel="noopener noreferrer" href="https://github.com/pablomarin-utp" className="flex items-center gap-3 text-gray-400 hover:text-primary-300 transition-colors">
                    <Github className="w-6 h-6" />
                    <span>GitHub</span>
                  </a>
                  <a target="_blank" 
  rel="noopener noreferrer" href="https://www.linkedin.com/in/juan-pablo-marin-marin-b00b5b354/" className="flex items-center gap-3 text-gray-400 hover:text-primary-300 transition-colors">
                    <Linkedin className="w-6 h-6" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:pablomarin.aidev@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-primary-300 transition-colors">
                    <Mail className="w-6 h-6" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-primary-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all duration-300"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-primary-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all duration-300"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-primary-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all duration-300"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-400 hover:bg-primary-500 px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 animate-glow"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;