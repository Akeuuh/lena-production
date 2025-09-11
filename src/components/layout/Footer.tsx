import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-800 text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-cream mb-4">Sophie Zen</h3>
            <p className="text-light-200">
              Sophrologue certifiée RNCP
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
                <a href="tel:+33612345678" className="hover:text-cream transition-colors">
                  06 12 34 56 78
                </a>
              </div>
              <div className="flex items-center text-light-200">
                <Mail size={16} className="mr-2" />
                <a href="mailto:contact@sophie-zen.fr" className="hover:text-cream transition-colors">
                  contact@sophie-zen.fr
                </a>
              </div>
              <div className="flex items-start text-light-200">
                <MapPin size={16} className="mr-2 mt-1" />
                <div>
                  <p>15 Rue de la Paix</p>
                  <p>75002 Paris</p>
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
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-200 hover:text-cream transition-colors">
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-200 hover:text-cream transition-colors">
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-200 hover:text-cream transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-coral text-white px-6 py-3 rounded-full hover:bg-coral-600 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-700 text-center text-light-200">
          <p>&copy; {currentYear} Sophie Zen - Sophrologue. Tous droits réservés.</p>
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