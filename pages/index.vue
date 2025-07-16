<template>
  <div>
    <HeroSection />

    <!-- About Me Section -->
    <section
      class="py-20 md:py-32 bg-gradient-to-br from-white via-primary-50 to-gray-50 dark:from-gray-900 dark:via-primary-900/40 dark:to-gray-800 relative overflow-hidden"
    >
      <div
        class="container-custom flex flex-col md:flex-row items-center gap-16 relative z-10"
      >
        <div class="flex-shrink-0 mb-8 md:mb-0">
          <div
            class="w-48 h-48 rounded-full bg-gradient-to-tr from-primary-400 via-secondary-300 to-accent-200 p-1 shadow-2xl"
          >
            <img
              src="/images/profile image.png"
              alt="Muhammad Idrees"
              class="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-900"
            />
          </div>
        </div>
        <div class="w-full max-w-2xl">
          <h2
            class="text-4xl md:text-5xl font-extrabold font-display text-gray-900 dark:text-white leading-tight mb-4"
          >
            Hi, I'm
            <span
              class="text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-2 rounded"
              >Muhammad Idrees</span
            >
          </h2>
          <p
            class="text-xl md:text-2xl font-medium text-accent-700 dark:text-accent-300 mb-4 tracking-wide"
          >
            Creative Full Stack Developer & UI/UX Enthusiast
          </p>
          <p
            class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
          >
            I craft beautiful, high-performance web experiences with a focus on
            usability, accessibility, and modern design. With 5+ years of
            experience, I help businesses and individuals bring their ideas to
            life through code and creativity.
          </p>
          <div class="flex flex-wrap gap-6 mt-6">
            <div
              class="flex items-center gap-2 bg-white/80 dark:bg-gray-900/60 px-5 py-3 rounded-lg shadow border border-primary-100 dark:border-primary-900/30"
            >
              <Icon name="ph:star-bold" class="text-primary-500 w-6 h-6" />
              <div>
                <div class="font-bold text-lg text-gray-900 dark:text-white">
                  5+ Years
                </div>
                <div class="text-xs text-gray-500 dark:text-gray-400">
                  Experience
                </div>
              </div>
            </div>
            <div
              class="flex items-center gap-2 bg-white/80 dark:bg-gray-900/60 px-5 py-3 rounded-lg shadow border border-secondary-100 dark:border-secondary-900/30"
            >
              <Icon name="ph:code-bold" class="text-secondary-500 w-6 h-6" />
              <div>
                <div class="font-bold text-lg text-gray-900 dark:text-white">
                  Full Stack
                </div>
                <div class="text-xs text-gray-500 dark:text-gray-400">
                  Developer
                </div>
              </div>
            </div>
            <div
              class="flex items-center gap-2 bg-white/80 dark:bg-gray-900/60 px-5 py-3 rounded-lg shadow border border-accent-100 dark:border-accent-900/30"
            >
              <Icon
                name="ph:paint-brush-bold"
                class="text-accent-500 w-6 h-6"
              />
              <div>
                <div class="font-bold text-lg text-gray-900 dark:text-white">
                  UI/UX
                </div>
                <div class="text-xs text-gray-500 dark:text-gray-400">
                  Specialist
                </div>
              </div>
            </div>
            <div
              class="flex items-center gap-2 bg-white/80 dark:bg-gray-900/60 px-5 py-3 rounded-lg shadow border border-primary-100 dark:border-primary-900/30"
            >
              <Icon name="ph:globe-bold" class="text-primary-500 w-6 h-6" />
              <div>
                <div class="font-bold text-lg text-gray-900 dark:text-white">
                  Remote & Onsite
                </div>
                <div class="text-xs text-gray-500 dark:text-gray-400">
                  Worldwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute -top-24 -right-24 w-96 h-96 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -z-10"
      ></div>
      <div
        class="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-100/30 dark:bg-secondary-900/10 rounded-full blur-3xl -z-10"
      ></div>
    </section>

    <!-- Divider -->
    <div
      class="w-full h-1 bg-gradient-to-r from-primary-100 via-secondary-100 to-accent-100 dark:from-primary-900/20 dark:via-secondary-900/20 dark:to-accent-900/20 my-8"
    ></div>

    <!-- My Services & Skills Section -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div class="container-custom">
        <SectionHeading
          title="My Services & Skills"
          subtitle="Comprehensive solutions with cutting-edge technologies."
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
          >
            <Icon name="ph:code-bold" class="w-12 h-12 text-primary-500 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Frontend Development</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-2">
              Building responsive and interactive web applications using Vue,
              React, and TypeScript.
            </p>
            <div class="flex flex-wrap gap-2 justify-center mt-2">
              <span
                class="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs"
                >Vue.js</span
              >
              <span
                class="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs"
                >React</span
              >
              <span
                class="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs"
                >TypeScript</span
              >
              <span
                class="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs"
                >Tailwind CSS</span
              >
            </div>
          </div>
          <div
            class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
          >
            <Icon
              name="ph:database-bold"
              class="w-12 h-12 text-secondary-500 mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">Backend Development</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-2">
              Developing robust server-side solutions with Node.js, Express, and
              MongoDB.
            </p>
            <div class="flex flex-wrap gap-2 justify-center mt-2">
              <span
                class="px-3 py-1 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300 rounded-full text-xs"
                >Node.js</span
              >
              <span
                class="px-3 py-1 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300 rounded-full text-xs"
                >Express</span
              >
              <span
                class="px-3 py-1 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300 rounded-full text-xs"
                >MongoDB</span
              >
              <span
                class="px-3 py-1 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300 rounded-full text-xs"
                >REST APIs</span
              >
            </div>
          </div>
          <div
            class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
          >
            <Icon
              name="ph:paint-brush-bold"
              class="w-12 h-12 text-accent-500 mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-2">
              Designing intuitive and beautiful user interfaces with modern
              design principles.
            </p>
            <div class="flex flex-wrap gap-2 justify-center mt-2">
              <span
                class="px-3 py-1 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-full text-xs"
                >Figma</span
              >
              <span
                class="px-3 py-1 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-full text-xs"
                >Tailwind CSS</span
              >
              <span
                class="px-3 py-1 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-full text-xs"
                >Design Systems</span
              >
              <span
                class="px-3 py-1 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-full text-xs"
                >Accessibility</span
              >
            </div>
          </div>
          <div
            class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
          >
            <Icon
              name="ph:cell-signal-high-bold"
              class="w-12 h-12 text-primary-400 mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">Mobile Development</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-2">
              Cross-platform mobile apps using React Native and Flutter.
            </p>
            <div class="flex flex-wrap gap-2 justify-center mt-2">
              <span
                class="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs"
                >React Native</span
              >
              <span
                class="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs"
                >Flutter</span
              >
            </div>
          </div>
          <div
            class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
          >
            <Icon
              name="ph:file-text-bold"
              class="w-12 h-12 text-secondary-400 mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">CMS Integration</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-2">
              Implementing and customizing content management systems for easy
              updates.
            </p>
            <div class="flex flex-wrap gap-2 justify-center mt-2">
              <span
                class="px-3 py-1 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300 rounded-full text-xs"
                >WordPress</span
              >
              <span
                class="px-3 py-1 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300 rounded-full text-xs"
                >Strapi</span
              >
              <span
                class="px-3 py-1 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300 rounded-full text-xs"
                >Sanity</span
              >
            </div>
          </div>
          <div
            class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
          >
            <Icon
              name="ph:chart-line-up-bold"
              class="w-12 h-12 text-accent-400 mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">Performance Optimization</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-2">
              Optimizing website performance for fast loading and smooth
              experience.
            </p>
            <div class="flex flex-wrap gap-2 justify-center mt-2">
              <span
                class="px-3 py-1 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-full text-xs"
                >Lighthouse</span
              >
              <span
                class="px-3 py-1 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-full text-xs"
                >Web Vitals</span
              >
              <span
                class="px-3 py-1 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-full text-xs"
                >Caching</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div
      class="w-full h-1 bg-gradient-to-r from-primary-100 via-secondary-100 to-accent-100 dark:from-primary-900/20 dark:via-secondary-900/20 dark:to-accent-900/20 my-8"
    ></div>

    <!-- Latest Projects -->
    <section class="py-16 md:py-24 bg-white dark:bg-gray-900/80">
      <div class="container-custom">
        <SectionHeading
          title="Latest Projects"
          subtitle="Explore some of my recent work and see how I can help bring your ideas to life."
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in featuredProjects" :key="project.id">
            <ProjectCard
              :project="project"
              class="shadow-lg dark:shadow-gray-900/20 hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300"
            />
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

    <!-- Latest Insights -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div class="container-custom">
        <SectionHeading
          title="Latest Insights"
          subtitle="Stay updated with my latest thoughts on development, design, and technology."
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="post in latestPosts"
            :key="post.id"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { delay: 200, duration: 500 },
            }"
          >
            <BlogPostCard :post="post" />
          </div>
        </div>
        <div class="text-center mt-12">
          <NuxtLink to="/blog" class="btn-primary"> View All Posts </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section
      class="py-16 md:py-24 bg-white dark:bg-gray-900/80 relative overflow-hidden"
    >
      <div class="container-custom">
        <SectionHeading
          title="Client Testimonials"
          subtitle="Hear what clients say about their experience working with me."
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800"
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Client 1"
              class="w-16 h-16 rounded-full object-cover mb-4 border-2 border-primary-500"
            />
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
              “Muhammad delivered our project on time and exceeded our
              expectations. The website is fast, beautiful, and easy to manage.”
            </p>
            <span class="font-semibold text-primary-600 dark:text-primary-400"
              >John Smith</span
            >
            <span class="text-gray-500 dark:text-gray-400 text-sm"
              >CEO, Acme Corp</span
            >
          </div>
          <div
            class="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800"
          >
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Client 2"
              class="w-16 h-16 rounded-full object-cover mb-4 border-2 border-secondary-500"
            />
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
              “A true professional! The new app design improved our user
              engagement and made a real difference for our business.”
            </p>
            <span
              class="font-semibold text-secondary-600 dark:text-secondary-400"
              >Emily Chen</span
            >
            <span class="text-gray-500 dark:text-gray-400 text-sm"
              >Product Manager, TechFlow</span
            >
          </div>
          <div
            class="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800"
          >
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="Client 3"
              class="w-16 h-16 rounded-full object-cover mb-4 border-2 border-accent-500"
            />
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
              “Highly recommended! Muhammad’s expertise in both design and
              development made our project a huge success.”
            </p>
            <span class="font-semibold text-accent-600 dark:text-accent-400"
              >David Lee</span
            >
            <span class="text-gray-500 dark:text-gray-400 text-sm"
              >Founder, StartupX</span
            >
          </div>
        </div>
      </div>
      <div
        class="absolute -top-24 -right-24 w-96 h-96 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -z-10"
      ></div>
      <div
        class="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-100/30 dark:bg-secondary-900/10 rounded-full blur-3xl -z-10"
      ></div>
    </section>

    <!-- Contact Section -->
    <section
      class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden"
    >
      <div class="container-custom max-w-2xl mx-auto">
        <SectionHeading
          title="Contact Me"
          subtitle="Let's work together! Send me a message and I'll get back to you soon."
        />
        <ContactForm />
      </div>
      <div
        class="absolute -top-24 -right-24 w-96 h-96 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -z-10"
      ></div>
      <div
        class="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-100/30 dark:bg-secondary-900/10 rounded-full blur-3xl -z-10"
      ></div>
    </section>

    <!-- Enhanced CTA -->
    <section class="py-16 md:py-24 relative overflow-hidden">
      <div class="container-custom relative z-10">
        <div
          class="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 dark:from-primary-700 dark:via-primary-600 dark:to-secondary-600 rounded-2xl p-8 md:p-12 shadow-xl dark:shadow-primary-900/30 overflow-hidden relative"
        >
          <!-- Decorative Elements -->
          <div class="absolute inset-0 overflow-hidden opacity-20">
            <div
              class="absolute -top-10 -right-10 w-40 h-40 bg-white/30 rounded-full blur-xl"
            ></div>
            <div
              class="absolute -bottom-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-xl"
            ></div>
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-white/10 rounded-full blur-3xl"
            ></div>
            <!-- Floating Shapes -->
            <div
              class="absolute top-10 left-10 w-6 h-6 border-2 border-white/40 rounded-md animate-float-rotate"
            ></div>
            <div
              class="absolute bottom-10 right-10 w-8 h-8 border-2 border-white/40 rounded-full animate-float"
            ></div>
            <div
              class="absolute top-1/2 right-1/4 w-4 h-4 bg-white/40 rounded-full animate-float-slow"
            ></div>
            <div
              class="absolute bottom-1/3 left-1/4 w-5 h-5 bg-white/40 rounded-md rotate-45 animate-float-rotate-reverse"
            ></div>
          </div>
          <!-- Content -->
          <div
            class="relative z-10 text-center md:flex md:items-center md:justify-between md:text-left"
          >
            <div class="md:max-w-xl mb-8 md:mb-0">
              <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p class="text-xl text-white/90 max-w-2xl md:pr-4">
                Let's collaborate to bring your ideas to life with creative
                solutions and exceptional execution.
              </p>
            </div>
            <div class="flex justify-center">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center bg-white text-primary-600 font-medium px-8 py-4 rounded-lg hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
              >
                <span class="mr-2">Get in Touch</span>
                <Icon
                  name="ph:arrow-right"
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-100/30 dark:bg-primary-900/20 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute -top-24 -left-24 w-64 h-64 bg-secondary-100/30 dark:bg-secondary-900/20 rounded-full blur-3xl"
      ></div>
    </section>
  </div>
