<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, locales } = useI18n()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// Handle scroll for navbar transparency
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const switchLanguage = (code: string) => {
  locale.value = code
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { name: 'nav.home', href: '#' },
  { name: 'nav.expertise', href: '#expertise' },
  { name: 'nav.organization', href: '#organization' },
]
</script>

<template>
  <nav :class="['navbar', { 'navbar-scrolled': isScrolled }]">
    <div class="container navbar-container">
      <!-- Logo -->
      <div class="navbar-brand">
        <a href="/" class="logo">
          <span class="logo-text">LCT</span>
          <span class="logo-dot"></span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="navbar-menu-desktop">
        <ul class="nav-list">
          <li v-for="link in navLinks" :key="link.name">
            <a :href="link.href" class="nav-link">{{ $t(link.name) }}</a>
          </li>
        </ul>
      </div>

      <!-- Desktop Right (Lang + Action) -->
      <div class="navbar-actions">
        <div class="lang-switcher">
          <button 
            v-for="loc in locales" 
            :key="typeof loc === 'string' ? loc : loc.code"
            @click="switchLanguage(typeof loc === 'string' ? loc : loc.code)"
            :class="['lang-btn', { active: locale === (typeof loc === 'string' ? loc : loc.code) }]"
          >
            {{ (typeof loc === 'string' ? loc : loc.code).toUpperCase() }}
          </button>
        </div>
        
        <a href="#contact" class="btn-quote">
          {{ $t('nav.contact') || 'Contact' }}
        </a>

        <!-- Mobile Toggle -->
        <button class="mobile-toggle" @click="isMobileMenuOpen = !isMobileMenuOpen">
          <span class="burger-bar" :class="{ 'open': isMobileMenuOpen }"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <Transition name="slide">
      <div v-if="isMobileMenuOpen" class="mobile-drawer">
        <div class="drawer-header">
          <span class="logo-text">LCT</span>
          <button class="close-btn" @click="isMobileMenuOpen = false">
             <Icon name="lucide:x" />
          </button>
        </div>
        <ul class="mobile-nav-list">
          <li v-for="link in navLinks" :key="link.name">
            <a :href="link.href" class="mobile-nav-link" @click="isMobileMenuOpen = false">
              {{ $t(link.name) }}
            </a>
          </li>
        </ul>
        <div class="mobile-drawer-footer">
          <div class="mobile-lang">
            <button 
              v-for="loc in locales" 
              :key="typeof loc === 'string' ? loc : loc.code"
              @click="switchLanguage(typeof loc === 'string' ? loc : loc.code)"
              :class="['lang-btn-mob', { active: locale === (typeof loc === 'string' ? loc : loc.code) }]"
            >
              {{ (typeof loc === 'string' ? loc : loc.code).toUpperCase() }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  align-items: center;
}

.navbar-scrolled {
  height: 70px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.navbar-scrolled .nav-link {
  color: #1a1a1a;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Brand/Logo */
.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 900;
  color: #1a1a1a;
  letter-spacing: -1px;
}

.logo-dot {
  width: 6px;
  height: 6px;
  background: #1a1a1a;
  border-radius: 50%;
  margin-top: 8px;
}

/* Desktop Menu */
.navbar-menu-desktop {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-list {
  display: flex;
  gap: 40px;
  list-style: none;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 4px;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #1a1a1a;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #1a1a1a;
}

.nav-link:hover::after {
  width: 100%;
}

/* Actions */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 25px;
}

.lang-switcher {
  display: flex;
  background: #f4f4f4;
  padding: 4px;
  border-radius: 12px;
}

.lang-btn {
  padding: 6px 12px;
  border: none;
  background: transparent;
  font-size: 0.75rem;
  font-weight: 800;
  color: #888;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.lang-btn.active {
  background: #fff;
  color: #1a1a1a;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.btn-quote {
  background: #1a1a1a;
  color: #fff;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 700;
  transition: all 0.3s ease;
}

.btn-quote:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.burger-bar {
  display: block;
  width: 24px;
  height: 2px;
  background: #1a1a1a;
  position: relative;
  transition: all 0.3s;
}

.burger-bar::before, .burger-bar::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: #1a1a1a;
  transition: all 0.3s;
}

.burger-bar::before { top: -8px; }
.burger-bar::after { bottom: -8px; }

.burger-bar.open { background: transparent; }
.burger-bar.open::before { transform: rotate(45deg); top: 0; }
.burger-bar.open::after { transform: rotate(-45deg); bottom: 0; }

/* Mobile Drawer */
.mobile-drawer {
  position: fixed;
  inset: 0;
  background: #fff;
  z-index: 1100;
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
}

.mobile-nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.mobile-nav-link {
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a1a;
  text-decoration: none;
}

.mobile-drawer-footer {
  margin-top: auto;
  padding-top: 40px;
  border-top: 1px solid #eee;
}

.mobile-lang {
  display: flex;
  gap: 20px;
}

.lang-btn-mob {
  background: none;
  border: none;
  font-size: 1.2rem;
  font-weight: 800;
  color: #ccc;
  cursor: pointer;
}

.lang-btn-mob.active {
  color: #1a1a1a;
}

/* Transitions */
.slide-enter-active, .slide-leave-active { transition: transform 0.5s cubic-bezier(0.8, 0, 0.2, 1); }
.slide-enter-from, .slide-leave-to { transform: translateX(100%); }

@media (max-width: 1024px) {
  .navbar-menu-desktop { display: none; }
  .mobile-toggle { display: block; }
  .navbar-actions .lang-switcher, .navbar-actions .btn-quote { display: none; }
  .navbar { height: 80px; }
}
</style>