<template>
  <section class="expertise-section">
    <!-- Background Decor -->
    <div class="expertise-bg-decor">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
    </div>

    <div class="container relative">
      <!-- 1. Title and Description at the Top -->
      <div class="section-header">
        <h2 class="section-title">
          {{ $t('expertise.title') }}
          <span class="title-highlight">{{ $t('expertise.titleHighlight') }}</span>
        </h2>
        <p class="section-description">
          {{ $t('expertise.description') }}
        </p>
      </div>

      <!-- 2. Main Content Grid (Image Left, Cards Right) -->
      <div class="expertise-content-wrapper">
        
        <!-- Left Column: Premium Image Card -->
        <div class="expertise-visual-card">
          <div class="image-inner">
            <img src="/images/collection1.png" alt="Industrial Excellence" class="main-image">
            <div class="image-overlay"></div>
            
          </div>
          <!-- Decorative SVG Pattern -->
          <div class="visual-decor">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M45,-62.1C58.3,-53.4,69.1,-40.3,74.1,-25.4C79.1,-10.5,78.3,6.3,72.4,21C66.5,35.7,55.5,48.2,42.4,56.5C29.3,64.8,14.6,68.9,-1,70.3C-16.7,71.7,-33.4,70.4,-47,62.3C-60.6,54.1,-71,39.1,-74.7,23.3C-78.4,7.4,-75.4,-9.3,-67.7,-23.1C-60.1,-36.8,-47.8,-47.6,-34.7,-56.4C-21.7,-65.3,-7.9,-72.1,6.4,-80.9C20.7,-89.7,31.7,-70.7,45,-62.1Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>

        <!-- Right Column: Expertise Grid -->
        <div class="expertise-grid">
          <!-- Card 1: Installations (Needle & Precision Stitch) -->
          <div class="expertise-card">
            <div class="card-vector">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dotGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="currentColor" fill-opacity="0.1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotGrid)" />
                <path d="M0 20 L40 20 L60 0" stroke="currentColor" stroke-opacity="0.1" fill="none" stroke-width="2"/>
              </svg>
            </div>
            <div class="icon-wrapper"><Icon name="lucide:factory" class="expertise-icon" /></div>
            <h3 class="stat-title">{{ $t('expertise.installations.title') }}</h3>
            <p class="stat-description">{{ $t('expertise.installations.description') }}</p>
          </div>
          <!-- Card 2: Expertise Humaine (Thread Spool / Bobbin) -->
          <div class="expertise-card">
            <div class="card-vector">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M100 0 L80 0 L70 10 L70 30 L60 40" stroke="currentColor" stroke-opacity="0.1" fill="none" stroke-width="0.5" />
                <circle cx="90" cy="10" r="15" stroke="currentColor" stroke-opacity="0.05" fill="none" stroke-width="5" />
              </svg>
            </div>
            <div class="icon-wrapper"><Icon name="lucide:users" class="expertise-icon" /></div>
            <h3 class="stat-title">{{ $t('expertise.expertise.title') }}</h3>
            <p class="stat-description">{{ $t('expertise.expertise.description') }}</p>
          </div>
          <!-- Card 3: Capacité (Textile Weave / Fabric Grid) -->
          <div class="expertise-card">
            <div class="card-vector">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <rect x="70" y="0" width="30" height="2" fill="currentColor" fill-opacity="0.1" />
                <rect x="85" y="0" width="2" height="30" fill="currentColor" fill-opacity="0.1" />
                <circle cx="100" cy="0" r="40" stroke="currentColor" stroke-opacity="0.03" fill="none" stroke-width="10" />
              </svg>
            </div>
            <div class="icon-wrapper"><Icon name="lucide:trending-up" class="expertise-icon" /></div>
            <h3 class="stat-title">{{ $t('expertise.capacity.title') }}</h3>
            <p class="stat-description">{{ $t('expertise.capacity.description') }}</p>
          </div>
          <!-- Card 4: Partenaire (Pattern Cutting / Tailor Lines) -->
          <div class="expertise-card">
            <div class="card-vector">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" stroke-opacity="0.05" stroke-dasharray="4 4" />
                <path d="M80 100 L100 80 L100 100 Z" fill="currentColor" fill-opacity="0.1" />
              </svg>
            </div>
            <div class="icon-wrapper"><Icon name="lucide:handshake" class="expertise-icon" /></div>
            <h3 class="stat-title">{{ $t('expertise.partners.title') }}</h3>
            <p class="stat-description">{{ $t('expertise.partners.description') }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.expertise-section {
  padding: 120px 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
}

.relative { position: relative; z-index: 2; }

/* Background Decorations */
.expertise-bg-decor .circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.08;
  z-index: 1;
}
.circle-1 { width: 500px; height: 500px; background: #1a1a1a; top: -150px; left: -150px; }
.circle-2 { width: 400px; height: 400px; background: #d4af37; bottom: -100px; right: 100px; }

/* 1. Header Styles */
.section-header {
  text-align: center;
  max-width: 900px;
  margin: 0 auto 80px;
}

.section-title {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 25px;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.title-highlight {
  color: #1a1a1a;
  font-style: italic;
  display: inline-block;
}

.section-description {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.8;
}

/* 2. Main Layout Grid */
.expertise-content-wrapper {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 60px;
  align-items: center;
}

/* Left Column: Visual Card */
.expertise-visual-card {
  position: relative;
  padding: 20px;
}

.image-inner {
  position: relative;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0,0,0,0.12);
  z-index: 2;
}

.main-image {
  width: 100%;
  height: 600px;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.expertise-visual-card:hover .main-image {
  transform: scale(1.05);
}

.experience-badge {
  position: absolute;
  top: 40px;
  right: -20px;
  background: #1a1a1a;
  color: #fff;
  padding: 20px 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 15px 35px rgba(0,0,0,0.3);
}

.badge-number { font-size: 2.2rem; font-weight: 900; line-height: 1; color: #d4af37; }
.badge-text { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; margin-top: 5px; opacity: 0.8;}

.visual-decor {
  position: absolute;
  bottom: -40px;
  left: -40px;
  width: 250px;
  height: 250px;
  color: #f0f0f0;
  z-index: 1;
}

/* Right Column: Cards Grid */
.expertise-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.expertise-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  padding: 40px 30px;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
}

.expertise-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: #1a1a1a;
}

.card-vector {
  position: absolute;
  top: 0; right: 0; width: 100%; height: 100%;
  pointer-events: none;
  color: #1a1a1a;
}

.icon-wrapper {
  width: 60px; height: 60px;
  background: #f8f9fa;
  border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 25px;
  transition: 0.3s;
}

.expertise-card:hover .icon-wrapper {
  background: #1a1a1a;
  color: #fff;
}

.expertise-icon { font-size: 28px; }

.stat-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #1a1a1a;
}

.stat-description {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}
.card-vector {
  position: absolute;
  top: 0; 
  right: 0; 
  width: 100%; 
  height: 100%;
  pointer-events: none;
  color: #1a1a1a;
  transition: all 0.5s ease;
  z-index: 0;
}

.expertise-card:hover .card-vector {
  color: #d4af37; /* The lines turn subtle gold on hover */
  transform: scale(1.1);
  opacity: 0.8;
}

.expertise-card {
  /* ... keep existing styles ... */
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  z-index: 1;
}

/* Ensure content stays above vector */
.icon-wrapper, .stat-title, .stat-description {
  position: relative;
  z-index: 2;
}
/* Responsive Design */
@media (max-width: 1100px) {
  .expertise-content-wrapper { grid-template-columns: 1fr; }
  .expertise-visual-card { max-width: 600px; margin: 0 auto; }
  .main-image { height: 450px; }
}

@media (max-width: 640px) {
  .expertise-grid { grid-template-columns: 1fr; }
  .section-header { margin-bottom: 50px; }
  .section-title { font-size: 2.2rem; }
}
</style>