export const CONTACT_INFO = {
  name: "Léna Dubois",
  title: "Sophrologue certifiée",
  phone: "06 67 44 53 27",
  email: "novalenasophro@gmail.com",
  address: {
    street: "169 route de Velleron",
    city: "84250 Le Thor",
    metro: "Proche centre-ville",
    country: "France"
  },
  openingHours: [
    { day: 'Lundi - Vendredi', hours: '9h00 - 19h00' },
    { day: 'Samedi', hours: '9h00 - 13h00' },
    { day: 'Dimanche', hours: 'Fermé' }
  ],
  social: {
    website: "https://novalena.fr",
    instagram: "https://www.instagram.com/nova_lena_sophro?igsh=MWw4ZGhiMmFoMGVreQ==",
    google: "https://g.page/r/CZoL17oiJbtnEAE/"
    // facebook: "",
    // instagram: "",
    // linkedin: ""
  },
  business: {
    siret: "88872947200025",
    resalib: "https://resalib.fr/p/109852"
    // Other business info
  }
} as const