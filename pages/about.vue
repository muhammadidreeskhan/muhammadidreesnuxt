image.png
<template>
  <div>
    <!-- Enhanced About Hero -->
    <section class="py-20 md:py-32 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 -z-10">
        <div
          class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/80 dark:to-gray-900/90"
        ></div>
        <div
          class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-300 dark:via-primary-500 to-transparent opacity-70"
        ></div>
        <div
          class="absolute -top-24 -right-24 w-[30rem] h-[30rem] bg-gradient-to-br from-primary-100/30 via-accent-100/20 to-transparent dark:from-primary-900/20 dark:via-accent-900/10 dark:to-transparent rounded-full opacity-70 blur-3xl"
        ></div>
        <div
          class="absolute -bottom-24 -left-24 w-[30rem] h-[30rem] bg-gradient-to-tr from-secondary-100/30 via-primary-100/20 to-transparent dark:from-secondary-900/20 dark:via-primary-900/10 dark:to-transparent rounded-full opacity-70 blur-3xl"
        ></div>
      </div>

      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <!-- Content Column -->
          <div
            class="lg:col-span-6 lg:pr-8"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          >
            <!-- Elegant Title with Decorative Elements -->
            <div class="relative mb-8">
              <div
                class="absolute -left-6 -top-6 w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full blur-xl opacity-70"
              ></div>
              <h1
                class="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight relative"
              >
                About
                <span
                  class="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 dark:from-primary-400 dark:via-primary-300 dark:to-secondary-400"
                  >Me</span
                >
              </h1>
              <div
                class="h-1 w-32 bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 rounded-full"
              ></div>
            </div>

            <!-- Bio with Enhanced Typography -->
            <div class="space-y-6">
              <p
                class="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed"
              >
                I'm a passionate developer and designer with over 8 years of
                experience creating digital experiences that delight users and
                solve real problems.
              </p>

              <div
                class="pl-4 border-l-4 border-primary-500 dark:border-primary-400 py-2"
              >
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  My journey began with a curiosity about how websites work,
                  which led me to pursue a degree in Computer Science. Since
                  then, I've worked with startups, agencies, and established
                  companies to deliver innovative digital solutions.
                </p>
              </div>

              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe in clean code, user-centered design, and continuous
                learning. When I'm not coding, you'll find me hiking, reading,
                or experimenting with new technologies.
              </p>

              <!-- Quick Stats -->
              <div
                class="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <div class="text-center">
                  <div
                    class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1"
                  >
                    8+
                  </div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
                <div class="text-center">
                  <div
                    class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1"
                  >
                    50+
                  </div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">
                    Projects Completed
                  </div>
                </div>
                <div class="text-center">
                  <div
                    class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1"
                  >
                    15+
                  </div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Image Column with Enhanced Styling -->
          <div
            class="lg:col-span-6 relative"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          >
            <div class="relative mx-auto max-w-md lg:max-w-none">
              <!-- Main Image with Frame -->
              <div
                class="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-900/50 border border-white/20 dark:border-gray-800/50 z-10 aspect-[4/5] bg-white dark:bg-gray-800"
              >
                <NuxtImg
                  src="/images/profile image.png"
                  alt="Muhammad Idrees - Professional Portrait"
                  class="w-full h-full object-cover"
                />

                <!-- Overlay gradient -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"
                ></div>
              </div>

              <!-- Decorative elements -->
              <div
                class="absolute -bottom-8 -left-8 h-32 w-32 bg-primary-100 dark:bg-primary-900/30 rounded-2xl -z-10 blur-sm"
              ></div>
              <div
                class="absolute -top-8 -right-8 h-32 w-32 bg-accent-100 dark:bg-accent-900/30 rounded-2xl -z-10 blur-sm"
              ></div>

              <!-- Floating badge -->
              <div
                class="absolute -bottom-6 right-8 bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-900/30 rounded-xl py-3 px-5 z-20 border border-gray-100 dark:border-gray-700"
              >
                <div class="flex items-center space-x-2">
                  <div
                    class="h-3 w-3 bg-green-500 rounded-full animate-pulse"
                  ></div>
                  <span
                    class="text-sm font-medium text-gray-800 dark:text-gray-200"
                    >Available for Work</span
                  >
                </div>
              </div>

              <!-- Floating experience badge -->
              <div
                class="absolute -left-6 top-1/4 bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-900/30 rounded-full h-20 w-20 z-20 flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700"
              >
                <span
                  class="text-xl font-bold text-primary-600 dark:text-primary-400"
                  >8+</span
                >
                <span class="text-xs text-gray-600 dark:text-gray-400"
                  >Years</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Experience Section -->
    <section
      class="py-20 md:py-32 relative bg-gradient-to-br from-primary-50 via-accent-50 to-white dark:from-primary-900/20 dark:via-accent-900/10 dark:to-gray-900/80"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <div
          class="absolute right-0 top-0 w-1/3 h-1/3 bg-primary-50/50 dark:bg-primary-900/10 rounded-bl-full"
        ></div>
        <div
          class="absolute left-0 bottom-0 w-1/3 h-1/3 bg-secondary-50/50 dark:bg-secondary-900/10 rounded-tr-full"
        ></div>
      </div>
      <div class="container-custom">
        <!-- Enhanced Section Heading -->
        <div class="text-center mb-16">
          <div class="inline-block">
            <span
              class="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider"
              >Professional Journey</span
            >
            <h2
              class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4"
            >
              Work Experience
            </h2>
            <div
              class="h-1 w-20 bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 mx-auto rounded-full"
            ></div>
            <p
              class="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto"
            >
              A timeline of my professional journey and key roles that have
              shaped my expertise.
            </p>
          </div>
        </div>
        <!-- Modern Timeline -->
        <div class="relative max-w-5xl mx-auto">
          <!-- Timeline line -->
          <div
            class="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 dark:from-primary-400 dark:via-secondary-400 dark:to-accent-400 md:transform md:-translate-x-1/2 z-0"
          ></div>
          <div class="flex flex-col gap-16">
            <div
              v-for="(job, index) in experience"
              :key="index"
              class="relative group"
            >
              <!-- Timeline node -->
              <div
                class="absolute left-6 md:left-1/2 top-0 md:transform md:-translate-x-1/2 z-10"
              >
                <div
                  class="h-10 w-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center animate-pulse group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon name="ph:briefcase" class="w-5 h-5 text-white" />
                </div>
              </div>
              <!-- Content Card -->
              <div class="ml-16 md:ml-0 md:grid md:grid-cols-12 md:gap-8">
                <!-- Left column (for desktop) -->
                <div
                  class="hidden md:block md:col-span-5 md:text-right md:pr-8 space-y-1"
                >
                  <div class="inline-flex items-center justify-end space-x-2">
                    <span
                      class="text-sm font-medium text-gray-500 dark:text-gray-400"
                      >{{ job.period }}</span
                    >
                    <span
                      class="h-2 w-2 rounded-full bg-primary-500 dark:bg-primary-400"
                    ></span>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                    {{ job.company }}
                  </h3>
                  <p
                    class="text-lg font-medium text-primary-600 dark:text-primary-400"
                  >
                    {{ job.title }}
                  </p>
                </div>
                <!-- Right column (for desktop) / Main content (for mobile) -->
                <div class="md:col-span-7 md:pl-8">
                  <!-- Mobile heading (hidden on desktop) -->
                  <div class="md:hidden mb-4 space-y-1">
                    <span
                      class="text-sm font-medium text-gray-500 dark:text-gray-400"
                      >{{ job.period }}</span
                    >
                    <h3
                      class="text-2xl font-bold text-gray-900 dark:text-white"
                    >
                      {{ job.company }}
                    </h3>
                    <p
                      class="text-lg font-medium text-primary-600 dark:text-primary-400"
                    >
                      {{ job.title }}
                    </p>
                  </div>
                  <!-- Card content -->
                  <div
                    class="bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl dark:shadow-gray-900/10 p-8 border border-gray-100 dark:border-gray-700/50 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
                  >
                    <p
                      class="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed"
                    >
                      {{ job.description }}
                    </p>
                    <h4
                      class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center"
                    >
                      <Icon
                        name="ph:trophy"
                        class="mr-2 text-primary-500 dark:text-primary-400 w-5 h-5"
                      />
                      Key Achievements
                    </h4>
                    <ul class="space-y-3">
                      <li
                        v-for="(item, i) in job.achievements"
                        :key="i"
                        class="flex items-start group/achievement"
                      >
                        <div
                          class="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mt-0.5 group-hover/achievement:scale-110 transition-transform duration-200"
                        >
                          <Icon
                            name="ph:check"
                            class="w-3 h-3 text-primary-600 dark:text-primary-400"
                          />
                        </div>
                        <span class="ml-3 text-gray-600 dark:text-gray-300">{{
                          item
                        }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Education Section -->
    <section class="py-20 md:py-32 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 -z-10">
        <div
          class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/70 dark:to-gray-900/80"
        ></div>
        <div
          class="absolute -top-24 -left-24 w-[30rem] h-[30rem] bg-gradient-to-br from-primary-100/20 via-accent-100/10 to-transparent dark:from-primary-900/10 dark:via-accent-900/5 dark:to-transparent rounded-full opacity-70 blur-3xl"
        ></div>
      </div>

      <div class="container-custom">
        <!-- Enhanced Section Heading -->
        <div class="text-center mb-16">
          <div class="inline-block">
            <span
              class="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider"
              >Knowledge Base</span
            >
            <h2
              class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4"
            >
              Education & Certifications
            </h2>
            <div
              class="h-1 w-20 bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 mx-auto rounded-full"
            ></div>
            <p
              class="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto"
            >
              My academic background and professional certifications that have
              built my expertise.
            </p>
          </div>
        </div>

        <!-- Enhanced Education Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
            v-for="(item, index) in education"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { delay: index * 200, duration: 500 },
            }"
          >
            <div
              class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-xl dark:shadow-gray-900/20 p-8 border border-gray-100 dark:border-gray-700/50 h-full transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <!-- Badge -->
              <div
                class="inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-6 border"
                :class="
                  item.type === 'education'
                    ? 'bg-primary-50 text-primary-700 border-primary-200 dark:bg-primary-900/30 dark:text-primary-300 dark:border-primary-800/30'
                    : 'bg-secondary-50 text-secondary-700 border-secondary-200 dark:bg-secondary-900/30 dark:text-secondary-300 dark:border-secondary-800/30'
                "
              >
                {{ item.type === "education" ? "Education" : "Certification" }}
              </div>

              <!-- Content -->
              <div class="flex items-start">
                <div class="flex-shrink-0 mr-5">
                  <div
                    class="h-14 w-14 rounded-xl bg-gradient-to-br"
                    :class="
                      item.type === 'education'
                        ? 'from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700'
                        : 'from-secondary-500 to-secondary-600 dark:from-secondary-600 dark:to-secondary-700'
                    "
                  >
                    <div class="h-full w-full flex items-center justify-center">
                      <Icon
                        :name="
                          item.type === 'education'
                            ? 'ph:graduation-cap-fill'
                            : 'ph:certificate-fill'
                        "
                        class="w-7 h-7 text-white"
                      />
                    </div>
                  </div>
                </div>

                <div class="flex-1">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                      {{ item.institution }}
                    </h3>
                    <span
                      class="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded-md"
                      >{{ item.period }}</span
                    >
                  </div>
                  <p
                    class="text-lg font-medium text-primary-600 dark:text-primary-400 mb-3"
                  >
                    {{ item.degree }}
                  </p>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Skills Section -->
    <section
      class="py-20 md:py-32 relative bg-gradient-to-br from-primary-50 via-accent-50 to-white dark:from-primary-900/20 dark:via-accent-900/10 dark:to-gray-900/80"
    >
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Skills & Tools
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A blend of technical expertise and creative design, honed through
            years of hands-on experience.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="category in skills"
            :key="category.name"
            class="bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700"
          >
            <div
              class="mb-4 flex items-center justify-center h-14 w-14 rounded-full bg-primary-100 dark:bg-primary-900/30"
            >
              <Icon
                :name="getSkillIcon(category.name)"
                class="w-8 h-8 text-primary-500 dark:text-primary-400"
              />
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              {{ category.name }}
            </h3>
            <div class="flex flex-wrap gap-2 justify-center">
              <span
                v-for="skill in category.items"
                :key="skill"
                class="px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 border border-primary-100 dark:border-primary-700/40"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced CTA Section -->
    <section
      class="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-primary-100 via-accent-100 to-white dark:from-primary-900/30 dark:via-accent-900/10 dark:to-gray-900/80"
    >
      <div class="absolute inset-0 -z-10 pointer-events-none">
        <div
          class="absolute -top-24 -left-24 w-96 h-96 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-200/30 dark:bg-accent-900/20 rounded-full blur-3xl"
        ></div>
      </div>
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center flex flex-col items-center">
          <div class="mb-6 flex items-center justify-center">
            <Icon
              name="ph:handshake"
              class="w-14 h-14 text-primary-500 dark:text-primary-400 animate-bounce-slow"
            />
          </div>
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Interested in working together?
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            I'm currently available for freelance projects, full-time positions,
            and consulting work. Let's create something amazing together!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/contact"
              class="btn-primary text-lg flex items-center justify-center gap-2 px-8 py-4"
            >
              <Icon name="ph:chat-circle-text" class="w-6 h-6" /> Contact Me
            </NuxtLink>
            <a
              href="/resume.pdf"
              target="_blank"
              class="btn-outline text-lg flex items-center justify-center gap-2 px-8 py-4"
            >
              <Icon name="ph:download-simple" class="w-6 h-6" /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  title: "About Me",
  description:
    "Learn about my professional background, skills, and experience in web development and design.",
});

