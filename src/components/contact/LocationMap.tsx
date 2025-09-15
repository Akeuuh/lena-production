'use client'
import { CONTACT_INFO } from '@/lib/contact-info'

const LocationMap = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full min-h-[400px]">
      <iframe
        title={`Cabinet de sophrologie - ${CONTACT_INFO.name}`}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11605.5!2d4.8055!3d43.9493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b5ebfb0c9aa1f3%3A0x3ac8a6f0b4e6a9e7!2sAvignon%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890"
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
            <p className="font-semibold text-gray-900">{CONTACT_INFO.name} - Sophrologie</p>
            <p className="text-sm text-gray-600">Service autour d&apos;Avignon</p>
          </div>
          <a
            href="https://www.google.com/maps/dir//Avignon,+France"
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