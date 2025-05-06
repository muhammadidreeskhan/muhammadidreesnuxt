<template>
  <div class="card group h-full flex flex-col hover:shadow-lg transition-all duration-300">
    <div class="relative overflow-hidden aspect-video">
      <img :src="post.image" :alt="post.title" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
      <div class="absolute top-4 left-4" v-if="post.category">
        <span class="inline-block px-3 py-1 text-xs bg-primary-600 text-white rounded-full">
          {{ post.category }}
        </span>
      </div>
    </div>
    
    <div class="p-6 flex-grow flex flex-col">
      <div class="text-sm text-gray-500 dark:text-gray-400 mb-2" v-if="post.date">
        {{ formatDate(post.date) }}
      </div>
      <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{{ getExcerpt }}</p>
      
      <NuxtLink :to="postLink" class="mt-auto text-primary-600 dark:text-primary-400 font-medium inline-flex items-center hover:underline">
        Read More <Icon name="ph:arrow-right" class="ml-1 w-4 h-4" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

// Computed property to handle different post structures
const getExcerpt = computed(() => {
  const { post } = props;
  return post.excerpt || post.description || '';
});

// Computed property to handle different link structures
const postLink = computed(() => {
  const { post } = props;
  if (post._path) return post._path;
  return `/blog/${post.slug}`;
});

const formatDate = (dateString) => {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (e) {
    console.error('Error formatting date:', e);
    return dateString;
  }
};
</script>