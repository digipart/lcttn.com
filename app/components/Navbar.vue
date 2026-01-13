<template>
  <nav class="nav-outer" :class="{ 'nav-scrolled': isScrolled, 'nav-menu-open': isMenuOpen }">
    <div class="container">
      <div class="nav-content">
        
        <!-- Logo -->
        <div class="nav-logo">
          <NuxtLink :to="localePath('/')" class="logo-link">
            <span>LCT</span>
          </NuxtLink>
        </div>
        <!-- Desktop Navigation -->
        <div class="nav-desktop">
          <ul class="nav-links">
            <li><a href="#hero" class="nav-link">{{ $t('nav.home') }}</a></li>
            <li><a href="#expertise" class="nav-link">{{ $t('nav.expertise') }}</a></li>
            <li><a href="#production" class="nav-link">{{ $t('nav.production') }}</a></li>
            <li><a href="#engagements" class="nav-link">{{ $t('nav.commitments') }}</a></li>
            <li><a href="#contact" class="nav-link nav-btn">{{ $t('nav.contact') }}</a></li>
          </ul>
          <!-- Language Switcher -->
          <div class="lang-switcher">
            <button 
              v-for="locale in availableLocales" 
              :key="locale.code"
              @click="switchLanguage(locale.code)"
              :class="['lang-btn', { active: currentLocale === locale.code }]"
            >
              <!-- {{ locale.code.toUpperCase() }} -->
            </button>
          </div>
        </div>
        <!-- Mobile Toggle -->
        <button class="nav-mobile-toggle" @click="toggleMenu" aria-label="Toggle Menu">
          <div class="burger">
            <span class="line line-1"></span>
            <span class="line line-2"></span>
          </div>
        </button>
      </div>
    </div>
    <!-- Mobile Navigation Overlay -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="mobile-overlay" @click="closeMenu"></div>
    </transition>
    
    <transition name="slide">
      <div v-if="isMenuOpen" class="mobile-drawer">
        <div class="drawer-header">
          <span class="drawer-logo">LCT</span>
          <button class="close-btn" @click="closeMenu">&times;</button>
        </div>
        <ul class="drawer-links">
          <li><a href="#hero" @click="closeMenu">{{ $t('nav.home') }}</a></li>
          <li><a href="#expertise" @click="closeMenu">{{ $t('nav.expertise') }}</a></li>
          <li><a href="#production" @click="closeMenu">{{ $t('nav.production') }}</a></li>
          <li><a href="#engagements" @click="closeMenu">{{ $t('nav.commitments') }}</a></li>
          <li><a href="#contact" @click="closeMenu" class="mobile-btn">{{ $t('nav.contact') }}</a></li>
        </ul>
        <!-- Mobile Language Switcher -->
        <div class="mobile-lang-switcher">
          <button 
            v-for="locale in availableLocales" 
            :key="locale.code"
            @click="switchLanguage(locale.code)"
            :class="['lang-btn-mobile', { active: currentLocale === locale.code }]"
          >
            <!-- {{ locale.code.toUpperCase() }} -->
          </button>
        </div>
        <div class="drawer-footer">
          <p>LCT — Partenaire de référence depuis 1995</p>
        </div>
      </div>
    </transition>
  </nav>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from '#imports'

const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const currentLocale = computed(() => locale.value)
const availableLocales = computed(() => locales.value)

const switchLanguage = async (langCode: string) => {
  await setLocale(langCode)
  closeMenu()
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style scoped>
nav,
.nav-outer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  padding: 30px 50px;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}
/* Scrolled State */
.nav-outer.nav-scrolled {
  padding: 15px 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}
