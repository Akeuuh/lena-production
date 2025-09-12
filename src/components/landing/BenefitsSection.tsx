import { Brain, Heart, Moon, Smile, Shield, Zap } from 'lucide-react'
import { useTranslations } from 'next-intl'

const BenefitsSection = () => {
  const t = useTranslations('benefits')

  const benefits = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: t('items.stress.title'),
      description: t('items.stress.description')
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: t('items.sleep.title'),
      description: t('items.sleep.description')
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('items.emotions.title'),
      description: t('items.emotions.description')
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('items.confidence.title'),
      description: t('items.confidence.description')
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: t('items.wellbeing.title'),
      description: t('items.wellbeing.description')
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('items.performance.title'),
      description: t('items.performance.description')
    }
  ]

  return (
    <section id="benefits" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-light mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-cream max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-sage-200 hover:border-primary-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 text-primary rounded-full mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-4">
                {benefit.title}
              </h3>
              <p className="text-primary-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection