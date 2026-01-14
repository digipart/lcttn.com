<template>
  <section class="why-bento-section" id="why-choose-us">
    <div class="container">
      
      <!-- Minimalist Centered Header -->
      <div class="header-center">
        <span class="eyebrow">Engagement & Excellence</span>
        <h2 class="title-main">Pourquoi Nous <span class="italic">Choisir</span></h2>
      </div>
      <div class="bento-container">
        <!-- Pillar 01 -->
        <div class="bento-box">
          <div class="box-header">
            <span class="index">01</span>
            <svg class="box-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <h3 class="box-title">Performance & Réactivité</h3>
          <ul class="clean-list">
            <li>3 sites spécialisés — Multi-lignes</li>
            <li>Éch. 2j — Production 3 semaines</li>
            <li>Proximité Europe (Tunisie — 2-3j)</li>
            <li>Bureau Paris — Suivi en temps réel</li>
            <li>Flexibilité 5k à 500k pièces</li>
          </ul>
        </div>
        <!-- Pillar 02 -->
        <div class="bento-box dark">
          <div class="box-header">
            <span class="index">02</span>
            <svg class="box-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="m9.05 9 1.77 4.94a.5.5 0 0 0 .96 0L13.55 9"/></svg>
          </div>
          <h3 class="box-title">Fiabilité & Expertise</h3>
          <ul class="clean-list inverse">
            <li>30 ans d'expérience (est. 1995)</li>
            <li>Partner: Zara, Mango, Diesel...</li>
            <li>Qualité certifiée >98% conformité</li>
            <li>Certifications internationales complètes</li>
            <li>R&D Durable & Green Innovation</li>
          </ul>
        </div>
      </div>
      <!-- Compact Trust Bar -->
      <div class="trust-bar">
        <span>ISO 28000</span>
        <div class="sep"></div>
        <span>SMETA/SEDEX</span>
        <div class="sep"></div>
        <span>ICS</span>
        <div class="sep"></div>
        <span>HIGG INDEX</span>
      </div>
    </div>
  </section>
</template>
<style scoped>
.why-bento-section {
  padding: 80px 0;
  background: #ffffff;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}
/* Header */
.header-center {
  text-align: center;
  margin-bottom: 60px;
}
.eyebrow {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #999;
  display: block;
  margin-bottom: 15px;
}
.title-main {
  font-family: 'scotch-display', serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 300;
  color: #1a1a1a;
}
.italic {
  font-style: italic;
  font-weight: 400;
}
/* Bento Grid */
.bento-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: #f0f0f0; /* The "lines" between boxes */
  border: 1px solid #f0f0f0;
}
.bento-box {
  background: #ffffff;
  padding: 60px;
  transition: all 0.4s ease;
}
.bento-box.dark {
  background: #1a1a1a;
  color: #ffffff;
}
.box-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}
.index {
  font-family: 'scotch-display', serif;
  font-size: 1.2rem;
  color: #999;
}
.box-icon {
  width: 24px;
  height: 24px;
  color: inherit;
  opacity: 0.8;
}
.box-title {
  font-family: 'scotch-display', serif;
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: 400;
}
/* Clean List */
.clean-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.clean-list li {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  margin-bottom: 15px;
  line-height: 1.5;
  color: #666;
  border-bottom: 1px solid #f9f9f9;
  padding-bottom: 10px;
}
.inverse li {
  color: #aaa;
  border-bottom-color: rgba(255,255,255,0.05);
}
.bento-box:hover .clean-list li {
  color: #1a1a1a;
  border-bottom-color: #eee;
}
.bento-box.dark:hover .clean-list li {
  color: #fff;
}
/* Trust Bar */
.trust-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 60px;
}
.trust-bar span {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 2px;
  color: #ccc;
  text-transform: uppercase;
}
.sep {
  width: 4px;
  height: 4px;
  background: #eee;
  border-radius: 50%;
}
/* Responsive */
@media (max-width: 968px) {
  .bento-container {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .container {
    padding: 0 24px;
  }
  .bento-box {
    padding: 40px 30px;
  }
  .trust-bar {
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>