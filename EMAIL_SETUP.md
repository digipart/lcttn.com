# Configuration de l'envoi d'email

## Installation

Pour activer l'envoi d'email, installez nodemailer :

```bash
pnpm add nodemailer
```

## Configuration

### Option 1 : SMTP (Gmail, Outlook, etc.)

1. Créez un fichier `.env` à la racine du projet
2. Copiez le contenu de `.env.example` dans `.env`
3. Configurez vos identifiants SMTP :

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASSWORD=votre-app-password
CONTACT_EMAIL=info@lcttn.com
```

**Pour Gmail :**
- Activez l'authentification à deux facteurs
- Générez un "App Password" : https://myaccount.google.com/apppasswords
- Utilisez ce mot de passe dans `SMTP_PASSWORD`

### Option 2 : Resend (Recommandé - Plus simple)

Resend est un service moderne et simple pour l'envoi d'emails.

1. Créez un compte sur [Resend](https://resend.com)
2. Obtenez votre API key
3. Configurez dans `.env` :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=info@lcttn.com
```

4. Modifiez `server/api/contact.ts` pour utiliser Resend au lieu de nodemailer

### Option 3 : SendGrid, Mailgun, etc.

Vous pouvez adapter le code dans `server/api/contact.ts` pour utiliser n'importe quel service d'email.

## Test

Une fois configuré, testez le formulaire de contact sur votre site. Les emails seront envoyés à l'adresse configurée dans `CONTACT_EMAIL`.

## Sécurité

⚠️ **Important** : Ne commitez jamais votre fichier `.env` dans Git. Il est déjà dans `.gitignore`.

## Dépannage

- **Erreur d'authentification** : Vérifiez vos identifiants SMTP
- **Email non reçu** : Vérifiez le dossier spam
- **Erreur de connexion** : Vérifiez que le port et l'hôte SMTP sont corrects
