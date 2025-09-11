export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface SophrologistInfo {
  name: string
  title: string
  bio: string
  qualifications: string[]
  experience: number
  specializations: string[]
  image: string
}

export interface Benefit {
  id: string
  title: string
  description: string
  icon: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: {
    street: string
    city: string
    postalCode: string
    country: string
  }
  openingHours: {
    [key: string]: string
  }
  coordinates: {
    lat: number
    lng: number
  }
}