<template>
  <div class="prose lg:prose-xl mx-auto">
    <nuxt-content :document="introductionPage" />
    <nuxt-content :document="socialPage" />
    <SocialList></SocialList>
  </div>
</template>

<style scoped>
.prose {
  max-width: 768px;
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, app }) {
    const introductionPage = await $content(
      `${app.i18n.locale}/introduction`
    ).fetch()
    const socialPage = await $content(`${app.i18n.locale}/socials`).fetch()

    return {
      introductionPage,
      socialPage,
    }
  },

  head() {
    return {
      title: (this as any).introductionPage.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: (this as any).introductionPage.description,
        },
      ],
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    }
  },
})
</script>
