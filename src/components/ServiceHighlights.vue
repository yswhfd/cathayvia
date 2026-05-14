<template>
  <section :id="id" class="section">
    <div class="container">
      <p class="section-eyebrow">{{ section.eyebrow }}</p>
      <h2 class="section-title">{{ section.title }}</h2>
      <p class="section-intro">{{ section.intro }}</p>

      <div class="service-layout">
        <div class="service-grid">
          <article v-for="item in section.items" :key="item.title" class="service-card">
            <span class="service-card__metric">{{ item.metric }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>

        <aside class="service-aside">
          <h3>{{ section.aside.title }}</h3>
          <ul>
            <li v-for="point in section.aside.points" :key="point">{{ point }}</li>
          </ul>
        </aside>
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
    default: 'zh'
  }
})
</script>
