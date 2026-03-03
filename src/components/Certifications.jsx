import { Award, Cloud, Brain, Shield } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Certifications() {
  const { t } = useTranslation()
  
  const certifications = [
    {
      icon: Cloud,
      title: t('certifications.aws.title'),
      issuer: t('certifications.aws.issuer'),
      description: t('certifications.aws.description')
    },
    {
      icon: Brain,
      title: t('certifications.llm.title'),
      issuer: t('certifications.llm.issuer'),
      description: t('certifications.llm.description')
    },
    {
      icon: Award,
      title: t('certifications.agents.title'),
      issuer: t('certifications.agents.issuer'),
      description: t('certifications.agents.description')
    },
    {
      icon: Shield,
      title: t('certifications.security.title'),
      issuer: t('certifications.security.issuer'),
      description: t('certifications.security.description')
    }
  ]

  return (
    <section id="certificaciones" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
          {t('certifications.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map(({ icon: Icon, title, issuer, description }) => (
            <div key={title} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-emerald-400">{title}</h3>
                <p className="text-gray-400 text-sm mb-3">{issuer}</p>
                <p className="text-gray-500 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-500/10 to-green-600/10 p-8 rounded-xl border border-emerald-500/30">
            <h3 className="text-3xl font-bold text-emerald-400 mb-2">15+</h3>
            <p className="text-gray-300">{t('certifications.stat1')}</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/10 to-green-600/10 p-8 rounded-xl border border-emerald-500/30">
            <h3 className="text-3xl font-bold text-emerald-400 mb-2">50+</h3>
            <p className="text-gray-300">{t('certifications.stat2')}</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/10 to-green-600/10 p-8 rounded-xl border border-emerald-500/30">
            <h3 className="text-3xl font-bold text-emerald-400 mb-2">20+</h3>
            <p className="text-gray-300">{t('certifications.stat3')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
