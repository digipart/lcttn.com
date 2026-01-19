<template>
  <section class="why-choose-section" id="why-choose-us">
    <div class="container">
      <div class="content-wrapper">
        
        <!-- Left Column: Image -->
        <div class="image-column">
          <div class="image-wrapper">
            <img src="/images/why_choose_mannequin.png" alt="Why Choose LCT" class="mannequin-image">
          </div>
        </div>

        <!-- Right Column: Content -->
        <div class="text-column">
          <h2 class="section-title">
            {{ $t('whyChoose.title').split(' ')[0] }} <span class="italic-serif">{{ $t('whyChoose.title').split(' ').slice(1).join(' ') }}</span>
          </h2>

          <div class="features-grid">
            <!-- Item 1: Experience -->
            <div class="feature-item">
              <div class="icon-wrapper">
                <Icon name="lucide:crown" class="feature-icon" />
              </div>
              <h3 class="feature-title">
                {{ $t('whyChoose.experience.title') }}
                <span class="feature-subtitle">{{ $t('whyChoose.experience.subtitle') }}</span>
              </h3>
              <p class="feature-text">{{ $t('whyChoose.experience.text') }}</p>
            </div>

            <!-- Item 2: References -->
            <div class="feature-item">
              <div class="icon-wrapper">
                <Icon name="lucide:leaf" class="feature-icon" />
              </div>
              <h3 class="feature-title">
                {{ $t('whyChoose.references.title') }}
                <span class="feature-subtitle">{{ $t('whyChoose.references.subtitle') }}</span>
              </h3>
              <p class="feature-text">{{ $t('whyChoose.references.text') }}</p>
            </div>

            <!-- Item 3: Workshops -->
            <div class="feature-item">
              <div class="icon-wrapper">
                <Icon name="lucide:factory" class="feature-icon" />
              </div>
              <h3 class="feature-title">
                {{ $t('whyChoose.workshops.title') }}
                <span class="feature-subtitle">{{ $t('whyChoose.workshops.subtitle') }}</span>
              </h3>
              <p class="feature-text">{{ $t('whyChoose.workshops.text') }}</p>
            </div>

            <!-- Item 4: Delivery -->
            <div class="feature-item">
              <div class="icon-wrapper">
                <Icon name="lucide:clock" class="feature-icon" />
              </div>
              <h3 class="feature-title">
                {{ $t('whyChoose.delivery.title') }}
                <span class="feature-subtitle">{{ $t('whyChoose.delivery.subtitle') }}</span>
              </h3>
              <p class="feature-text">{{ $t('whyChoose.delivery.text') }}</p>
            </div>
          </div>

          <div class="cta-wrapper">
            <NuxtLink :to="$localePath('/contact')" class="cta-button">
              {{ $t('whyChoose.cta') }}
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.why-choose-section {
  padding: 100px 0;
  background: #f9f9f9;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 80px;
  align-items: flex-start;
}

/* Left Column - Image */
.image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 8px; /* Slight rounding if desired, or keep sharp */
  height: 800px;
}

.mannequin-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Right Column - Text */
.text-column {
  padding-top: 20px;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 300;
  color: #1a1a1a;
  margin-bottom: 60px;
  line-height: 1.1;
  letter-spacing: -1px;
}

.italic-serif {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 60px;
  row-gap: 60px;
  margin-bottom: 60px;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.icon-wrapper {
  margin-bottom: 20px;
  color: #ccc; /* Light grey for icons as seen in image */
}

.feature-icon {
  width: 50px;
  height: 50px;
  stroke-width: 1px; /* Thin lines */
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.feature-subtitle {
  font-weight: 300;
  color: #666;
  font-size: 1.4rem;
}

.feature-text {
  font-size: 0.95rem;
  color: #777;
  line-height: 1.6;
}

/* CTA Button */
.cta-button {
  display: inline-block;
  background-color: #000;
  color: #fff;
  padding: 18px 40px;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  font-weight: 500;
}

.cta-button:hover {
  background-color: #333;
}

/* Responsive */
@media (max-width: 1024px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .image-wrapper {
    height: 500px;
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .section-title {
    font-size: 2.5rem;
  }
  
  .image-wrapper {
    height: 400px;
  }
}
</style>