import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactFormSchema } from '@/lib/validations'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const validatedData = await contactFormSchema.validate(body)
    
    const emailData = {
      from: process.env.RESEND_FROM || 'Site Web Sophie Zen <noreply@sophie-zen.fr>',
      to: [process.env.RESEND_TO || 'contact@sophie-zen.fr'],
      subject: `Nouveau message de ${validatedData.name} - ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            Nouveau message depuis le site web
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Nom:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
            <p><strong>Téléphone:</strong> <a href="tel:${validatedData.phone}">${validatedData.phone}</a></p>
            <p><strong>Sujet:</strong> ${validatedData.subject}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 20px; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #1f2937; margin-top: 0;">Message:</h3>
            <p style="color: #4b5563; line-height: 1.6;">${validatedData.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
            <p>Ce message a été envoyé depuis le formulaire de contact du site web.</p>
          </div>
        </div>
      `,
    }

    // if (process.env.NODE_ENV === 'production') {
    if (true) {
      await resend.emails.send(emailData)
    } else {
      console.log('Email would be sent in production:', emailData)
    }

    const confirmationEmailData = {
      from: process.env.RESEND_FROM || 'Sophie Zen <noreply@sophie-zen.fr>',
      to: [validatedData.email],
      subject: 'Confirmation de votre message - Sophie Zen Sophrologue',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">Merci pour votre message</h2>
          
          <p>Bonjour ${validatedData.name},</p>
          
          <p>J'ai bien reçu votre message et je vous remercie de votre intérêt pour mes services de sophrologie.</p>
          
          <p>Je vous répondrai dans les plus brefs délais, généralement sous 24 à 48 heures.</p>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Récapitulatif de votre message:</h3>
            <p><strong>Sujet:</strong> ${validatedData.subject}</p>
            <p><strong>Message:</strong> ${validatedData.message}</p>
          </div>
          
          <p>En attendant, n'hésitez pas à me contacter directement par téléphone au 06 12 34 56 78 pour toute urgence.</p>
          
          <p>À très bientôt,</p>
          <p><strong>Sophie Zen</strong><br>
          Sophrologue certifiée RNCP<br>
          06 12 34 56 78<br>
          contact@sophie-zen.fr</p>
        </div>
      `,
    }

    // if (process.env.NODE_ENV === 'production') {
    if (true) {
      await resend.emails.send(confirmationEmailData)
    } else {
      console.log('Confirmation email would be sent in production:', confirmationEmailData)
    }

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    
    if (error instanceof Error && error.name === 'ValidationError') {
      return NextResponse.json(
        { error: 'Données invalides', details: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}