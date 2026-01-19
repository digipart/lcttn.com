<template>
  <div>
    <Navbar />
    <HeroSection />
    <PartnersSection />
    <ExpertiseSection />
    <WhyChoose />
    <RealizationsSection />
    <IndustrialOrganization />
    <CompetitiveAdvantages />
    <Difference />
    <Products />
    <ValueChain /> 
    <ProductionCapacity />
    <CertificationsSection />
    <WhyChooseLCT />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
// SEO pour la page d'accueil
useHead({
  title: 'LCT - LA CONFECTION TUNISIENNE - Partenaire Industriel de Référence',
  meta: [
    { name: 'description', content: 'LCT est votre partenaire industriel de référence pour la confection textile haut et moyen gamme en Tunisie, au service des marques européennes.' },
    { property: 'og:title', content: 'LCT - LA CONFECTION TUNISIENNE' },
    { property: 'og:description', content: 'Confection textile haut et moyen gamme pour les marques européennes.' },
    { property: 'og:image', content: '/images/lct-og-image.jpg' }, // Assurez-vous d'avoir une image Open Graph
    { property: 'og:url', content: 'https://www.lcttn.com' }, // Remplacez par l'URL réelle de votre site
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>

<style scoped>
/* Styles spécifiques à la page d'index si nécessaire */
</style>