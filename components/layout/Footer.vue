<template>
  <div class="my-6">
    <Divider />
    <footer class="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row justify-around items-center gap-4">
      <div class="flex items-center gap-4">
        <Logo :size="8" />
        <span class="text-muted text-sm text-center"
        >© 2023,
        <NuxtLink
          role="link"
          target="_blank"
          to="https://hrcd.fr/"
          class="text-muted hover:text-main transition-colors duration-300 ease-in-out"
          aria-label="Go to HRCD Hugo Richard portfolio website"
        >
          HugoRCD </NuxtLink
        > {{ $t("seo.all_rights_reserved") }}.</span
        >
      </div>
      <div class="flex justify-center items-center gap-4 mt-2">
        <LanguageSelector />
        <ThemeSelector />
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
</script>
