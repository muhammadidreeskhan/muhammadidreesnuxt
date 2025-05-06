<template>
  <div>
    <!-- Projects Hero Section -->
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
              My <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 dark:from-primary-400 dark:via-primary-300 dark:to-secondary-400">Projects</span>
            </h1>
          </div>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore a selection of my recent work across web development, mobile applications, and digital experiences.
          </p>
          
          <!-- Project Categories Filter -->
          <div class="flex flex-wrap justify-center gap-3 mb-8">
            <button 
              v-for="category in ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design']" 
              :key="category"
              @click="filterCategory = category === 'All' ? null : category"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              :class="[
                filterCategory === (category === 'All' ? null : category)
                  ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              ]"
            >
              {{ category }}
            </button>
          </div>
        </div>
        
        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(project, index) in filteredProjects" 
            :key="project.id"
            v-motion 
            :initial="{ opacity: 0, y: 50 }" 
            :enter="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
            class="group"
          >
            <div class="bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-xl dark:shadow-gray-900/20 overflow-hidden border border-gray-100 dark:border-gray-700/50 h-full transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
              <!-- Project Image -->
              <div class="relative aspect-video overflow-hidden">
                <img 
                  :src="project.image" 
                  :alt="project.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <!-- Project Links (visible on hover) -->
                <div class="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    v-if="project.liveUrl" 
                    :href="project.liveUrl" 
                    target="_blank" 
                    class="h-10 w-10 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg flex items-center justify-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                    title="View Live Site"
                  >
                    <Icon name="ph:globe" class="w-5 h-5" />
                  </a>
                  <a 
                    v-if="project.repoUrl" 
                    :href="project.repoUrl" 
                    target="_blank" 
                    class="h-10 w-10 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg flex items-center justify-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                    title="View Source Code"
                  >
                    <Icon name="ph:github-logo" class="w-5 h-5" />
                  </a>
                </div>
                
                <!-- Category Badge -->
                <div class="absolute top-4 left-4">
                  <span 
                    class="px-3 py-1 rounded-full text-xs font-medium"
                    :class="[
                      project.category === 'Web Development' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300' :
                      project.category === 'Mobile Apps' ? 'bg-secondary-100 text-secondary-700 dark:bg-secondary-900/40 dark:text-secondary-300' :
                      'bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-300'
                    ]"
                  >
                    {{ project.category }}
                  </span>
                </div>
              </div>
              
              <!-- Project Content -->
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ project.title }}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
                
                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2 mb-6">
                  <span 
                    v-for="tech in project.technologies" 
                    :key="tech"
                    class="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 rounded text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    {{ tech }}
                  </span>
                </div>
                
                <!-- View Details Button -->
                <NuxtLink 
                  :to="`/projects/${project.slug}`" 
                  class="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  View Details
                  <Icon name="ph:arrow-right" class="ml-1 w-4 h-4" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Pagination (if needed) -->
        <div class="flex justify-center mt-16">
          <div class="flex space-x-2">
            <button 
              v-for="page in 3" 
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
    
    <!-- CTA Section -->
    <section class="py-20 md:py-32 relative overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/70 dark:to-gray-900/80"></div>
        <div class="absolute -top-24 -left-24 w-[30rem] h-[30rem] bg-gradient-to-br from-primary-100/20 via-accent-100/10 to-transparent dark:from-primary-900/10 dark:via-accent-900/5 dark:to-transparent rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      <div class="container-custom">
        <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl dark:shadow-gray-900/30 p-8 md:p-12 border border-gray-100 dark:border-gray-700/50 max-w-4xl mx-auto">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div class="md:max-w-xl">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Have a project in mind?</h2>
              <p class="text-xl text-gray-600 dark:text-gray-300">
                Let's collaborate and bring your vision to life. I'm currently available for freelance projects and consulting work.
              </p>
            </div>
            
            <div class="flex-shrink-0">
              <NuxtLink to="/contact" class="inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 hover:from-primary-700 hover:to-primary-600 dark:hover:from-primary-600 dark:hover:to-primary-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium">
                <Icon name="ph:chat-circle-text" class="mr-2 w-5 h-5" />
                Get in Touch
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

definePageMeta({
  title: 'Projects',
  description: 'Explore my portfolio of web development, mobile applications, and UI/UX design projects.'
});

// Sample projects data
const projects = ref([
  {
    id: 'ecommerce-platform',
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Web Development',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe API'],
    liveUrl: 'https://example.com/ecommerce',
    repoUrl: 'https://github.com/example/ecommerce',
    featured: true
  },
  {
    id: 'fitness-tracker-app',
    slug: 'fitness-tracker-app',
    title: 'Fitness Tracker App',
    description: 'Mobile application for tracking workouts, nutrition, and fitness goals with personalized recommendations.',
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Mobile Apps',
    technologies: ['React Native', 'Firebase', 'Redux', 'Health API'],
    liveUrl: 'https://example.com/fitness',
    repoUrl: 'https://github.com/example/fitness-app',
    featured: true
  },
  {
    id: 'banking-dashboard',
    slug: 'banking-dashboard',
    title: 'Banking Dashboard UI',
    description: 'Modern dashboard interface for a banking application with account management and transaction visualization.',
    image: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'UI/UX Design',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
    liveUrl: 'https://example.com/banking-ui',
    repoUrl: null,
    featured: false
  },
  {
    id: 'real-estate-platform',
    slug: 'real-estate-platform',
    title: 'Real Estate Platform',
    description: 'Web platform for property listings with advanced search, virtual tours, and agent communication.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Web Development',
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Google Maps API'],
    liveUrl: 'https://example.com/realestate',
    repoUrl: 'https://github.com/example/realestate',
    featured: true
  },
  {
    id: 'travel-companion-app',
    slug: 'travel-companion-app',
    title: 'Travel Companion App',
    description: 'Mobile app for travelers with itinerary planning, local recommendations, and offline maps.',
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Mobile Apps',
    technologies: ['Flutter', 'Firebase', 'Google Places API', 'MapBox'],
    liveUrl: 'https://example.com/travel',
    repoUrl: 'https://github.com/example/travel-app',
    featured: false
  },
  {
    id: 'music-streaming-ui',
    slug: 'music-streaming-ui',
    title: 'Music Streaming UI',
    description: 'User interface design for a music streaming service with focus on discovery and personalization.',
    image: 'https://images.pexels.com/photos/6320/smartphone-vintage-technology-music.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'UI/UX Design',
    technologies: ['Figma', 'Adobe Illustrator', 'Prototyping', 'User Testing'],
    liveUrl: 'https://example.com/music-ui',
    repoUrl: null,
    featured: false
  }
]);

// Filter and pagination
const filterCategory = ref(null);
const currentPage = ref(1);
const itemsPerPage = 6;

// Computed properties
const filteredProjects = computed(() => {
  let result = projects.value;
  
  // Apply category filter
  if (filterCategory.value) {
    result = result.filter(project => project.category === filterCategory.value);
  }
  
  // Apply pagination
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  return result.slice(startIndex, endIndex);
});
</script>
