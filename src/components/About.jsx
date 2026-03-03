import { Code2, Rocket, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()
  
  const features = [
    { icon: Code2, title: t('about.feature1Title'), desc: t('about.feature1Desc') },
    { icon: Rocket, title: t('about.feature2Title'), desc: t('about.feature2Desc') },
    { icon: Users, title: t('about.feature3Title'), desc: t('about.feature3Desc') }
  ]

  return (
    <section id="sobre-mí" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
          {t('about.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.paragraph1')}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.paragraph2')}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.paragraph3')}
            </p>
          </div>

          <div className="grid gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{title}</h3>
                    <p className="text-gray-400">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
