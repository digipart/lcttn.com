<template>
  <section class="cert-bento-section">
    <div class="container">
      
      <!-- Section Header -->
      <div class="header-minimal">
        <h2 class="title-main">{{ $t('certifications.title') }} & <span class="italic">{{ $t('certifications.titleItalic') }}</span></h2>
        <p class="lead-text">{{ $t('certifications.lead') }}</p>
      </div>
      <!-- Bento Grid for Certifications -->
      <div class="bento-grid">
        
        <!-- Large Guarantee Box -->
        <div class="bento-item guarantee-island">
          <div class="island-content">
            <svg class="icon-big" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            <h3>{{ $t('certifications.guarantee.title') }}</h3>
            <p>{{ $t('certifications.guarantee.description') }}</p>
          </div>
        </div>
        <!-- Small Cert Cards -->
        <div class="bento-item cert-card">
          <span class="cert-label">{{ $t('certifications.ics.label') }}</span>
          <svg class="cert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          <p>{{ $t('certifications.ics.description') }}</p>
        </div>
        <div class="bento-item cert-card">
          <span class="cert-label">{{ $t('certifications.iso28000.label') }}</span>
          <svg class="cert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <p>{{ $t('certifications.iso28000.description') }}</p>
        </div>
        <div class="bento-item cert-card">
          <span class="cert-label">{{ $t('certifications.ocs.label') }}</span>
          <svg class="cert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 21 2c-2 5-2.5 7.3-1.2 14 .5 2.7-1.8 5-4.5 4.3l-4.3-.3z"/></svg>
          <p>{{ $t('certifications.ocs.description') }}</p>
        </div>
        <div class="bento-item cert-card">
          <span class="cert-label">{{ $t('certifications.higg.label') }}</span>
          <svg class="cert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
          <p>{{ $t('certifications.higg.description') }}</p>
        </div>
      </div>
      <!-- Roadmap Path Section -->
      <div class="roadmap-path">
        <!-- <h3 class="path-title">{{$t('certifications.roadmap.title')}}</h3> -->
        
        <div class="path-container">
          <div class="horizontal-line"></div>
          
          <div class="path-steps">
            <!-- Step 2026 -->
            <div class="path-step">
              <div class="step-marker">{{$t('certifications.roadmap.step1.year')}}</div>
              <div class="step-card">
                <h4>{{$t('certifications.roadmap.step1.title')}}</h4>
                <p>{{$t('certifications.roadmap.step1.description1')}}</p>
                <p>{{$t('certifications.roadmap.step1.description2')}}</p>
              </div>
            </div>
            <!-- Step 2026-2027 -->
            <div class="path-step">
              <div class="step-marker accent">{{$t('certifications.roadmap.step2.year')}}</div>
              <div class="step-card">
                <h4>{{$t('certifications.roadmap.step2.title')}}</h4>
                <p>{{$t('certifications.roadmap.step2.description1')}}</p>
                <p>{{$t('certifications.roadmap.step2.description2')}}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="objectives-strip">
          <svg class="strip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
          <p><strong>Objectifs Durables :</strong> Amélioration continue de nos performances sociales et environnementales.</p>
        </div> -->
      </div>
      <!-- <div class="section-footer-minimal">
        <p>LCT &copy; 2026 — Engagement pour la durabilité et la conformité</p>
      </div> -->
    </div>
  </section>
</template>
<style scoped>
.cert-bento-section {
  padding: 140px 0;
  background: #ffffff;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}
/* Minimal Header */
.header-minimal {
  margin-bottom: 80px;
}
.title-main {
  font-family: 'scotch-display', serif;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 300;
  color: #1a1a1a;
  margin-bottom: 10px;
}
.italic {
  font-style: italic;
  font-weight: 400;
}
.lead-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #999;
  letter-spacing: 0.5px;
}
/* Bento Grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  margin-bottom: 120px;
}
.bento-item {
  background: #fdfdfd;
  border: 1px solid #f0f0f0;
  padding: 40px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}
.bento-item:hover {
  background: #ffffff;
  border-color: #1a1a1a;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  transform: translateY(-5px);
}
/* Specific Items */
.guarantee-island {
  grid-column: span 2;
  grid-row: span 2;
  display: flex;
  align-items: center;
  background: #1a1a1a;
  color: #ffffff;
}
.guarantee-island:hover {
  background: #000;
}
.icon-big {
  width: 60px;
  height: 60px;
  margin-bottom: 30px;
}
.guarantee-island h3 {
  font-family: 'scotch-display', serif;
  font-size: 2.2rem;
  margin-bottom: 20px;
}
.guarantee-island p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  opacity: 0.8;
}
.cert-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
}
.cert-label {
  font-family: 'scotch-display', serif;
  font-size: 1.1rem;
  color: #1a1a1a;
}
.cert-icon {
  width: 32px;
  height: 32px;
  color: #1a1a1a;
  margin: 20px 0;
}
.cert-card p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  color: #888;
  line-height: 1.5;
}
/* Roadmap Path */
.roadmap-path {
  background: #fafafa;
  padding: 80px 60px;
  border-left: 5px solid #1a1a1a;
}
.path-title {
  font-family: 'scotch-display', serif;
  font-size: 2rem;
  margin-bottom: 60px;
}
.path-container {
  position: relative;
}
.horizontal-line {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 1px;
  background: #e0e0e0;
}
.path-steps {
  display: flex;
  gap: 100px;
}
.path-step {
  position: relative;
  flex: 1;
}
.step-marker {
  width: max-content;
  background: #ffffff;
  padding: 5px 20px;
  border: 1px solid #1a1a1a;
  font-family: 'scotch-display', serif;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}
.step-marker.accent {
  background: #1a1a1a;
  color: #ffffff;
}
.step-card h4 {
  font-family: 'scotch-display', serif;
  font-size: 1.4rem;
  margin-bottom: 10px;
}
.step-card p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}
/* Objectives Strip */
.objectives-strip {
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 40px;
  border-top: 1px solid #eeeeee;
}
.strip-icon {
  width: 24px;
  height: 24px;
  color: #1a1a1a;
}
.objectives-strip p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  color: #555;
}
/* Minimal Footer */
.section-footer-minimal {
  margin-top: 100px;
  text-align: center;
}
.section-footer-minimal p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  color: #bbb;
  text-transform: uppercase;
  letter-spacing: 2px;
}
/* Responsive */
@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .container {
    padding: 0 30px;
  }
  .bento-grid {
    grid-template-columns: 1fr;
  }
  .guarantee-island {
    grid-column: span 1;
  }
  .path-steps {
    flex-direction: column;
    gap: 50px;
  }
  .horizontal-line {
    display: none;
  }
  .roadmap-path {
    padding: 40px 30px;
  }
}
</style>