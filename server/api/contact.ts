import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  // Vérifier que c'est une requête POST
  if (event.node.req.method !== 'POST') {
    return {
      success: false,
      message: 'Method not allowed'
    }
  }

  try {
    const body = await readBody(event)
    const { name, email, message } = body

    // Validation des champs
    if (!name || !email || !message) {
      return {
        success: false,
        message: 'Tous les champs sont requis'
      }
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: 'Email invalide'
      }
    }

    // Configuration de l'email (vous pouvez utiliser nodemailer, Resend, SendGrid, etc.)
    // Pour cet exemple, nous allons utiliser nodemailer
    // Vous devez installer: pnpm add nodemailer
    // Et configurer les variables d'environnement dans .env

    const nodemailer = await import('nodemailer')
    
    // Configuration du transporteur email
    // Utilisez vos propres credentials SMTP ou un service comme Resend, SendGrid, etc.
    const transporter = nodemailer.default.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true pour 465, false pour les autres ports
      auth: {
        user: process.env.SMTP_USER, // Votre email
        pass: process.env.SMTP_PASSWORD // Votre mot de passe ou app password
      }
    })

    // Contenu de l'email
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'info@lcttn.com',
      replyTo: email,
      subject: `Nouveau message de contact depuis le site LCT - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a;">Nouveau message de contact</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">
            Ce message a été envoyé depuis le formulaire de contact du site LCT.
          </p>
        </div>
      `,
      text: `
        Nouveau message de contact
        
        Nom: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `
    }

    // Envoi de l'email
    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: 'Message envoyé avec succès'
    }
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return {
      success: false,
      message: error.message || 'Une erreur est survenue lors de l\'envoi du message'
    }
  }
})
