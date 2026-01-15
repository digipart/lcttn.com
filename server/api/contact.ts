import { defineEventHandler, readBody, createError } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  console.log('--- Nouvelle requête de contact reçue ---')

  // Vérifier que c'est une requête POST
  if (event.node.req.method !== 'POST') {
    return createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  try {
    const body = await readBody(event)
    const { name, email, message } = body

    // Validation des champs
    if (!name || !email || !message) {
      return createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: 'Tous les champs sont requis'
      })
    }

    const config = useRuntimeConfig()

    // Debug credentials presence
    console.log('Credentials Check:', {
      host: !!config.smtpHost,
      port: !!config.smtpPort,
      user: !!config.smtpUser,
      pass: !!config.smtpPassword,
    })

    if (!config.smtpUser || !config.smtpPassword) {
      return createError({
        statusCode: 500,
        message: 'SMTP Config Error: Missing credentials (PLAIN) in runtimeConfig'
      })
    }

    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port: parseInt(config.smtpPort as string),
      secure: config.smtpPort === '465',
      auth: {
        user: config.smtpUser,
        pass: config.smtpPassword
      }
    })

    // Vérifier la connexion SMTP
    try {
      await transporter.verify()
    } catch (verifyError: any) {
      console.error('SMTP Verify Error:', verifyError)
      return createError({
        statusCode: 500,
        message: `SMTP Config Error: ${verifyError.message || 'Unknown error'}`
      })
    }

    // Contenu de l'email
    const mailOptions = {
      from: `"${name}" <${config.smtpUser}>`,
      to: config.contactEmail,
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
    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: 'Message envoyé avec succès'
    }
  } catch (error: any) {
    console.error('HANDLER ERROR:', error)
    return createError({
      statusCode: 500,
      message: `Handler Error: ${error.message || 'Unknown error'}`
    })
  }
})
