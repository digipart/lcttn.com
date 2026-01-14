<template>
  <section class="difference-section" id="difference">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">{{ $t('difference.title') }} <span class="title-italic">{{ $t('difference.titleItalic') }}</span></h2>
        <div class="title-underline"></div>
      </div>
      <div class="difference-grid">
        <!-- Catégories Column -->
        <div class="difference-column">
          <div class="column-header">
            <div class="header-icon">
              <!-- Sewing Machine Vector Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 2 20 20"/><path d="M11.85 6.15A2.5 2.5 0 0 0 10 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5"/><path d="M15 11h.01"/><path d="M15 15h.01"/><path d="M19 11h.01"/><path d="M19 15h.01"/><path d="M15 7h.01"/></svg>
            </div>
            <h3 class="column-title">{{ $t('difference.lct.title') }}</h3>
          </div>
          
          <ul class="difference-list">
            <li><span>{{ $t('difference.lct.items[0]') }}</span></li>
            <li><span>{{ $t('difference.lct.items[1]') }}</span></li>
            <li><span>{{ $t('difference.lct.items[2]') }}</span></li>
            <li><span>{{ $t('difference.lct.items[3]') }}</span></li>
            <li><span>{{ $t('difference.lct.items[4]') }}</span></li>
            <li><span>{{ $t('difference.lct.items[5]') }}</span></li>
            <li><span>{{ $t('difference.lct.items[6]') }}</span></li>
            <li><span>{{ $t('difference.lct.items[7]') }}</span></li>
          </ul>
        </div>
        <!-- Divider Line -->
        <div class="center-divider"></div>
        <!-- Collections Column -->
        <div class="difference-column">
          <div class="column-header">
            <div class="header-icon">
              <!-- Hanger Vector Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2V6"/><path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 3.44772 10.2239 2.94772 10.5858 2.58579"/><path d="M2 19L11.5 13.5C11.8106 13.3225 12.1894 13.3225 12.5 13.5L22 19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19Z"/></svg>
            </div>
            <h3 class="column-title">{{ $t('difference.standard.title') }}</h3>
          </div>
          
          <ul class="difference-list">
            <li><span>{{ $t('difference.standard.items[0]') }}</span></li>
            <li><span>{{ $t('difference.standard.items[1]') }}</span></li>
            <li><span>{{ $t('difference.standard.items[2]') }}</span></li>
            <li><span>{{ $t('difference.standard.items[3]') }}</span></li>
            <li><span>{{ $t('difference.standard.items[4]') }}</span></li>
            <li><span>{{ $t('difference.standard.items[5]') }}</span></li>
            <li><span>{{ $t('difference.standard.items[6]') }}</span></li>
          </ul>
          <!-- Badge Footer -->
          <div class="badge-footer">
            <div class="badge-content">
              <span>{{ $t('difference.standard.badge') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
// difference component - Creative "Atelier" design
</script>
<style scoped>
.difference-section {
  padding: 80px 0;
  background: #ffffff;
  position: relative;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}
/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 100px;
}
.section-title {
  font-family: 'scotch-display', serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 300;
  color: #1a1a1a;
  letter-spacing: -0.01em;
}
.title-italic {
  font-style: italic;
  font-weight: 400;
}
.title-underline {
  width: 50px;
  height: 1px;
  background: #1a1a1a;
  margin: 25px auto 0;
}
/* Grid Layout */
.difference-grid {
  display: flex;
  justify-content: space-between;
  gap: 100px;
  position: relative;
}
.difference-column {
  flex: 1;
}
.center-divider {
  width: 1px;
  background: rgba(26, 26, 26, 0.1);
}
/* Column Header */
.column-header {
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.header-icon {
  width: 32px;
  height: 32px;
  color: #1a1a1a;
  margin-bottom: 20px;
}
.column-title {
  font-family: 'scotch-display', serif;
  font-size: 1.8rem;
  font-weight: 400;
  color: #1a1a1a;
}
/* List Styling */
.difference-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.difference-list li {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #666;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}
.difference-list li:last-child {
  border-bottom: none;
}
.difference-list li::before {
  content: '—';
  margin-right: 15px;
  color: #1a1a1a;
  opacity: 0.3;
  transition: opacity 0.3s ease;
}
.difference-list li:hover {
  color: #1a1a1a;
  transform: translateX(10px);
}
.difference-list li:hover::before {
  opacity: 1;
}
/* Badge Footer */
.badge-footer {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #1a1a1a;
}
.badge-content {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ffffff;
  background: #1a1a1a;
  padding: 12px 24px;
  display: inline-block;
  font-weight: 500;
}
/* Responsive */
@media (max-width: 968px) {
  .difference-grid {
    flex-direction: column;
    gap: 80px;
  }
  
  .center-divider {
    display: none;
  }
  
  .difference-column {
    width: 100%;
  }
  .difference-section {
    padding: 80px 0;
  }
}
@media (max-width: 640px) {
  .container {
    padding: 0 24px;
  }
  
  .section-header {
    margin-bottom: 60px;
  }
}
</style>