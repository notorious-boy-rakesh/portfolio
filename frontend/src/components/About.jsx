import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About Rakesh</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2 {...fadeInUp} className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-20">
          ABOUT
        </motion.h2>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="order-2 lg:order-1">
            <img src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Programming and Code" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              ABOUT MYSELF
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="order-1 lg:order-2 flex items-center">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              My name is Rakesh M, and I am a Computer Science and Engineering student at Kamaraj College of Engineering and Technology. I am passionate about full-stack web development and enjoy building modern, user-friendly, and scalable web applications.
            </p>
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div {...fadeInUp} className="mb-24 lg:mb-32">
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300 uppercase" style={{ lineHeight: '1.0', letterSpacing: '0.01em' }}>
            "I BELIEVE IN<br />
            <span className="text-white underline underline-offset-4">TEAMWORK, ADAPTABILITY,</span><br />
            AND WRITING CLEAN,<br />
            MAINTAINABLE CODE."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            ENGINEERING PHILOSOPHY
          </p>
        </motion.div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="flex items-center lg:text-right">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Beyond technical skills, I enjoy solving real-world problems, learning new technologies, and continuously improving my development skills. I thrive in environments where I can collaborate and bring ideas to life.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Teamwork and Collaboration" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              COLLABORATION & TEAMWORK
            </p>
          </motion.div>
        </div>

        {/* Third Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Code on Screen" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              SOFTWARE ENGINEERING / GOALS
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="flex items-center">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              My goal is to start my career as a Software Engineer in an organization where I can contribute to impactful projects, enhance my technical expertise, and grow professionally while delivering value to the company.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
