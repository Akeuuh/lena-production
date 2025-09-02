import { Brain, Heart, Moon, Smile, Shield, Zap } from 'lucide-react'

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Gestion du stress",
      description: "Apprenez des techniques efficaces pour réduire votre stress quotidien et retrouver votre calme intérieur."
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Sommeil réparateur",
      description: "Améliorez la qualité de votre sommeil grâce à des exercices de relaxation et de respiration."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Gestion des émotions",
      description: "Développez votre intelligence émotionnelle et apprenez à mieux gérer vos émotions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Confiance en soi",
      description: "Renforcez votre estime personnelle et développez une confiance inébranlable."
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Bien-être quotidien",
      description: "Cultivez un état de bien-être durable et améliorez votre qualité de vie."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimisez vos performances personnelles et professionnelles en toute sérénité."
    }
  ]

  return (
    <section id="benefits" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-4">
            Les bienfaits de la sophrologie
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Découvrez comment la sophrologie peut transformer votre vie et vous aider à 
            atteindre un équilibre physique et mental optimal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-sage-200 hover:border-primary-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 text-primary rounded-full mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-4">
                {benefit.title}
              </h3>
              <p className="text-primary-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection