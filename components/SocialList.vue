<!-- A list of logos (with links) for social networks -->

<template>
  <div class="flex items-center justify-around flex-wrap">
    <div
      v-for="socialName in Object.keys(socials)"
      :key="socialName"
      class="w-1/2 md:w-1/3 lg:w-1/4 my-4 flex justify-center"
    >
      <LinkLogo :href="socials[socialName].url">
        <template v-if="socialName === 'linkedin'">
          <LogoLinkedin></LogoLinkedin>
        </template>
        <template v-if="socialName === 'github'">
          <LogoGithub></LogoGithub>
        </template>
        <template v-if="socialName === 'stackOverflow'">
          <LogoStackOverflow></LogoStackOverflow>
        </template>
        <template v-if="socialName === 'lichess'">
          <LogoLichess></LogoLichess>
        </template>
      </LinkLogo>
    </div>
  </div>
</template>

<script lang="ts">
import socials from '~/content/socials.json'

import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      socials: socials,
    }
  },
})
</script>
