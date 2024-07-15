<template>
  <div class="text-center ma-2">
    <v-btn class="my-4" :loading="loading" @click="requestGithub">
      Request github
    </v-btn>
    <p> name : {{ name }} </p>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import { useSnacksStore } from '@/store/snacks'

const runtimeConfig = useRuntimeConfig()

const snackStore = useSnacksStore()
const { t } = useI18n()

let loading = ref(false);
let name = ref('');

function sleep(waitTimeInMs) {
  return new Promise(resolve => setTimeout(resolve, waitTimeInMs));
}

async function requestGithub() {
  let result;
  snackStore.info(t('snack.github.info'))
  try {
    loading.value = true

    await sleep(1000);

    const { data } = await useFetch(`${runtimeConfig.public.APIHost}/users/felixleo22`, {
      method: 'GET'
    });

    result = data.value

    console.log(result);

  } catch (err) {
    console.log(err);
    snackStore.error(t('snack.github.error'))
  }

  loading.value = false

  if (result?.name) {
    snackStore.success(t('snack.github.success'))
  }

  name.value = result?.name
}
</script>