<template>
  <section class="advantages-section" id="advantages">
    <!-- Restored Background with Overlay -->
    <div class="background-overlay"></div>
    
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">
          {{ $t('advantages.title') }}
        </h2>
        <div class="title-underline"></div>
      </div>

      <div class="advantages-grid">
        <!-- Proximité géographique -->
        <div class="advantage-card">
          <div class="card-glow"></div>
          <div class="icon-box">
            <Icon name="lucide:ship" class="adv-icon" />
          </div>
          <h3 class="card-title">
            {{ $t('advantages.proximity.title') }}
          </h3>
          <div class="card-description">
            <p>{{ $t('advantages.proximity.description') }}</p>
          </div>
          <div class="card-footer-decor"></div>
        </div>

        <!-- Main-d'œuvre qualifiée -->
        <div class="advantage-card highlighted">
          <div class="card-glow"></div>
          <div class="icon-box">
            <Icon name="lucide:graduation-cap" class="adv-icon" />
          </div>
          <h3 class="card-title">
            {{ $t('advantages.workforce.title') }}
          </h3>
          <div class="card-description">
            <p>{{ $t('advantages.workforce.description') }}</p>
          </div>
          <div class="card-footer-decor"></div>
        </div>

        <!-- Flexibilité industrielle -->
        <div class="advantage-card">
          <div class="card-glow"></div>
          <div class="icon-box">
            <Icon name="lucide:zap" class="adv-icon" />
          </div>
          <h3 class="card-title">
            {{ $t('advantages.flexibility.title') }}
          </h3>
          <div class="card-description">
            <p>{{ $t('advantages.flexibility.description') }}</p>
          </div>
          <div class="card-footer-decor"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.advantages-section {
  padding: 80px 0;
  background-image: url('/images/img_port.jpg'); /* Restore your background image */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
}

.background-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.60); /* Clean white/light overlay */
  z-index: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

/* Header */
.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-badge {
  display: inline-block;
  padding: 6px 18px;
  background: rgba(0, 0, 0, 0.05); /* Changed gold to black clear */
  color: #1a1a1a;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.section-title {
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 800;
  color: #fff;
  margin-bottom: 20px;
  letter-spacing: -0.03em;
}

.title-underline {
  width: 50px;
  height: 4px;
  background: #fff; /* Changed gold to black */
  margin: 0 auto;
}

/* Grid */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

/* Cards */
.advantage-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  padding: 60px 40px;
  border-radius: 32px;
  position: relative;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.advantage-card.highlighted {
  background: #ffffff;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.05);
  transform: scale(1.02);
}

.advantage-card:hover {
  transform: translateY(-15px) scale(1.02);
  border-color: #1a1a1a;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.12);
  background: #ffffff;
}

.card-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(0, 0, 0, 0.03), transparent 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.advantage-card:hover .card-glow {
  opacity: 1;
}

/* Icons */
.icon-box {
  width: 72px;
  height: 72px;
  background: #f0f0f0;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
  transition: all 0.5s ease;
  position: relative;
  z-index: 2;
}

.adv-icon {
  font-size: 28px;
  color: #1a1a1a;
  transition: all 0.5s ease;
}

.advantage-card:hover .icon-box {
  background: #1a1a1a;
  transform: rotateY(180deg);
}

.advantage-card:hover .adv-icon {
  color: #ffffff;
  transform: rotateY(-180deg);
}

/* Content */
.card-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;
  line-height: 1.3;
  position: relative;
  z-index: 2;
}

.card-description {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.8;
  position: relative;
  z-index: 2;
}

.card-footer-decor {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, transparent 50%, rgba(0, 0, 0, 0.03) 50%);
  border-radius: 0 0 32px 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .advantages-grid { grid-template-columns: repeat(2, 1fr); }
  .advantage-card.highlighted { transform: scale(1); }
}

@media (max-width: 768px) {
  .advantages-section { padding: 100px 0; }
  .advantages-grid { grid-template-columns: 1fr; }
  .advantage-card { padding: 50px 30px; }
  .section-title { font-size: 2.2rem; }
}
</style>