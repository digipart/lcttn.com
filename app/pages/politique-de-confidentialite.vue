<script setup lang="ts">
// Page for Politique de Confidentialité
</script>

<template>
  <div class="legal-wrapper">
    <Navbar solid />
    <main class="legal-page">
      <div class="container">
        <header class="legal-header">
          <h1>{{ $t('legal.privacy.title') }}</h1>
          <div class="divider"></div>
        </header>

        <section class="legal-section">
          <h2>{{ $t('legal.privacy.s1_title') }}</h2>
          <p>{{ $t('legal.privacy.s1_p1') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal.privacy.s2_title') }}</h2>
          <p>{{ $t('legal.privacy.s2_p1') }}</p>
          <ul>
            <li>{{ $t('legal.privacy.s2_li1') }}</li>
            <li>{{ $t('legal.privacy.s2_li2') }}</li>
            <li>{{ $t('legal.privacy.s2_li3') }}</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal.privacy.s3_title') }}</h2>
          <p>{{ $t('legal.privacy.s3_p1') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal.privacy.s4_title') }}</h2>
          <p>{{ $t('legal.privacy.s4_p1') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal.privacy.s5_title') }}</h2>
          <p>{{ $t('legal.privacy.s5_p1') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal.privacy.s6_title') }}</h2>
          <p>{{ $t('legal.privacy.s6_p1') }}</p>
        </section>

        <div class="back-link">
          <NuxtLink to="/">← {{ $t('legal.back') }}</NuxtLink>
        </div>
      </div>
    </main>
    <FooterSection />
  </div>
</template>

<style scoped>
.legal-wrapper {
  background: #ffffff;
}

.legal-page {
  background: #ffffff;
  color: #1a1a1a;
  min-height: 100vh;
  padding: 180px 0 100px;
  font-family: 'Montserrat', sans-serif;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 40px;
}

.legal-header {
  margin-bottom: 60px;
}

.legal-header h1 {
  font-family: 'scotch-display', serif;
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 20px;
  color: #1a1a1a;
}

.divider {
  width: 60px;
  height: 2px;
  background: #1a1a1a;
}

.legal-section {
  margin-bottom: 40px;
}

.legal-section h2 {
  font-family: 'scotch-display', serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 20px;
  color: #1a1a1a;
}

.legal-section p, .legal-section ul {
  font-size: 1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 15px;
}

.legal-section ul {
  padding-left: 20px;
}

.back-link {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #eee;
}

.back-link a {
  color: #1a1a1a;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: opacity 0.3s ease;
}

.back-link a:hover {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .legal-header h1 {
    font-size: 2.5rem;
  }
}
</style>
