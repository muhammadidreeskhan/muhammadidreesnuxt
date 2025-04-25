<template>
  <section class="relative min-h-[90vh] flex items-center py-20 md:py-32 overflow-hidden">
    <div class="container-custom relative z-10">
      <div class="max-w-4xl">
        <div v-motion 
             :initial="{ opacity: 0, y: 50 }" 
             :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
             class="space-y-6">
          <span class="inline-block px-4 py-2 rounded-full bg-accent-200 dark:bg-primary-700/30 text-primary-500 dark:text-secondary-300 text-sm font-medium">
            Available for Work
          </span>
          
          <h1 class="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-gray-900 dark:text-white leading-tight">
            I build <span class="text-primary-500 dark:text-secondary-300">modern</span> web experiences
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Creative developer focused on crafting beautiful, user-centered digital experiences with modern technologies.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <NuxtLink to="/projects" class="btn-primary">
              View My Work
              <Icon name="ph:arrow-right" class="ml-2 w-5 h-5" />
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-outline">
              Get In Touch
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Enhanced Animated Background -->
    <div class="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <!-- Main gradient blobs -->
      <div class="absolute -top-1/4 -right-1/4 w-[80%] h-[80%] rounded-full bg-gradient-to-b from-primary-500/30 via-secondary-400/20 to-transparent dark:from-primary-600/30 dark:via-secondary-400/20 blur-3xl animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-1/4 -left-1/4 w-[80%] h-[80%] rounded-full bg-gradient-to-t from-secondary-400/30 via-accent-200/20 to-transparent dark:from-secondary-400/20 dark:via-primary-500/20 blur-3xl animate-blob animation-delay-4000"></div>
      <div class="absolute top-1/3 left-1/3 w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-accent-200/20 to-transparent dark:from-accent-200/10 blur-3xl animate-blob animation-delay-3000"></div>
      
      <!-- Floating elements -->
      <div class="absolute h-full w-full">
        <!-- Floating circles -->
        <div class="absolute top-1/4 left-1/5 w-12 h-12 rounded-full bg-primary-400/20 dark:bg-primary-400/10 animate-float animation-delay-1000"></div>
        <div class="absolute top-2/3 left-1/4 w-8 h-8 rounded-full bg-secondary-400/20 dark:bg-secondary-400/10 animate-float-slow animation-delay-2000"></div>
        <div class="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-accent-300/20 dark:bg-accent-300/10 animate-float animation-delay-3000"></div>
        
        <!-- Floating squares with rotation -->
        <div class="absolute top-1/2 left-1/3 w-10 h-10 bg-primary-500/10 dark:bg-primary-500/5 rounded-lg animate-float-rotate animation-delay-2000"></div>
        <div class="absolute bottom-1/4 right-1/3 w-14 h-14 bg-secondary-500/10 dark:bg-secondary-500/5 rounded-lg animate-float-rotate-reverse animation-delay-4000"></div>
        
        <!-- Floating triangles -->
        <div class="absolute top-2/3 right-1/5 w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-accent-400/20 dark:border-b-accent-400/10 border-r-[15px] border-r-transparent animate-float-slow animation-delay-3000"></div>
        <div class="absolute top-1/5 right-1/3 w-0 h-0 border-l-[10px] border-l-transparent border-b-[18px] border-b-primary-400/20 dark:border-b-primary-400/10 border-r-[10px] border-r-transparent animate-float animation-delay-1000"></div>
      </div>
      
      <!-- Subtle grid overlay -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
    </div>
  </section>
</template>