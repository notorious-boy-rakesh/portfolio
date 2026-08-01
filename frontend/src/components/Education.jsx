import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: 'easeOut' }
};

export function Education() {
    return (
      <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2"/>
        </motion.div>

        <motion.h2 {...fadeInUp} className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24">
          EDUCATION
        </motion.h2>

        {/* Education Items */}
        <div className="space-y-16 lg:space-y-24">
          {/* Kamaraj College */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzhpFTaK_mI0OBOGiXVw4tQRMs8bgZAsAOGcbRb-ohVEM2EeIFTdf3y4&s=10" alt="College Campus" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"/>
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                KAMARAJ COLLEGE OF ENGINEERING AND TECHNOLOGY
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="flex items-center">
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  B.E. Computer Science and Engineering
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Focusing on full-stack web development, software engineering principles, and database management. During my studies, I have actively applied my learning to build real-world projects, including a comprehensive College Complaint Portal and e-commerce applications.
                </p>
                <p className="text-sm text-gray-500">Present</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    );
}
