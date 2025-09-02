import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react'
import Link from 'next/link'

const ContactCard = () => {
  const contactInfo = {
    phone: '06 12 34 56 78',
    email: 'contact@sophie-zen.fr',
    address: {
      street: '15 Rue de la Paix',
      city: '75002 Paris',
      metro: 'Métro: Opéra (lignes 3, 7, 8)'
    },
    openingHours: [
      { day: 'Lundi - Vendredi', hours: '9h00 - 19h00' },
      { day: 'Samedi', hours: '9h00 - 13h00' },
      { day: 'Dimanche', hours: 'Fermé' }
    ]
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 border border-sage-200">
      <h3 className="text-2xl font-bold text-primary-800 mb-6">Informations pratiques</h3>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-primary-500">Téléphone</p>
            <a 
              href={`tel:+33612345678`} 
              className="text-lg font-medium text-primary-800 hover:text-primary transition-colors">
              {contactInfo.phone}
            </a>
            <p className="text-sm text-primary-500 mt-1">Disponible pour les urgences</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-primary-500">Email</p>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-lg font-medium text-primary-800 hover:text-primary transition-colors">
              {contactInfo.email}
            </a>
            <p className="text-sm text-primary-500 mt-1">Réponse sous 24h</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-primary-500">Adresse du cabinet</p>
            <p className="text-lg font-medium text-primary-800">
              {contactInfo.address.street}
            </p>
            <p className="text-lg font-medium text-primary-800">
              {contactInfo.address.city}
            </p>
            <p className="text-sm text-primary-500 mt-1">{contactInfo.address.metro}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div className="w-full">
            <p className="text-sm font-medium text-gray-500 mb-3">Horaires d&apos;ouverture</p>
            <div className="space-y-2">
              {contactInfo.openingHours.map((schedule, index) => (
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
          <Link 
            href="/contact"
            className="font-medium hover:text-primary-600 transition-colors"
          >
            Prendre rendez-vous en ligne
          </Link>
        </div>
      </div>

      <div className="bg-cream-100 rounded-lg p-4">
        <p className="text-sm text-primary-800">
          <strong>Note:</strong> Les consultations se font uniquement sur rendez-vous. 
          En cas d&apos;urgence, n&apos;hésitez pas à me contacter directement par téléphone.
        </p>
      </div>
    </div>
  )
}

export default ContactCard