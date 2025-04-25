<template>
  <div class="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md dark:hover:shadow-gray-800/30 transition-all duration-300">
    <div class="mb-4 text-primary-600 dark:text-primary-400">
      <Icon :name="icon" class="w-10 h-10" />
    </div>
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-600 dark:text-gray-400">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
});
</script>