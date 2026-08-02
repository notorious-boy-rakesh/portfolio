import { motion } from 'framer-motion';
export function Hero() {
  return (<section id="home" className="relative h-screen w-full overflow-hidden">
    {/* Background Image - Responsive */}
    <div className="absolute inset-0 w-full h-full flex justify-end md:justify-center lg:justify-end overflow-hidden">
      <div className="relative w-full md:w-[75%] lg:w-[60%] h-full flex items-center lg:pr-8">
        <img
          src="/hero-image.png"
          alt=""
          onError={(e) => e.target.style.display = 'none'}
          className="w-full h-full object-cover md:object-contain object-center md:object-bottom md:scale-105 grayscale opacity-90"
        />
        {/* Gradient overlays to seamlessly blend the image edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 md:via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      {/* Global Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/20" />
    </div>

    {/* Content */}
    <div className="relative z-10 h-full flex items-end md:items-center pb-32 md:pb-0 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="w-full max-w-5xl">
        {/* Typography */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <h1 className="font-display leading-none tracking-tighter text-[15vw] sm:text-[12vw] md:text-[10vw]">
            <span className="block text-white">RAKESH M</span>
            <span className="block text-white">SOFTWARE</span>
            <span className="block text-white">ENGINEER</span>
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-6 md:mt-8 text-sm sm:text-base text-white/80 max-w-sm md:max-w-md leading-relaxed">
            Computer Science student at Kamaraj College of Engineering & Technology, passionate about building modern, scalable web applications.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="mt-8 md:mt-10 flex flex-wrap gap-4">
            <button onClick={() => {
              const element = document.getElementById('about');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }} className="bg-white text-black px-8 py-3 text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors">
              Explore
            </button>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white px-8 py-3 text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-colors inline-block text-center">
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>);
}