</template>

<script setup>
import { useSeoMeta } from "nuxt/app";
import { ref, computed } from "vue";
import HeroSection from "~/components/HeroSection.vue";
import SectionHeading from "~/components/SectionHeading.vue";
import ProjectCard from "~/components/ProjectCard.vue";
import BlogPostCard from "~/components/BlogPostCard.vue";
import ContactForm from "~/components/ContactForm.vue";

useSeoMeta({
  title: "Home | Muhammad Idrees",
  description:
    "Portfolio showcasing my professional work and skills in web development and design.",
});

// Fetch all projects from Nuxt Content
const { data: contentProjects } = await useAsyncData(
  "content-projects-home",
  () => queryContent("projects").find()
);
const projects = computed(() => contentProjects.value || []);

// Get featured projects
const featuredProjects = computed(() =>
  projects.value.filter((p) => p.featured)
);

// Sample blog post data
const latestPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2025",
    slug: "future-web-development-2025",
    date: "2025-04-15",
    category: "Web Development",
    excerpt:
      "Exploring emerging trends and technologies that will shape the future of web development.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
  },
  {
    id: 2,
    title: "Designing for Accessibility: Best Practices",
    slug: "designing-accessibility-best-practices",
    date: "2025-04-10",
    category: "Design",
    excerpt:
      "How to ensure your designs are inclusive and accessible to all users.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
  },
  {
    id: 3,
    title: "Getting Started with Nuxt 3: A Complete Guide",
    slug: "getting-started-nuxt3-guide",
    date: "2025-04-05",
    category: "Tutorials",
    excerpt:
      "A comprehensive introduction to building modern web applications with Nuxt 3.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
  },
];
</script>
