import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  console.log('--- Nouvelle requête de contact reçue ---')

  // Vérifier que c'est une requête POST
  if (event.node.req.method !== 'POST') {
    console.log('Méthode non autorisée:', event.node.req.method)
    return {
      success: false,
      message: 'Method not allowed'
    }
  }

  try {
    const body = await readBody(event)
    console.log('Corps de la requête reçu:', body)

    const { name, email, message } = body

    // Validation des champs
    if (!name || !email || !message) {
      console.log('Validation échouée: champs manquants')
      return {
        success: false,
        message: 'Tous les champs sont requis'
      }
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log('Validation échouée: email invalide', email)
      return {
        success: false,
        message: 'Email invalide'
      }
    }

    // Configuration du transporteur email
    console.log('Tentative de configuration SMTP avec:', {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || '587',
      user: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'info@lcttn.com'
    })

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })

    // Vérifier la connexion SMTP
    console.log('Vérification de la connexion SMTP...')
    try {
      await transporter.verify()
      console.log('Connexion SMTP réussie !')
    } catch (verifyError) {
      console.error('Erreur de vérification SMTP:', verifyError)
      throw new Error(`La configuration SMTP est incorrecte : ${verifyError.message}`)
    }

    // Contenu de l'email
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'info@lcttn.com',
      replyTo: email,
      subject: `Nouveau message de contact - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
    }

    // Envoi de l'email
    console.log('Envoi de l\'email en cours...')
    const info = await transporter.sendMail(mailOptions)
    console.log('Email envoyé avec succès ! MessageID:', info.messageId)

    return {
      success: true,
      message: 'Message envoyé avec succès'
    }
  } catch (error: any) {
    console.error('ERREUR FINALE DANS LE HANDLER:', error)
    return {
      success: false,
      message: error.message || 'Une erreur est survenue'
    }
  }
})
