<script setup lang="ts">
useHead({
  title: "Nuxt Starter",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "keywords", content: "Home" },
    { name: "description", content: "Nuxt Starter" }
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});
</script>

<template>
  <div>
    <Html :lang="$i18n.locale">
      <LayoutNavbar />
      <NuxtPage />
    </Html>
  </div>
</template>
