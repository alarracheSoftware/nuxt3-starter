<template>
  <div class="text-center ma-2">
    <v-btn class="my-4" :loading="loading" @click="requestGithub">
      Request github
    </v-btn>
    <p> name : {{ name }} </p>
  </div>
</template>

<script setup>

const { $fetch } = useNuxtApp();

const snackStore = useSnacksStore()
const { t } = useI18n()

let loading = ref(false);
let name = ref('');

function sleep(waitTimeInMs) {
  return new Promise(resolve => setTimeout(resolve, waitTimeInMs));
}

async function requestGithub() {
  let data;

  snackStore.info(t('snack.github.info'))

  try {
    loading.value = true

    await sleep(1000);

    data = await $fetch('/users/felixleo22', {
      method: 'GET'
    });

  } catch (err) {
    console.log(err);
    snackStore.error(t('snack.github.error'))
  }

  loading.value = false

  if (data?.name) {
    snackStore.success(t('snack.github.success'))
  }

  name.value = data?.name
}
</script>