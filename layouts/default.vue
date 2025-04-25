<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <main class="flex-grow">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
// Layout components are automatically registered
</script>