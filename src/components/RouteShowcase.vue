<template>
  <section :id="id" class="section route-section">
    <div class="container">
      <p class="section-eyebrow">{{ section.eyebrow }}</p>
      <h2 class="section-title">{{ section.title }}</h2>
      <p class="section-intro">{{ section.intro }}</p>

      <div class="route-toolbar surface-card">
        <div class="toolbar-search">
          <label for="route-search">{{ section.searchLabel }}</label>
          <input id="route-search" v-model.trim="query" type="text" :placeholder="section.searchPlaceholder" />

          <div class="filter-chips" :aria-label="section.filterAriaLabel">
            <button
              v-for="scene in localizedSceneOptions"
              :key="scene.value"
              type="button"
              class="filter-chip"
              :class="{ 'is-active': sceneFilter === scene.value }"
              @click="sceneFilter = scene.value"
            >
              {{ scene.label }}
            </button>
          </div>
        </div>

        <div class="toolbar-budget">
          <div class="toolbar-budget__top">
            <div>
              <strong>{{ section.budgetTitle }}</strong>
              <p>{{ section.budgetDescription }}</p>
            </div>
            <span class="toolbar-budget__value">{{ formatPrice(budgetLimit) }}</span>
          </div>

          <input v-model="budgetLimit" type="range" min="3000" max="8000" step="200" />
          <small>{{ section.budgetHint }}</small>
        </div>
      </div>

      <div v-if="filteredRoutes.length" class="route-grid">
        <article
          v-for="route in filteredRoutes"
          :key="route.id"
          class="route-card"
          :style="{
            '--card-start': route.accent.from,
            '--card-end': route.accent.to,
            '--card-glow': route.accent.glow
          }"
        >
          <div class="route-card__visual">
            <div class="route-card__meta">
              <span>{{ route.duration }}</span>
              <strong>★ {{ route.rating }}</strong>
            </div>
            <h3>{{ route.title }}</h3>
            <p>{{ route.region }}</p>
          </div>

          <div class="route-card__body">
            <div class="route-card__detail-grid">
              <div>
                <span>{{ section.budgetLabel }}</span>
                <strong>{{ route.budget }}</strong>
              </div>
              <div>
                <span>{{ section.seasonLabel }}</span>
                <strong>{{ route.season }}</strong>
              </div>
              <div>
                <span>{{ section.sceneLabelTitle }}</span>
                <strong>{{ sceneLabelMap[route.scene] }}</strong>
              </div>
            </div>

            <div class="route-gallery" v-if="route.gallery?.length">
              <div v-for="image in route.gallery" :key="image.src" class="route-gallery__item">
                <img :src="image.src" :alt="image.alt" />
              </div>
            </div>

            <p class="route-card__summary">{{ route.summary }}</p>

            <ul class="route-highlight-list">
              <li v-for="item in route.highlights" :key="item">{{ item }}</li>
            </ul>

            <ul class="route-tag-list">
              <li v-for="tag in route.tags" :key="tag">{{ tag }}</li>
            </ul>
          </div>
        </article>
      </div>

      <div v-else class="route-empty surface-card">
        {{ section.empty }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  id: {
    type: String,
    default: undefined
  },
  section: {
    type: Object,
    required: true
  },
  routes: {
    type: Array,
    required: true
  },
  locale: {
    type: String,
    required: true
  },
  formatPrice: {
    type: Function,
    required: true
  }
})

const query = ref('')
const budgetLimit = ref(6200)
const sceneFilter = ref('all')

const sceneOptions = {
  zh: [
    { label: '全部', value: 'all' },
    { label: '亲子', value: 'family' },
    { label: '情侣', value: 'romance' },
    { label: '摄影', value: 'photo' },
    { label: '人文', value: 'culture' }
  ],
  en: [
    { label: 'All', value: 'all' },
    { label: 'Family', value: 'family' },
    { label: 'Couples', value: 'romance' },
    { label: 'Photo', value: 'photo' },
    { label: 'Culture', value: 'culture' }
  ]
}

const sceneLabels = {
  zh: {
    family: '亲子家庭',
    romance: '情侣度假',
    photo: '摄影采风',
    culture: '城市人文'
  },
  en: {
    family: 'Family trips',
    romance: 'Couple escapes',
    photo: 'Photography',
    culture: 'Urban culture'
  }
}

const localizedSceneOptions = computed(() => sceneOptions[props.locale])
const sceneLabelMap = computed(() => sceneLabels[props.locale])

const filteredRoutes = computed(() => {
  const keyword = query.value.toLowerCase()

  return props.routes.filter((route) => {
    const matchesScene = sceneFilter.value === 'all' || route.scene === sceneFilter.value
    const matchesBudget = route.budgetValue <= budgetLimit.value
    const matchesKeyword =
      keyword.length === 0 ||
      [route.title, route.region, route.summary, ...route.tags, ...route.highlights]
        .join(' ')
        .toLowerCase()
        .includes(keyword)

    return matchesScene && matchesBudget && matchesKeyword
  })
})
</script>
