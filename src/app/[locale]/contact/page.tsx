import ContactForm from "@/components/contact/ContactForm"
import ContactCard from "@/components/contact/ContactCard"
import LocationMap from "@/components/contact/LocationMap"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Sophie Zen Sophrologue Paris",
  description: "Contactez Sophie Zen, sophrologue certifiée à Paris. Prise de rendez-vous, informations pratiques et localisation du cabinet.",
}

interface ContactPageProps {
  params: Promise<{ locale: string }>
}

export default async function ContactPage({ params }: ContactPageProps) {
  await params // We await params but don't need to use locale in this component yet
  return (
    <div className="min-h-screen bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-light mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-cream max-w-3xl mx-auto">
            Prenez rendez-vous pour votre première séance ou posez-nous vos questions. 
            Je suis là pour vous accompagner vers le bien-être.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-sage-200">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">
              Envoyez-nous un message
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
            Première consultation ?
          </h3>
          <p className="text-lg text-primary-700 mb-6">
            Profitez de -20% sur votre première séance de sophrologie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33612345678"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-coral rounded-lg hover:bg-coral-600 transition-colors shadow-md"
            >
              Appelez maintenant
            </a>
            <div className="text-primary-700">
              <p className="font-semibold">06 12 34 56 78</p>
              <p className="text-sm">Lun-Ven: 9h-19h | Sam: 9h-13h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}