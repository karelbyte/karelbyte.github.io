import { Briefcase } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Experience() {
  const { t } = useTranslation()
  
  const experiences = [
    {
      key: 'yaydoo',
      company: t('experience.yaydoo.company'),
      period: t('experience.yaydoo.period')
    },
    {
      key: 'guros',
      company: t('experience.guros.company'),
      period: t('experience.guros.period')
    },
    {
      key: 'webforceha',
      company: t('experience.webforceha.company'),
      period: t('experience.webforceha.period')
    },
    {
      key: 'cyberline',
      company: t('experience.cyberline.company'),
      period: t('experience.cyberline.period')
    },
    {
      key: 'rsantos',
      company: t('experience.rsantos.company'),
      period: t('experience.rsantos.period')
    }
  ]

  return (
    <section id="experiencia" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
          {t('experience.title')}
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.key} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
                  <Briefcase size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-emerald-400">{t(`experience.${exp.key}.title`)}</h3>
                    <span className="text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-xl text-gray-300 mb-3">{exp.company}</p>
                  <p className="text-gray-400 mb-4">{t(`experience.${exp.key}.description`)}</p>
                  <div className="flex flex-wrap gap-2">
                    {t(`experience.${exp.key}.achievements`, { returnObjects: true }).map((achievement) => (
                      <span key={achievement} className="px-3 py-1 bg-emerald-500/20 rounded-full text-sm text-emerald-300">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
