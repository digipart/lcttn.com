<template>
  <section class="competitive-advantages-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Avantages Compétitifs</h2>
        <div class="title-underline"></div>
      </div>

      <!-- Advantages Grid -->
      <div class="advantages-grid">
        <!-- Proximité géographique -->
        <div class="advantage-card">
          <div class="card-number">01</div>
          <h3 class="card-title">Proximité géographique</h3>
          <div class="card-description">
            <p>2 jours de transport maritime | Procédures douanières simplifiées | Réactivité logistique</p>
          </div>
        </div>

        <!-- Main-d'œuvre qualifiée -->
        <div class="advantage-card">
          <div class="card-number">02</div>
          <h3 class="card-title">Main-d'œuvre qualifiée et expérimentée</h3>
          <div class="card-description">
            <p>Grande disponibilité de talents techniques | Coûts compétitifs | Expertise industrielle reconnue</p>
          </div>
        </div>

        <!-- Flexibilité industrielle -->
        <div class="advantage-card">
          <div class="card-number">03</div>
          <h3 class="card-title">Flexibilité industrielle et scalabilité</h3>
          <div class="card-description">
            <p>Capacité d'adaptation aux besoins du marché | Infrastructure robuste pour la croissance | Solutions sur mesure</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// CompetitiveAdvantages component - Premium design
</script>

<style scoped>
.competitive-advantages-section {
  padding: 120px 0;
  background-image: url('/images/img_port.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}

.competitive-advantages-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
  z-index: 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
  position: relative;
  z-index: 1;
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

/* Advantages Grid */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
}

/* Advantage Cards */
.advantage-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 50px 40px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(232, 232, 232, 0.8);
  position: relative;
}

.advantage-card::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #1a1a1a;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.advantage-card:hover::before {
  transform: scaleX(1);
}

.advantage-card:hover {
  background: rgba(255, 255, 255, 1);
  border-color: #1a1a1a;
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* Card Number */
.card-number {
  font-family: 'scotch-display', serif;
  font-size: 3rem;
  font-weight: 300;
  color: #e0e0e0;
  line-height: 1;
  margin-bottom: 30px;
  transition: all 0.4s ease;
}

.advantage-card:hover .card-number {
  color: #1a1a1a;
  transform: scale(1.1);
}

/* Card Title */
.card-title {
  font-family: 'scotch-display', serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #1a1a1a;
  letter-spacing: -0.01em;
  line-height: 1.4;
  margin-bottom: 25px;
  min-height: 60px;
}

/* Card Description */
.card-description {
  padding-top: 25px;
  border-top: 1px solid #e0e0e0;
}

.card-description p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  color: #666;
  line-height: 1.9;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }

  .advantages-grid {
    gap: 40px;
  }
}

@media (max-width: 968px) {
  .competitive-advantages-section {
    padding: 80px 0;
    background-attachment: scroll;
  }

  .container {
    padding: 0 30px;
  }

  .section-header {
    margin-bottom: 60px;
  }

  .advantages-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .advantage-card {
    padding: 40px 35px;
  }

  .card-title {
    min-height: auto;
  }
}

@media (max-width: 640px) {
  .competitive-advantages-section {
    padding: 60px 0;
  }

  .competitive-advantages-section::before {
    background: rgba(255, 255, 255, 0.95);
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

  .advantage-card {
    padding: 35px 25px;
  }

  .card-number {
    font-size: 2.5rem;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .card-description p {
    font-size: 0.8rem;
  }
}
</style>