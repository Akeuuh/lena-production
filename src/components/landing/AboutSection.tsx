import Image from 'next/image'
import { Award } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { CONTACT_INFO } from '@/lib/contact-info'

const AboutSection = () => {
  const t = useTranslations('about')
  
  const qualifications = [
    {
      icon: <Award className="w-5 h-5" />,
      text: t('qualificationsList.diploma')
    },
  ]

  const specializations = [
    t('specializationsList.stress'),
    t('specializationsList.sleep'),
    t('specializationsList.preparation'),
    t('specializationsList.perinatal'),
    t('specializationsList.teens'),
  ]

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/sophrologist.jpg"
                alt="Sophie Zen - Votre sophrologue"
                fill
                className="object-cover"
              />
            </div>

          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-light mb-6">
                {t('title').replace('Sophie Zen', CONTACT_INFO.name)}
              </h2>
               <p className="text-lg text-cream leading-relaxed mb-4">
                {t('description1')}
              </p>
              <p className="text-lg text-cream leading-relaxed mb-4">
                {t('description2')}
              </p>
              <p className="text-lg text-cream leading-relaxed">
                {t('description3')}
              </p>
            </div>

            <div className="space-y-3">
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-center space-x-3 text-cream">
                  <div className="text-light">{qual.icon}</div>
                  <span className="text-light font-semibold">{qual.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-light mb-4">
                {t('specializations')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-sage-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection