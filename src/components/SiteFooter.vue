<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-card">
        <div class="footer-grid">
          <section>
            <div class="footer-brand">
              <span class="brand-mark brand-mark--image" aria-hidden="true">
                <img src="/brand/logo.png" alt="Trail Atlas China logo" />
              </span>
              <span class="footer-brand-copy">
                <strong>{{ brand.name }}</strong>
                <span>{{ brand.englishName }}</span>
              </span>
            </div>
            <p>{{ footer.summary }}</p>
          </section>

          <section>
            <h3>{{ footer.navTitle }}</h3>
            <nav class="footer-nav">
              <a v-for="link in navigation.links" :key="link.href" :href="link.href">{{ link.label }}</a>
            </nav>
          </section>

          <section>
            <h3>{{ footer.contactTitle }}</h3>
            <ul class="footer-contact-list">
              <li v-for="field in contact.fields" :key="field.label">{{ field.label }} · {{ field.value }}</li>
            </ul>
          </section>
        </div>

        <div class="footer-copyright">{{ footer.copyright }}</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  brand: {
    type: Object,
    required: true
  },
  navigation: {
    type: Object,
    required: true
  },
  contact: {
    type: Object,
    required: true
  },
  footer: {
    type: Object,
    required: true
  },
  locale: {
    type: String,
    required: false,
    default: 'en'
  }
})
</script>
