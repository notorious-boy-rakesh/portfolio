import { useState } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { cn } from '@/lib/utils';
const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
];
const socialLinks = [
    { label: 'Mail', href: 'mailto:rakesh.m212535@gmail.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rakesh-m-200414299/' },
];
export function Navigation() {
    const activeSection = useActiveSection();
    const isVisible = useScrollVisibility();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };
    return (<>
      {/* Mobile Header - Only visible on mobile */}
      <div className={cn("fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center md:hidden transition-all duration-300 bg-background/90 backdrop-blur-md", isVisible ? "opacity-100" : "opacity-0 pointer-events-none")}>
        {/* Menu Button - Left */}
        <div className="relative">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-sm font-bold tracking-widest uppercase text-white mix-blend-difference">
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>

          {/* Mobile Menu Dropdown */}
          <div className={cn('absolute left-0 top-full mt-4 flex flex-col items-start gap-4 p-6 bg-background/95 backdrop-blur-xl border border-white/10 rounded-lg min-w-[200px] transition-all duration-300', mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none')}>
            {navItems.map((item) => (<button key={item.id} onClick={() => scrollToSection(item.id)} className={cn('text-sm font-bold tracking-widest uppercase text-white hover:text-gray-300 transition-colors', activeSection === item.id ? 'opacity-100' : 'opacity-60')}>
                {item.label}
              </button>))}
          </div>
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <nav className={cn("hidden md:flex fixed top-0 left-0 right-0 z-50 p-8 justify-between items-center transition-all duration-300 bg-background/90 backdrop-blur-md", isVisible ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <div className="flex flex-row gap-6 lg:gap-10">
           {navItems.map((item) => (<button key={item.id} onClick={() => scrollToSection(item.id)} className={cn('text-sm font-bold tracking-widest uppercase text-white mix-blend-difference hover:text-gray-300 transition-colors', activeSection === item.id ? 'opacity-100' : 'opacity-60')}>
               {item.label}
             </button>))}
        </div>
        <div className="flex flex-row gap-6 lg:gap-10 text-right">
           {socialLinks.map((link) => (<a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm font-bold tracking-widest uppercase text-white mix-blend-difference hover:text-gray-300 transition-colors opacity-60 hover:opacity-100">
               {link.label}
             </a>))}
        </div>
      </nav>
    </>);
}
