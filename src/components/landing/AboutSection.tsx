import Image from 'next/image'
import { Award, BookOpen, Users, Star } from 'lucide-react'

const AboutSection = () => {
  const qualifications = [
    {
      icon: <Award className="w-5 h-5" />,
      text: "Diplômée de l'École Française de Sophrologie"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      text: "Certification RNCP niveau III"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Membre de la Chambre Syndicale de Sophrologie"
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: "Formation continue en neurosciences"
    }
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
            <div className="absolute -bottom-4 -right-4 bg-primary text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Années d&apos;expérience</div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-light mb-6">
                Sophie Zen, votre sophrologue
              </h2>
              <p className="text-lg text-cream leading-relaxed mb-4">
                Passionnée par le développement personnel et le bien-être, j&apos;ai découvert la 
                sophrologie il y a plus de 15 ans. Cette méthode a transformé ma vie et m&apos;a 
                donné envie d&apos;accompagner les autres dans leur quête d&apos;équilibre et de sérénité.
              </p>
              <p className="text-lg text-cream leading-relaxed">
                Mon approche bienveillante et personnalisée s&apos;adapte à vos besoins spécifiques. 
                Que vous souhaitiez gérer votre stress, améliorer votre sommeil ou développer 
                votre confiance en vous, je vous accompagne avec des techniques éprouvées et 
                un suivi attentif.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-light mb-4">
                Formations et certifications
              </h3>
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-center space-x-3 text-cream">
                  <div className="text-light">{qual.icon}</div>
                  <span>{qual.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-light mb-4">
                Spécialisations
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Gestion du stress",
                  "Troubles du sommeil",
                  "Préparation mentale",
                  "Périnatalité",
                  "Adolescents",
                  "Burn-out"
                ].map((spec, index) => (
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