<script lang="ts" setup>
const navigation = getNavigation("home");
</script>

<template>
  <div class="flex items-center justify-center mx-auto w-full my-2">
    <header class="rounded-full">
      <div class="border border-white/10 rounded-full backdrop-blur-3xl bg-zinc-900/10 dark:bg-zinc-700/20 dark:border-zinc-900/20">
        <nav class="z-10 h-[50px] sm:h-[45px] flex justify-around gap-2 sm:hover:gap-4 p-1 transition-all duration-300 ease-in-out">
          <NuxtLink
            v-for="item in navigation"
            :id="item.name.toLowerCase()"
            :key="item.name"
            :aria-label="item.name + ' navigation link'"
            :class="[
              item.name === $route.name
                ? 'text-black/80 dark:text-white/75 shadow-black/50 dark:shadow-white/50 shadow-2xl border border-white/5 backdrop-blur-3xl bg-zinc-900/10'
                : 'text-black/60 dark:text-muted',
            ]"
            :to="item.to"
            class="flex items-center rounded-full px-4 sm:px-6 py-1 border border-transparent hover:text-black hover:bg-white-900/50 hover:border-white/5 dark:hover:text-white/70 duration-300 ease-in-out transition-all"
          >
            <component :is="item.icon" class="w-7 h-7 sm:w-6 sm:h-6 font-medium" />
            <span class="hidden sm:inline-block ml-2 font-medium">{{ item.name }}</span>
          </NuxtLink>
        </nav>
      </div>
    </header>
  </div>
</template>