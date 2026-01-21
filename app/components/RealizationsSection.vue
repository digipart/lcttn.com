<template>
  <section class="realizations-section" id="realizations">
    <div class="container">
      
      <!-- Header -->
      <div class="header-center">
        <h2 class="title-main">
          {{ $t('realizations.title') }} <span class="italic">{{ $t('realizations.titleItalic') }}</span>
        </h2>
        <div class="title-underline"></div>
        <p class="subtitle">{{ $t('realizations.subtitle') }}</p>
      </div>

      </div>


    <!-- Slider Container (Full Width) -->
    <div class="slider-container">
      
      <!-- Navigation Buttons -->
      <button @click="scroll('left')" class="nav-btn prev" aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button @click="scroll('right')" class="nav-btn next" aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      <!-- Scrollable Track -->
      <div class="slider-track" ref="sliderRef">
        
        <div 
          v-for="(item, index) in items" 
          :key="index"
          class="slider-item"
          :class="item.class"
        >
          <!-- Image Item -->
          <a v-if="!item.isVideo" :href="item.link" target="_blank" rel="noopener noreferrer" class="image-wrapper">
            <img :src="item.src" :alt="item.title" class="bg-image">
            <div class="overlay"></div>
            <div class="content">
              <span class="category">{{ item.category }}</span>
              <h3 class="item-title">{{ item.title }}</h3>
              <p class="item-desc">{{ item.desc }}</p>
            </div>
          </a>

          <!-- Video Item -->
          <a v-else :href="item.link" target="_blank" rel="noopener noreferrer" class="video-wrapper">
            <video autoplay muted loop playsinline class="bg-video">
              <source :src="item.src" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <div class="overlay"></div>
            <div class="content">
              <span class="category">{{ item.category }}</span>
              <h3 class="item-title">{{ item.title }}</h3>
              <p class="item-desc">{{ item.desc }}</p>
              <div class="play-icon">
                <svg viewBox="0 00 24" fill="currentColor" stroke="none"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const sliderRef = ref<HTMLElement | null>(null)

const items = computed(() => [
  {
    src: '/images/Creation/image-1.jpg',
    title: t('realizations.style.title'),
    desc: t('realizations.style.description'),
    category: '01',
    class: 'style-item',
    isVideo: false,
    link: 'https://readymag.website/u4065073057/4380582/iro/'
  },
  {
    src: '/images/Creation/image-2.jpg',
    title: t('realizations.textile.title'),
    desc: t('realizations.textile.description'),
    category: '02',
    class: 'textile-item',
    isVideo: false,
    link: 'https://readymag.website/u4065073057/4380582/zapadesign/'
  },
  {
    src: '/images/hero.mp4',
    title: t('realizations.product.title'),
    desc: t('realizations.product.description'),
    category: '03',
    class: 'product-item',
    isVideo: true,
    link: 'https://readymag.website/u4065073057/4380582/zapadesign/'
  },
  {
    src: '/images/Creation/image-3.jpg',
    title: t('realizations.creation1.title'),
    desc: t('realizations.creation1.description'),
    category: '04',
    class: 'creation-item',
    isVideo: false,
    link: 'https://readymag.website/u4065073057/4380582/zapadesign/'
  },
  {
    src: '/images/Creation/image-4.jpg',
    title: t('realizations.creation2.title'),
    desc: t('realizations.creation2.description'),
    category: '05',
    class: 'creation-item',
    isVideo: false,
    link: 'https://readymag.website/u4065073057/4380582/zapadesign/'
  },
  {
    src: '/images/Creation/image-5.jpg',
    title: t('realizations.creation3.title'),
    desc: t('realizations.creation3.description'),
    category: '06',
    class: 'creation-item',
    isVideo: false,
    link: 'https://readymag.website/u4065073057/4380582/zapadesign/'
  }
])

