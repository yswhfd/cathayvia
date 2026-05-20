<template>
  <section id="top" class="hero-section">
    <div class="hero-slides" aria-hidden="true">
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="hero-slide"
        :class="{ 'is-active': index === activeSlide }"
        :style="{ backgroundImage: `url(${slide.image})` }"
      ></div>
    </div>

    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="section-eyebrow">{{ hero.eyebrow }}</p>
        <h1>{{ hero.title }}</h1>
        <p>{{ hero.description }}</p>

        <div class="chip-list hero-badges">
          <span v-for="badge in hero.badges" :key="badge" class="chip">{{ badge }}</span>
        </div>

        <div class="hero-actions">
          <a class="btn btn-primary" :href="hero.primaryAction.href">{{ hero.primaryAction.label }}</a>
          <a class="btn btn-secondary" :href="hero.secondaryAction.href">{{ hero.secondaryAction.label }}</a>
        </div>

        <ul class="hero-stats">
          <li v-for="stat in hero.stats" :key="stat.label">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
            <small>{{ stat.detail }}</small>
          </li>
        </ul>

        <div class="hero-slide-dots">
          <button
            v-for="(slide, index) in slides"
            :key="slide.id"
            type="button"
            :class="{ 'is-active': index === activeSlide }"
            :aria-label="slide.title[locale]"
            @click="activeSlide = index"
          ></button>
        </div>
      </div>

      <div class="planner-stack">
        <article ref="heroVideoAnchor" class="hero-video-card surface-card" :class="{ 'is-hidden-anchor': isFloating && !isVideoVisibleInViewport }">
          <div class="hero-video-card__copy">
            <h3>{{ hero.videoCard.title }}</h3>
            <p>{{ hero.videoCard.description }}</p>
          </div>

          <div v-if="!isFloating" class="hero-video-card__player">
            <video
              ref="heroVideoRef"
              :src="hero.videoCard.filePath"
              controls
              muted
              autoplay
              loop
              preload="metadata"
              playsinline
            ></video>
          </div>
          <div v-else class="hero-video-card__placeholder"></div>
        </article>

        <article class="planner-card surface-card">
          <p class="planner-kicker">{{ planner.kicker }}</p>
          <h2>{{ planner.title }}</h2>

          <div class="planner-grid">
            <div v-for="field in planner.fields" :key="field.label" class="planner-field">
              <span>{{ field.label }}</span>
              <strong>{{ field.value }}</strong>
            </div>
          </div>

          <p class="planner-tip">{{ planner.tip }}</p>
          <a class="btn btn-primary" :href="planner.cta.href">{{ planner.cta.label }}</a>
        </article>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="isFloating" class="floating-video-shell">
        <div class="floating-video-shell__bar">
          <span>{{ hero.videoCard.floatingTitle }}</span>
          <button type="button" class="floating-video-close" :aria-label="hero.videoCard.closeLabel" @click="dismissFloating">
            ×
          </button>
        </div>
        <video
          ref="floatingVideoRef"
          :src="hero.videoCard.filePath"
          controls
          muted
          autoplay
          loop
          preload="metadata"
          playsinline
        ></video>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  hero: {
    type: Object,
    required: true
  },
  planner: {
    type: Object,
    required: true
  },
  slides: {
    type: Array,
    required: true
  },
  locale: {
    type: String,
    required: true
  }
})

const activeSlide = ref(0)
const heroVideoRef = ref(null)
const floatingVideoRef = ref(null)
const heroVideoAnchor = ref(null)
const isFloating = ref(false)
const dismissedFloating = ref(false)
const isVideoVisibleInViewport = ref(true)

let slideTimer = null
let observer = null
let lastPlaybackTime = 0
let lastMuted = true
let lastVolume = 1

const attemptPlay = async (video) => {
  if (!video) {
    return
  }

  try {
    video.muted = true
    await video.play()
  } catch {
  }
}

const capturePlaybackState = (video) => {
  if (!video) {
    return
  }

  lastPlaybackTime = video.currentTime || 0
  lastMuted = video.muted
  lastVolume = video.volume
}

const syncPlaybackState = async (video) => {
  if (!video) {
    return
  }

  video.currentTime = lastPlaybackTime
  video.volume = lastVolume
  video.muted = lastMuted

  try {
    await video.play()
  } catch {
  }
}

const pauseVideo = (video) => {
  if (!video) {
    return
  }

  video.pause()
}

const pauseAllVideos = () => {
  pauseVideo(heroVideoRef.value)
  pauseVideo(floatingVideoRef.value)
}

const switchPlayerMode = async (floating) => {
  const currentVideo = floating ? heroVideoRef.value : floatingVideoRef.value
  capturePlaybackState(currentVideo)
  isFloating.value = floating
  await nextTick()
  await syncPlaybackState(floating ? floatingVideoRef.value : heroVideoRef.value)
}

const dismissFloating = async () => {
  dismissedFloating.value = true

  if (!isFloating.value) {
    pauseAllVideos()
    return
  }

  capturePlaybackState(floatingVideoRef.value)
  pauseAllVideos()
  isFloating.value = false
  await nextTick()
  pauseAllVideos()
}

const handleVisibilityChange = async (entries) => {
  const [entry] = entries
  isVideoVisibleInViewport.value = entry.isIntersecting

  if (entry.isIntersecting) {
    dismissedFloating.value = false
    if (isFloating.value) {
      await switchPlayerMode(false)
    }
    return
  }

  if (!dismissedFloating.value && !isFloating.value) {
    await switchPlayerMode(true)
  }
}

onMounted(async () => {
  slideTimer = window.setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % props.slides.length
  }, 4200)

  await nextTick()
  await attemptPlay(heroVideoRef.value)

  observer = new IntersectionObserver(handleVisibilityChange, {
    threshold: 0.35
  })

  if (heroVideoAnchor.value) {
    observer.observe(heroVideoAnchor.value)
  }
})

watch(
  () => props.hero.videoCard.filePath,
  async () => {
    await nextTick()
    await attemptPlay(isFloating.value ? floatingVideoRef.value : heroVideoRef.value)
  }
)

onBeforeUnmount(() => {
  if (slideTimer) {
    window.clearInterval(slideTimer)
  }

  if (observer) {
    observer.disconnect()
  }
})
</script>
