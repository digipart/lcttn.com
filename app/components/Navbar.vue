<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  solid: {
    type: Boolean,
    default: false
  }
})

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// Handle scroll for navbar transparency
const handleScroll = () => {
  // Higher threshold on landing page (hero is 100vh)
  const threshold = props.solid ? 0 : window.innerHeight * 0.8
  isScrolled.value = window.scrollY > threshold
}

// Mobile menu closing handler
const closeMenu = () => {
  isMobileMenuOpen.value = false
}

// Prevent scroll when mobile menu is open
watch(isMobileMenuOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  // { name: 'nav.home', href: '#' },
  { name: 'nav.organization', href: '#organization' },
  { name: 'nav.advantages', href: '#advantages' },
  { name: 'nav.expertise', href: '#expertise' },
  { name: 'nav.difference', href: '#difference' },
  { name: 'nav.know-how', href: '#know-how' },
  { name: 'nav.capabilities', href: '#capabilities' },
  { name: 'nav.certifications', href: '#certifications' },
  { name: 'nav.whychooseus', href: '#why-choose-us' },
]
</script>

<template>
  <nav :class="['navbar', { 'navbar-scrolled': isScrolled || props.solid }]">
    <div class="container navbar-container">
      <!-- Logo -->
      <div class="navbar-brand">
        <a href="/" class="logo" data-v-647b4179=""><span class="logo-text" data-v-647b4179="">FG.Prod</span></a>
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
          <NuxtLink 
            v-for="loc in locales" 
            :key="typeof loc === 'string' ? loc : loc.code"
            :to="switchLocalePath(typeof loc === 'string' ? loc : loc.code)"
            :class="['lang-btn', { active: locale === (typeof loc === 'string' ? loc : loc.code) }]"
          >
            {{ (typeof loc === 'string' ? loc : loc.code).toUpperCase() }}
          </NuxtLink>
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
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isMobileMenuOpen" class="mobile-drawer">
          <div class="drawer-header">
            <span class="logo-text">FG<span class="logo-highlight">pro</span></span>
            <button class="close-btn-simple" @click="isMobileMenuOpen = false">
               <Icon name="lucide:x" />
            </button>
          </div>
          
          <div class="drawer-nav">
            <ul class="mobile-nav-list-simple">
              <li v-for="link in navLinks" :key="link.name">
                <a :href="link.href" class="mobile-link-minimal" @click="isMobileMenuOpen = false">
                  {{ $t(link.name) }}
                </a>
              </li>
            </ul>
          </div>

          <div class="drawer-footer-simple">
            <div class="drawer-lang-minimal">
              <NuxtLink 
                v-for="loc in locales" 
                :key="typeof loc === 'string' ? loc : loc.code"
                :to="switchLocalePath(typeof loc === 'string' ? loc : loc.code)"
                @click="closeMenu"
                :class="['lang-link-min', { active: locale === (typeof loc === 'string' ? loc : loc.code) }]"
              >
                {{ (typeof loc === 'string' ? loc : loc.code).toUpperCase() }}
              </NuxtLink>
            </div>
            <div class="drawer-legal-min">
              <NuxtLink to="/mentions-legales" @click="isMobileMenuOpen = false">{{ $t('footer.links.legal') }}</NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
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
  background: #ffffff;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.navbar-scrolled .nav-link,
.navbar-scrolled .logo-text {
  color: #1a1a1a;
}

.navbar-scrolled .burger-bar,
.navbar-scrolled .burger-bar::before,
.navbar-scrolled .burger-bar::after {
  background: #1a1a1a;
}

.navbar-scrolled .lang-switcher {
  background: rgba(0, 0, 0, 0.05);
}

.navbar-scrolled .lang-btn.active {
  background: #1a1a1a;
  color: #fff;
}

.navbar-scrolled .btn-quote {
  background: #1a1a1a;
  color: #fff;
}
.container {
  max-width: 1600px;
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
  /*font-family: 'scotch-display', serif;*/
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.5px;
  transition: color 0.3s ease;
  display: flex;
  align-items: baseline;
}

.logo-highlight {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-left: 4px;
  opacity: 0.9;
  transform: translateY(-2px);
}

/* Desktop Menu */
.navbar-menu-desktop {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-list {
  display: flex;
  gap: 20px;
  list-style: none;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 4px;
  white-space: pre;
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
  opacity: .8;
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
  text-decoration: none;
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
  width: 22px;
  height: 1.5px;
  background: #fff;
  position: relative;
  transition: all 0.3s ease;
}

.navbar-scrolled .burger-bar {
  background: #1a1a1a;
}

.burger-bar::before, .burger-bar::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1.5px;
  background: inherit;
  transition: all 0.3s ease;
}

.burger-bar::before { top: -6px; }
.burger-bar::after { bottom: -6px; width: 60%; right: 0; }

.burger-bar.open { background: transparent; }
.burger-bar.open::before { transform: rotate(45deg); top: 0; background: #1a1a1a; }
.burger-bar.open::after { transform: rotate(-45deg); bottom: 0; width: 100%; background: #1a1a1a; }

/* Mobile Drawer - Minimalist */
.mobile-drawer {
  position: fixed;
  inset: 0;
  background: #ffffff;
  z-index: 9999;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.close-btn-simple {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #1a1a1a;
  cursor: pointer;
  padding: 5px;
}

.drawer-nav {
  flex: 1;
}

.mobile-nav-list-simple {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-link-minimal {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #1a1a1a;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.mobile-link-minimal:hover {
  opacity: 0.6;
}

.drawer-footer-simple {
  margin-top: auto;
  padding-top: 30px;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.drawer-lang-minimal {
  display: flex;
  gap: 20px;
}

.lang-link-min {
  background: none;
  border: none;
  font-size: 0.8rem;
  font-weight: 700;
  color: #ccc;
  cursor: pointer;
  padding: 0;
  transition: color 0.3s ease;
  text-decoration: none;
}

.lang-link-min.active {
  color: #1a1a1a;
}

.drawer-legal-min a {
  font-size: 0.75rem;
  color: #999;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 1024px) {
  .navbar-menu-desktop { display: none; }
  .mobile-toggle { display: block; }
  .navbar-actions .lang-switcher, .navbar-actions .btn-quote { display: none; }
  .navbar { height: 80px; }
  .container { padding: 0 25px; }
}
</style>