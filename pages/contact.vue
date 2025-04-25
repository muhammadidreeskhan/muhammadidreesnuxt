<template>
  <div>
    <!-- Contact Hero -->
    <section class="py-20 md:py-28 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/20 -z-10"></div>
      <div class="absolute top-20 right-20 w-64 h-64 bg-accent-300/20 dark:bg-accent-700/10 rounded-full blur-3xl -z-10 animate-blob"></div>
      <div class="absolute bottom-20 left-20 w-72 h-72 bg-primary-300/20 dark:bg-primary-700/10 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-96 bg-grid-pattern opacity-30 dark:opacity-10 -z-10"></div>
      
      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <div class="inline-block mb-3">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-300">
              <span class="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mr-2 animate-pulse"></span>
              Available for New Projects
            </span>
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Get In <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-300">Touch</span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
          
          <!-- Quick Contact Options -->
          <div class="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:contactmuhammadidrees@gmail.com" class="flex items-center px-6 py-3 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 group">
              <Icon name="ph:envelope-simple" class="w-5 h-5 mr-2 text-primary-500 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300" />
              <span class="text-gray-800 dark:text-gray-200">Email Me</span>
            </a>
            <a href="#contact-form" class="flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 text-white shadow-sm hover:shadow-md hover:shadow-primary-500/20 dark:hover:shadow-primary-700/20 transition-all duration-300 group">
              <Icon name="ph:chat-circle-text" class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span>Send Message</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Contact Form & Info -->
    <section id="contact-form" class="py-20 md:py-28 relative">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <!-- Contact Form -->
          <div v-motion :initial="{ opacity: 0, x: -50 }" :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }">
            <div class="relative">
              <div class="absolute -top-12 -left-12 w-24 h-24 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-xl -z-10"></div>
              <h2 class="text-2xl md:text-3xl font-bold mb-2">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300">Send a Message</span>
              </h2>
              <p class="text-gray-600 dark:text-gray-400 mb-8">Fill out the form below and I'll get back to you as soon as possible.</p>
              <div class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl dark:shadow-gray-900/30 p-8 border border-gray-100 dark:border-gray-700/50">
                <ContactForm />
              </div>
            </div>
          </div>
          
          <!-- Contact Info -->
          <div v-motion :initial="{ opacity: 0, x: 50 }" :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }">
            <div class="relative">
              <div class="absolute -top-12 -right-12 w-24 h-24 bg-accent-100 dark:bg-accent-900/20 rounded-full blur-xl -z-10"></div>
              <h2 class="text-2xl md:text-3xl font-bold mb-2">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-accent-500 to-accent-400 dark:from-accent-400 dark:to-accent-300">Contact Information</span>
              </h2>
              <p class="text-gray-600 dark:text-gray-400 mb-8">Feel free to reach out through any of these channels.</p>
            </div>
            
            <div class="space-y-6 mb-12">
              <div class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700/50 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 flex items-center justify-center text-white shadow-md">
                    <Icon name="ph:envelope-simple" class="w-6 h-6" />
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      <a href="mailto:contactmuhammadidrees@gmail.com" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                        contactmuhammadidrees@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700/50 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 dark:from-accent-600 dark:to-accent-700 flex items-center justify-center text-white shadow-md">
                    <Icon name="ph:github-logo" class="w-6 h-6" />
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white">GitHub</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      <a href="https://github.com/muhammadidreeskhan" target="_blank" class="hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-300">
                        github.com/muhammadidreeskhan
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700/50 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 dark:from-primary-500 dark:to-accent-600 flex items-center justify-center text-white shadow-md">
                    <Icon name="ph:map-pin" class="w-6 h-6" />
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Social Links -->
            <div class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700/50">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Connect with me</h3>
              <div class="flex space-x-4">
                <a href="https://github.com/muhammadidreeskhan" target="_blank" rel="noopener noreferrer" class="h-12 w-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 group">
                  <Icon name="ph:github-logo" class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://twitter.com/muhammadidrees" target="_blank" rel="noopener noreferrer" class="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 dark:from-blue-600 dark:to-blue-700 flex items-center justify-center text-white shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 group">
                  <Icon name="ph:twitter-logo" class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://linkedin.com/in/muhammadidrees" target="_blank" rel="noopener noreferrer" class="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 flex items-center justify-center text-white shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 group">
                  <Icon name="ph:linkedin-logo-fill" class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://medium.com/@muhammadidrees" target="_blank" rel="noopener noreferrer" class="h-12 w-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-white shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 group">
                  <Icon name="ph:medium-logo-fill" class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Enhanced Availability Section -->
    <section class="py-16 md:py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50/70 to-accent-50/70 dark:from-primary-900/30 dark:to-accent-900/20 -z-10"></div>
      
      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-green-200/30 dark:bg-green-900/20 rounded-full blur-3xl -z-10"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl -z-10"></div>
      
      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl dark:shadow-gray-900/30 p-8 md:p-12 border border-green-100 dark:border-green-900/30">
            
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <!-- Content -->
              <div class="md:max-w-xl">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Current Availability</h2>
                <p class="text-xl text-gray-600 dark:text-gray-300">
                  I'm currently available for freelance projects, contract work, and consulting opportunities. Let's discuss how I can help bring your vision to life.
                </p>
              </div>
              
              <!-- Status Card -->
              <div class="flex-shrink-0">
                <div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-xl shadow-md dark:shadow-gray-900/20 border border-green-200 dark:border-green-800/30 flex flex-col items-center justify-center text-center">
                  <!-- Pulsing Status Indicator -->
                  <div class="relative mb-4">
                    <span class="absolute inset-0 rounded-full bg-green-400/30 dark:bg-green-500/30 animate-ping"></span>
                    <span class="relative flex h-5 w-5 rounded-full bg-green-500 dark:bg-green-400"></span>
                  </div>
                  
                  <span class="text-lg font-bold text-green-800 dark:text-green-400 mb-1">Available Now</span>
                  <span class="text-sm text-green-700 dark:text-green-500">Ready for New Projects</span>
                  
                  <!-- Action Button -->
                  <NuxtLink to="#contact-form" class="mt-4 inline-flex items-center bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium">
                    <Icon name="ph:calendar-plus" class="mr-2 w-4 h-4" />
                    Schedule a Call
                  </NuxtLink>
                </div>
              </div>
            </div>
            
            <!-- Project Types -->
            <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Project Types I'm Currently Accepting:</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div class="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                  <Icon name="ph:globe" class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" />
                  <span class="text-gray-800 dark:text-gray-200">Website Development</span>
                </div>
                <div class="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                  <Icon name="ph:device-mobile" class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" />
                  <span class="text-gray-800 dark:text-gray-200">Mobile Applications</span>
                </div>
                <div class="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                  <Icon name="ph:storefront" class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" />
                  <span class="text-gray-800 dark:text-gray-200">E-commerce Solutions</span>
                </div>
                <div class="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                  <Icon name="ph:code" class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" />
                  <span class="text-gray-800 dark:text-gray-200">Custom Web Applications</span>
                </div>
                <div class="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                  <Icon name="ph:chart-line" class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" />
                  <span class="text-gray-800 dark:text-gray-200">Performance Optimization</span>
                </div>
                <div class="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                  <Icon name="ph:chalkboard-teacher" class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" />
                  <span class="text-gray-800 dark:text-gray-200">Technical Consulting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="py-20 md:py-28 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-gray-50 dark:bg-gray-900/50 -z-10"></div>
      <div class="absolute top-20 left-20 w-64 h-64 bg-primary-200/20 dark:bg-primary-800/10 rounded-full blur-3xl -z-10 animate-blob animation-delay-3000"></div>
      <div class="absolute bottom-20 right-20 w-72 h-72 bg-accent-200/20 dark:bg-accent-800/10 rounded-full blur-3xl -z-10 animate-blob animation-delay-4000"></div>
      
      <div class="container-custom relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-300">Questions</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Answers to common questions about working with me.
          </p>
        </div>
        
        <div class="max-w-3xl mx-auto space-y-6">
          <div v-for="(faq, index) in faqs" :key="index" 
               class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-100 dark:border-gray-700/50 rounded-xl overflow-hidden shadow-lg dark:shadow-gray-900/30 transform transition-all duration-300 hover:shadow-xl"
               v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }">
            <button 
              @click="faq.isOpen = !faq.isOpen" 
              class="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <div class="flex items-center">
                <div class="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 dark:from-primary-600 dark:to-accent-600 flex items-center justify-center text-white shadow-md mr-3">
                  <span class="text-sm font-medium">{{ index + 1 }}</span>
                </div>
                <span class="text-lg font-medium text-gray-900 dark:text-white">{{ faq.question }}</span>
              </div>
              <div class="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-colors duration-300">
                <Icon :name="faq.isOpen ? 'ph:minus-bold' : 'ph:plus-bold'" class="w-4 h-4 text-primary-500 dark:text-primary-400" />
              </div>
            </button>
            <div v-show="faq.isOpen" class="px-6 pb-6 text-gray-600 dark:text-gray-300 pl-17">
              <div class="ml-11">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

