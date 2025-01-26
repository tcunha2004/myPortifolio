import React, { useState, useEffect } from 'react';
import { 
  FileText,
  Github, 
  Linkedin, 
  Mail,
  Menu,
  X
} from 'lucide-react';

const TechSkill = ({ icon: Icon, name, description }: { icon: React.ElementType, name: string, description: string }) => {
  return (
    <div className="group relative flex flex-col items-center p-6 bg-black/30 rounded-xl backdrop-blur-sm border border-navy-500/10 transition-all duration-300 hover:scale-105 hover:bg-black/40">
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        {name === 'Java' && (
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" 
               alt="Java" 
               className="w-12 h-12"
          />
        )}
        {name === 'SQL' && (
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" 
               alt="SQL" 
               className="w-12 h-12"
          />
        )}
        {name === 'JavaScript' && (
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" 
               alt="JavaScript" 
               className="w-12 h-12"
          />
        )}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-400 text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity">
        {description}
      </p>
    </div>
  );
};

const Section = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
  <section id={id} className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-white mb-10 border-b border-navy-800 pb-4">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id') || '';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'languages', label: 'Languages' },
    { id: 'contact', label: 'Contact' },
  ];

  const technicalSkills = [
    { name: 'Java', description: 'Desenvolvimento backend com Spring Boot, Hibernate (JPA), e APIs RESTful' },
    { name: 'SQL', description: 'Gerenciamento de bancos de dados relacionais e consultas avançadas' },
    { name: 'JavaScript', description: 'Desenvolvimento web com foco em soluções interativas e responsivas' }
  ];

  const softSkills = [
    'Comunicação eficiente',
    'Proatividade',
    'Trabalho em equipe',
    'Adaptabilidade'
  ];

  const projects = [
    {
      name: 'Screen Match',
      description: 'Projeto em Java com Spring Boot utilizando JPA para gerenciar dados de filmes e séries em um banco relacional, com suporte completo a CRUD. Inclui integração com uma API externa para tradução e manipulação de dados, permitindo consultas avançadas com JPQL.',
      url: 'https://github.com/tcunha2004/java-screenmatch-JPA'
    },
    {
      name: 'Car Fipe',
      description: 'Projeto Full-Stack desenvolvido com JavaScript e Java para o backend, utilizando o framework Spring para o consumo e construção de APIs eintegrações via solicitações HTTP',
      url: 'https://car-fipe-livid.vercel.app/'
    },
    {
      name: 'Solve Math',
      description: 'Solução baseada em JavaScript projetada para simplificar e automatizar cálculos matemáticos complexos de forma intuitiva e eficiente. Oferece suporte para operações aritméticas avançadas, cálculos em tempo real e uma interface responsiva para dispositivos móveis e desktop.',
      url: 'https://calculator-js-two-plum.vercel.app/'
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-navy-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <FileText className="h-8 w-8 text-navy-400" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`${
                      activeSection === item.id
                        ? 'text-navy-400'
                        : 'text-gray-300 hover:text-white'
                    } transition-colors duration-200`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${
                    activeSection === item.id
                      ? 'text-navy-400'
                      : 'text-gray-300'
                  } block px-3 py-2 w-full text-left hover:bg-black/60 rounded-md`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Section id="home" title="">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)] gap-12 pt-16">
          <div className="w-64 h-64 lg:w-96 lg:h-96 relative lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-navy-500 to-blue-500 rounded-full transform rotate-6 opacity-20"></div>
            <img
              src="https://i.imgur.com/UY4icUr.jpeg"
              alt="Thiago Cunha"
              className="w-full h-full object-cover rounded-full relative z-10 border-4 border-navy-400/30"
            />
          </div>
          
          <div className="flex-1 lg:max-w-2xl lg:order-1">
            <h1 className="text-5xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-navy-400 to-blue-500 text-transparent bg-clip-text">
                Thiago Cunha
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8">
              Prazer, me chamo Thiago e sou estudante de Programação com experiência internacional e forte
              habilidade em desenvolvimento backend, especialmente com Java.
              Durante três anos, combinei formação acadêmica com esportes,
              estudando nos Estados Unidos com bolsa atlética e na PUC Minas.
              Paralelamente, busquei aprimoramento contínuo em tecnologia por meio
              de plataformas como Alura. Minha trajetória inclui experiências práticas
              diversas no exterior, que reforçaram minha resiliência e adaptabilidade.
              Trago uma perspectiva global e capacidade de comunicação eficaz em
              diferentes contextos. Busco oportunidades para aplicar e expandir meu
              conhecimento em desenvolvimento de software, contribuindo para
              projetos inovadores e impactantes.
            </p>
          </div>
        </div>
      </Section>

      {/* Technical Skills Section */}
      <Section id="skills" title="Technical Skills">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technicalSkills.map((skill, index) => (
            <TechSkill
              key={index}
              icon={FileText}
              name={skill.name}
              description={skill.description}
            />
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-extrabold mb-8 text-navy-400">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-black/30 rounded-lg p-4 text-center border border-navy-500/10 hover:border-navy-400/50 transition-colors">
                <span className="text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education">
        <div className="space-y-6">
          <div className="bg-black/30 rounded-xl p-6 border border-navy-500/10 hover:border-navy-400/50 transition-all duration-300">
            <h3 className="text-xl font-extrabold mb-2">Computer Science</h3>
            <p className="text-gray-400">North American University</p>
            <p className="text-gray-500">Stafford, Texas</p>
          </div>
          <div className="bg-black/30 rounded-xl p-6 border border-navy-500/10 hover:border-navy-400/50 transition-all duration-300">
            <h3 className="text-xl font-extrabold mb-2">Ciências da Computação</h3>
            <p className="text-gray-400">PUC Minas</p>
            <p className="text-gray-500">Belo Horizonte, MG - Em andamento</p>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience">
        <div className="space-y-6">
          <div className="bg-black/30 rounded-xl p-6 border border-navy-500/10 hover:border-navy-400/50 transition-all duration-300">
            <h3 className="text-xl font-extrabold mb-2">Tutor e Mentor Acadêmico</h3>
            <p className="text-navy-400 mb-2">North American University</p>
            <p className="text-gray-400">Auxiliando estudantes em seu desenvolvimento acadêmico e profissional</p>
          </div>
          <div className="bg-black/30 rounded-xl p-6 border border-navy-500/10 hover:border-navy-400/50 transition-all duration-300">
            <h3 className="text-xl font-extrabold mb-2">Instrutor de Inglês como Segunda Língua (ESL)</h3>
            <p className="text-navy-400 mb-2">Preply</p>
            <p className="text-gray-400">Ensino personalizado de inglês para estudantes internacionais</p>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-black/30 rounded-xl p-6 border border-navy-500/10 hover:border-navy-400/50 transition-all duration-300">
              <h3 className="text-xl font-extrabold mb-3">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block bg-gradient-to-r from-navy-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Ver Projeto
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Languages Section */}
      <Section id="languages" title="Languages">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/30 rounded-xl p-6 border border-navy-500/10 hover:border-navy-400/50 transition-all duration-300">
            <h3 className="text-xl font-extrabold mb-3">Português</h3>
            <p className="text-navy-400">Fluente</p>
            <p className="text-gray-400 mt-2">Língua nativa</p>
          </div>
          <div className="bg-black/30 rounded-xl p-6 border border-navy-500/10 hover:border-navy-400/50 transition-all duration-300">
            <h3 className="text-xl font-extrabold mb-3">English</h3>
            <p className="text-navy-400">Fluent</p>
            <p className="text-gray-400 mt-2">Professional working proficiency</p>
          </div>
          <div className="bg-black/30 rounded-xl p-6 border border-navy-500/10 hover:border-navy-400/50 transition-all duration-300">
            <h3 className="text-xl font-extrabold mb-3">Español</h3>
            <p className="text-navy-400">Avanzado</p>
            <p className="text-gray-400 mt-2">Nivel profesional</p>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a 
              href="https://github.com/tcunha2004" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
            >
              <Github className="w-8 h-8 text-navy-400 group-hover:text-navy-300" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/thiago-cunha-abb76732b/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
            >
              <Linkedin className="w-8 h-8 text-navy-400 group-hover:text-navy-300" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:tcunhalinkedin@gmail.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
            >
              <Mail className="w-8 h-8 text-navy-400 group-hover:text-navy-300" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;