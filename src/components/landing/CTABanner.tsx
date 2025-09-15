
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { CONTACT_INFO } from '@/lib/contact-info'

const CTABanner = () => {
  const t = useTranslations('cta')
  const tCommon = useTranslations('common')
  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-coral/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-sage/10 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">

          
          <h2 className="text-4xl lg:text-5xl font-bold text-light">
            {t('title')}
          </h2>
          
          <p className="text-xl text-cream max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={CONTACT_INFO.business.resalib}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-light bg-coral rounded-full hover:bg-coral-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              {t('button')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            
            <div className="text-cream">
              <div className="flex items-center space-x-2">
                <span className="text-sm">{tCommon('callDirectly')}</span>
                <a 
                  href={`tel:+33${CONTACT_INFO.phone.replace(/\s/g, '').substring(1)}`} 
                  className="font-bold text-lg text-light hover:text-cream transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="bg-light/80 backdrop-blur-sm rounded-2xl p-6 border border-sage-300/50 shadow-lg flex flex-col items-center justify-center text-center">
              <div className="text-3xl font-bold text-coral mb-2">{t('price')}</div>
              <div className="text-sm text-primary-600">{tCommon('sessionPrice')}</div>
            </div>
            <div className="bg-light/80 backdrop-blur-sm rounded-2xl p-6 border border-sage-300/50 shadow-lg flex flex-col items-center justify-center text-center">
              <div className="text-3xl font-bold text-sage-700 mb-2">{t('duration')}</div>
              <div className="text-sm text-primary-600">{tCommon('duration')}</div>
            </div>
            <div className="bg-light/80 backdrop-blur-sm rounded-2xl p-6 border border-sage-300/50 shadow-lg flex flex-col items-center justify-center text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-primary-600">{tCommon('personalized')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTABanner