import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/contact-info'

// Google icon component since it's not in lucide-react
const GoogleIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-800 text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-cream mb-4">{CONTACT_INFO.name}</h3>
            <p className="text-light-200">
              {CONTACT_INFO.title}
            </p>
            <p className="text-gray-400 mt-2">
              Votre bien-être est ma priorité
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-light-200">
                <Phone size={16} className="mr-2" />
                 <a href={`tel:+33${CONTACT_INFO.phone.replace(/\s/g, '').substring(1)}`} className="hover:text-cream transition-colors">
                   {CONTACT_INFO.phone}
                 </a>
              </div>
              <div className="flex items-center text-light-200">
                <Mail size={16} className="mr-2" />
                 <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-cream transition-colors">
                   {CONTACT_INFO.email}
                 </a>
              </div>
              <div className="flex items-start text-light-200">
                <MapPin size={16} className="mr-2 mt-1" />
                 <div>
                   <p>{CONTACT_INFO.address.street}</p>
                   <p>{CONTACT_INFO.address.city}</p>
                 </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horaires</h4>
            <div className="space-y-2 text-light-200">
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>Lun - Ven: 9h - 19h</span>
              </div>
              <p className="ml-6">Sam: 9h - 13h</p>
              <p className="ml-6">Dim: Fermé</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-200 hover:text-cream transition-colors">
                <Instagram size={24} />
              </a>
              <a
                href={CONTACT_INFO.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-200 hover:text-cream transition-colors">
                <GoogleIcon size={24} />
              </a>
            </div>
            <div className="mt-6">
              <a
                href={CONTACT_INFO.business.resalib}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-coral text-white px-6 py-3 rounded-full hover:bg-coral-600 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-700 text-center text-light-200">
          <p>&copy; {currentYear} {CONTACT_INFO.name} - Sophrologue. Tous droits réservés.</p>
          <div className="mt-2">
            <Link href="/mentions-legales" className="hover:text-cream transition-colors mx-2">
              Mentions légales
            </Link>
            <span>|</span>
            <Link href="/politique-confidentialite" className="hover:text-cream transition-colors mx-2">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer