<template>
  <section class="expertise-section">
    <div class="container">
      <!-- Section Title -->
      <h2 class="section-title">
        LCT - <span class="title-highlight">30 Ans d'Expertise Industrielle</span>
      </h2>
      <p class="footer-description">
        Depuis 1995, LCT s'impose comme un partenaire industriel de référence,
        alliant savoir-faire traditionnel et innovation technologique.
      </p>


      <div class="content-wrapper">
        <!-- Left: Image -->
        <div class="image-container">
          <img src="/images/collection2.png" alt="LCT Production" class="expertise-image">
        </div>

        <!-- Right: Stats Grid -->
        <div class="stats-container">
          <!-- Card 1 -->
          <div class="stat-card">
            <div class="stat-icon"></div>
            <h3 class="stat-title">Installations Industrielles</h3>
            <p class="stat-description">Plus de 16 000 m² dédiés à la production.</p>
          </div>

          <!-- Card 2 -->
          <div class="stat-card">
            <div class="stat-icon"></div>
            <h3 class="stat-title">Expertise Humaine Qualifiée</h3>
            <p class="stat-description">1 350 professionnels engagés dans l'excellence industrielle.</p>
          </div>

          <!-- Card 3 -->
          <div class="stat-card">
            <div class="stat-icon"></div>
            <h3 class="stat-title">Capacité de Production Annuelle Élevée</h3>
            <p class="stat-description">Jusqu'à 3,5 millions de pièces produites chaque année.</p>
          </div>

          <!-- Card 4 -->
          <div class="stat-card">
            <div class="stat-icon"></div>
            <h3 class="stat-title">Partenaire Stratégique des Leaders</h3>
            <p class="stat-description">Collaborations privilégiées avec les grandes marques européennes.</p>
          </div>
        </div>
      </div>

      
    </div>
  </section>
</template>

<script setup lang="ts">
// ExpertiseSection component - Split layout with original content
</script>

<style scoped>
.expertise-section {
  padding: 120px 0;
  background: #f5f5f5;
  position: relative;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}

/* Section Title */
.section-title {
  font-family: 'scotch-display', serif;
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 300;
  color: #1a1a1a;
  margin-bottom: 15px;
}

.title-highlight {
  font-style: italic;
}

/* Content Wrapper */
.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  margin-bottom: 60px;
}

/* Image Container */
.image-container {
  position: relative;
}

.expertise-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 600px;
}

/* Stats Container */
.stats-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px 40px;
  align-content: start;
}

/* Stat Cards */
.stat-card {
  text-align: left;
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
  opacity: 0.3;
}

.stat-title {
  font-family: 'scotch-display', serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #1a1a1a;
  line-height: 1.3;
}

.stat-description {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.7;
}

/* Section Footer */
.section-footer {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 40px;
  border-top: 1px solid #e0e0e0;
}

.footer-description {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 80px;


}

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }

  .content-wrapper {
    gap: 60px;
  }

  .stats-container {
    gap: 40px 30px;
  }
}

@media (max-width: 968px) {
  .expertise-section {
    padding: 80px 0;
  }

  .container {
    padding: 0 30px;
  }

  .section-title {
    margin-bottom: 60px;
  }

  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .expertise-image {
    min-height: 400px;
  }

  .stats-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 640px) {
  .expertise-section {
    padding: 60px 0;
  }

  .container {
    padding: 0 24px;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  .content-wrapper {
    gap: 40px;
  }

  .expertise-image {
    min-height: 300px;
  }

  .stat-icon {
    font-size: 2rem;
  }

  .stat-title {
    font-size: 1.25rem;
  }

  .stat-description {
    font-size: 0.9rem;
  }

  .footer-description {
    font-size: 1rem;
  }
}
</style>