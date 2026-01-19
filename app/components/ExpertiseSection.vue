<template>
  <section class="expertise-section" id="expertise">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          {{ $t('expertise.title') }} <span class="italic-serif">{{ $t('expertise.titleHighlight') }}</span>
        </h2>
      </div>

      <div class="expertise-grid">
        <!-- Card 1: Création -->
        <div class="expertise-card group">
          <div class="card-bg">
            <img src="/images/expertise_creation.png" alt="Creation" class="bg-image">
            <div class="overlay"></div>
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ $t('expertise.creation.title') }}</h3>
            <div class="card-divider"></div>
            <p class="card-description">{{ $t('expertise.creation.description') }}</p>
          </div>
        </div>

        <!-- Card 2: Production -->
        <div class="expertise-card group">
          <div class="card-bg">
            <img src="/images/expertise_production.png" alt="Production" class="bg-image">
            <div class="overlay"></div>
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ $t('expertise.production.title') }}</h3>
            <div class="card-divider"></div>
            <p class="card-description">{{ $t('expertise.production.description') }}</p>
          </div>
        </div>

        <!-- Card 3: Logistique -->
        <div class="expertise-card group">
          <div class="card-bg">
            <img src="/images/expertise_logistics.png" alt="Logistics" class="bg-image">
            <div class="overlay"></div>
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ $t('expertise.logistics.title') }}</h3>
            <div class="card-divider"></div>
            <p class="card-description">{{ $t('expertise.logistics.description') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.expertise-section {
  padding: 100px 0;
  background-color: #ffffff;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 300;
  color: #1a1a1a;
  letter-spacing: -1px;
}

.italic-serif {
  font-family: 'Playfair Display', serif; /* Assuming a serif font is available or imported globally */
  font-style: italic;
  font-weight: 400;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  height: 600px; /* Fixed height for the row */
}

.expertise-card {
  position: relative;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
}

.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%);
  transition: background 0.5s ease;
}

.group:hover .card-bg {
  transform: scale(1.05);
}

.group:hover .overlay {
  background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%);
}

.card-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Centering content */
  padding: 40px;
  color: #fff;
  transition: all 0.5s ease;
}

.card-title {
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  transform: translateY(20px);
  transition: transform 0.5s ease;
}

.card-divider {
  width: 0;
  height: 1px;
  background-color: #fff;
  margin-bottom: 0;
  opacity: 0;
  transition: all 0.5s ease;
}

.card-description {
  font-size: 1.1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  max-width: 80%;
  text-align: center;
  margin-top: 20px;
  font-weight: 300;
}

/* Hover Effects */
.group:hover .card-title {
  transform: translateY(0);
}

.group:hover .card-divider {
  width: 50px;
  opacity: 1;
}

.group:hover .card-description {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1024px) {
  .expertise-grid {
    height: auto;
    grid-template-columns: 1fr;
  }
  
  .expertise-card {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
}
</style>