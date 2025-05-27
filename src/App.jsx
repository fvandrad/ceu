import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

function FeatureCard({ title, description, color }) {
  return (
    <motion.div
      className={`p-6 rounded-lg ${color} bg-opacity-20 backdrop-blur-lg relative overflow-hidden`}
      whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255,255,255,0.2)' }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
        {title === 'Aurora Boreal' && (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.54-2.77 8.62-7 10-4.23-1.38-7-5.46-7-10V6.3l7-3.12z"/>
          </svg>
        )}
        {title === 'Noites Estreladas' && (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        )}
        {title === 'Vistas do Pôr do Sol' && (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
          </svg>
        )}
      </div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white opacity-5 rounded-full blur-xl"></div>
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const galleryRef = useRef(null);

  const [heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [featuresInViewRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [galleryInViewRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938',
      title: 'Aurora Boreal na Islândia'
    },
    {
      url: 'https://images.unsplash.com/photo-1464802686167-b939a6910659',
      title: 'Noite Estrelada'
    },
    {
      url: 'https://images.unsplash.com/photo-1586791965591-15d8892f6dd6',
      title: 'Pôr do Sol Majestoso'
    },
    {
      url: 'https://images.unsplash.com/photo-1483086431886-3590a88317fe',
      title: 'Aurora Verde'
    },
    {
      url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a',
      title: 'Via Láctea'
    },
    {
      url: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
      title: 'Crepúsculo Dourado'
    }
  ];

  const slides = galleryImages.map(image => ({
    src: `${image.url}?auto=format&fit=crop&w=1920&h=1080&q=80`,
    alt: image.title,
    title: image.title
  }));

  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-dark to-sky-twilight overflow-hidden">
      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-sky-dark/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">Trae</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-aurora-blue focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`h-6 w-6 transition-transform ${menuOpen ? 'transform rotate-180' : ''}`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <button
                onClick={() => scrollToSection(heroRef)}
                className="text-white hover:text-aurora-blue transition-colors duration-200"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection(featuresRef)}
                className="text-white hover:text-aurora-blue transition-colors duration-200"
              >
                Recursos
              </button>
              <button
                onClick={() => scrollToSection(galleryRef)}
                className="text-white hover:text-aurora-blue transition-colors duration-200"
              >
                Galeria
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${menuOpen ? 'max-h-48' : 'max-h-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-sky-dark/80 backdrop-blur-lg">
            <button
              onClick={() => {
                scrollToSection(heroRef);
                setMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-white hover:text-aurora-blue transition-colors duration-200"
            >
              Início
            </button>
            <button
              onClick={() => {
                scrollToSection(featuresRef);
                setMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-white hover:text-aurora-blue transition-colors duration-200"
            >
              Recursos
            </button>
            <button
              onClick={() => {
                scrollToSection(galleryRef);
                setMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-white hover:text-aurora-blue transition-colors duration-200"
            >
              Galeria
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="section flex flex-col items-center justify-center min-h-screen relative"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="stars absolute inset-0 animate-glow">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.8 + 0.2
                }}
              />
            ))}
          </div>
        </div>
        
        <motion.h1
          className="heading text-center relative z-10"
          initial={{ y: 50 }}
          animate={heroInView ? { y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore a Beleza do Céu
        </motion.h1>
        
        <motion.p
          className="subheading text-center max-w-2xl mx-auto relative z-10"
          initial={{ y: 50 }}
          animate={heroInView ? { y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Testemunhe a dança hipnotizante das auroras, a tranquilidade das noites
          estreladas e as cores vibrantes do pôr do sol.
        </motion.p>
        
        <motion.button
          className="btn-primary relative z-10"
          initial={{ y: 50 }}
          animate={heroInView ? { y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(featuresRef)}
        >
          Comece Sua Jornada
        </motion.button>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={(el) => {
          featuresRef.current = el;
          featuresInViewRef(el);
        }}
        className="section bg-sky-twilight/50 backdrop-blur-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <FeatureCard
            title="Aurora Boreal"
            description="Experimente a mágica aurora boreal dançando através do céu noturno."
            color="bg-aurora-green"
          />
          <FeatureCard
            title="Noites Estreladas"
            description="Contemple as inúmeras estrelas que iluminam a escuridão acima."
            color="bg-aurora-blue"
          />
          <FeatureCard
            title="Vistas do Pôr do Sol"
            description="Testemunhe o céu pintado em tons vibrantes enquanto o dia vira noite."
            color="bg-sunset-orange"
          />
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        ref={(el) => {
          galleryRef.current = el;
          galleryInViewRef(el);
        }}
        className="section bg-sky-dark/50 backdrop-blur-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={galleryInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
            >
              <img
                src={`${image.url}?auto=format&fit=crop&w=600&h=600&q=80`}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold text-center px-4">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        controller={{ closeOnBackdropClick: true }}
        carousel={{ preload: 3 }}
        styles={{ container: { height: '100vh' }, slide: { height: '100%' } }}
        render={{
          buttonPrev: slides.length <= 1 ? () => null : undefined,
          buttonNext: slides.length <= 1 ? () => null : undefined
        }}
      />

      {/* Footer Section */}
      <footer className="py-8 px-4 bg-sky-dark/50 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 hover:text-white transition-colors duration-300">
            © {new Date().getFullYear()} - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
