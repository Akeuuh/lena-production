import Link from 'next/link'
import { ArrowRight, Gift } from 'lucide-react'

const CTABanner = () => {
  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-coral/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-sage/10 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-coral/90 backdrop-blur-sm rounded-full text-light border border-coral mb-4">
            <Gift className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Offre découverte spéciale</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-light">
            Prêt(e) à transformer votre vie ?
          </h2>
          
          <p className="text-xl text-cream max-w-3xl mx-auto leading-relaxed">
            Profitez de -20% sur votre première séance de sophrologie. 
            Découvrez les bienfaits de cette méthode et commencez votre voyage vers le bien-être.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-light bg-coral rounded-full hover:bg-coral-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Réserver ma première séance
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <div className="text-cream">
              <div className="flex items-center space-x-2">
                <span className="text-sm">ou appelez directement le</span>
                <a 
                  href="tel:+33612345678" 
                  className="font-bold text-lg text-light hover:text-cream transition-colors"
                >
                  06 12 34 56 78
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="bg-light/80 backdrop-blur-sm rounded-2xl p-6 border border-sage-300/50 shadow-lg">
              <div className="text-3xl font-bold text-coral mb-2">60€</div>
              <div className="text-sm text-primary-600">48€ première séance</div>
            </div>
            <div className="bg-light/80 backdrop-blur-sm rounded-2xl p-6 border border-sage-300/50 shadow-lg">
              <div className="text-3xl font-bold text-sage-700 mb-2">1h</div>
              <div className="text-sm text-primary-600">Durée de la séance</div>
            </div>
            <div className="bg-light/80 backdrop-blur-sm rounded-2xl p-6 border border-sage-300/50 shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-primary-600">Personnalisé</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTABanner