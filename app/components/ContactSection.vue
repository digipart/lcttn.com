<template>
  <section class="contact-section" id="contact">
    <div class="container">
      
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Prendre <span class="title-italic">Contact</span></h2>
        <div class="title-underline"></div>
        <p class="section-lead">Une question ? Un projet ? Nos équipes sont à votre écoute pour vous accompagner dans votre développement industriel.</p>
      </div>
      <div class="contact-grid">
        
        <!-- Left Side: Information -->
        <div class="contact-info">
          <div class="info-group">
            <h3 class="info-title">Informations de Contact</h3>
            
            <div class="info-items">
              <!-- Address -->
              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div class="info-text">
                  <span class="label">Siège Social & Production</span>
                  <p>ROUTE DE SFAX KM5 KSIBET 4041 – TUNISIE (SOUSSE)</p>
                </div>
              </div>
              <!-- Phone -->
              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div class="info-text">
                  <span class="label">Bureau Commercial</span>
                  <a href="tel:+33617817678">+33 6 17 81 76 78</a>
                </div>
              </div>
              <!-- Email -->
              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                </div>
                <div class="info-text">
                  <span class="label">Email</span>
                  <a href="mailto:info@lcttn.com">info@lcttn.com</a>
                </div>
              </div>
            </div>
          </div>
          <!-- Subtle Branding -->
          <div class="contact-brand">
            <p>LCT — Partenaire de confiance pour le prêt-à-porter haut de gamme depuis 1995.</p>
          </div>
        </div>
        <!-- Right Side: Form -->
        <div class="contact-form-wrapper">
          <h3 class="form-title">{{ $t('contact.formTitle') }}</h3>
          
          <!-- Error Message -->
          <div v-if="formState.error" class="form-message error">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p>{{ formState.error }}</p>
          </div>
          
          <form @submit.prevent="handleSubmit" class="contact-form" :class="{ 'form-disabled': formState.loading }">
            <div class="form-row">
              <div class="input-group">
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name"
                  required 
                  placeholder=" " 
                  :disabled="formState.loading"
                />
                <label for="name">{{ $t('contact.form.name') }}</label>
              </div>
            </div>
            
            <div class="form-row">
              <div class="input-group">
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email"
                  required 
                  placeholder=" " 
                  :disabled="formState.loading"
                />
                <label for="email">{{ $t('contact.form.email') }}</label>
              </div>
            </div>
            <div class="form-row">
              <div class="input-group">
                <textarea 
                  id="message" 
                  v-model="formData.message"
                  required 
                  placeholder=" " 
                  rows="4"
                  :disabled="formState.loading"
                ></textarea>
                <label for="message">{{ $t('contact.form.message') }}</label>
              </div>
            </div>
            <button type="submit" class="submit-btn" :disabled="formState.loading">
              <span v-if="!formState.loading">{{ $t('contact.form.submit') }}</span>
              <span v-else>{{ $t('contact.sending') }}</span>
              <svg v-if="!formState.loading" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              <svg v-else class="spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
                <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const localePath = useLocalePath()
const router = useRouter()

const formData = reactive({
  name: '',
  email: '',
  message: ''
})

const formState = reactive({
  loading: false,
  error: ''
})

const handleSubmit = async () => {
  // Reset states
  formState.error = ''
  formState.loading = true

  try {
    type ContactResponse = {
      success: boolean
      message?: string
    }

    const response = await $fetch<ContactResponse>('/api/contact', {
      method: 'POST',
      body: {
        name: formData.name,
        email: formData.email,
        message: formData.message
      }
    })

    if (response.success) {
      setTimeout(() => {
        router.push(localePath('/thank-you'))
      }, 1000)
    } else {
      formState.error = response.message ?? 'Une erreur est survenue'
      formState.loading = false
    }
  } catch (error: any) {
    formState.error = error.data?.message || error.message || 'Une erreur est survenue lors de l\'envoi du message'
    formState.loading = false
  }
}
</script>

<style scoped>
.contact-section {
  padding: 80px 0;
  background: #fafafa;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}
/* Section Header */
.section-header {
  margin-bottom: 100px;
}
.section-title {
  font-family: 'scotch-display', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  color: #1a1a1a;
  margin-bottom: 25px;
}
.title-italic {
  font-style: italic;
  font-weight: 400;
}
.title-underline {
  width: 50px;
  height: 1px;
  background: #1a1a1a;
  margin-bottom: 30px;
}
.section-lead {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  max-width: 600px;
}
/* Grid Layout */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 120px;
  align-items: start;
}
/* Contact Info Side */
.info-title {
  font-family: 'scotch-display', serif;
  font-size: 1.75rem;
  font-weight: 400;
  margin-bottom: 50px;
}
.info-items {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.info-item {
  display: flex;
  gap: 25px;
  align-items: flex-start;
}
.info-icon {
  width: 24px;
  height: 24px;
  color: #1a1a1a;
  margin-top: 5px;
}
.info-text .label {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #999;
  margin-bottom: 8px;
}
.info-text p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #1a1a1a;
  line-height: 1.6;
}
.contact-brand {
  margin-top: 80px;
  padding-top: 40px;
  border-top: 1px solid #eeeeee;
}
.contact-brand p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  color: #aaa;
  font-style: italic;
}
/* Form Side */
.contact-form-wrapper {
  background: #ffffff;
  padding: 80px 60px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 40px 80px rgba(0,0,0,0.03);
}
.form-title {
  font-family: 'scotch-display', serif;
  font-size: 1.75rem;
  font-weight: 400;
  margin-bottom: 40px;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.input-group {
  position: relative;
}
.input-group input,
.input-group textarea {
  width: 100%;
  padding: 12px 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background: transparent;
  outline: none;
  transition: border-color 0.4s ease;
}
.input-group label {
  position: absolute;
  top: 12px;
  left: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  color: #999;
  pointer-events: none;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}
.input-group input:focus,
.input-group textarea:focus {
  border-bottom-color: #1a1a1a;
}
.input-group input:focus + label,
.input-group textarea:focus + label,
.input-group input:not(:placeholder-shown) + label,
.input-group textarea:not(:placeholder-shown) + label {
  top: -15px;
  font-size: 0.7rem;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.submit-btn {
  margin-top: 20px;
  padding: 18px 40px;
  background: #1a1a1a;
  color: #ffffff;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  cursor: pointer;
  transition: all 0.4s ease;
}
.submit-btn svg {
  width: 18px;
  height: 18px;
  transition: transform 0.4s ease;
}
.submit-btn:hover {
  background: #000;
  padding-left: 50px;
  padding-right: 30px;
}
.submit-btn:hover svg {
  transform: translateX(5px);
}
.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.submit-btn:disabled:hover {
  padding-left: 40px;
  padding-right: 40px;
}
.spinner {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
/* Form Messages */
.form-message {
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
}
.form-message svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
.form-message.success {
  background: #f0f9f4;
  color: #166534;
  border: 1px solid #86efac;
}
.form-message.error {
  background: #fef2f2;
  color: #991b1b;
  border: 1px solid #fca5a5;
}
.form-disabled {
  opacity: 0.6;
  pointer-events: none;
}
/* Responsive */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 80px;
  }
}
@media (max-width: 768px) {
  .contact-section {
    padding: 40px 0;
  }
  .section-header {
    margin-bottom: 40px;
    text-align: center;
  }
  .title-underline {
    margin: 0 auto 20px;
  }
  .section-lead {
    margin: 0 auto;
  }
  .container {
    padding: 0 20px;
  }
  .contact-form-wrapper {
    padding: 40px 20px;
  }
}
</style>