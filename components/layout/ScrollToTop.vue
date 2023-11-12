<script setup lang="ts">
import { ArrowUpIcon } from "@heroicons/vue/24/outline";

const isScrolling = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    isScrolling.value = window.scrollY > 0;
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <div class="fixed z-50 bottom-36 sm:bottom-20 right-3">
    <div
      aria-label="scroll to top button"
      class="flex items-center rounded-full cursor-pointer justify-center w-10 h-10 p-1 text-muted transition-all duration-200 bg-white dark:bg-zinc-800 shadow-md hover:shadow-lg border border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600"
      @click="scrollToTop"
      rounded
      :class="{ 'opacity-100': isScrolling, 'opacity-0': !isScrolling }"
    >
      <ArrowUpIcon class="z-20 w-6 h-6" />
    </div>
  </div>
</template>

<style scoped></style>
