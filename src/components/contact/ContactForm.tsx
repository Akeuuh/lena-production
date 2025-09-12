'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslations } from 'next-intl'
import { contactFormSchema } from '@/lib/validations'
import { Send, Loader2 } from 'lucide-react'
import axios from 'axios'
import type { ContactFormData } from '@/types'

const ContactForm = () => {
  const t = useTranslations('contact.form')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      await axios.post('/api/contact', data)
      setSubmitStatus({
        type: 'success',
        message: t('success')
      })
      reset()
    } catch {
      setSubmitStatus({
        type: 'error',
        message: t('error')
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">
            {t('name')} *
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            placeholder={t('placeholders.name')}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
            {t('email')} *
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            placeholder={t('placeholders.email')}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-2">
            {t('phone')} *
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            placeholder={t('placeholders.phone')}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-2">
            {t('subject')} *
          </label>
          <select
            id="subject"
            {...register('subject')}
            className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          >
            <option value="">{t('selectSubject')}</option>
            <option value={t('subjects.first')}>{t('subjects.first')}</option>
            <option value={t('subjects.stress')}>{t('subjects.stress')}</option>
            <option value={t('subjects.sleep')}>{t('subjects.sleep')}</option>
            <option value={t('subjects.preparation')}>{t('subjects.preparation')}</option>
            <option value={t('subjects.other')}>{t('subjects.other')}</option>
          </select>
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
          {t('message')} *
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={6}
          className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          placeholder={t('placeholders.message')}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === 'success' 
              ? 'bg-sage-50 text-sage-800 border border-sage-200' 
              : 'bg-coral-50 text-coral-800 border border-coral-200'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-coral rounded-lg hover:bg-coral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin mr-2 h-5 w-5" />
              {t('sending')}
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              {t('submit')}
            </>
          )}
        </button>
      </div>
    </form>
  )
}

export default ContactForm