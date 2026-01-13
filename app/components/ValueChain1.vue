<template>
  <section class="valuechain-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Chaîne de <span class="title-italic">Valeur</span></h2>
        <div class="title-underline"></div>
      </div>
      <!-- Steps Flow -->
      <div class="steps-wrapper">
        <!-- The "Chain" Line -->
        <div class="chain-line"></div>
        <div class="steps-grid">
          <div 
            v-for="(step, index) in stepsWithIcons" 
            :key="index"
            class="step-card"
          >
            <div class="step-header">
              <div class="node-container">
                <div class="step-node">
                  <div class="icon-wrapper" v-html="step.icon"></div>
                </div>
                <!-- Mini pointer for the flow -->
                <div class="flow-pointer" v-if="index < stepsWithIcons.length - 1"></div>
              </div>
              <span class="step-number">0{{ index + 1 }}</span>
            </div>
            
            <div class="step-body">
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-description">{{ step.description }}</p>
            </div>
            
            <div class="step-accent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue';
const valueChainSteps = [
  {
    id: 1,
    title: 'Développement & Prototypage',
    description: 'Concevez vos collections avec 60 échantillons par semaine, garantissant une réactivité maximale.'
  },
  {
    id: 2,
    title: 'Industrialisation',
    description: 'Transformez vos prototypes en production à grande échelle grâce à nos processus optimisés.'
  },
  {
    id: 3,
    title: 'Production multi-lignes',
    description: 'Atteignez une capacité de 3,5 millions de pièces par an avec nos lignes performantes.'
  },
  {
    id: 4,
    title: 'Contrôle qualité',
    description: 'Assurez la conformité avec nos 12 inspecteurs qualité dédiés à l\'excellence.'
  },
  {
    id: 5,
    title: 'Logistique',
    description: 'Bénéficiez d\'une livraison rapide en Europe en 2 à 3 jours via notre chaîne optimisée.'
  },
];
const icons = [
  // 01: Pencil/Design
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  // 02: Industrialization/Gear
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  // 03: Production/Lines
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  // 04: Quality/Shield
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  // 05: Logistics/Truck
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`
];
const stepsWithIcons = computed(() => {
  return valueChainSteps.map((step, index) => ({
    ...step,
    icon: icons[index % icons.length]
  }));
});
</script>
<style scoped>
.valuechain-section {
  padding: 120px 0;
  background: #ffffff;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}
/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 100px;
}
.section-title {
  font-family: 'scotch-display', serif;
  font-size: clamp(2.5rem, 4.5vw, 4rem);
  font-weight: 300;
  color: #1a1a1a;
  letter-spacing: -0.01em;
}
.title-italic {
  font-style: italic;
  font-weight: 400;
}
.title-underline {
  width: 60px;
  height: 1px;
  background: #1a1a1a;
  margin: 30px auto 0;
}
/* Steps Flow */
.steps-wrapper {
  position: relative;
  padding-top: 20px;
}
/* The Chain Line (Desktop) */
.chain-line {
  position: absolute;
  top: 48px; /* Centers with node circle */
  left: 0;
  width: 100%;
  height: 1px;
  background: rgba(26, 26, 26, 0.1);
  z-index: 0;
}
.steps-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  position: relative;
  z-index: 1;
}
/* Step Card */
.step-card {
  background: #ffffff;
  padding: 40px 20px;
  border: 1px solid transparent;
  position: relative;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  flex-direction: column;
}
.step-card:hover {
  background: #fafafa;
  transform: translateY(-8px);
}
.step-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
}
.node-container {
  position: relative;
  display: flex;
  align-items: center;
}
.step-node {
  width: 56px;
  height: 56px;
  background: #ffffff;
  border: 1px solid #1a1a1a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.4s ease;
}
.step-card:hover .step-node {
  background: #1a1a1a;
  color: #ffffff;
}
.icon-wrapper {
  width: 24px;
  height: 24px;
  color: inherit;
}
.step-number {
  font-family: 'scotch-display', serif;
  font-size: 1rem;
  color: #999;
  letter-spacing: 0.1em;
}
.step-title {
  font-family: 'scotch-display', serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: #1a1a1a;
  margin-bottom: 15px;
  line-height: 1.3;
}
.step-description {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
}
/* Bottom Accent */
.step-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background: #1a1a1a;
  transition: width 0.5s ease;
}
.step-card:hover .step-accent {
  width: 100%;
}
/* Responsive Design */
@media (max-width: 1200px) {
  .steps-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 30px;
  }
  .chain-line {
    display: none; /* Line gets messy in multi-row grid */
  }
}
@media (max-width: 768px) {
  .steps-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .step-card {
    padding: 0;
  }
  .step-card:hover {
    transform: none;
    background: transparent;
  }
  /* Vertical Chain Line on Mobile */
  .steps-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 28px;
    width: 1px;
    height: 100%;
    background: rgba(26, 26, 26, 0.1);
    z-index: 0;
  }
}
@media (max-width: 640px) {
  .valuechain-section {
    padding: 60px 0;
  }
  .container {
    padding: 0 24px;
  }
}
</style>