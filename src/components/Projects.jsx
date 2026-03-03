import { ExternalLink, Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Projects() {
  const { t } = useTranslation()
  
  const projects = [
    {
      key: 'yaydoo',
      tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'AWS Lambda', 'S3'],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      key: 'agents',
      tech: ['Python', 'LangChain', 'OpenAI', 'FastAPI', 'Redis'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      key: 'saas',
      tech: ['React', 'Laravel', 'MySQL', 'Docker', 'AWS ECS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      key: 'chatbot',
      tech: ['TypeScript', 'LangChain', 'Pinecone', 'Next.js', 'OpenAI'],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      key: 'serverless',
      tech: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Terraform', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      key: 'crm',
      tech: ['Vue.js', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="proyectos" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
          {t('projects.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.key} className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={t(`projects.${project.key}.title`)} 
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-emerald-400">{t(`projects.${project.key}.title`)}</h3>
                <p className="text-gray-400 mb-4">{t(`projects.${project.key}.description`)}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-emerald-500/20 rounded text-xs text-emerald-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors">
                    <Github size={20} /> {t('projects.code')}
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors">
                    <ExternalLink size={20} /> {t('projects.demo')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
