<template>
  <section class="gallery-section" id="know-how">
    <div class="container">
      
      <!-- Section Header -->
      <div class="gallery-header">
        <h2 class="title-main">{{ $t('products.title') }} <span class="italic">{{ $t('products.titleHighlight') }}</span></h2>
        <p class="lead-text">
          {{ $t('products.subtitle') }}
        </p>
      </div>
      <!-- Editorial Staggered Grid -->
      <div class="product-grid">
        <div v-for="(product, index) in products" :key="index" class="product-card" :class="'card-' + index">
          <div class="image-wrapper">
            <!-- Replace with actual image paths -->
            <img :src="product.image" :alt="product.name" class="product-image" />
            <div class="image-overlay"></div>
          </div>
          <h3 class="product-name">{{ $t(product.name) }}</h3>
        </div>
      </div>
      <!-- Footer Tags -->
      <div class="gallery-footer">
        <div class="tag-row">
          <span>{{ $t('products.tags.basics') }}</span>
          <span class="dot"></span>
          <span>{{ $t('products.tags.structured') }}</span>
          <span class="dot"></span>
          <span>{{ $t('products.tags.womenswear') }}</span>
        </div>
        <p class="production-note">{{ $t('products.note') }}</p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const products = [
  { name: 'products.categories.dresses', image: '/images/category/Robe.jpg' },
  { name: 'products.categories.jackets', image: '/images/category/Vestes&Blazers.jpg' },
  { name: 'products.categories.shirts', image: '/images/category/Chemises&Blouses.jpg' },
  { name: 'products.categories.trousers', image: '/images/category/Pantalons.jpg' },
  { name: 'products.categories.coats', image: '/images/category/Manteaux.jpg' },
  { name: 'products.categories.skirts', image: '/images/category/Jupesplissees.jpg' },
  { name: 'products.categories.jumpsuits', image: '/images/category/Combinaison.jpg' },
  { name: 'products.categories.various', image: '/images/category/Diversproduits.jpg' }
]
</script>
<style scoped>
.gallery-section {
  padding: 80px 0;
  background: #ffffff;
}
.container {
  max-width: 100vw;
  margin: 0 auto;
  padding: 0 20px;
}
/* Header */
.gallery-header {
  margin-bottom: 80px;
  max-width: 1000px;
  margin: 0 auto 80px;
  text-align: center;
}
.title-main {
  font-family: 'scotch-display', serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 300;
  color: #2D3E30; /* Deep subtle green from screenshot */
  margin-bottom: 30px;
  line-height: 1.1;
}
.title-main .italic {
  font-style: italic;
  font-weight: 400;
}
.lead-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
}
/* Staggered Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  row-gap: 60px;
}
.product-card {
  display: flex;
  flex-direction: column;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
/* Staggering effect */
.product-card.card-1, .product-card.card-3, .product-card.card-5, .product-card.card-7 {
  transform: translateY(40px);
}
.image-wrapper {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  background: #f7f7f7;
  margin-bottom: 10px;
}
.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.23, 1, 0.32, 1);
}
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(45, 62, 48, 0.05); /* Very subtle green tint */
  pointer-events: none;
}
.product-card:hover .product-image {
  transform: scale(1.08);
}
.product-card:hover {
  transform: translateY(-5px);
}
/* Equalize translateY on hover for staggered cards */
.product-card.card-1:hover, .product-card.card-3:hover, .product-card.card-5:hover, .product-card.card-7:hover {
  transform: translateY(35px);
}
.product-name {
  font-family: 'scotch-display', serif;
  font-size: 1.35rem;
  font-weight: 400;
  color: #1a1a1a;
  letter-spacing: -0.01em;
  text-align: center;
  padding-bottom: 10px;
}
/* Footer Section */
.gallery-footer {
  margin-top: 140px;
  text-align: center;
}
.tag-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}
.tag-row span {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #666;
  font-weight: 400;
}
.dot {
  width: 4px;
  height: 4px;
  background: #9BB09D; /* Sage green color */
  border-radius: 50%;
}
.production-note {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-style: italic;
  color: #999;
}
/* Responsive */
@media (max-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 900px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .product-card.card-1, .product-card.card-3, .product-card.card-5, .product-card.card-7 {
    transform: none;
  }
  .gallery-footer {
    margin-top: 80px;
  }
}
@media (max-width: 768px) {
  .container {
    padding: 0 30px;
  }
  .tag-row {
    flex-direction: column;
    gap: 10px;
  }
  .dot {
    display: none;
  }
}
@media (max-width: 480px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>