const scroll = (direction: 'left' | 'right') => {
  if (!sliderRef.value) return
  
  // Get width of first item + gap (30px)
  const item = sliderRef.value.querySelector('.slider-item') as HTMLElement
  if (!item) return
  
  const gap = 30
  const itemWidth = item.offsetWidth + gap
  const currentScroll = sliderRef.value.scrollLeft
  
  sliderRef.value.scrollTo({
    left: direction === 'left' ? currentScroll - itemWidth : currentScroll + itemWidth,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.realizations-section {
  padding: 100px 0;
  background: #ffffff;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

/* Header */
.header-center {
  text-align: center;
  margin-bottom: 80px;
}

.title-main {
  font-family: 'scotch-display', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  color: #1a1a1a;
  margin-bottom: 20px;
}

.italic {
  font-style: italic;
  font-weight: 400;
}

.title-underline {
  width: 60px;
  height: 1px;
  background: #1a1a1a;
  margin: 0 auto 30px;
}

.subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Slider */
/* Slider */
.slider-container {
  position: relative;
  width: 100%;
}

.slider-track {
  display: flex;
  gap: 30px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0 40px 20px 40px; /* Add side padding for peek effect */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.slider-track::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

.slider-item {
  flex: 0 0 650px; /* Increased from 45% (approx 500-600px) to fixed 650px for larger images */
  max-width: 90vw; /* Ensure it fits on smaller screens */
  height: 600px; /* Increase height slightly */
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
  scroll-snap-align: center; /* Center active item */
}

/* Nav Buttons */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background: white;
  border: 1px solid #eee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  color: #1a1a1a;
}
.nav-btn:hover {
  background: #1a1a1a;
  color: #fff;
}
.nav-btn.prev {
  left: 40px;
}
.nav-btn.next {
  right: 40px;
}
.nav-btn svg {
  width: 24px;
  height: 24px;
}

.image-wrapper, .video-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  text-decoration: none;
  color: inherit;
}

.bg-image, .bg-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slider-item:hover .bg-image,
.slider-item:hover .bg-video {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2));
  opacity: 0.8;
  transition: opacity 0.4s ease;
}

.slider-item:hover .overlay {
  opacity: 0.6;
}

.content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 40px;
  color: #fff;
  z-index: 2;
  transform: translateY(0);
  transition: transform 0.4s ease;
}

.category {
  display: block;
  font-family: 'scotch-display', serif;
  font-size: 3rem;
  font-style: italic;
  opacity: 0.3;
  margin-bottom: 10px;
  line-height: 1;
}

.item-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.item-desc {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  opacity: 0.8;
  max-width: 90%;
  font-weight: 300;
  line-height: 1.5;
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -500%); /* Position center of image initially hidden or high */
  width: 60px;
  height: 60px;
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(5px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0;
  transition: all 0.4s ease;
}

.product-item .play-icon {
    top: 00%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centered */
    opacity: 1; /* Always visible for video hint */
}
.product-item:hover .play-icon {
    transform: translate(-50%, -50%) scale(1.1);
    background: rgba(255,255,255,0.3);
}
.play-icon svg {
    width: 24px;
    height: 24px;
}

/* Responsive */
@media (max-width: 1024px) {
  .slider-item {
    flex: 0 0 60%; /* Show more prominent items on tablet */
    height: 450px;
  }
}

@media (max-width: 768px) {
  .realizations-section {
    padding: 60px 0;
  }
  .header-center {
    margin-bottom: 50px;
  }
  .title-main {
    font-size: 2.5rem;
  }
  .container {
    padding: 0 20px;
  }
  
  .slider-track {
    gap: 15px;
  }
  .slider-item {
    flex: 0 0 85%; /* Almost full width cards on mobile */
    height: 400px;
    min-width: 250px;
  }
  
  .nav-btn {
    display: none; /* Hide arrows on mobile, rely on swipe */
  }

  .content {
    padding: 25px;
  }
  .category {
    font-size: 2rem;
  }
  .item-title {
    font-size: 1.2rem;
  }
}
</style>
