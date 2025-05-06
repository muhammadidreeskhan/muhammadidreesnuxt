<template>
  <div>
    <!-- Blog Hero -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div class="container-custom text-center max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          <span class="text-primary-600 dark:text-primary-400">Blog</span> & Articles
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Thoughts, insights, and guides from my experience in the tech industry.
        </p>
        
        <!-- Categories Filter -->
        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <button 
            @click="activeCategory = 'all'" 
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
            :class="activeCategory === 'all' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'"
          >
            All Posts
          </button>
          <button 
            v-for="category in blogCategories" 
            :key="category" 
            @click="activeCategory = category"
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
            :class="activeCategory === category ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>
    
    <!-- Blog Posts Grid -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="post in filteredPosts" 
            :key="post.id"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
          >
            <BlogPostCard :post="post" />
          </div>
        </div>
        
        <!-- Empty State -->
        <div v-if="filteredPosts.length === 0" class="text-center py-16">
          <Icon name="ph:file-text" class="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
          <h3 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No articles found</h3>
          <p class="text-gray-500 dark:text-gray-400">
            No articles match the selected category. Try selecting a different category.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Newsletter -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Subscribe to my newsletter</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Get notified about new articles and projects straight to your inbox.
          </p>
          
          <form @submit.prevent="subscribeToNewsletter" class="max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row gap-3">
              <input 
                v-model="newsletterEmail" 
                type="email" 
                required
                placeholder="Your email address"
                class="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
              />
              <button 
                type="submit" 
                class="btn-primary whitespace-nowrap"
                :disabled="isSubscribing"
              >
                <span v-if="isSubscribing" class="mr-2">
                  <Icon name="ph:spinner-gap" class="w-5 h-5 animate-spin" />
                </span>
                Subscribe
              </button>
            </div>
            <p v-if="subscriptionMessage" class="mt-3 text-sm" :class="subscriptionSuccess ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'">
              {{ subscriptionMessage }}
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

definePageMeta({
  title: 'Blog',
  description: 'Read articles about web development, design, and tech insights from my experiences in the industry.'
});

// Fetch all blog posts from Nuxt Content
const { data: contentArticles } = await useAsyncData('content-blog-posts', () => {
  return queryContent('blog').sort({ date: -1 }).find();
});

// Import blog posts from JSON
import blogPostsJson from '~/content/blog-posts.json';
// Combine both sources of blog posts
const blogPosts = computed(() => {
  const contentPosts = contentArticles.value || [];
  
  // Convert JSON posts to the same format as content posts
  const jsonPosts = blogPostsJson.map(post => ({
    ...post,
    _path: `/blog/${post.slug}`,
    slug: post.slug
  }));
  
  return [...contentPosts, ...jsonPosts];
});

// Extract unique categories
const blogCategories = computed(() => {
  return [...new Set(blogPosts.value.map(post => post.category).filter(Boolean))];
});

// Active category filter
const activeCategory = ref('all');

// Filtered posts based on active category
const filteredPosts = computed(() => {
  if (activeCategory.value === 'all') {
    return blogPosts.value;
  }
  return blogPosts.value.filter(post => post.category === activeCategory.value);
});

// Newsletter subscription
const newsletterEmail = ref('');
const isSubscribing = ref(false);
const subscriptionMessage = ref('');
const subscriptionSuccess = ref(false);

const subscribeToNewsletter = async () => {
  isSubscribing.value = true;
  
  try {
    // In a real app, this would call an API endpoint
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    subscriptionSuccess.value = true;
    subscriptionMessage.value = 'Thanks for subscribing! Check your email for confirmation.';
    newsletterEmail.value = '';
  } catch (error) {
    subscriptionSuccess.value = false;
    subscriptionMessage.value = 'Something went wrong. Please try again.';
  } finally {
    isSubscribing.value = false;
  }
};
</script>