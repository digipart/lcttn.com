<template>
  <div class="thank-you-page">
    <Navbar />
    
    <section class="thank-you-section">
      <div class="container">
        <div class="thank-you-content">
          <!-- Success Icon -->
          <div class="success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          
          <!-- Title -->
          <h1 class="thank-you-title">
            {{ $t('thankYou.title') }}
          </h1>
          
          <!-- Message -->
          <p class="thank-you-message">
            {{ $t('thankYou.message') }}
          </p>
          
          <!-- Details -->
          <div class="thank-you-details">
            <p class="details-text">
              {{ $t('thankYou.details') }}
            </p>
          </div>
          
          <!-- Actions -->
          <div class="thank-you-actions">
            <NuxtLink :to="localePath('/')" class="btn-primary">
              {{ $t('thankYou.backHome') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/#contact')" class="btn-secondary">
              {{ $t('thankYou.anotherMessage') }}
            </NuxtLink>
          </div>
          
          <!-- Contact Info -->
          <div class="thank-you-contact">
            <p class="contact-label">{{ $t('thankYou.contactLabel') }}</p>
            <div class="contact-items">
              <a href="tel:+33617817678" class="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+33 6 17 81 76 78</span>
              </a>
              <a href="mailto:info@lcttn.com" class="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="m22 2-7 20-4-9-9-4Z"/>
                  <path d="M22 2 11 13"/>
                </svg>
                <span>info@lcttn.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

// SEO pour la page de remerciement
useHead({
  title: 'Merci - LCT',
  meta: [
    { name: 'description', content: 'Merci pour votre message. Nous vous répondrons dans les plus brefs délais.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
.thank-you-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.thank-you-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 0;
  background: #fafafa;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 60px;
}

.thank-you-content {
  text-align: center;
  background: #ffffff;
  padding: 80px 60px;
  border-radius: 0;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.05);
}

/* Success Icon */
.success-icon {
  width: 100px;
  height: 100px;
  margin: 0 auto 40px;
  background: #f0f9f4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #166534;
  animation: scaleIn 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes scaleIn {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.success-icon svg {
  width: 50px;
  height: 50px;
}

/* Title */
.thank-you-title {
  font-family: 'scotch-display', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  color: #1a1a1a;
  margin-bottom: 30px;
  line-height: 1.2;
}

/* Message */
.thank-you-message {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Details */
.thank-you-details {
  margin-bottom: 50px;
  padding-top: 40px;
  border-top: 1px solid #e0e0e0;
}

.details-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #888;
  line-height: 1.7;
}

/* Actions */
.thank-you-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  font-family: 'Montserrat', sans-serif;
  padding: 18px 40px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.4s ease;
  display: inline-block;
}

.btn-primary {
  background: #1a1a1a;
  color: #ffffff;
  border: 1px solid #1a1a1a;
}

.btn-primary:hover {
  background: #000;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: #1a1a1a;
  border: 1px solid #1a1a1a;
}

.btn-secondary:hover {
  background: #1a1a1a;
  color: #ffffff;
  transform: translateY(-2px);
}

/* Contact Info */
.thank-you-contact {
  padding-top: 50px;
  border-top: 1px solid #e0e0e0;
}

.contact-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #999;
  margin-bottom: 25px;
}

.contact-items {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  color: #1a1a1a;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item svg {
  width: 18px;
  height: 18px;
}

.contact-item:hover {
  color: #666;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: 0 30px;
  }
  
  .thank-you-content {
    padding: 60px 40px;
  }
  
  .success-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 30px;
  }
  
  .success-icon svg {
    width: 40px;
    height: 40px;
  }
  
  .thank-you-message {
    font-size: 1.1rem;
  }
  
  .thank-you-actions {
    flex-direction: column;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    text-align: center;
  }
  
  .contact-items {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
