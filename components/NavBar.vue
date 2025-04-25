<template>
  <header class="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 transition-all duration-300" 
          :class="{ 'shadow-lg shadow-gray-200/20 dark:shadow-gray-800/20': scrolled }">
    <nav class="container-custom h-20 flex items-center justify-between" aria-label="Main navigation">
      <!-- Logo -->
      <NuxtLink to="/" class="relative group" aria-label="Muhammad Idrees - Homepage">
        <span class="text-2xl font-display font-bold">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300">Muhammad</span>
          <span class="text-gray-900 dark:text-white">Idrees</span>
        </span>
        <span class="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-400 group-hover:w-full transition-all duration-300"></span>
      </NuxtLink>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path"
                  class="nav-link relative py-2 font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors duration-300"
                  :aria-current="$route.path === item.path ? 'page' : undefined">
          {{ item.title }}
          <span v-if="$route.path === item.path" class="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 dark:bg-primary-400"></span>
        </NuxtLink>
        
        <!-- Dark Mode Toggle -->
        <button @click="toggleTheme" 
                class="relative h-10 w-10 rounded-full flex items-center justify-center group hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300" 
                aria-label="Toggle dark mode">
          <div class="relative w-5 h-5 transition-transform duration-500"
               :class="{ 'rotate-[360deg]': isDark }">
            <Icon v-if="isDark" name="ph:sun-bold" class="absolute inset-0 text-primary-400 transition-opacity" aria-hidden="true" />
            <Icon v-else name="ph:moon-bold" class="absolute inset-0 text-gray-600 transition-opacity" aria-hidden="true" />
          </div>
        </button>
      </div>
      
      <!-- Mobile Menu Button -->
      <button @click="toggleMobileMenu" 
              class="md:hidden h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              :aria-expanded="mobileMenuOpen"
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu">
        <Icon v-if="mobileMenuOpen" name="ph:x-bold" class="w-6 h-6 text-gray-600 dark:text-gray-300" aria-hidden="true" />
        <Icon v-else name="ph:list-bold" class="w-6 h-6 text-gray-600 dark:text-gray-300" aria-hidden="true" />
      </button>
    </nav>
    
    <!-- Mobile Menu -->
    <div v-show="mobileMenuOpen" 
         id="mobile-menu"
         class="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800">
      <div class="container-custom py-6 space-y-6">
        <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path"
                  class="block py-2 text-lg font-medium text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors duration-300"
                  :aria-current="$route.path === item.path ? 'page' : undefined"
                  @click="closeMobileMenu">
          {{ item.title }}
        </NuxtLink>
        
        <!-- Dark Mode Toggle (Mobile) -->
        <button @click="toggleTheme" 
                class="flex items-center space-x-3 w-full py-2 text-gray-600 dark:text-gray-300"
                aria-label="Toggle dark mode">
          <div class="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <Icon v-if="isDark" name="ph:sun-bold" class="w-5 h-5 text-primary-400" aria-hidden="true" />
            <Icon v-else name="ph:moon-bold" class="w-5 h-5" aria-hidden="true" />
          </div>
          <span class="font-medium">{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, useRoute } from 'vue';
import { useColorMode } from '@nuxtjs/color-mode';

const mobileMenuOpen = ref(false);
const scrolled = ref(false);
const colorMode = useColorMode();
const isDark = ref(colorMode.value === 'dark');
const $route = useRoute();

const navItems = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Projects', path: '/projects' },
  { title: 'Blog', path: '/blog' },
  { title: 'Contact', path: '/contact' },
];

const toggleTheme = () => {
  isDark.value = !isDark.value;
  colorMode.preference = isDark.value ? 'dark' : 'light';
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  
  // Add no-scroll class to body when menu is open
  if (mobileMenuOpen.value) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.classList.remove('overflow-hidden');
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

// Close mobile menu on route change
watch(() => $route.path, () => {
  if (mobileMenuOpen.value) {
    closeMobileMenu();
  }
});

// Close mobile menu on escape key
const handleEscKey = (e) => {
  if (e.key === 'Escape' && mobileMenuOpen.value) {
    closeMobileMenu();
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('keydown', handleEscKey);
  isDark.value = colorMode.value === 'dark';
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keydown', handleEscKey);
  // Ensure body scroll is restored when component is unmounted
  document.body.classList.remove('overflow-hidden');
});
</script>

<style scoped>
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, var(--color-primary-600), var(--color-primary-400));
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Only show underline on hover if not active page */
.nav-link[aria-current="page"]::after {
  width: 0;
}
</style>