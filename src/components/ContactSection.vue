<template>
  <section :id="id" class="section">
    <div class="container">
      <p class="section-eyebrow">{{ section.eyebrow }}</p>
      <h2 class="section-title">{{ section.title }}</h2>
      <p class="section-intro">{{ section.intro }}</p>

      <div class="contact-band surface-card">
        <div class="contact-band__intro">
          <div>
            <p class="contact-band__eyebrow">{{ section.advisorName }}</p>
            <h3>{{ section.role }}</h3>
            <p>{{ section.note }}</p>
          </div>

          <ul class="contact-tag-list">
            <li v-for="tag in section.tags" :key="tag">{{ tag }}</li>
          </ul>
        </div>

        <div class="contact-band__fields">
          <article v-for="field in section.fields" :key="field.label" class="contact-band__field">
            <span>{{ field.label }}</span>
            <a v-if="field.type === 'email'" :href="`mailto:${field.value}`">{{ field.value }}</a>
            <strong v-else>{{ field.value }}</strong>
          </article>
        </div>

        <div class="contact-band__media">
          <div class="contact-band__cover">
            <img :src="section.coverImage" alt="Route advisor visual" />
          </div>

          <div class="contact-band__aside">
            <div class="contact-qr-card">
              <img :src="section.qrImage" alt="Advisor QR visual" />
            </div>
            <div class="contact-band__tips">
              <p>{{ section.tips.primary }}</p>
              <p>{{ section.tips.secondary }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    default: undefined
  },
  section: {
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
