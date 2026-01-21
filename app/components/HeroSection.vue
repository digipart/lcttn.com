<template>
  <section class="hero-section">
    <!-- Corrected Video Background -->
    <video
      ref="video"
      class="hero-video"
      muted
      loop
      playsinline
      preload="auto"
    >
      <source src="/videos/hero-video.mp4" type="video/mp4" />
    </video>
    
    <!-- Image Background -->
    <div class="hero-image-bg"></div>
    
    <!-- Overlay -->
    <div class="hero-overlay"></div>
    
    <!-- Content -->
    <div class="hero-content">
      <div class="container">
        <div class="hero-text">
          <h1 class="hero-title">
            {{ $t('hero.title') }}
            <span class="title-highlight">{{ $t('hero.titleHighlight') }}</span>
          </h1>
          
          <p class="hero-subtitle">
            {{ $t('hero.subtitle') }}
          </p>
          
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">30+</div>
              <div class="stat-label">{{ $t('hero.stat1') }}</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-number">3.5M</div>
              <div class="stat-label">{{ $t('hero.stat2') }}</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-number">1350</div>
              <div class="stat-label">{{ $t('hero.stat3') }}</div>
            </div>
          </div>
          
          <div class="hero-cta">
            <a href="#expertise" class="btn-primary">
              {{ $t('hero.cta1') }}
            </a>
            <a href="#contact" class="btn-secondary">
              {{ $t('hero.cta2') }}
            </a>
          </div>
        </div>
      </div>
    </div>
    
     <!-- Scroll Indicator with click handler -->
     <div class="scroll-indicator" @click="scrollToNextSection">
       <div class="scroll-line"></div>
       <span class="scroll-text">{{ $t('hero.scroll') }}</span>
     </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const video = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  if (video.value) {
    video.value.play().catch(() => {
      // Autoplay bloqué → fallback silencieux
    })
  }
})
const scrollToNextSection = () => {
  const heroHeight = window.innerHeight
  window.scrollTo({
    top: heroHeight,
    behavior: 'smooth'
  })
}
</script>
<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #1a1a1a;
}
/* Video Background */
.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: 0;
  object-fit: cover;
}
/* Image Background */
.hero-image-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/collection1.jpg');
  background-size: cover;
  background-position: center;
  z-index: 0;
}
/* Overlay */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(26, 26, 26, 0.85) 0%,
    rgba(26, 26, 26, 0.75) 50%,
    rgba(26, 26, 26, 0.85) 100%
  );
  z-index: 1;
}
/* Content */
.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
}
.container {
  /* max-width: 1400px; */
  margin: 0 auto;
  padding: 0 60px;
}
.hero-text {
  max-width: 900px;
  animation: fadeInUp 1.2s ease-out;
}
/* Title */
/* Title */
.hero-title {
  font-family: 'scotch-display', serif;
  font-size: clamp(3rem, 7vw, 4rem);
  font-weight: 400;
  color: #ffffff;  /* Pure white */
  line-height: 1.2;  /* Increased from 1.1 */
  letter-spacing: -0.02em;
  margin-bottom: 50px;  /* Increased from 30px */
}

.title-highlight {
  display: block;
  font-style: italic;
  color: #ffffff;  /* Pure white instead of opacity */
  margin-top: 10px;  /* Added spacing */
}

/* Subtitle */
.hero-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #ffffff;  /* Changed to pure white */
  line-height: 1.8;  /* Increased from 1.7 */
  margin-bottom: 70px;  /* Increased from 60px */
  max-width: 600px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;
}
/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}
.stat-item {
  text-align: left;
}
.stat-number {
  font-family: 'scotch-display', serif;
  font-size: 3rem;
  font-weight: 300;
  color: #ffffff;
  line-height: 1;
  margin-bottom: 8px;
}
.stat-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}
.stat-divider {
  width: 1px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
}
/* CTA Buttons */
.hero-cta {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.btn-primary,
.btn-secondary {
  font-family: 'Montserrat', sans-serif;
  padding: 18px 40px;
  font-size: 0.9rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.btn-primary {
  background: #ffffff;
  color: #1a1a1a;
}
.btn-primary:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
}
.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
}
.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.8);
  transform: translateY(-2px);
}
/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;  /* Add this */
  transition: opacity 0.3s ease;  /* Add this */
}
.scroll-indicator:hover {
  opacity: 0.7;  /* Add this */
}
.scroll-line {
  width: 1px;
  height: 80px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.3),
    transparent
  );
  position: relative;
  overflow: hidden;
}
.scroll-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255, 255, 255, 0.9),
    transparent
  );
  animation: scrollDot 2s ease-in-out infinite;
}
.scroll-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 300;
}
@keyframes scrollDot {
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(80px);
    opacity: 0;
  }
}
/* Responsive - Hide on mobile */
@media (max-width: 640px) {
  .scroll-indicator {
    display: none;
  }
}
/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes scrollLine {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}
/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }
  .scroll-indicator {
    left: 40px;
  }
}
@media (max-width: 968px) {
  .hero-section {
    min-height: 100vh;
  }
  .container {
    padding: 0 30px;
  }
  .hero-stats {
    gap: 30px;
  }
  .stat-number {
    font-size: 2.5rem;
  }
  .stat-divider {
    height: 40px;
  }
  .scroll-indicator {
    left: 30px;
    bottom: 40px;
  }
}
@media (max-width: 640px) {
  .container {
    padding: 0 24px;
  }
  .hero-subtitle {
    font-size: 0.9rem;
    margin-bottom: 40px;
  }
  .hero-stats {
    gap: 20px;
  }
  .stat-number {
    font-size: 2rem;
  }
  .stat-label {
    font-size: 0.7rem;
  }
  .stat-divider {
    display: none;
  }
  .hero-cta {
    flex-direction: column;
    width: 100%;
  }
  .btn-primary,
  .btn-secondary {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
  .scroll-indicator {
    display: none;
  }
}
</style>