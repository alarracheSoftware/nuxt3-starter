<template>
  <section>
    <i18n-t scope="global" keypath="link" tag="p" class="text-center ma-2">
        <template #isHim>
          <a
            :href="githubProfileURL"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t('isHim') }}
          </a>
        </template>
      </i18n-t>
    <HomeGithubButtonRequest />
  </section>
</template>

<script setup>

const { t } = useI18n()
const runtimeConfig = useRuntimeConfig()

const githubProfileURL = ref(runtimeConfig.public.githubProfileURL);

</script>