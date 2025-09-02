'use client'

const LocationMap = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full min-h-[400px]">
      <iframe
        title="Cabinet de sophrologie - Sophie Zen"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142048803591!2d2.3354329!3d48.8698089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3c8ab00075%3A0x69d9a50e8e84e4fa!2s15%20Rue%20de%20la%20Paix%2C%2075002%20Paris%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '400px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="p-4 bg-gray-50">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">Cabinet Sophie Zen</p>
            <p className="text-sm text-gray-600">15 Rue de la Paix, 75002 Paris</p>
          </div>
          <a
            href="https://www.google.com/maps/dir//15+Rue+de+la+Paix,+75002+Paris,+France"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-coral text-white rounded-lg hover:bg-coral-600 transition-colors text-sm font-medium shadow-md hover:shadow-lg"
          >
            Itinéraire
          </a>
        </div>
      </div>
    </div>
  )
}

export default LocationMap