// Helper function to get skill category icons
const getSkillIcon = (category) => {
  switch (category) {
    case "Frontend":
      return "ph:code-bold";
    case "Backend":
      return "ph:database-bold";
    case "Tools & Platforms":
      return "ph:wrench-bold";
    case "Design":
      return "ph:paint-brush-bold";
    default:
      return "ph:code-bold";
  }
};

// Sample experience data
const experience = [
  {
    company: "TechSolutions Inc.",
    title: "Senior Frontend Developer",
    period: "2023 - Present",
    description:
      "Lead frontend developer responsible for architecture decisions and implementation of key features.",
    achievements: [
      "Rebuilt the company's main SaaS platform using Vue.js and Tailwind CSS, resulting in a 40% improvement in load times",
      "Mentored junior developers and established frontend best practices",
      "Implemented comprehensive component library and design system",
    ],
  },
  {
    company: "WebCraft Agency",
    title: "Full-Stack Developer",
    period: "2020 - 2023",
    description:
      "Worked on multiple client projects as both frontend and backend developer.",
    achievements: [
      "Delivered 15+ client websites and web applications from concept to deployment",
      "Integrated various third-party APIs and payment gateways",
      "Implemented CI/CD pipelines that reduced deployment time by 60%",
    ],
  },
  {
    company: "StartupHub",
    title: "Frontend Developer",
    period: "2018 - 2020",
    description:
      "First developer hired at an early-stage startup, building the product from scratch.",
    achievements: [
      "Created MVP that helped secure $2M in seed funding",
      "Built responsive web application using React and Redux",
      "Collaborated closely with design team to implement pixel-perfect UI",
    ],
  },
];

