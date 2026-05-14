<template>
  <section :id="id" class="section">
    <div class="container">
      <p class="section-eyebrow">{{ section.eyebrow }}</p>
      <h2 class="section-title">{{ section.title }}</h2>
      <p class="section-intro">{{ section.intro }}</p>

      <div class="scene-grid">
        <article v-for="scene in section.items" :key="scene.id" class="scene-card">
          <div class="scene-card__top">
            <h3>{{ scene.label }}</h3>
            <span class="scene-card__metric" :style="{ background: scene.accent }">{{ scene.metric }}</span>
          </div>

          <p>{{ scene.description }}</p>

          <ul class="scene-tag-list">
            <li>{{ scene.audience }}</li>
          </ul>
        </article>
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
