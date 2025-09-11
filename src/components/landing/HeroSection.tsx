import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/herozone.jpg"
          alt="Lavender field background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 via-primary/40 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-light leading-tight">
                Retrouvez votre
                <span className="text-cream"> équilibre intérieur</span>
              </h1>
              <p className="mt-6 text-xl text-light leading-relaxed">
                La sophrologie pour gérer votre stress, améliorer votre sommeil et retrouver 
                sérénité et bien-être au quotidien.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-light bg-coral rounded-full hover:bg-coral-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Réserver une séance
              </Link>
              <Link
                href="#benefits"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-light bg-transparent border-2 border-light rounded-full hover:bg-light hover:text-primary transition-all duration-200"
              >
                En savoir plus
              </Link>
            </div>

            <div className="flex items-center space-x-8">
              <div>
                <div className="text-3xl font-bold text-cream">10+</div>
                <div className="text-sm text-light">Années d&apos;expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cream">500+</div>
                <div className="text-sm text-light">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cream">98%</div>
                <div className="text-sm text-light">Taux de satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage-200 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cream-200 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection