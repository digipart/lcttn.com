<template>
  <section class="industrial-org-section" id="organization">
    <!-- Creative Background Element -->
    <div class="bg-decor-orb"></div>

    <div class="container relative">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">{{ $t('organization.title') }}</h2>
        <div class="title-underline"></div>
      </div>

      <div class="org-grid">
        <!-- Tunisie Hub -->
        <div class="org-card">
          <div class="card-status">Primary Hub</div>
          <div class="card-header">
            <div class="icon-wrapper">
              <Icon name="lucide:factory" class="org-icon" />
            </div>
            <h3 class="card-title">{{ $t('organization.tunisia.title') }}</h3>
          </div>
          
          <div class="card-stats">
            <span class="stat-pill">{{ $t('organization.tunisia.stats[0]') }}</span>
            <span class="stat-pill">{{ $t('organization.tunisia.stats[1]') }}</span>
            <span class="stat-pill">{{ $t('organization.tunisia.stats[2]') }}</span>
          </div>

          <ul class="feature-list">
            <li><Icon name="lucide:arrow-up-right" class="li-icon"/> {{ $t('organization.tunisia.items[0]') }}</li>
            <li><Icon name="lucide:arrow-up-right" class="li-icon"/> {{ $t('organization.tunisia.items[1]') }}</li>
            <li><Icon name="lucide:arrow-up-right" class="li-icon"/> {{ $t('organization.tunisia.items[2]') }}</li>
            <li><Icon name="lucide:arrow-up-right" class="li-icon"/> {{ $t('organization.tunisia.items[3]') }}</li>
          </ul>
        </div>

        <!-- France Bureau -->
        <div class="org-card highlighted">
          <div class="card-status">Global Relations</div>
          <div class="card-header">
            <div class="icon-wrapper">
              <Icon name="lucide:map-pin" class="org-icon" />
            </div>
            <h3 class="card-title">{{ $t('organization.france.title') }}</h3>
          </div>
          
          <div class="card-stats">
            <span class="stat-pill">{{ $t('organization.france.stats[0]') }}</span>
            <span class="stat-pill">{{ $t('organization.france.stats[1]') }}</span>
            <span class="stat-pill">{{ $t('organization.france.stats[2]') }}</span>
          </div>

          <ul class="feature-list">
            <li><Icon name="lucide:arrow-up-right" class="li-icon"/> {{ $t('organization.france.items[0]') }}</li>
            <li><Icon name="lucide:arrow-up-right" class="li-icon"/> {{ $t('organization.france.items[1]') }}</li>
            <li><Icon name="lucide:arrow-up-right" class="li-icon"/> {{ $t('organization.france.items[2]') }}</li>
            <li><Icon name="lucide:arrow-up-right" class="li-icon"/> {{ $t('organization.france.items[3]') }}</li>
          </ul>
        </div>

        <!-- Turquie Bureau -->
        <div class="org-card">
          <div class="card-status">Sourcing & Supply</div>
          <div class="card-header">
            <div class="icon-wrapper">
              <Icon name="lucide:box" class="org-icon" />
            </div>
            <h3 class="card-title">{{ $t('organization.turkey.title') }}</h3>
          </div>
          
          <div class="card-stats">
            <span class="stat-pill">{{ $t('organization.turkey.stats[0]') }}</span>
            <span class="stat-pill">{{ $t('organization.turkey.stats[1]') }}</span>
          </div>

          <ul class="feature-list">
            <li><Icon name="lucide:arrow-up-right" class="li-icon"/> {{ $t('organization.turkey.items[0]') }}</li>
            <li><Icon name="lucide:arrow-up-right" class="li-icon"/> {{ $t('organization.turkey.items[1]') }}</li>
            <li><Icon name="lucide:arrow-up-right" class="li-icon"/> {{ $t('organization.turkey.items[2]') }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.industrial-org-section {
  padding: 80px 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
}

.bg-decor-orb {
  position: absolute;
  top: -10%;
  right: -5%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
}

.relative { position: relative; z-index: 2; }

/* Header */
.section-header {
  text-align: center;
  margin-bottom: 100px;
}

.section-title {
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 20px;
  letter-spacing: -0.04em;
}

.title-underline {
  width: 50px;
  height: 4px;
  background: #1a1a1a;
  margin: 0 auto;
}

/* Grid */
.org-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

/* Base Card Styling */
.org-card {
  background: #ffffff;
  padding: 50px 40px;
  border-radius: 32px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  display: flex;
  flex-direction: column;
}

.org-card.highlighted {
  background: #fcfcfc;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04);
}

.org-card:hover {
  transform: translateY(-12px);
  border-color: #1a1a1a;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
}

/* Card Badge/Status */
.card-status {
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #bbb;
  margin-bottom: 25px;
}

.org-card:hover .card-status {
  color: #1a1a1a;
}

/* Header within Card */
.card-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  background: #f7f7f7;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}

.org-icon {
  font-size: 24px;
  color: #1a1a1a;
}

.org-card:hover .icon-wrapper {
  background: #1a1a1a;
  color: #fff;
}

.org-card:hover .org-icon {
  color: #fff;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.2;
}

/* Stats Styling */
.card-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 35px;
}

.stat-pill {
  font-size: 0.8rem;
  font-weight: 600;
  background: #f0f0f0;
  padding: 6px 14px;
  border-radius: 100px;
  color: #444;
  white-space: nowrap;
}

/* Feature List */
.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 16px;
  margin-top: auto;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.95rem;
  line-height: 1.4;
  color: #666;
}

.li-icon {
  font-size: 16px;
  color: #1a1a1a;
  margin-top: 2px;
  opacity: 0.4;
  transition: opacity 0.3s;
}

.org-card:hover .li-icon {
  opacity: 1;
}

/* Responsive Extensions */
@media (max-width: 768px) {
  .industrial-org-section { padding: 40px 0; }
  .section-header { margin-bottom: 40px; }
  .org-grid { grid-template-columns: 1fr; }
  .org-card { padding: 40px 20px; }
  .section-title { font-size: 1.8rem; }
}
</style>