<template>
  <section class="industrial-org-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Notre Organisation Industrielle</h2>
        <div class="title-underline"></div>
      </div>

      <!-- Organization Cards -->
      <div class="org-grid">
        <!-- Tunisie - Hub Industriel -->
        <div class="org-card">
          <div class="card-header">
            <h3 class="card-title">Tunisie – Hub Industriel</h3>
          </div>
          
          <div class="card-stats">
            <span class="stat-item">3 sites de production</span>
            <span class="stat-divider">|</span>
            <span class="stat-item">16 138 m²</span>
            <span class="stat-divider">|</span>
            <span class="stat-item">1350 collaborateurs qualifiés</span>
          </div>

          <ul class="feature-list">
            <li>1121 machines industrielles</li>
            <li>Capacité: 3,5M pièces/an</li>
            <li>Spécialisation par usine (structuré / flexible / réactif)</li>
            <li>Optimisation des coûts</li>
          </ul>
        </div>

        <!-- France - Bureau Paris -->
        <div class="org-card">
          <div class="card-header">
            <h3 class="card-title">France – Bureau Paris</h3>
          </div>
          
          <div class="card-stats">
            <span class="stat-item">Développement commercial</span>
            <span class="stat-divider">|</span>
            <span class="stat-item">Suivi technique</span>
            <span class="stat-divider">|</span>
            <span class="stat-item">Relation client</span>
          </div>

          <ul class="feature-list">
            <li>Showroom permanent</li>
            <li>Équipe commerciale dédiée</li>
            <li>Suivi des collections en temps réel</li>
            <li>Proximité avec les donneurs d'ordre</li>
          </ul>
        </div>

        <!-- Turquie - Bureau Istanbul -->
        <div class="org-card">
          <div class="card-header">
            <h3 class="card-title">Turquie – Bureau Istanbul</h3>
          </div>
          
          <div class="card-stats">
            <span class="stat-item">Sourcing matières</span>
            <span class="stat-divider">|</span>
            <span class="stat-item">Optimisation supply chain</span>
          </div>

          <ul class="feature-list">
            <li>Accès aux meilleurs fournisseurs textiles</li>
            <li>Négociation des prix matières</li>
            <li>Contrôle qualité des tissus</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// IndustrialOrganization component - Premium design
</script>

<style scoped>
.industrial-org-section {
  padding: 80px 0;
  background: #ffffff;
  position: relative;
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
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 400;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  margin-bottom: 30px;
  line-height: 1.2;
}

.title-underline {
  width: 60px;
  height: 1px;
  background: #1a1a1a;
  margin: 0 auto;
}

/* Organization Grid */
.org-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
}

/* Organization Cards */
.org-card {
  background: #fafafa;
  padding: 50px 40px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e8e8e8;
  position: relative;
}

.org-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #1a1a1a;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.org-card:hover::before {
  transform: scaleX(1);
}

.org-card:hover {
  background: #ffffff;
  border-color: #1a1a1a;
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

/* Card Header */
.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 30px;
  padding-bottom: 25px;
  border-bottom: 1px solid #e0e0e0;
}

.card-flag {
  font-size: 2rem;
  opacity: 0.9;
  transition: all 0.3s ease;
}

.org-card:hover .card-flag {
  opacity: 1;
  transform: scale(1.1);
}

.card-title {
  font-family: 'scotch-display', serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #1a1a1a;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

/* Card Stats */
.card-stats {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 35px;
  line-height: 1.8;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.stat-item {
  transition: color 0.3s ease;
}

.org-card:hover .stat-item {
  color: #1a1a1a;
}

.stat-divider {
  color: #d0d0d0;
  margin: 0 4px;
}

/* Feature List */
.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-list li {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  color: #4a4a4a;
  line-height: 1.7;
  padding-left: 20px;
  position: relative;
  transition: all 0.3s ease;
}

.feature-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: #1a1a1a;
  font-weight: 300;
}

.feature-list li:hover {
  color: #1a1a1a;
  transform: translateX(8px);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }

  .org-grid {
    gap: 40px;
  }
}

@media (max-width: 968px) {
  .industrial-org-section {
    padding: 80px 0;
  }

  .container {
    padding: 0 30px;
  }

  .section-header {
    margin-bottom: 60px;
  }

  .org-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .org-card {
    padding: 40px 35px;
  }
}

@media (max-width: 640px) {
  .industrial-org-section {
    padding: 60px 0;
  }

  .container {
    padding: 0 24px;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-header {
    margin-bottom: 50px;
  }

  .org-card {
    padding: 35px 25px;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .card-flag {
    font-size: 1.75rem;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .card-stats {
    font-size: 0.7rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .stat-divider {
    display: none;
  }

  .feature-list li {
    font-size: 0.85rem;
  }
}
</style>