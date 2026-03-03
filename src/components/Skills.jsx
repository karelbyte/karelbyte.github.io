import { 
  Code2, Database, Cloud, Cpu, Boxes, GitBranch, 
  TestTube, Braces, Layers, Server, Zap, Lock,
  Globe, Terminal, Package, Workflow
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Skills() {
  const { t } = useTranslation()
  
  const skillCategories = [
    {
      category: t('skills.languages'),
      icon: Code2,
      skills: [
        { name: 'JavaScript', color: 'text-yellow-400' },
        { name: 'TypeScript', color: 'text-blue-400' },
        { name: 'Java', color: 'text-red-400' },
        { name: 'C#', color: 'text-purple-400' },
        { name: 'Python', color: 'text-blue-300' },
        { name: 'Go', color: 'text-cyan-400' },
        { name: 'PHP', color: 'text-indigo-400' },
        { name: 'Rust', color: 'text-orange-400' }
      ]
    },
    {
      category: t('skills.frontend'),
      icon: Globe,
      skills: [
        { name: 'Vue.js', color: 'text-green-400' },
        { name: 'React', color: 'text-cyan-400' },
        { name: 'Angular', color: 'text-red-400' },
        { name: 'Next.js', color: 'text-gray-300' },
        { name: 'Nuxt.js', color: 'text-green-300' },
        { name: 'Quasar', color: 'text-blue-400' },
        { name: 'Tailwind CSS', color: 'text-teal-400' },
        { name: 'Vuetify', color: 'text-blue-300' },
        { name: 'Svelte', color: 'text-orange-400' }
      ]
    },
    {
      category: t('skills.backend'),
      icon: Server,
      skills: [
        { name: 'Node.js', color: 'text-green-400' },
        { name: 'Express', color: 'text-gray-300' },
        { name: 'AdonisJS', color: 'text-purple-400' },
        { name: 'Laravel', color: 'text-red-400' },
        { name: 'FastAPI', color: 'text-teal-400' },
        { name: 'NestJS', color: 'text-red-400' },
        { name: 'WebSocket', color: 'text-blue-400' },
        { name: 'GraphQL', color: 'text-pink-400' }
      ]
    },
    {
      category: t('skills.databases'),
      icon: Database,
      skills: [
        { name: 'MS SQL Server', color: 'text-red-400' },
        { name: 'MySQL', color: 'text-blue-400' },
        { name: 'PostgreSQL', color: 'text-blue-300' },
        { name: 'MongoDB', color: 'text-green-400' },
        { name: 'Redis', color: 'text-red-400' },
        { name: 'Firebird', color: 'text-orange-400' },
        { name: 'DynamoDB', color: 'text-blue-400' }
      ]
    },
    {
      category: t('skills.aws'),
      icon: Cloud,
      skills: [
        { name: 'Lambda', color: 'text-orange-400' },
        { name: 'EC2', color: 'text-orange-300' },
        { name: 'S3', color: 'text-green-400' },
        { name: 'RDS', color: 'text-blue-400' },
        { name: 'API Gateway', color: 'text-purple-400' },
        { name: 'CloudWatch', color: 'text-red-400' },
        { name: 'ECS', color: 'text-orange-400' },
        { name: 'CloudFront', color: 'text-blue-300' },
        { name: 'SQS', color: 'text-pink-400' },
        { name: 'SNS', color: 'text-red-300' }
      ]
    },
    {
      category: t('skills.ai'),
      icon: Cpu,
      skills: [
        { name: 'OpenAI GPT', color: 'text-emerald-400' },
        { name: 'Claude', color: 'text-orange-400' },
        { name: 'LangChain', color: 'text-green-400' },
        { name: 'RAG', color: 'text-purple-400' },
        { name: 'Vector DBs', color: 'text-blue-400' },
        { name: 'Prompt Engineering', color: 'text-cyan-400' },
        { name: 'Fine-tuning', color: 'text-pink-400' }
      ]
    },
    {
      category: t('skills.agents'),
      icon: Workflow,
      skills: [
        { name: 'AutoGPT', color: 'text-purple-400' },
        { name: 'LangGraph', color: 'text-green-400' },
        { name: 'CrewAI', color: 'text-blue-400' },
        { name: 'Agent Orchestration', color: 'text-cyan-400' },
        { name: 'Tool Calling', color: 'text-orange-400' },
        { name: 'Multi-Agent Systems', color: 'text-pink-400' }
      ]
    },
    {
      category: t('skills.devops'),
      icon: Boxes,
      skills: [
        { name: 'Docker', color: 'text-blue-400' },
        { name: 'Kubernetes', color: 'text-blue-300' },
        { name: 'GCP', color: 'text-red-400' },
        { name: 'CI/CD', color: 'text-green-400' },
        { name: 'Git', color: 'text-orange-400' },
        { name: 'Jira', color: 'text-blue-400' },
        { name: 'Terraform', color: 'text-purple-400' },
        { name: 'GitHub Actions', color: 'text-gray-300' }
      ]
    },
    {
      category: t('skills.testing'),
      icon: TestTube,
      skills: [
        { name: 'PHPUnit', color: 'text-purple-400' },
        { name: 'JestJS', color: 'text-red-400' },
        { name: 'JUnit', color: 'text-orange-400' },
        { name: 'Cypress', color: 'text-green-400' },
        { name: 'Playwright', color: 'text-green-300' },
        { name: 'TDD', color: 'text-blue-400' },
        { name: 'E2E Testing', color: 'text-cyan-400' }
      ]
    }
  ]

  return (
    <section id="habilidades" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
          {t('skills.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map(({ category, icon: Icon, skills }) => (
            <div key={category} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-emerald-400">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map(({ name, color }) => (
                  <div key={name} className="group relative">
                    <div className="px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-emerald-500/50 transition-all hover:scale-105 cursor-default">
                      <span className={`text-sm font-medium ${color}`}>{name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
