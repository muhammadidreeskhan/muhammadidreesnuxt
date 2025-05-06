<template>
  <div>
    <!-- Blog Hero Section -->
    <section class="py-20 md:py-32 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/80 dark:to-gray-900/90"></div>
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-300 dark:via-primary-500 to-transparent opacity-70"></div>
        <div class="absolute -top-24 -right-24 w-[30rem] h-[30rem] bg-gradient-to-br from-primary-100/30 via-accent-100/20 to-transparent dark:from-primary-900/20 dark:via-accent-900/10 dark:to-transparent rounded-full opacity-70 blur-3xl"></div>
        <div class="absolute -bottom-24 -left-24 w-[30rem] h-[30rem] bg-gradient-to-tr from-secondary-100/30 via-primary-100/20 to-transparent dark:from-secondary-900/20 dark:via-primary-900/10 dark:to-transparent rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <div class="inline-block relative">
            <div class="absolute -left-6 -top-6 w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full blur-xl opacity-70"></div>
            <h1 class="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight relative">
              The <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 dark:from-primary-400 dark:via-primary-300 dark:to-secondary-400">Blog</span>
            </h1>
          </div>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Thoughts, insights, and guides on web development, design, and technology.
          </p>
          
          <!-- Blog Categories Filter -->
          <div class="flex flex-wrap justify-center gap-3 mb-8">
            <button 
              key="all"
              @click="filterCategory = null"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              :class="[
                filterCategory === null
                  ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              ]"
            >
              All
            </button>
            <button 
              v-for="category in categories" 
              :key="category"
              @click="filterCategory = category"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              :class="[
                filterCategory === category
                  ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              ]"
            >
              {{ category }}
            </button>
          </div>
          
          <!-- Search Bar -->
          <div class="max-w-md mx-auto mt-8">
            <div class="relative">
              <input 
                type="text" 
                v-model="searchQuery"
                placeholder="Search articles..." 
                class="w-full px-5 py-3 pl-12 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
              />
              <div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Icon name="ph:magnifying-glass" class="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        
        <!-- Featured Article -->
        <div v-if="featuredArticle" class="mb-16">
          <div 
            class="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-900/20 group"
            v-motion 
            :initial="{ opacity: 0, y: 50 }" 
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          >
            <div class="relative aspect-[21/9] overflow-hidden">
              <img 
                :src="featuredArticle.image" 
                :alt="featuredArticle.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <!-- Content overlay -->
              <div class="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <div>
                  <span class="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-500/80 text-white mb-4">
                    Featured
                  </span>
                  <h2 class="text-2xl md:text-4xl font-bold text-white mb-3">{{ featuredArticle.title }}</h2>
                  <p class="text-gray-200 mb-6 max-w-3xl">{{ featuredArticle.description }}</p>
                  
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <img 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                        alt="Muhammad Idrees"
                        class="w-10 h-10 rounded-full object-cover mr-3 border-2 border-white"
                      />
                      <div>
                        <div class="text-white font-medium">Muhammad Idrees</div>
                        <div class="text-gray-300 text-sm">{{ formatDate(featuredArticle.date) }}</div>
                      </div>
                    </div>
                    
                    <NuxtLink 
                      :to="`/blog/${featuredArticle.slug}`"
                      class="inline-flex items-center bg-white/90 dark:bg-gray-800/90 text-primary-600 dark:text-primary-400 px-5 py-2 rounded-lg shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300 font-medium"
                    >
                      Read Article
                      <Icon name="ph:arrow-right" class="ml-2 w-4 h-4" />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Blog Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(article, index) in filteredArticles" 
            :key="article.id"
            v-motion 
            :initial="{ opacity: 0, y: 50 }" 
            :enter="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
            class="group"
          >
            <div class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-xl dark:shadow-gray-900/20 overflow-hidden border border-gray-100 dark:border-gray-700/50 h-full transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
              <!-- Article Image -->
              <div class="relative aspect-video overflow-hidden">
                <img 
                  :src="article.image" 
                  :alt="article.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <!-- Category Badge -->
                <div class="absolute top-4 left-4">
                  <span 
                    class="px-3 py-1 rounded-full text-xs font-medium"
                    :class="[
                      article.category === 'Development' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300' :
                      article.category === 'Design' ? 'bg-secondary-100 text-secondary-700 dark:bg-secondary-900/40 dark:text-secondary-300' :
                      article.category === 'Technology' ? 'bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-300' :
                      'bg-gray-100 text-gray-700 dark:bg-gray-700/40 dark:text-gray-300'
                    ]"
                  >
                    {{ article.category }}
                  </span>
                </div>
              </div>
              
              <!-- Article Content -->
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ article.title }}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{{ article.description }}</p>
                
                <!-- Author and Date -->
                <div class="flex items-center justify-between mt-6">
                  <div class="flex items-center">
                    <img 
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                      alt="Muhammad Idrees"
                      class="w-8 h-8 rounded-full object-cover mr-2"
                    />
                    <div class="text-sm text-gray-600 dark:text-gray-400">{{ formatDate(article.date) }}</div>
                  </div>
                  
                  <NuxtLink 
                    :to="`/blog/${article.slug}`"
                    class="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300 text-sm"
                  >
                    Read More
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Pagination -->
        <div class="flex justify-center mt-16">
          <div class="flex space-x-2">
            <button 
              v-for="page in totalPages" 
              :key="page"
              class="h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300"
              :class="currentPage === page ? 'bg-primary-600 dark:bg-primary-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'"
              @click="currentPage = page"
            >
              {{ page }}
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Newsletter Section -->
    <section class="py-20 md:py-32 relative overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/70 dark:to-gray-900/80"></div>
        <div class="absolute -top-24 -left-24 w-[30rem] h-[30rem] bg-gradient-to-br from-primary-100/20 via-accent-100/10 to-transparent dark:from-primary-900/10 dark:via-accent-900/5 dark:to-transparent rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      <div class="container-custom">
        <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl dark:shadow-gray-900/30 p-8 md:p-12 border border-gray-100 dark:border-gray-700/50 max-w-4xl mx-auto">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Subscribe to My Newsletter</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get the latest articles, tutorials, and updates delivered straight to your inbox.
            </p>
          </div>
          
          <form @submit.prevent="subscribeToNewsletter" class="max-w-xl mx-auto">
            <div class="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                v-model="newsletterEmail"
                placeholder="Enter your email address" 
                class="flex-1 px-5 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
                required
              />
              <button 
                type="submit"
                class="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 hover:from-primary-700 hover:to-primary-600 dark:hover:from-primary-600 dark:hover:to-primary-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium"
              >
                Subscribe
              </button>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center">
              I respect your privacy. Unsubscribe at any time.
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
  description: 'Thoughts, insights, and guides on web development, design, and technology.'
});

