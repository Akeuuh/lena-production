import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { CONTACT_INFO } from '@/lib/contact-info'

const ContactCard = () => {
  const t = useTranslations('contact.info')
  const tCommon = useTranslations('common')
  const tHours = useTranslations('contact.hours')

  const openingHours = [
    { day: tHours('monday'), hours: tHours('weekdays') },
    { day: tHours('saturday'), hours: tHours('saturdayHours') },
    { day: tHours('sunday'), hours: tHours('closed') }
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 border border-sage-200">
      <h3 className="text-2xl font-bold text-primary-800 mb-6">{t('title')}</h3>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-primary-500">{tCommon('phone')}</p>
            <a 
              href={`tel:+33612345678`} 
              className="text-lg font-medium text-primary-800 hover:text-primary transition-colors">
              {CONTACT_INFO.phone}
            </a>
            <p className="text-sm text-primary-500 mt-1">{t('phone')}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-primary-500">{tCommon('email')}</p>
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-lg font-medium text-primary-800 hover:text-primary transition-colors">
              {CONTACT_INFO.email}
            </a>
            <p className="text-sm text-primary-500 mt-1">{t('email')}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-primary-500">{t('address')}</p>
            <p className="text-lg font-medium text-primary-800">
              {CONTACT_INFO.address.street}
            </p>
            <p className="text-lg font-medium text-primary-800">
              {CONTACT_INFO.address.city}
            </p>
            <p className="text-sm text-primary-500 mt-1">{CONTACT_INFO.address.metro}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div className="w-full">
            <p className="text-sm font-medium text-gray-500 mb-3">{tCommon('openingHours')}</p>
            <div className="space-y-2">
              {openingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between text-primary-800">
                  <span className="font-medium">{schedule.day}</span>
                  <span>{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-sage-200">
        <div className="flex items-center justify-center space-x-2 text-primary">
          <Calendar className="w-5 h-5" />
          <a 
            href={CONTACT_INFO.business.resalib}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-primary-600 transition-colors"
          >
            {t('appointment')}
          </a>
        </div>
      </div>

      <div className="bg-cream-100 rounded-lg p-4">
        <p className="text-sm text-primary-800">
          {t('note')}
        </p>
      </div>
    </div>
  )
}

export default ContactCard