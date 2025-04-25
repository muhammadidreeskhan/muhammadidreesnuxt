<template>
  <div v-if="post">
    <!-- Article Hero -->
    <section class="relative">
      <!-- Hero Image -->
      <div class="w-full h-[40vh] md:h-[50vh] overflow-hidden relative">
        <div class="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/40 z-10"></div>
        <img 
          :src="post.image" 
          :alt="post.title"
          class="w-full h-full object-cover object-center"
        />
        <div class="absolute inset-0 flex items-center z-20">
          <div class="container-custom">
            <div class="max-w-3xl">
              <div class="flex items-center space-x-4 mb-4">
                <span class="inline-block px-3 py-1 bg-primary-600 text-white text-sm rounded-full">
                  {{ post.category }}
                </span>
                <span class="text-sm text-white/90">{{ formatDate(post.date) }}</span>
              </div>
              <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{{ post.title }}</h1>
              <div class="flex items-center">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="Author" class="w-10 h-10 rounded-full object-cover mr-3" />
                <div>
                  <div class="text-white font-medium">John Doe</div>
                  <div class="text-white/70 text-sm">Web Developer & Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Article Content -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-8">
            <div class="prose prose-lg dark:prose-invert max-w-none mb-12">
              <!-- Article content would ideally come from CMS, this is placeholder text -->
              <p class="lead">
                {{ post.excerpt }}
              </p>
              
              <p>
                As web development continues to evolve at a rapid pace, staying ahead of emerging trends is crucial for developers, designers, and businesses alike. In this article, we'll explore the most significant trends that are expected to shape the web development landscape in the coming years.
              </p>
              
              <h2>The Evolution of JavaScript Frameworks</h2>
              
              <p>
                JavaScript frameworks have been the backbone of modern web development for years now. Looking ahead to 2025, we're seeing a significant shift in how these frameworks are being developed and used. The focus is increasingly on performance, developer experience, and sustainability.
              </p>
              
              <p>
                React, Vue, and Angular continue to dominate the landscape, but we're seeing a new generation of frameworks that prioritize:
              </p>
              
              <ul>
                <li><strong>Island architecture</strong> - Breaking down applications into independently deployable islands</li>
                <li><strong>Zero-bundle approach</strong> - Shipping minimal JavaScript to the client</li>
                <li><strong>Hybrid rendering</strong> - Combining the best of server and client rendering</li>
                <li><strong>Enhanced type safety</strong> - Leveraging TypeScript's growing ecosystem</li>
              </ul>
              
              <h2>AI-Driven Development</h2>
              
              <p>
                Artificial intelligence is no longer just a buzzword in web development. It's becoming an integral part of the development process itself. From code completion to automated testing and optimization, AI tools are transforming how developers work.
              </p>
              
              <p>
                Some of the most promising applications of AI in web development include:
              </p>
              
              <ul>
                <li>Automated code generation and refactoring</li>
                <li>Intelligent debugging assistants</li>
                <li>Personalized user experiences at scale</li>
                <li>Enhanced accessibility through automated improvements</li>
              </ul>
              
              <h2>The Rise of WebAssembly</h2>
              
              <p>
                WebAssembly (Wasm) continues to gain traction as a powerful compilation target for the web. By 2025, we anticipate Wasm will become mainstream, allowing developers to:
              </p>
              
              <ul>
                <li>Run high-performance applications in the browser</li>
                <li>Use languages beyond JavaScript for web development</li>
                <li>Create sophisticated browser-based applications like CAD software, video editors, and games</li>
                <li>Implement compute-intensive features without sacrificing performance</li>
              </ul>
              
              <h2>Conclusion</h2>
              
              <p>
                The future of web development looks incredibly promising. With advancements in AI, WebAssembly, and JavaScript frameworks, developers have more powerful tools than ever to create exceptional web experiences. By staying informed about these trends and continuously learning, web developers can position themselves for success in 2025 and beyond.
              </p>
            </div>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-12">
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-300">
                Web Development
              </span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-300">
                JavaScript
              </span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-300">
                Future Trends
              </span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-300">
                AI
              </span>
            </div>
            
            <!-- Share -->
            <div class="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Share this article</h3>
              <div class="flex space-x-4">
                <a href="#" class="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors duration-300">
                  <Icon name="ph:twitter-logo-fill" class="w-5 h-5" />
                </a>
                <a href="#" class="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors duration-300">
                  <Icon name="ph:facebook-logo-fill" class="w-5 h-5" />
                </a>
                <a href="#" class="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors duration-300">
                  <Icon name="ph:linkedin-logo-fill" class="w-5 h-5" />
                </a>
                <a href="#" class="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors duration-300">
                  <Icon name="ph:link-simple" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <!-- Sidebar -->
          <div class="lg:col-span-4">
            <!-- Author Card -->
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-8">
              <div class="flex items-center mb-4">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="Author" class="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">John Doe</h3>
                  <p class="text-gray-600 dark:text-gray-400">Web Developer & Designer</p>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Passionate about creating beautiful, user-friendly digital experiences. Sharing insights on web development, design, and technology.
              </p>
              <div class="flex space-x-3">
                <a href="#" class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  <Icon name="ph:twitter-logo-fill" class="w-5 h-5" />
                </a>
                <a href="#" class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  <Icon name="ph:github-logo-fill" class="w-5 h-5" />
                </a>
                <a href="#" class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  <Icon name="ph:linkedin-logo-fill" class="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <!-- Recent Posts -->
            <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm mb-8 overflow-hidden">
              <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Recent Articles</h3>
              </div>
              <div class="divide-y divide-gray-200 dark:divide-gray-700">
                <div v-for="recentPost in recentPosts" :key="recentPost.id" class="p-6">
                  <NuxtLink :to="`/blog/${recentPost.slug}`" class="group">
                    <h4 class="text-lg font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 mb-2">
                      {{ recentPost.title }}
                    </h4>
                    <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span>{{ formatDate(recentPost.date) }}</span>
                      <span class="mx-2">•</span>
                      <span>{{ recentPost.category }}</span>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
            
            <!-- Categories -->
            <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
              <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Categories</h3>
              </div>
              <div class="p-6">
                <div class="flex flex-wrap gap-2">
                  <NuxtLink 
                    v-for="category in blogCategories" 
                    :key="category" 
                    to="/blog"
                    class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    {{ category }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- More Articles -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div class="container-custom">
        <SectionHeading 
          title="More Articles" 
          subtitle="Continue reading more insights and tutorials."
        />
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="relatedPost in relatedPosts" :key="relatedPost.id">
            <BlogPostCard :post="relatedPost" />
          </div>
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink to="/blog" class="btn-primary">
            View All Articles
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="py-32 text-center">
    <div class="container-custom">
      <Icon name="ph:warning-circle" class="w-16 h-16 text-yellow-500 mx-auto mb-4" />
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
        The article you are looking for does not exist or has been removed.
      </p>
      <NuxtLink to="/blog" class="btn-primary">
        Back to Blog
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

// Sample blog posts data
const allPosts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2025',
    slug: 'future-web-development-2025',
    date: '2025-04-15',
    category: 'Web Development',
    excerpt: 'Exploring emerging trends and technologies that will shape the future of web development over the next few years.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
  },
  {
    id: 2,
    title: 'Designing for Accessibility: Best Practices',
    slug: 'designing-accessibility-best-practices',
    date: '2025-04-10',
    category: 'Design',
    excerpt: 'How to ensure your designs are inclusive and accessible to all users, regardless of abilities or disabilities.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg'
  },
  {
    id: 3,
    title: 'Getting Started with Nuxt 3: A Complete Guide',
    slug: 'getting-started-nuxt3-guide',
    date: '2025-04-05',
    category: 'Tutorials',
    excerpt: 'A comprehensive introduction to building modern web applications with Nuxt 3 and its powerful features.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
  },
  {
    id: 4,
    title: 'The Rise of AI in Web Development',
    slug: 'rise-ai-web-development',
    date: '2025-03-28',
    category: 'Technology',
    excerpt: 'How artificial intelligence is transforming the way we build websites and web applications.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
  },
  {
    id: 5,
    title: 'Optimizing Website Performance: A Practical Guide',
    slug: 'website-performance-optimization-guide',
    date: '2025-03-20',
    category: 'Web Development',
    excerpt: 'Step-by-step techniques to improve your website\'s speed, performance, and user experience.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
  }
];

// Extract unique categories
const blogCategories = [...new Set(allPosts.map(post => post.category))];

// Find the current post based on slug
const post = computed(() => allPosts.find(p => p.slug === slug));

// Get related posts (excluding current, same category if possible)
const relatedPosts = computed(() => {
  if (!post.value) return [];
  
  // Try to find posts in the same category
  const sameCategoryPosts = allPosts.filter(p => p.id !== post.value.id && p.category === post.value.category);
  
  // If we have enough in the same category, use those
  if (sameCategoryPosts.length >= 3) {
    return sameCategoryPosts.slice(0, 3);
  }
  
  // Otherwise, get other posts regardless of category
  const otherPosts = allPosts.filter(p => p.id !== post.value.id && p.category !== post.value.category);
  
  return [...sameCategoryPosts, ...otherPosts].slice(0, 3);
});

// Get recent posts for sidebar (excluding current)
const recentPosts = computed(() => {
  return allPosts
    .filter(p => p.id !== post.value?.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
});

// Format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Set meta tags for the post
useSeoMeta({
  title: post.value ? post.value.title : 'Article Not Found',
  description: post.value ? post.value.excerpt : 'Blog article page'
});
</script>