<template>
  <div class="text-center mb-12 md:mb-16">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
      {{ title }}
      <span class="absolute -bottom-3 left-0 right-0 h-1 bg-primary-500 dark:bg-primary-400 rounded-full"></span>
    </h2>
    <p v-if="subtitle" class="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
});
</script>