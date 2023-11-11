<script setup lang="ts">

</script>

<template>
  <div class="relative flex flex-col justify-center items-center">
    <!-- spotlight -->
    <div
      class="absolute rounded-full -z-1 bg-white/25 blur-[120px] lg:blur-[300px] inset-0"
    ></div>

    <h1 class="text-center font-display text-3xl font-light leading-tight lg:text-5xl">
      <span>
        {{ $t("home.hero.part1")}}
      </span>
      <br />
      <span class="bg-gradient-to-br from-black/90 to-black/30 dark:from-white/90 dark:to-white/30  bg-clip-text text-transparent">
        {{ $t("home.hero.part2")}}
      </span>
    </h1>
    <h2 class="mt-4 max-w-xl mx-auto text-center text-lg font-extralight text-black/60 dark:text-white/60 ">
      {{ $t("home.hero.subtitle")}}
    </h2>
    <button class="gradient z-10 text-white/90 font-semibold px-6 py-2 rounded-full mt-10 cursor-pointer hover:px-8 hover:shadow-lg transition-all duration-300 ease-in-out">
      {{ $t("home.hero.cta")}}
    </button>
  </div>
</template>