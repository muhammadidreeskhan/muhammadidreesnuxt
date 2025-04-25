<template>
  <div>
    <!-- Projects Hero -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div class="container-custom text-center max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          My <span class="text-primary-600 dark:text-primary-400">Projects</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          A showcase of my work across various industries and technologies. Each project represents unique challenges and solutions.
        </p>
        
        <!-- Categories Filter -->
        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <button 
            @click="activeCategory = 'all'" 
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
            :class="activeCategory === 'all' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'"
          >
            All Projects
          </button>
          <button 
            v-for="category in projectCategories" 
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
    
    <!-- Projects Grid -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
          >
            <ProjectCard :project="project" />
          </div>
        </div>
        
        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="text-center py-16">
          <Icon name="ph:folder-notch-open" class="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
          <h3 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No projects found</h3>
          <p class="text-gray-500 dark:text-gray-400">
            No projects match the selected category. Try selecting a different category.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Contact CTA -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Have a project in mind?</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss how we can work together to bring your ideas to life.
          </p>
          <NuxtLink to="/contact" class="btn-primary">
            Start a Conversation
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

definePageMeta({
  title: 'Projects',
  description: 'Explore my portfolio of web development and design projects across various industries and technologies.'
});

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    slug: 'ecommerce-platform',
    summary: 'A full-featured online store with product management, cart, and payment processing.',
    description: 'Built a complete e-commerce solution for a fashion brand with product catalog, user accounts, shopping cart, and secure checkout. Integrated with Stripe for payments and includes an admin dashboard for inventory management.',
    image: 'https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg',
    tags: ['Vue.js', 'Node.js', 'Stripe'],
    category: 'Web Application',
    client: 'Fashion Boutique',
    completed: '2024'
  },
  {
    id: 2,
    title: 'Health & Fitness App',
    slug: 'health-fitness-app',
    summary: 'Mobile application for tracking workouts, nutrition, and personal health metrics.',
    description: 'Developed a cross-platform mobile app that helps users track their fitness goals, log workouts, monitor nutrition, and visualize progress through interactive charts and reports.',
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg',
    tags: ['React Native', 'Firebase', 'UX Design'],
    category: 'Mobile App',
    client: 'FitLife Inc.',
    completed: '2023'
  },
  {
    id: 3,
    title: 'Corporate Website Redesign',
    slug: 'corporate-website-redesign',
    summary: 'Complete overhaul of a financial services company website with modern design and CMS.',
    description: 'Redesigned a dated corporate website for a financial services firm, focusing on improved UX, accessibility, and content management. Implemented a custom CMS solution for easy content updates.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
    tags: ['Web Design', 'WordPress', 'SEO'],
    category: 'Website',
    client: 'Financial Group',
    completed: '2024'
  },
  {
    id: 4,
    title: 'Real Estate Listing Platform',
    slug: 'real-estate-platform',
    summary: 'Property search and listing platform with map integration and agent dashboard.',
    description: 'Created a comprehensive real estate platform that allows users to search for properties by location, filters, and map view. Includes agent profiles, property management dashboard, and lead generation tools.',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg',
    tags: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    category: 'Web Application',
    client: 'HomeFind Realty',
    completed: '2023'
  },
  {
    id: 5,
    title: 'Restaurant Ordering System',
    slug: 'restaurant-ordering-system',
    summary: 'Digital menu and ordering system for a restaurant chain with kitchen display integration.',
    description: 'Developed a digital ordering system that allows customers to browse menus, place orders, and make payments from their phones. Includes admin dashboard for menu management and kitchen display system for order fulfillment.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    tags: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
    category: 'Web Application',
    client: 'Gourmet Dining Group',
    completed: '2024'
  },
  {
    id: 6,
    title: 'Travel Blog & Booking Platform',
    slug: 'travel-blog-booking',
    summary: 'Travel content platform with integrated booking functionality for tours and accommodations.',
    description: 'Built a content-rich travel blog with seamless integration of booking capabilities for tours, activities, and accommodations. Features user reviews, destination guides, and personalized recommendations.',
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg',
    tags: ['Next.js', 'Strapi CMS', 'GraphQL', 'Stripe'],
    category: 'Website',
    client: 'Wanderlust Adventures',
    completed: '2023'
  },
  {
    id: 7,
    title: 'Task Management App',
    slug: 'task-management-app',
    summary: 'Collaborative task and project management tool with team features and reporting.',
    description: 'Designed and developed a productivity app that helps teams organize tasks, track progress, and collaborate on projects. Includes Kanban boards, time tracking, file sharing, and analytics dashboard.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    tags: ['React', 'Redux', 'Firebase', 'Material UI'],
    category: 'Web Application',
    client: 'ProductiveTeam',
    completed: '2024'
  },
  {
    id: 8,
    title: 'Educational Learning Platform',
    slug: 'educational-platform',
    summary: 'Online learning platform with course creation, enrollment, and progress tracking.',
    description: 'Created a comprehensive learning management system for an educational institution with course creation tools, student enrollment, quizzes, assignments, and progress tracking. Includes video content delivery and discussion forums.',
    image: 'https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg',
    tags: ['Nuxt.js', 'Laravel', 'MySQL', 'WebRTC'],
    category: 'Web Application',
    client: 'EduTech Academy',
    completed: '2023'
  },
  {
    id: 9,
    title: 'Personal Finance Dashboard',
    slug: 'finance-dashboard',
    summary: 'Financial management tool with budget tracking, expense categorization, and insights.',
    description: 'Developed a personal finance application that helps users track income, expenses, and savings goals. Features include budget planning, transaction categorization, financial forecasting, and customizable reports.',
    image: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg',
    tags: ['React', 'D3.js', 'Node.js', 'Plaid API'],
    category: 'Web Application',
    client: 'SmartBudget',
    completed: '2024'
  }
];

// Extract unique categories
const projectCategories = [...new Set(projects.map(project => project.category))];

// Active category filter
const activeCategory = ref('all');

// Filtered projects based on active category
const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === activeCategory.value);
});
</script>