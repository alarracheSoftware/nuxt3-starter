<template>
  <v-app-bar app dark fixed clipped-left color="primary">
    <v-app-bar-nav-icon dark @click.stop="updateVisibleMenu($event)" />
    <v-toolbar-title> {{ title }} </v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script setup>

const runtimeConfig = useRuntimeConfig()

const title = computed(() => {
  return `App ${runtimeConfig.public.environment}`
});

const emit = defineEmits({
  menuUpdate: undefined
})
  
async function updateVisibleMenu() {
  emit('menuUpdate');
};


</script>
