<template>
  <footer class="footer-outer">
    <div class="container">
      
      <div class="footer-grid">
        <!-- Brand & About -->
        <div class="footer-column brand-col">
          <h2 class="footer-logo">LCT</h2>
          <p class="brand-description">La Confection Tunisienne — Partenaire industriel de référence depuis 1995, spécialisé dans le prêt-à-porter haut de gamme pour les leaders européens.</p>
          <div class="label-tag">Industrial Apparel Manufacturing</div>
        </div>
        <!-- Quick Links -->
        <div class="footer-column">
          <h3 class="column-title">Navigation</h3>
          <ul class="footer-links">
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#production">Production</a></li>
            <li><a href="#valeurs">Valeurs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <!-- Contact Info Summary -->
        <div class="footer-column">
          <h3 class="column-title">Légal</h3>
          <ul class="footer-links">
            <li><a href="#">Mentions Légales</a></li>
            <li><a href="#">Confidentialité</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
        <!-- Language / Location -->
        <div class="footer-column">
          <h3 class="column-title">Emplacements</h3>
          <div class="location-item">
            <span class="loc-city">Sousse, Tunisie</span>
            <p>Usines & Siège Social</p>
          </div>
          <div class="location-item">
            <span class="loc-city">Paris, France</span>
            <p>Bureau Commercial</p>
          </div>
        </div>
      </div>
      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="copyright">
          &copy; {{ new Date().getFullYear() }} LCT. Tous droits réservés.
        </div>
        <div class="social-links">
          <a href="#" aria-label="LinkedIn">LN</a>
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Facebook">FB</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer-outer {
  background: #000000;
  color: #ffffff;
  padding: 100px 0 40px;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 80px;
  margin-bottom: 80px;
}
/* Brand Column */
.footer-logo {
  font-family: 'scotch-display', serif;
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 30px;
}
.brand-description {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  line-height: 1.8;
  color: #888;
  max-width: 350px;
  margin-bottom: 25px;
}
.label-tag {
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 1px solid #333;
  padding: 8px 15px;
  color: #666;
}
/* Links Columns */
.column-title {
  font-family: 'scotch-display', serif;
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 30px;
  color: #fff;
}
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-links li {
  margin-bottom: 15px;
}
.footer-links a {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  color: #888;
  text-decoration: none;
  transition: color 0.3s ease;
}
.footer-links a:hover {
  color: #ffffff;
}
/* Location Item */
.location-item {
  margin-bottom: 25px;
}
.loc-city {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 5px;
}
.location-item p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  color: #666;
}
/* Bottom Bar */
.footer-bottom {
  border-top: 1px solid #1a1a1a;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.copyright {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  color: #555;
  letter-spacing: 0.5px;
}
.social-links {
  display: flex;
  gap: 30px;
}
.social-links a {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #555;
  text-decoration: none;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}
.social-links a:hover {
  color: #ffffff;
}
/* Responsive */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }
}
@media (max-width: 768px) {
  .footer-outer {
    padding: 80px 0 40px;
  }
  .container {
    padding: 0 30px;
  }
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
}
</style>