<template>
  <section class="partners-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">
          Ils nous <span class="title-italic">font confiance</span>
        </h2>
        <div class="title-underline"></div>
      </div>
      <!-- Logo Grid -->
      <div class="partners-marquee">
        <div class="marquee-track">
          <!-- Groupe 1 -->
          <div class="partner-item" v-for="(logo, i) in logos" :key="'a'+i">
            <img :src="logo" class="partner-logo" />
          </div>

          <!-- Groupe 2 (duplication) -->
          <div class="partner-item" v-for="(logo, i) in logos" :key="'b'+i">
            <img :src="logo" class="partner-logo" />
          </div>
        </div>
      </div>
      <!-- CTA (Optional) -->
      <!-- <div class="cta-container">
        <button class="cta-outline">VOIR TOUTES NOS RÉFÉRENCES</button>
      </div> -->
    </div>
  </section>
</template>
<script setup lang="ts">
// PartnersSection component - Premium design inspired by reference
const logos = [
  '/images/partners/MISSONI.png',
  '/images/partners/DIESEL.png',
  '/images/partners/WOOLRICH.png',
  '/images/partners/PINKO.png',
  '/images/partners/MANGO.png',
  '/images/partners/IKKS.png',
  '/images/partners/KOOKAI.png',
  '/images/partners/ARMANDTHIERY.png',
  '/images/partners/ZARA.png',
  '/images/partners/BERSHKA.png',
  '/images/partners/P&B.png',
  '/images/partners/ETAM.png',
  '/images/partners/SYORAPARIS.png',
]
</script>
<style scoped>
.partners-section {
  padding: 0px 0;
  background: #ffffff;
  /* border-top: 1px solid #f0f0f0; */
}
.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 0px 0 0px;
  display: flex;
  align-items: center;
}
/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 0px;
  padding: 10px 0;
  width: 20%;
  background: #1a1a1a;
}
.section-title {
  font-family: 'scotch-display', serif;
  font-size: clamp(2rem, 3.5vw, 2rem);
  line-height: 40px;
  font-weight: 500;
  color: #1a1a1a;
  color: #fff;
  letter-spacing: -0.01em;
  margin: 0;
}
.title-italic {
  font-style: italic;
  font-weight: 500;
}
.title-underline {
  width: 50px;
  height: 1px;
  background: #1a1a1a;
  background: #fff;
  margin: 10px auto 0;
}
/* Partners Grid */
.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 40px;
  align-items: center;
  justify-items: center;
  margin-bottom: 60px;
}
.partner-item {
  width: 100%;
  max-width: 140px;
  filter: grayscale(100%);
  opacity: 0.5;
  transition: all 0.4s ease;
  padding: 20px;
  display: flex;
}
.partner-item:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.05);
}
.partner-logo {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}
/* CTA Outline */
.cta-container {
  text-align: center;
}
.cta-outline {
  font-family: 'Montserrat', sans-serif;
  background: transparent;
  color: #1a1a1a;
  border: 1px solid #1a1a1a;
  padding: 16px 45px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
}
.cta-outline:hover {
  background: #1a1a1a;
  color: #ffffff;
}
/* Responsive Design */
@media (max-width: 768px) {
  .partners-section {
    padding: 70px 0;
  }
  .container {
    padding: 0 30px;
  }
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .partner-item {
    max-width: 120px;
  }
}
@media (max-width: 480px) {
  .section-title {
    font-size: 1.75rem;
  }
}

.partners-marquee {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 35s linear infinite;
}

.partner-item {
  flex: 0 0 auto;
  width: 160px;
  padding: 10px 35px;
  filter: grayscale(100%);
  opacity: 0.5;
  transition: all 0.4s ease;
}

.partner-item:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.05);
}

.partner-logo {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* Animation */
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
.partners-marquee:hover .marquee-track {
  animation-play-state: paused;
}

</style>