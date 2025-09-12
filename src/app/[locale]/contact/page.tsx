import ContactForm from "@/components/contact/ContactForm"
import ContactCard from "@/components/contact/ContactCard"  
import LocationMap from "@/components/contact/LocationMap"
import { getTranslations } from 'next-intl/server'
import { CONTACT_INFO } from "@/lib/contact-info"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations('contact')
  
  return {
    title: `${t('title')} - ${CONTACT_INFO.name} Sophrologue`,
    description: t('subtitle'),
  }
}

interface ContactPageProps {
  params: Promise<{ locale: string }>
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params
  const t = await getTranslations('contact')
  
  return (
    <div className="min-h-screen bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-light mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-cream max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-sage-200">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">
              {t('form.title')}
            </h2>
            <ContactForm />
          </div>
          
          <div className="space-y-8">
            <ContactCard />
          </div>
        </div>

        <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
          <LocationMap />
        </div>

        <div className="mt-12 bg-cream-100 rounded-xl p-8 text-center border border-cream-300">
          <h3 className="text-2xl font-bold text-primary-800 mb-4">
            {t('firstConsultation.title')}
          </h3>
          <p className="text-lg text-primary-700 mb-6">
            {t('firstConsultation.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:+33${CONTACT_INFO.phone.replace(/\s/g, '').substring(1)}`}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-coral rounded-lg hover:bg-coral-600 transition-colors shadow-md"
            >
              {t('firstConsultation.callNow')}
            </a>
            <div className="text-primary-700">
              <p className="font-semibold">{CONTACT_INFO.phone}</p>
              <p className="text-sm">{t('firstConsultation.schedule')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}