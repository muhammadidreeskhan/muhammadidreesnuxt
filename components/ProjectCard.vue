<template>
  <div class="card group h-full flex flex-col rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
    <div class="relative overflow-hidden aspect-video">
      <img 
        :src="project.image" 
        :alt="project.title" 
        class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
      />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div class="flex gap-3">
            <NuxtLink 
              :to="`/projects/${project.slug}`" 
              class="btn-primary py-2 px-4 flex items-center"
            >
              <Icon name="ph:magnifying-glass" class="mr-1 w-4 h-4" />
              View Details
            </NuxtLink>
            <a 
              v-if="project.demoUrl" 
              :href="project.demoUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-outline py-2 px-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 flex items-center"
            >
              <Icon name="ph:globe" class="mr-1 w-4 h-4" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
      <!-- Category Badge -->
      <div class="absolute top-4 right-4">
        <span class="px-3 py-1 bg-primary-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
          {{ project.tags[0] }}
        </span>
      </div>
    </div>
    
    <div class="p-6 flex-grow flex flex-col">
      <h3 class="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
        {{ project.title }}
      </h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
        {{ project.summary }}
      </p>
      
      <div class="flex flex-wrap gap-2 mt-auto">
        <span 
          v-for="tag in project.tags.slice(1)" 
          :key="tag" 
          class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-300"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>