.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* Logo */
.logo-link {
  font-family: 'scotch-display', serif;
  font-size: 2rem;
  font-weight: 300;
  color: #ffffff;
  text-decoration: none;
  letter-spacing: 2px;
  transition: color 0.4s ease;
}
.nav-scrolled .logo-link {
  color: #1a1a1a;
}
/* Desktop Links */
.nav-desktop {
  display: block;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 50px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-link {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  transition: color 0.4s ease;
}
.nav-scrolled .nav-link {
  color: #666;
}
.nav-link:hover {
  color: #ffffff;
}
.nav-scrolled .nav-link:hover {
  color: #1a1a1a;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}
.nav-link:hover::after {
  width: 100%;
}
/* Contact Button Link */
.nav-btn {
  background: #ffffff;
  color: #1a1a1a !important;
  padding: 12px 25px;
  border-radius: 0;
  transition: all 0.4s ease;
}
.nav-scrolled .nav-btn {
  background: #1a1a1a;
  color: #ffffff !important;
}
.nav-btn::after {
  display: none;
}
.nav-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
/* Language Switcher */
.lang-switcher {
  display: flex;
  gap: 8px;
  margin-left: 30px;
  padding-left: 30px;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}
.nav-scrolled .lang-switcher {
  border-left-color: rgba(26, 26, 26, 0.2);
}
.lang-btn {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 6px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.nav-scrolled .lang-btn {
  color: #666;
  border-color: rgba(26, 26, 26, 0.3);
}
.lang-btn:hover {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.1);
}
.nav-scrolled .lang-btn:hover {
  color: #1a1a1a;
  border-color: #1a1a1a;
  background: rgba(26, 26, 26, 0.05);
}
.lang-btn.active {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.6);
}
.nav-scrolled .lang-btn.active {
  color: #1a1a1a;
  background: rgba(26, 26, 26, 0.1);
  border-color: #1a1a1a;
}
/* Mobile Toggle */
.nav-mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
}
.burger {
  width: 24px;
  height: 2px;
  background: #ffffff;
  position: relative;
  transition: all 0.4s ease;
}
.nav-scrolled .burger {
  background: #1a1a1a;
}
.burger .line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: inherit;
  left: 0;
  transition: all 0.4s ease;
}
.line-1 { transform: translateY(-8px); }
.line-2 { transform: translateY(8px); }
.nav-menu-open .burger {
  background: transparent !important;
}
.nav-menu-open .line-1 {
  transform: rotate(45deg);
  background: #1a1a1a;
}
.nav-menu-open .line-2 {
  transform: rotate(-45deg);
  background: #1a1a1a;
}
/* Mobile Drawer */
.mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  z-index: 1000;
  padding: 100px 40px;
  display: flex;
  flex-direction: column;
}
.drawer-header {
  position: absolute;
  top: 30px;
  left: 40px;
  right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.drawer-logo {
  font-family: 'scotch-display', serif;
  font-size: 2rem;
  color: #1a1a1a;
}
.drawer-links {
  list-style: none;
  padding: 0;
  margin-top: 40px;
}
.drawer-links li {
  margin-bottom: 30px;
}
.drawer-links a {
  font-family: 'scotch-display', serif;
  font-size: 2.5rem;
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 300;
}
.mobile-btn {
  display: inline-block;
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif !important;
  font-size: 1rem !important;
  background: #1a1a1a;
  color: #ffffff !important;
  padding: 15px 40px;
}
.drawer-footer {
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 30px;
}
.drawer-footer p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 2px;
}
/* Mobile Language Switcher */
.mobile-lang-switcher {
  display: flex;
  gap: 15px;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;
}
.lang-btn-mobile {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: #666;
  background: transparent;
  border: 1px solid #e0e0e0;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.lang-btn-mobile:hover {
  color: #1a1a1a;
  border-color: #1a1a1a;
  background: rgba(26, 26, 26, 0.05);
}
.lang-btn-mobile.active {
  color: #ffffff;
  background: #1a1a1a;
  border-color: #1a1a1a;
}
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 999;
}
/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.slide-enter-active, .slide-leave-active { transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1); }
.slide-enter-from, .slide-leave-to { transform: translateX(100%); }
/* Responsive */
@media (max-width: 968px) {
  .nav-desktop {
    display: none;
  }
  .nav-mobile-toggle {
    display: block;
  }
  .container {
    padding: 0 30px;
  }
  .nav-outer {
    padding: 20px 0;
  }
}
</style>