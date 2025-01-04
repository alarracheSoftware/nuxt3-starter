<template>
  <div class="text-center ma-2">
    <v-btn small :href="githubRepo" target="_blank" rel="noreferrer"
      variant="outlined">
      Version: {{ version }}
      <v-icon right>
        mdi-github
      </v-icon>
    </v-btn>
  </div>
</template>

<script setup>

const runtimeConfig = useRuntimeConfig()

const version = ref(runtimeConfig.public.version);
const githubRepo = ref(runtimeConfig.public.githubRepoURL);

</script>