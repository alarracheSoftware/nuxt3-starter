<template>
  <section>
    <div class="text-center ma-2">
    <p> {{ t("page1")}} </p>
      <v-btn class="my-4" :loading="loading" @click="openDialog">
        Open yes/no dialog
      </v-btn>
    </div>
  </section>
</template>

<script setup>

const { t } = useI18n()

import { useDialogStore } from '@/store/dialog'
import { useSnacksStore } from '@/store/snacks'

const { openConfirm } = useDialogStore();
const snackStore = useSnacksStore()

function openDialog(items) {
  openConfirm({
    title: t('dialog.title'),
    text: t('dialog.delete'),
    agreeText: t('yes'),
    disagreeText: t('no'),
    onAgree: async () => {
      snackStore.info(t('snack.dialog.yes'));
    },
    onDisagree: async () => {
      snackStore.info(t('snack.dialog.no'));
    },
  });
}

</script>