<template>
  <section>
    <div class="text-center ma-2">
    <p> {{ t("page")}} </p>
      <v-btn class="my-4" :loading="loading" @click="openDialog">
        {{ t("confirmDialog")}}
      </v-btn>
    </div>
  </section>
</template>

<script setup>

const { t } = useI18n();

const { openConfirm } = useDialogStore();
const snackStore = useSnacksStore();

const loading = ref(false);

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