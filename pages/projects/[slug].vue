<template>
  <div v-if="project">
    <!-- Project Hero -->
    <section class="relative">
      <!-- Hero Image -->
      <div class="w-full h-[40vh] md:h-[60vh] overflow-hidden relative">
        <div class="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/40 z-10"></div>
        <img 
          :src="project.image" 
          :alt="project.title"
          class="w-full h-full object-cover object-center"
        />
        <div class="absolute inset-0 flex items-center z-20">
          <div class="container-custom">
            <div class="max-w-3xl">
              <span class="inline-block px-3 py-1 bg-primary-600 text-white text-sm rounded-full mb-4">
                {{ project.category }}
              </span>
              <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ project.title }}</h1>
              <p class="text-xl text-white/90 mb-6">{{ project.summary }}</p>
              
              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in project.tags" :key="tag" class="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Project Details -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Overview</h2>
            <div class="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p>{{ project.description }}</p>
              
              <!-- Placeholder for more detailed content -->
              <p>
                This project presented several unique challenges that required innovative solutions. The client needed a
                system that was both powerful enough to handle complex operations while remaining intuitive for users
                of various technical backgrounds.
              </p>
              
              <h3>Key Features</h3>
              <ul>
                <li>Responsive design optimized for all device sizes</li>
                <li>User authentication and personalized dashboards</li>
                <li>Real-time data synchronization across devices</li>
                <li>Advanced search and filtering capabilities</li>
                <li>Integration with third-party services and APIs</li>
              </ul>
              
              <h3>Development Process</h3>
              <p>
                The development followed an agile methodology with regular client feedback and iterations. We began with 
                thorough research and planning, followed by wireframing and prototyping to establish the core user flows.
              </p>
              
              <p>
                After approval of the design direction, development proceeded in sprints, with regular reviews and testing.
                The project was completed on time and exceeded the client's expectations for functionality and user experience.
              </p>
            </div>
            
            <!-- Project Images -->
            <div class="space-y-6 mb-12">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Gallery</h2>
              <!-- These are placeholder images - in a real application, these would be actual project screenshots -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg" alt="Project screenshot" class="rounded-lg shadow-md w-full" />
                <img src="https://images.pexels.com/photos/6633867/pexels-photo-6633867.jpeg" alt="Project screenshot" class="rounded-lg shadow-md w-full" />
              </div>
              <img src="https://images.pexels.com/photos/8367221/pexels-photo-8367221.jpeg" alt="Project screenshot" class="rounded-lg shadow-md w-full" />
            </div>
          </div>
          
          <!-- Sidebar -->
          <div>
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-8">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Details</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">Client</h4>
                  <p class="text-gray-900 dark:text-white">{{ project.client }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">Completed</h4>
                  <p class="text-gray-900 dark:text-white">{{ project.completed }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">Category</h4>
                  <p class="text-gray-900 dark:text-white">{{ project.category }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">Technologies</h4>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span v-for="tag in project.tags" :key="tag" class="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-300">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- CTA -->
            <div class="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg shadow-sm">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Interested in a similar project?</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Let's discuss how I can help bring your vision to life with a tailored solution for your needs.
              </p>
              <NuxtLink to="/contact" class="btn-primary w-full flex justify-center">
                Get in Touch
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- More Projects -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div class="container-custom">
        <SectionHeading 
          title="More Projects" 
          subtitle="Explore other work from my portfolio."
        />
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="relatedProject in relatedProjects" :key="relatedProject.id">
            <ProjectCard :project="relatedProject" />
          </div>
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink to="/projects" class="btn-primary">
            View All Projects
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="py-32 text-center">
    <div class="container-custom">
      <Icon name="ph:warning-circle" class="w-16 h-16 text-yellow-500 mx-auto mb-4" />
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
        The project you are looking for does not exist or has been removed.
      </p>
      <NuxtLink to="/projects" class="btn-primary">
        Back to Projects
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

// In a real app, this would fetch from an API or content management system
// For now, we're using sample data directly in the component

// Sample projects data
const allProjects = [
  {
    id: 'ecommerce-platform',
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    summary: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing. Built a complete e-commerce solution for a fashion brand with product catalog, user accounts, shopping cart, and secure checkout. Integrated with Stripe for payments and includes an admin dashboard for inventory management.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe API'],
    category: 'Web Development',
    client: 'Fashion Boutique',
    completed: '2024'
  },
  {
    id: 'fitness-tracker-app',
    slug: 'fitness-tracker-app',
    title: 'Fitness Tracker App',
    summary: 'Mobile application for tracking workouts, nutrition, and fitness goals with personalized recommendations.',
    description: 'Mobile application for tracking workouts, nutrition, and fitness goals with personalized recommendations. Developed a cross-platform mobile app that helps users track their fitness goals, log workouts, monitor nutrition, and visualize progress through interactive charts and reports.',
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React Native', 'Firebase', 'Redux', 'Health API'],
    category: 'Mobile Apps',
    client: 'FitLife Inc.',
    completed: '2023'
  },
  {
    id: 'banking-dashboard',
    slug: 'banking-dashboard',
    title: 'Banking Dashboard UI',
    summary: 'Modern dashboard interface for a banking application with account management and transaction visualization.',
    description: 'Modern dashboard interface for a banking application with account management and transaction visualization. Redesigned a dated banking interface with a focus on improved UX, accessibility, and data visualization. Implemented a custom dashboard for easy financial management.',
    image: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
    category: 'UI/UX Design',
    client: 'Financial Group',
    completed: '2024'
  },
  {
    id: 'real-estate-platform',
    slug: 'real-estate-platform',
    title: 'Real Estate Platform',
    summary: 'Web platform for property listings with advanced search, virtual tours, and agent communication.',
    description: 'Web platform for property listings with advanced search, virtual tours, and agent communication. Created a comprehensive real estate platform that allows users to search for properties by location, filters, and map view. Includes agent profiles, property management dashboard, and lead generation tools.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'Google Maps API'],
    category: 'Web Development',
    client: 'HomeFind Realty',
    completed: '2023'
  },
  {
    id: 'travel-companion-app',
    slug: 'travel-companion-app',
    title: 'Travel Companion App',
    summary: 'Mobile app for travelers with itinerary planning, local recommendations, and offline maps.',
    description: 'Mobile app for travelers with itinerary planning, local recommendations, and offline maps. Developed a mobile application that helps travelers plan their trips, discover local attractions, and navigate without internet connection.',
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Flutter', 'Firebase', 'Google Places API', 'MapBox'],
    category: 'Mobile Apps',
    client: 'TravelEase',
    completed: '2023'
  },
  {
    id: 'music-streaming-ui',
    slug: 'music-streaming-ui',
    title: 'Music Streaming UI',
    summary: 'User interface design for a music streaming service with focus on discovery and personalization.',
    description: 'User interface design for a music streaming service with focus on discovery and personalization. Created a modern and intuitive UI for a music streaming platform that emphasizes personalized recommendations and easy content discovery.',
    image: 'https://images.pexels.com/photos/6320/smartphone-vintage-technology-music.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Figma', 'Adobe Illustrator', 'Prototyping', 'User Testing'],
    category: 'UI/UX Design',
    client: 'MusicStream Inc.',
    completed: '2024'
  }
];

// Find the current project based on slug
const project = computed(() => {
  // Remove debug logs in production
  // console.log('Current slug:', slug);
  const found = allProjects.find(p => p.slug === slug);
  // console.log('Found project:', found ? found.title : 'Not found');
  return found;
});

// Get related projects (excluding current)
const relatedProjects = computed(() => {
  if (!project.value) return [];
  
  // Try to find projects in the same category first
  const sameCategoryProjects = allProjects.filter(p => 
    p.id !== project.value.id && p.category === project.value.category
  );
  
  // If we have enough in the same category, use those
  if (sameCategoryProjects.length >= 3) {
    return sameCategoryProjects.slice(0, 3);
  }
  
  // Otherwise, get other projects to fill up to 3
  const otherProjects = allProjects.filter(p => 
    p.id !== project.value.id && p.category !== project.value.category
  );
  
  return [...sameCategoryProjects, ...otherProjects].slice(0, 3);
});

// Set meta tags for the project
useSeoMeta({
  title: project.value ? `${project.value.title} | Project Details` : 'Project Not Found',
  description: project.value ? project.value.summary : 'Project details page'
});
</script>