// Fetch all blog posts from Nuxt Content
const { data: contentArticles } = await useAsyncData('content-blog-posts', () => {
  return queryContent('blog').sort({ date: -1 }).find();
});

// Import blog posts from JSON
import blogPostsJson from '~/content/blog-posts.json';

// Combine both sources of blog posts
const allArticles = computed(() => {
  const contentPosts = contentArticles.value || [];
  
  // Convert JSON posts to the same format as content posts
  const jsonPosts = blogPostsJson.map(post => ({
    ...post,
    _path: `/blog/${post.slug}`,
    slug: post.slug
  }));
  
  return [...contentPosts, ...jsonPosts];
});

// Filter and search
const filterCategory = ref(null);
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = 6;
const newsletterEmail = ref('');

// Get featured article
const featuredArticle = computed(() => {
  if (!allArticles.value) return null;
  return allArticles.value.find(article => article.featured === true);
});

// Get all categories
const categories = computed(() => {
  if (!allArticles.value) return [];
  return [...new Set(allArticles.value.map(article => article.category).filter(Boolean))];
});

// Filter and search articles
const filteredArticles = computed(() => {
  if (!allArticles.value) return [];
  
  // Remove featured article from regular list
  let result = allArticles.value.filter(article => !article.featured);
  
  // Apply category filter
  if (filterCategory.value) {
    result = result.filter(article => article.category === filterCategory.value);
  }
  
  // Apply search filter
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(article => 
      article.title?.toLowerCase().includes(query) || 
      (article.description || article.excerpt || '').toLowerCase().includes(query) ||
      (article.category || '').toLowerCase().includes(query)
    );
  }
  
  // Apply pagination
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  return result.slice(startIndex, endIndex);
});

// Calculate total pages
const totalPages = computed(() => {
  if (!allArticles.value) return 1;
  
  let filteredCount = allArticles.value.filter(article => !article.featured).length;
  
  if (filterCategory.value) {
    filteredCount = allArticles.value.filter(
      article => !article.featured && article.category === filterCategory.value
    ).length;
  }
  
  return Math.ceil(filteredCount / itemsPerPage);
});

// Format date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Newsletter subscription
const subscribeToNewsletter = () => {
  // This would normally connect to a backend service
  alert(`Thank you for subscribing with ${newsletterEmail.value}!`);
  newsletterEmail.value = '';
};
</script>
