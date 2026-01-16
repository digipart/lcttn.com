<template>
  <section class="capacity-section" id="capabilities">
    <div class="container">
      
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">{{ $t('capacity.title') }} <span class="title-italic">{{ $t('capacity.titleItalic') }}</span></h2>
        <div class="title-underline"></div>
      </div>
      <div class="capacity-grid">
        <!-- Left: Industrial Showcase (2 Images) -->
        <div class="visual-side">
          <div class="image-collage">
            <div class="img-wrapper large">
              <img src="/images/Capacites-1.png" alt="Centre de Production LCT" />
              <div class="img-overlay"></div>
            </div>
            <div class="img-wrapper floating">
              <img src="/images/Capacites-2.png" alt="Détail Industriel" />
              <div class="img-border"></div>
            </div>
          </div>
          
          <div class="experience-badge">
            <span class="badge-num">30+</span>
            <span class="badge-text">{{ $t('capacity.badge') }}</span>
          </div>
        </div>
        <!-- Right: Factories Details -->
        <div class="content-side">
          <div class="factories-list">
            <div 
              v-for="(factory, index) in factoriesWithIcons" 
              :key="index"
              class="factory-card"
            >
              <div class="factory-icon-box" v-html="factory.icon"></div>
              
              <div class="factory-info">
                <div class="factory-meta">
                  <h3 class="factory-name">{{ factory.name }}</h3>
                  <span class="factory-year">Établie en {{ factory.year }}</span>
                </div>
                <p class="factory-description">{{ factory.description }}</p>
              </div>
              
              <div class="factory-number">0{{ index + 1 }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const factories = [
  {
    name: t('capacity.factory1.name'),
    year: t('capacity.factory1.year'),
    description: t('capacity.factory1.description'),
  },
  {
    name: t('capacity.factory2.name'),
    year: t('capacity.factory2.year'),
    description: t('capacity.factory2.description'),
  },
  {
    name: t('capacity.factory3.name'),
    year: t('capacity.factory3.year'),
    description: t('capacity.factory3.description'),
  },
];
// Modern Black Vector Icons (SVG)
const factoryIcons = [
  // Usine 1: Structured/Robust (Pillar/Geometric)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/><path d="M15 21V9"/></svg>`,
  // Usine 2: Flexible/Adaptable (Arrows/Cycle)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 2h10"/><path d="M5 20h14"/><path d="M12 2v18"/><path d="m5 15 7-7 7 7"/></svg>`,
  // Usine 3: Reactive/Fast (Flash/Speed)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>`
];
const factoriesWithIcons = computed(() => {
  return factories.map((f, i) => ({
    ...f,
    icon: factoryIcons[i % factoryIcons.length]
  }));
});
</script>
<style scoped>
.capacity-section {
  padding: 80px 0;
  background: #ffffff;
  overflow: hidden;
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
  font-size: clamp(2.5rem, 5vw, 4rem);
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
/* Redesigned Grid */
.capacity-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 120px;
  align-items: center;
}
/* Visual Side (Images) */
.visual-side {
  position: relative;
}
.image-collage {
  position: relative;
  height: 550px;
}
.img-wrapper {
  overflow: hidden;
  position: absolute;
  box-shadow: 0 40px 80px rgba(0,0,0,0.1);
}
.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.23, 1, 0.32, 1);
}
.large {
  width: 80%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
}
.floating {
  width: 50%;
  height: 60%;
  right: 0;
  bottom: -40px;
  z-index: 2;
  border: 15px solid #ffffff;
}
.visual-side:hover .img-wrapper img {
  transform: scale(1.08);
}
.experience-badge {
  position: absolute;
  top: 40px;
  right: 0;
  background: #1a1a1a;
  color: #ffffff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
}
.badge-num {
  font-family: 'scotch-display', serif;
  font-size: 2.5rem;
  line-height: 1;
}
.badge-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 5px;
  width: 80px;
  text-align: center;
}
/* Content Side (Factories) */
.factories-list {
  display: flex;
  flex-direction: column;
  gap: 60px;
}
.factory-card {
  display: flex;
  gap: 30px;
  position: relative;
  padding-bottom: 40px;
  border-bottom: 1px solid #f0f0f0;
  transition: border-color 0.4s ease;
}
.factory-card:hover {
  border-color: #1a1a1a;
}
.factory-icon-box {
  width: 32px;
  height: 32px;
  color: #1a1a1a;
  flex-shrink: 0;
  margin-top: 5px;
}
.factory-info {
  flex: 1;
}
.factory-meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 15px;
}
.factory-name {
  font-family: 'scotch-display', serif;
  font-size: 1.8rem;
  font-weight: 400;
  color: #1a1a1a;
}
.factory-year {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #999;
}
.factory-description {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: #666;
}
.factory-number {
  position: absolute;
  right: 0;
  bottom: -20px;
  font-family: 'scotch-display', serif;
  font-size: 5rem;
  color: rgba(26, 26, 26, 0.03);
  z-index: -1;
  transition: color 0.4s ease;
}
.factory-card:hover .factory-number {
  color: rgba(26, 26, 26, 0.06);
}
/* Responsive */
@media (max-width: 1024px) {
  .capacity-grid {
    grid-template-columns: 1fr;
    gap: 100px;
  }
  
  .visual-side {
    order: 2;
  }
}
@media (max-width: 768px) {
  .capacity-section {
    padding: 40px 0;
  }
  .section-header {
    margin-bottom: 40px;
  }
  .container {
    padding: 0 20px;
  }
  .image-collage {
    height: 400px;
  }
}
</style>