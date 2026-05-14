<template>
  <div class="site-shell">
    <HeaderNav
      :brand="siteContent.brand"
      :navigation="navigation"
      :locale="locale"
      :locales="siteContent.locales"
      @change-locale="setLocale"
    />

    <main>
      <HeroSection
        :hero="hero"
        :planner="planner"
        :slides="siteContent.heroSlides"
        :locale="locale"
      />
      <RouteShowcase
        id="routes"
        :section="routesSection"
        :routes="localizedRoutes"
        :locale="locale"
        :format-price="formatPriceForLocale"
      />
      <SceneGrid id="scenes" :section="scenesSection" :locale="locale" />
      <ServiceHighlights id="services" :section="servicesSection" :locale="locale" />
      <ContactSection id="contact" :section="contactSection" :locale="locale" />
    </main>

    <SiteFooter
      :brand="siteContent.brand"
      :navigation="navigation"
      :contact="contactSection"
      :footer="footer"
      :locale="locale"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import HeaderNav from './components/HeaderNav.vue'
import HeroSection from './components/HeroSection.vue'
import RouteShowcase from './components/RouteShowcase.vue'
import SceneGrid from './components/SceneGrid.vue'
import ServiceHighlights from './components/ServiceHighlights.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import { formatPrice, siteContent } from './config/site'

const locale = ref('en')

const setLocale = (value) => {
  locale.value = value
}

const navigation = computed(() => ({
  links: siteContent.navigation.links[locale.value],
  action: siteContent.navigation.action[locale.value]
}))

const hero = computed(() => ({
  eyebrow: siteContent.hero.eyebrow[locale.value],
  title: siteContent.hero.title[locale.value],
  description: siteContent.hero.description[locale.value],
  badges: siteContent.hero.badges[locale.value],
  primaryAction: siteContent.hero.primaryAction[locale.value],
  secondaryAction: siteContent.hero.secondaryAction[locale.value],
  stats: siteContent.hero.stats[locale.value],
  videoCard: {
    title: siteContent.hero.videoCard.title[locale.value],
    description: siteContent.hero.videoCard.description[locale.value],
    floatingTitle: siteContent.hero.videoCard.floatingTitle[locale.value],
    closeLabel: siteContent.hero.videoCard.closeLabel[locale.value],
    filePath: siteContent.hero.videoCard.filePath
  }
}))

const planner = computed(() => ({
  kicker: siteContent.planner.kicker[locale.value],
  title: siteContent.planner.title[locale.value],
  fields: siteContent.planner.fields[locale.value],
  tip: siteContent.planner.tip[locale.value],
  cta: siteContent.planner.cta[locale.value]
}))

const routesSection = computed(() => ({
  eyebrow: siteContent.routesSection.eyebrow[locale.value],
  title: siteContent.routesSection.title[locale.value],
  intro: siteContent.routesSection.intro[locale.value],
  searchLabel: siteContent.routesSection.searchLabel[locale.value],
  searchPlaceholder: siteContent.routesSection.searchPlaceholder[locale.value],
  filterAriaLabel: siteContent.routesSection.filterAriaLabel[locale.value],
  budgetTitle: siteContent.routesSection.budgetTitle[locale.value],
  budgetDescription: siteContent.routesSection.budgetDescription[locale.value],
  budgetHint: siteContent.routesSection.budgetHint[locale.value],
  empty: siteContent.routesSection.empty[locale.value],
  sceneLabelTitle: siteContent.routesSection.sceneLabelTitle[locale.value],
  budgetLabel: siteContent.routesSection.budgetLabel[locale.value],
  seasonLabel: siteContent.routesSection.seasonLabel[locale.value]
}))

const localizedRoutes = computed(() =>
  siteContent.featuredRoutes.map((route) => ({
    ...route,
    title: route.title[locale.value],
    region: route.region[locale.value],
    duration: route.duration[locale.value],
    budget: `${formatPrice(route.budgetValue, locale.value)}${locale.value === 'zh' ? ' / 人起' : ' / person+'}`,
    season: route.season[locale.value],
    summary: route.summary[locale.value],
    highlights: route.highlights[locale.value],
    tags: route.tags[locale.value],
    gallery: route.gallery[locale.value]
  }))
)

const scenesSection = computed(() => ({
  eyebrow: siteContent.scenesSection.eyebrow[locale.value],
  title: siteContent.scenesSection.title[locale.value],
  intro: siteContent.scenesSection.intro[locale.value],
  items: siteContent.scenesSection.items.map((item) => ({
    ...item,
    label: item.label[locale.value],
    audience: item.audience[locale.value],
    description: item.description[locale.value],
    metric: item.metric[locale.value]
  }))
}))

const servicesSection = computed(() => ({
  eyebrow: siteContent.servicesSection.eyebrow[locale.value],
  title: siteContent.servicesSection.title[locale.value],
  intro: siteContent.servicesSection.intro[locale.value],
  items: siteContent.servicesSection.items.map((item) => ({
    title: item.title[locale.value],
    description: item.description[locale.value],
    metric: item.metric[locale.value]
  })),
  aside: {
    title: siteContent.servicesSection.aside.title[locale.value],
    points: siteContent.servicesSection.aside.points[locale.value]
  }
}))

const contactSection = computed(() => ({
  eyebrow: siteContent.contact.eyebrow[locale.value],
  title: siteContent.contact.title[locale.value],
  intro: siteContent.contact.intro[locale.value],
  advisorName: siteContent.contact.advisorName,
  role: siteContent.contact.role[locale.value],
  coverImage: siteContent.contact.coverImage,
  qrImage: siteContent.contact.qrImage,
  note: siteContent.contact.note[locale.value],
  tips: siteContent.contact.tips[locale.value],
  tags: siteContent.contact.tags[locale.value],
  fields: siteContent.contact.fields[locale.value]
}))

const footer = computed(() => ({
  summary: siteContent.footer.summary[locale.value],
  navTitle: siteContent.footer.navTitle[locale.value],
  contactTitle: siteContent.footer.contactTitle[locale.value],
  copyright: siteContent.footer.copyright
}))

const formatPriceForLocale = (value) => formatPrice(value, locale.value)
</script>
