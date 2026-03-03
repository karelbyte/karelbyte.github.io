import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { key: 'home', href: 'inicio' },
    { key: 'about', href: 'sobre-mí' },
    { key: 'experience', href: 'experiencia' },
    { key: 'skills', href: 'habilidades' },
    { key: 'certifications', href: 'certificaciones' },
    { key: 'projects', href: 'proyectos' },
    { key: 'contact', href: 'contacto' }
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#inicio" className="flex items-center gap-3 hover:scale-105 transition-transform">
            <Logo size={40} />
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
              Karel Puerto
            </span>
          </a>
          
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <a key={link.key} href={`#${link.href}`} 
                 className="hover:text-emerald-400 transition-colors">
                {t(`nav.${link.key}`)}
              </a>
            ))}
            <LanguageSwitcher />
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-sm">
          {links.map((link) => (
            <a key={link.key} href={`#${link.href}`}
               className="block px-4 py-3 hover:bg-emerald-900/50 transition-colors"
               onClick={() => setIsOpen(false)}>
              {t(`nav.${link.key}`)}
            </a>
          ))}
          <div className="px-4 py-3">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  )
}