definePageMeta({
  title: 'Contact',
  description: 'Get in touch to discuss your next project or potential collaboration.'
});

// FAQ data
const faqs = ref([
  {
    question: 'What is your typical process for new projects?',
    answer: 'My process typically involves an initial consultation to understand your needs, followed by a proposal outlining scope, timeline, and cost. Once approved, I move into design, development, testing, and launch phases, with regular communication throughout.',
    isOpen: true
  },
  {
    question: 'How do you handle project pricing?',
    answer: 'I offer flexible pricing options including fixed project rates and hourly billing depending on the nature of the work. Each quote is customized based on project complexity, timeline, and specific requirements.',
    isOpen: false
  },
  {
    question: 'What is your typical timeline for completing projects?',
    answer: 'Project timelines vary greatly depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months or more. I\'ll provide a detailed timeline during the proposal phase.',
    isOpen: false
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, I offer various maintenance and support packages to keep your project running smoothly after launch. These can include updates, security patches, feature additions, and technical support.',
    isOpen: false
  },
  {
    question: 'Can you work with my existing team or developers?',
    answer: 'Absolutely. I\'m comfortable collaborating with in-house teams, other contractors, or agencies. I can adapt to your existing workflows and tools to ensure smooth integration.',
    isOpen: false
  }
]);
</script>