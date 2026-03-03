import { useTranslation } from 'react-i18next'
import { Languages } from 'lucide-react'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-emerald-500/20 rounded-lg hover:border-emerald-500/50 transition-all hover:scale-105"
      title={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <Languages size={20} />
      <span className="text-sm font-medium uppercase">{i18n.language}</span>
    </button>
  )
}