// Sample education data
const education = [
  {
    type: "education",
    institution: "University of Technology",
    degree: "Bachelor of Science in Computer Science",
    period: "2014 - 2018",
    description:
      "Focused on software engineering, web development, and user interface design. Graduated with honors.",
  },
  {
    type: "certification",
    institution: "Google",
    degree: "Google UX Design Professional Certificate",
    period: "2022",
    description:
      "Comprehensive training in user experience design principles, research methods, and usability testing.",
  },
  {
    type: "certification",
    institution: "AWS",
    degree: "AWS Certified Solutions Architect",
    period: "2021",
    description:
      "Certification validating expertise in designing and deploying secure and robust applications on AWS.",
  },
  {
    type: "education",
    institution: "Design Academy",
    degree: "UI/UX Design Bootcamp",
    period: "2019",
    description:
      "Intensive program covering interface design, user research, wireframing, and prototyping.",
  },
];

// Sample skills data
const skills = [
  {
    name: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "React",
      "Nuxt.js",
      "Next.js",
      "Tailwind CSS",
      "SCSS",
    ],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "Express",
      "PHP",
      "Laravel",
      "RESTful APIs",
      "GraphQL",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    name: "Tools & Platforms",
    items: [
      "Git",
      "Docker",
      "AWS",
      "Firebase",
      "Vercel",
      "Netlify",
      "CI/CD",
      "Webpack",
      "Vite",
    ],
  },
  {
    name: "Design",
    items: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
    ],
  },
];
</script>
