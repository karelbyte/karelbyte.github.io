import { Mail, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  
  return (
    <section id="contacto" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
          {t('contact.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">{t('contact.subtitle')}</h3>
            <p className="text-gray-400 mb-8">
              {t('contact.description')}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{t('contact.email')}</p>
                  <a href="mailto:karelpdiaz@hotmail.com" className="text-lg hover:text-emerald-400 transition-colors">
                    karelpdiaz@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{t('contact.phone')}</p>
                  <a href="tel:+527551272444" className="text-lg hover:text-emerald-400 transition-colors">
                    +52 755 127 24 44
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{t('contact.location')}</p>
                  <p className="text-lg">{t('contact.locationValue')}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <input type="text" placeholder={t('contact.namePlaceholder')} 
                     className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors" />
            </div>
            <div>
              <input type="email" placeholder={t('contact.emailPlaceholder')} 
                     className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors" />
            </div>
            <div>
              <textarea placeholder={t('contact.messagePlaceholder')} rows="5"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/20 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors resize-none"></textarea>
            </div>
            <button type="submit" 
                    className="w-full px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg hover:scale-105 transition-transform font-semibold">
              {t('contact.sendBtn')}
            </button>
          </form>
        </div>

        <div className="mt-16 text-center text-gray-400">
          <p>{t('contact.footer')}</p>
        </div>
      </div>
    </section>
  )
}
