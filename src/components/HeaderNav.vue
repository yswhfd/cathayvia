<template>
  <header class="page-header">
    <div class="container">
      <div class="page-header__bar">
        <a class="brand-lockup" href="#top" aria-label="Back to top">
          <span class="brand-mark brand-mark--image" aria-hidden="true">
            <img src="/brand/logo.png" alt="Trail Atlas China logo" />
          </span>
          <span class="brand-copy">
            <strong>{{ brand.name }}</strong>
            <span>{{ brand.englishName }}</span>
          </span>
        </a>

        <nav class="nav-links" aria-label="Site navigation">
          <a v-for="link in navigation.links" :key="link.href" :href="link.href">{{ link.label }}</a>
        </nav>

        <div class="header-actions">
          <div class="locale-switch" role="tablist" aria-label="Language switcher">
            <button
              v-for="item in locales"
              :key="item"
              type="button"
              class="locale-switch__button"
              :class="{ 'is-active': locale === item }"
              @click="$emit('change-locale', item)"
            >
              {{ item.toUpperCase() }}
            </button>
          </div>

          <a class="btn btn-primary header-cta" :href="navigation.action.href">{{ navigation.action.label }}</a>
        </div>
      </div>
    </div>
  </header>
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
  locale: {
    type: String,
    required: true
  },
  locales: {
    type: Array,
    required: true
  }
})

defineEmits(['change-locale'])
</script>
