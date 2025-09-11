import { getRequestConfig } from 'next-intl/server'

// Can be imported from a shared config
export const locales = ['en', 'fr'] as const
export const defaultLocale = 'fr' as const

function isValidLocale(locale: string): locale is typeof locales[number] {
  return locales.includes(locale as typeof locales[number])
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  // Use the requested locale if valid, otherwise use the default locale
  const locale = requested && isValidLocale(requested) ? requested : defaultLocale

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  }
})