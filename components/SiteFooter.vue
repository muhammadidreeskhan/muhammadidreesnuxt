<template>
  <footer class="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800/80 dark:to-gray-900/90 pt-32 pb-16">
    <!-- Luxury Decorative Elements -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <!-- Premium gradient blobs -->
      <div class="absolute -top-24 -right-24 w-[40rem] h-[40rem] bg-gradient-to-br from-primary-100/40 via-secondary-100/30 to-transparent dark:from-primary-900/20 dark:via-secondary-900/15 dark:to-transparent rounded-full opacity-70 blur-3xl"></div>
      <div class="absolute -bottom-24 -left-24 w-[40rem] h-[40rem] bg-gradient-to-tr from-secondary-100/40 via-accent-100/30 to-transparent dark:from-secondary-900/20 dark:via-accent-900/15 dark:to-transparent rounded-full opacity-70 blur-3xl"></div>
      
      <!-- Subtle grid pattern for texture -->
      <div class="absolute inset-0 bg-[url('/img/grid.svg')] bg-center opacity-[0.015] dark:opacity-[0.03]"></div>
      
      <!-- Gold accent line -->
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/50 dark:via-primary-500/30 to-transparent"></div>
    </div>

    <div class="container-custom">
      <!-- Premium Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-16 pb-16">
        <!-- Brand Section -->
        <div class="md:col-span-5 space-y-8">
          <!-- Luxury Logo/Brand -->
          <div>
            <h3 class="text-3xl font-display font-bold tracking-tight">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-400 dark:from-primary-400 dark:via-primary-300 dark:to-secondary-300">Muhammad</span>
              <span class="text-gray-900 dark:text-white">Idrees</span>
            </h3>
            <div class="mt-2 h-px w-16 bg-gradient-to-r from-primary-500 to-secondary-400 dark:from-primary-400 dark:to-secondary-300"></div>
          </div>
          
          <p class="text-gray-600 dark:text-gray-300 max-w-md text-lg leading-relaxed">
            Crafting exceptional digital experiences that blend sophisticated design with powerful functionality. Let's create something extraordinary together.
          </p>
          
          <!-- Premium Social Icons -->
          <div class="flex space-x-5">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               class="h-12 w-12 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg hover:shadow-xl dark:shadow-gray-900/30 flex items-center justify-center text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-all duration-300 border border-gray-100 dark:border-gray-700/50">
              <Icon name="ph:twitter-logo-fill" class="w-5 h-5" />
            </a>
            <a href="https://github.com/muhammadidreeskhan" target="_blank" rel="noopener noreferrer" 
               class="h-12 w-12 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg hover:shadow-xl dark:shadow-gray-900/30 flex items-center justify-center text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-all duration-300 border border-gray-100 dark:border-gray-700/50">
              <Icon name="ph:github-logo-fill" class="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               class="h-12 w-12 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg hover:shadow-xl dark:shadow-gray-900/30 flex items-center justify-center text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-all duration-300 border border-gray-100 dark:border-gray-700/50">
              <Icon name="ph:linkedin-logo-fill" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links with Elegant Styling -->
        <div class="md:col-span-3">
          <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-8 relative inline-block">
            Quick Links
            <span class="absolute -bottom-2 left-0 w-12 h-px bg-gradient-to-r from-primary-500 to-transparent dark:from-primary-400"></span>
          </h4>
          <ul class="space-y-5">
            <li v-for="item in navItems" :key="item.path">
              <NuxtLink :to="item.path" 
                        class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300 flex items-center group">
                <span class="w-1.5 h-1.5 rounded-full bg-primary-400/40 dark:bg-primary-500/40 mr-3 group-hover:bg-primary-500 dark:group-hover:bg-primary-400 transition-colors duration-300"></span>
                <span class="font-medium">{{ item.title }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info with Premium Styling -->
        <div class="md:col-span-4">
          <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-8 relative inline-block">
            Contact
            <span class="absolute -bottom-2 left-0 w-12 h-px bg-gradient-to-r from-primary-500 to-transparent dark:from-primary-400"></span>
          </h4>
          <ul class="space-y-6">
            <li class="flex items-center space-x-4">
              <div class="h-12 w-12 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg dark:shadow-gray-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 border border-gray-100 dark:border-gray-700/50">
                <Icon name="ph:envelope-simple" class="w-5 h-5" />
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-500 mb-1">Email</p>
                <a href="mailto:contactmuhammadidrees@gmail.com" class="text-gray-800 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors duration-300 font-medium">
                  contactmuhammadidrees@gmail.com
                </a>
              </div>
            </li>
            <li class="flex items-center space-x-4">
              <div class="h-12 w-12 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg dark:shadow-gray-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 border border-gray-100 dark:border-gray-700/50">
                <Icon name="ph:map-pin" class="w-5 h-5" />
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-500 mb-1">Location</p>
                <span class="text-gray-800 dark:text-gray-300 font-medium">
                  Pakistan
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Elegant Divider -->
      <div class="h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>

      <!-- Premium Footer Bottom -->
      <div class="pt-10 flex flex-col md:flex-row md:justify-between md:items-center">
        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
          &copy; {{ new Date().getFullYear() }} <span class="font-medium text-gray-700 dark:text-gray-300">Muhammad Idrees</span>. All rights reserved.
        </p>
        <div class="text-sm text-gray-500 dark:text-gray-400">
          Crafted with <Icon name="ph:heart-fill" class="w-4 h-4 inline-block text-primary-500 dark:text-primary-400" /> and precision
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navItems = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Projects', path: '/projects' },
  { title: 'Blog', path: '/blog' },
  { title: 'Contact', path: '/contact' },
];
</script>