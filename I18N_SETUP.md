# Multi-langue Setup pour LCT Landing Page

## Installation

Pour activer le support multilingue, vous devez installer le package `@nuxtjs/i18n` :

```bash
pnpm add @nuxtjs/i18n
```

## Configuration

La configuration i18n est déjà présente dans `nuxt.config.ts`. Les langues disponibles sont :
- **Français (fr)** - Langue par défaut
- **Anglais (en)**

## Structure des traductions

Les fichiers de traduction se trouvent dans le dossier `locales/` :
- `locales/fr.json` - Traductions françaises
- `locales/en.json` - Traductions anglaises

## Utilisation dans les composants

### Méthode 1 : Utiliser `$t()` dans le template

```vue
<template>
  <h1>{{ $t('hero.title') }}</h1>
  <p>{{ $t('hero.subtitle') }}</p>
</template>
```

### Méthode 2 : Utiliser `useI18n()` dans le script

```vue
<script setup lang="ts">
import { useI18n } from '#imports'

const { t } = useI18n()

const title = t('hero.title')
</script>
```

### Changer de langue

```vue
<script setup lang="ts">
import { useI18n } from '#imports'

const { setLocale, locale } = useI18n()

const switchLanguage = async (langCode: string) => {
  await setLocale(langCode)
}
</script>
```

## Routes multilingues

Avec la configuration actuelle (`strategy: 'prefix'`) :
- `/fr` - Français (langue par défaut)
- `/en` - Anglais

**Note importante** : Utilisez `localePath()` pour les liens internes dans vos composants :

```vue
<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath('/')">Accueil</NuxtLink>
</template>
```

## Ajouter une nouvelle langue

1. Créer un nouveau fichier dans `locales/` (ex: `locales/es.json`)
2. Ajouter la configuration dans `nuxt.config.ts` :

```ts
i18n: {
  locales: [
    // ... langues existantes
    {
      code: 'es',
      iso: 'es-ES',
      name: 'Español',
      file: 'es.json'
    }
  ]
}
```

## Composants déjà traduits

- ✅ Navbar (avec sélecteur de langue)
- ✅ HeroSection

## Composants à traduire

Pour traduire les autres composants, remplacez le texte en dur par `$t('clé.de.traduction')` en utilisant les clés définies dans `locales/fr.json` et `locales/en.json`.

Exemple pour `PartnersSection.vue` :

```vue
<!-- Avant -->
<h2>Ils nous font confiance</h2>

<!-- Après -->
<h2>{{ $t('partners.title') }} <span>{{ $t('partners.titleItalic') }}</span></h2>
```
