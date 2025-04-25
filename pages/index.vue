<template>
  <div>
    <HeroSection />
    
    <!-- Featured Projects -->
    <section class="py-16 md:py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-gray-50 dark:from-primary-900/10 dark:to-gray-800/50 -z-10"></div>
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-primary-100/50 dark:bg-primary-800/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-100/50 dark:bg-secondary-800/10 rounded-full blur-3xl"></div>
      
      <div class="container-custom relative z-10">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my recent work that showcases my skills and experience."
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <div v-for="(project, index) in featuredProjects" :key="project.id">
            <ProjectCard :project="project" class="shadow-lg dark:shadow-gray-900/20 hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300" />
          </div>
        </div>
        
        <div class="text-center mt-16">
          <NuxtLink to="/projects" class="btn-primary px-8 py-3 text-lg">
            View All Projects
            <Icon name="ph:arrow-right" class="ml-2 w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <!-- Skills -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <SectionHeading 
          title="My Skills" 
          subtitle="I specialize in these areas of expertise to deliver exceptional results."
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard 
            title="Frontend Development" 
            description="Creating responsive, interactive user interfaces with modern frameworks like Vue, React, and Angular."
            icon="ph:code-bold"
          />
          <SkillCard 
            title="UI/UX Design" 
            description="Designing intuitive user experiences with a focus on usability, accessibility, and visual appeal."
            icon="ph:paint-brush-bold"
          />
          <SkillCard 
            title="Backend Development" 
            description="Building robust server-side applications with Node.js, Express, and database integration."
            icon="ph:database-bold"
          />
          <SkillCard 
            title="Mobile Development" 
            description="Developing cross-platform mobile applications using React Native and Flutter."
            icon="ph:device-mobile-bold"
          />
          <SkillCard 
            title="CMS Integration" 
            description="Implementing and customizing content management systems for easy content updates."
            icon="ph:file-text-bold"
          />
          <SkillCard 
            title="Performance Optimization" 
            description="Optimizing website performance for fast loading times and smooth user experiences."
            icon="ph:chart-line-up-bold"
          />
        </div>
      </div>
    </section>
    
    <!-- Latest Blog Posts -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div class="container-custom">
        <SectionHeading 
          title="Latest Articles" 
          subtitle="Thoughts, insights, and guides from my experience in the tech industry."
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="post in latestPosts" :key="post.id" 
               v-motion :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }">
            <BlogPostCard :post="post" />
          </div>
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink to="/blog" class="btn-primary">
            View All Articles
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <!-- Enhanced CTA -->
    <section class="py-16 md:py-24 relative overflow-hidden">
      <div class="container-custom relative z-10">
        <div class="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 dark:from-primary-700 dark:via-primary-600 dark:to-secondary-600 rounded-2xl p-8 md:p-12 shadow-xl dark:shadow-primary-900/30 overflow-hidden relative">
          
          <!-- Decorative Elements -->
          <div class="absolute inset-0 overflow-hidden opacity-20">
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-white/30 rounded-full blur-xl"></div>
            <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-xl"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-white/10 rounded-full blur-3xl"></div>
            
            <!-- Floating Shapes -->
            <div class="absolute top-10 left-10 w-6 h-6 border-2 border-white/40 rounded-md animate-float-rotate"></div>
            <div class="absolute bottom-10 right-10 w-8 h-8 border-2 border-white/40 rounded-full animate-float"></div>
            <div class="absolute top-1/2 right-1/4 w-4 h-4 bg-white/40 rounded-full animate-float-slow"></div>
            <div class="absolute bottom-1/3 left-1/4 w-5 h-5 bg-white/40 rounded-md rotate-45 animate-float-rotate-reverse"></div>
          </div>
          
          <!-- Content -->
          <div class="relative z-10 text-center md:flex md:items-center md:justify-between md:text-left">
            <div class="md:max-w-xl mb-8 md:mb-0">
              <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p class="text-xl text-white/90 max-w-2xl md:pr-4">
                Let's collaborate to bring your ideas to life with creative solutions and exceptional execution.
              </p>
            </div>
            <div class="flex justify-center">
              <NuxtLink to="/contact" class="inline-flex items-center bg-white text-primary-600 font-medium px-8 py-4 rounded-lg hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
                <span class="mr-2">Get in Touch</span>
                <Icon name="ph:arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Background Elements -->
      <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-100/30 dark:bg-primary-900/20 rounded-full blur-3xl"></div>
      <div class="absolute -top-24 -left-24 w-64 h-64 bg-secondary-100/30 dark:bg-secondary-900/20 rounded-full blur-3xl"></div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Home',
  description: 'Portfolio showcasing my professional work and skills in web development and design.'
});

// Sample project data (In a real app, this would come from an API or content source)
const featuredProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    slug: 'ecommerce-platform',
    summary: 'A full-featured online store with product management, cart, and payment processing.',
    image: 'https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg',
    demoUrl: 'https://ecommerce-demo.example.com',
    tags: ['Vue.js', 'Node.js', 'Stripe']
  },
  {
    id: 2,
    title: 'Health & Fitness App',
    slug: 'health-fitness-app',
    summary: 'Mobile application for tracking workouts, nutrition, and personal health metrics.',
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg',
    demoUrl: 'https://fitness-app.example.com',
    tags: ['React Native', 'Firebase', 'UX Design']
  },
  {
    id: 3,
    title: 'Corporate Website Redesign',
    slug: 'corporate-website-redesign',
    summary: 'Complete overhaul of a financial services company website with modern design and CMS.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
    demoUrl: 'https://corporate-redesign.example.com',
    tags: ['Web Design', 'WordPress', 'SEO']
  }
];

// Sample blog post data
const latestPosts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2025',
    slug: 'future-web-development-2025',
    date: '2025-04-15',
    category: 'Web Development',
    excerpt: 'Exploring emerging trends and technologies that will shape the future of web development.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
  },
  {
    id: 2,
    title: 'Designing for Accessibility: Best Practices',
    slug: 'designing-accessibility-best-practices',
    date: '2025-04-10',
    category: 'Design',
    excerpt: 'How to ensure your designs are inclusive and accessible to all users.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg'
  },
  {
    id: 3,
    title: 'Getting Started with Nuxt 3: A Complete Guide',
    slug: 'getting-started-nuxt3-guide',
    date: '2025-04-05',
    category: 'Tutorials',
    excerpt: 'A comprehensive introduction to building modern web applications with Nuxt 3.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
  }
];
</script>