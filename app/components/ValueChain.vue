<template>
  <section class="valuechain-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Chaîne de <span class="title-italic">Valeur</span></h2>
        <p class="section-description">Un accompagnement complet de l'idée au produit fini.</p>
      </div>
      <!-- Process Flow -->
      <div class="process-wrapper">
        <div class="process-line"></div>
        
        <div class="process-steps">
          <!-- Step 1: Design -->
          <div class="step-card" v-for="(step, index) in stepsWithIcons" 
            :key="index">
            <div class="step-node">
              <div class="step-marker" v-html="step.icon">
            </div>
              
            </div>
            <div class="step-content">
              <span class="step-label" v-if="index < stepsWithIcons.length - 1">Étape 0{{ index + 1 }}</span>
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-description">
                {{ step.description }}
              </p>
            </div>
          </div>
          <!-- Step 2: Sourcing -->
          
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
// ValueChain component with modern black vector icons
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
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"  class="step-icon" ><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  // 02: Industrialization/Gear
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"  class="step-icon" ><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  // 03: Production/Lines
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"  class="step-icon" ><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  // 04: Quality/Shield
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"  class="step-icon" ><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  // 05: Logistics/Truck
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"  class="step-icon" ><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`
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
  background: #fafafa;
  position: relative;
  overflow: hidden;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}
/* Section Header */
.section-header {
  margin-bottom: 100px;
  text-align: left;
}
.section-title {
  font-family: 'scotch-display', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  color: #1a1a1a;
  margin-bottom: 15px;
}
.title-italic {
  font-style: italic;
  font-weight: 400;
}
.section-description {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  color: #666;
  letter-spacing: 0.5px;
}
/* Process Flow */
.process-wrapper {
  position: relative;
  padding: 40px 0;
}
.process-line {
  position: absolute;
  top: 65px;
  left: 0;
  width: 100%;
  height: 1px;
  background: #e0e0e0;
  z-index: 0;
}
.process-steps {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  position: relative;
  z-index: 1;
}
/* Step Cards */
.step-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.4s ease;
}
.step-marker {
  width: 50px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #1a1a1a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
  transition: all 0.4s ease;
  color: hsl(0, 0%, 10%);
  padding: 10px;
}

.step-icon {
  width: 22px;
  height: 22px;
}
.step-content {
  padding-right: 20px;
}
.step-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.65rem;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  display: block;
  margin-bottom: 8px;
}
.step-title {
  font-family: 'scotch-display', serif;
  font-size: 1.35rem;
  font-weight: 400;
  color: #1a1a1a;
  margin-bottom: 15px;
  line-height: 1.3;
}
.step-description {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  color: #777;
  line-height: 1.7;
}
/* Hover States */
.step-card:hover {
  transform: translateY(-5px);
}
.step-marker {
  cursor: pointer;
}
.step-card:hover .step-marker {
  background: #1a1a1a;
  color: #ffffff;
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.step-card.highlight .step-marker {
  background: #1a1a1a;
  color: #ffffff;
}
/* Responsive Design */
@media (max-width: 1100px) {
  .process-steps {
    flex-wrap: wrap;
    justify-content: center;
    gap: 60px 40px;
  }
  .step-card {
    flex: 0 0 calc(33.33% - 40px);
  }
  .process-line {
    display: none;
  }
}
@media (max-width: 768px) {
  .valuechain-section {
    padding: 80px 0;
  }
  .container {
    padding: 0 30px;
  }
  .step-card {
    flex: 0 0 calc(50% - 40px);
  }
}
@media (max-width: 550px) {
  .step-card {
    flex: 0 0 100%;
    margin-bottom: 20px;
  }
  
  .section-header {
    text-align: center;
  }
}
</style>