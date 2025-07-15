<template>
  <!-- Debug Output -->
  <div class="text-xs text-red-500 bg-red-50 p-2 mb-4 rounded" v-if="!project">
    Debug: slug = {{ slug }}<br />
    project = {{ project }}<br />
    <span v-if="!project"
      >Project not found. Check if the slug in the URL matches the slug in your
      markdown frontmatter (case-sensitive).</span
    >
  </div>
  <div v-if="project">
    <!-- Project Hero -->
    <section class="relative">
      <!-- Hero Image -->
      <div class="w-full h-[40vh] md:h-[60vh] overflow-hidden relative">
        <div
          class="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/40 z-10"
        ></div>
        <NuxtImg
          v-if="project.image"
          :src="project.image"
          :alt="project.title"
          class="w-full h-full object-cover object-center"
        />
        <div class="absolute inset-0 flex items-center z-20">
          <div class="container-custom">
            <div class="max-w-3xl">
              <span
                class="inline-block px-3 py-1 bg-primary-600 text-white text-sm rounded-full mb-4"
              >
                {{ project.category }}
              </span>
              <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
                {{ project.title }}
              </h1>
              <p class="text-xl text-white/90 mb-6">{{ project.summary }}</p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full"
                >
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
            <h2
              class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Project Overview
            </h2>
            <div class="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p>{{ project.description }}</p>

              <!-- Placeholder for more detailed content -->
              <p>
                This project presented several unique challenges that required
                innovative solutions. The client needed a system that was both
                powerful enough to handle complex operations while remaining
                intuitive for users of various technical backgrounds.
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
                The development followed an agile methodology with regular
                client feedback and iterations. We began with thorough research
                and planning, followed by wireframing and prototyping to
                establish the core user flows.
              </p>

              <p>
                After approval of the design direction, development proceeded in
                sprints, with regular reviews and testing. The project was
                completed on time and exceeded the client's expectations for
                functionality and user experience.
              </p>
            </div>

            <!-- Project Images -->
            <div class="space-y-6 mb-12">
              <h2
                class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Project Gallery
              </h2>
              <!-- These are placeholder images - in a real application, these would be actual project screenshots -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <NuxtImg
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
                  alt="Project screenshot"
                  class="rounded-lg shadow-md w-full"
                />
                <NuxtImg
                  src="https://images.pexels.com/photos/6633867/pexels-photo-6633867.jpeg"
                  alt="Project screenshot"
                  class="rounded-lg shadow-md w-full"
                />
              </div>
              <NuxtImg
                src="https://images.pexels.com/photos/8367221/pexels-photo-8367221.jpeg"
                alt="Project screenshot"
                class="rounded-lg shadow-md w-full"
              />
            </div>
          </div>

          <!-- Sidebar -->
          <div>
            <div
              class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-8"
            >
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white mb-4"
              >
                Project Details
              </h3>
              <div class="space-y-4">
                <div>
                  <h4
                    class="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    Client
                  </h4>
                  <p class="text-gray-900 dark:text-white">
                    {{ project.client }}
                  </p>
                </div>
                <div>
                  <h4
                    class="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    Completed
                  </h4>
                  <p class="text-gray-900 dark:text-white">
                    {{ project.completed }}
                  </p>
                </div>
                <div>
                  <h4
                    class="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    Category
                  </h4>
                  <p class="text-gray-900 dark:text-white">
                    {{ project.category }}
                  </p>
                </div>
                <div>
                  <h4
                    class="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    Technologies
                  </h4>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span
                      v-for="tag in project.tags"
                      :key="tag"
                      class="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div
              class="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg shadow-sm"
            >
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white mb-4"
              >
                Interested in a similar project?
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Let's discuss how I can help bring your vision to life with a
                tailored solution for your needs.
              </p>
              <NuxtLink
                to="/contact"
                class="btn-primary w-full flex justify-center"
              >
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
          <div
            v-for="relatedProject in relatedProjects"
            :key="relatedProject.slug"
          >
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
      <Icon
        name="ph:warning-circle"
        class="w-16 h-16 text-yellow-500 mx-auto mb-4"
      />
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Project Not Found
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
        The project you are looking for does not exist or has been removed.
      </p>
      <NuxtLink to="/projects" class="btn-primary"> Back to Projects </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useSeoMeta } from "nuxt/app";

const route = useRoute();
const slug = (route.params.slug || "").toString().trim();

// Fetch project from Nuxt Content
const { data: contentProject } = await useAsyncData(
  `project-content-${slug}`,
  async () => {
    // Try exact match first
    let project = await queryContent("projects").where({ slug }).findOne();
    if (!project) {
      // Fallback: case-insensitive search
      const all = await queryContent("projects").find();
      project = all.find(
        (p) =>
          typeof p.slug === "string" &&
          p.slug.trim().toLowerCase() === slug.toLowerCase()
      );
    }
    return project || null;
  }
);
const project = computed(() => contentProject.value);
// Fetch all projects for related projects
const { data: allContentProjects } = await useAsyncData(
  "all-content-projects",
  () => queryContent("projects").find()
);
const relatedProjects = computed(() => {
  if (!project.value || !allContentProjects.value) return [];
  const currentSlug = project.value.slug;
  const currentCategory = project.value.category;
  const sameCategory = allContentProjects.value.filter(
    (p) => p.slug !== currentSlug && p.category === currentCategory
  );
  if (sameCategory.length >= 3) return sameCategory.slice(0, 3);
  const others = allContentProjects.value.filter(
    (p) => p.slug !== currentSlug && p.category !== currentCategory
  );
  return [...sameCategory, ...others].slice(0, 3);
});

// Set meta tags for the project
let defaults = {
  title: "Project Not Found",
  description: "Project details page",
};
useSeoMeta({
  title: project.value
    ? `${project.value.title} | Project Details`
    : defaults.title,
  description: project.value ? project.value.summary : defaults.description,
});
</script>
