import { motion } from 'framer-motion';
const experiences = [
  {
    title: 'BroCode Secure Chat',
    company: 'Full-Stack Project',
    location: 'Personal',
    period: 'September 2026',
    description: 'Developed a real-time secure chat application featuring instant messaging, user authentication, and a responsive, modern interface. Built with a focus on security and seamless user experience.',
    skills: ['React.js', 'Node.js', 'Express.js'],
    link: 'https://bro-code-security.vercel.app/'
  },
  {
    title: '3D Animated Frontend',
    company: 'Front-End Project',
    location: 'Personal',
    period: 'August 2026',
    description: 'Designed and developed a highly interactive 3D animated frontend interface. Focused on modern web animations, engaging user experiences, and responsive design.',
    skills: ['HTML', 'CSS', 'JavaScript', '3D Animation'],
    link: 'https://notorious-boy-rakesh.github.io/animated-frontend/'
  },
  {
    title: 'Ecommerce for Gadgets',
    company: 'Full-Stack Project',
    location: 'Personal',
    period: 'July 2026',
    description: 'Built multiple e-commerce platforms focusing on responsive design, clean user interfaces, and smooth user experiences. Implemented product catalogs, shopping carts, and user authentication.',
    skills: ['React.js', 'JavaScript', 'CSS', 'Node.js', 'MongoDB', 'UI/UX Design'],
    link: 'https://ecommerce-for-gadgets-frontend.vercel.app/'
  },
  {
    title: 'College Complaint Portal',
    company: 'Full-Stack Project',
    location: 'Academic / Personal',
    period: 'April 2026',
    description: 'Developed a complete grievance management system with separate user and admin modules. The project enables students to submit and track complaints while allowing administrators to manage and resolve them efficiently.',
    skills: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'Role-Based Access'],
    link: 'https://college-complaint-portal-mu.vercel.app/'
  },
  {
    title: 'Secure Payment Integration With RazorPay',
    company: 'Full-Stack Project',
    location: 'Personal',
    period: 'March 2026',
    description: 'Developed a robust MERN stack application featuring secure payment gateway integration using RazorPay. Ensured safe transactions and smooth checkout experience.',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RazorPay'],
    link: 'https://secure-payment-integration.vercel.app/'
  },
  {
    title: 'Login & Signup Page',
    company: 'Front-End Project',
    location: 'Personal',
    period: 'December 2024',
    description: 'Designed and developed a secure, responsive login and signup page interface. Implemented robust client-side form validation, modern UI aesthetics, and smooth transitions to enhance user experience.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'UI/UX'],
    link: 'https://loginpage-signuppage.vercel.app/'
  }
];
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
};
export function Work() {
  return (<section id="projects" className="section-padding">
    <div className="max-w-7xl mx-auto">
      {/* Section Title */}
      <motion.div {...fadeInUp} className="mb-16">
        <span className="text-sm text-gray-500 tracking-widest uppercase">Portfolio</span>
        <div className="w-6 h-px bg-gray-600 mt-2" />
      </motion.div>

      <motion.h2 {...fadeInUp} className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24">
        FEATURED<br />PROJECTS
      </motion.h2>

      {/* Experiences */}
      <div className="space-y-0">
        {experiences.map((exp, index) => (<motion.article key={exp.company + exp.period} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }} className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left Column - Title & Company */}
            <div className="lg:col-span-5">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                {exp.title}
              </h3>
              <p className="text-base lg:text-lg text-gray-400">
                {exp.company}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                {exp.location}
              </p>
            </div>

            {/* Middle Column - Period */}
            <div className="lg:col-span-2">
              <p className="text-sm text-gray-500 tracking-widest uppercase">
                {exp.period}
              </p>
            </div>

            {/* Right Column - Description & Skills & Button */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {exp.skills.map((skill) => (<span key={skill} className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full">
                  {skill}
                </span>))}
              </div>
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors inline-block"
              >
                View Project
              </a>
            </div>
          </div>
        </motion.article>))}
        <div className="border-t border-gray-800" />
      </div>
    </div>
  </section>);
}
