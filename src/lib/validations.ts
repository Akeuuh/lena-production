import * as yup from 'yup'

export const contactFormSchema = yup.object({
  name: yup
    .string()
    .required('Le nom est requis')
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères'),
  email: yup
    .string()
    .required('L\'email est requis')
    .email('Veuillez entrer un email valide'),
  phone: yup
    .string()
    .required('Le téléphone est requis')
    .matches(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      'Veuillez entrer un numéro de téléphone valide'
    ),
  subject: yup
    .string()
    .required('Le sujet est requis')
    .oneOf([
      'Première consultation',
      'Gestion du stress',
      'Troubles du sommeil',
      'Préparation mentale',
      'Autre'
    ], 'Veuillez sélectionner un sujet valide'),
  message: yup
    .string()
    .required('Le message est requis')
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères')
})