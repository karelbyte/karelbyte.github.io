import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'

export default function Hero() {
  const { t } = useTranslation()
  
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-green-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <Logo size={160} className="relative" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 bg-clip-text text-transparent animate-pulse">
          {t('hero.title')}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          {t('hero.subtitle')}
        </p>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          {t('hero.description')}
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <a href="#contacto" className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full hover:scale-105 transition-transform">
            {t('hero.contactBtn')}
          </a>
          <a href="/KAREL-PUERTO-DIAZ-CV-2026.pdf" download className="px-8 py-3 border border-emerald-500 rounded-full hover:bg-emerald-500/10 transition-colors flex items-center gap-2">
            <Download size={20} /> {t('hero.cvBtn')}
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/karelpuerto" target="_blank" rel="noopener noreferrer" 
             className="hover:text-emerald-400 transition-colors hover:scale-110 transform">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/karelpuerto" target="_blank" rel="noopener noreferrer"
             className="hover:text-emerald-400 transition-colors hover:scale-110 transform">
            <Linkedin size={28} />
          </a>
          <a href="mailto:karelpdiaz@hotmail.com" 
             className="hover:text-emerald-400 transition-colors hover:scale-110 transform">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  )
}
