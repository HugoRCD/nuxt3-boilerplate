<script lang="ts" setup>
const navigation = getNavigation("home");
</script>

<template>
  <div class="flex items-center justify-center mx-auto w-full my-2">
    <header class="rounded-full">
      <div class="border border-white/10 rounded-full">
        <nav class="z-10 h-[50px] sm:h-[45px] flex justify-around gap-2 sm:hover:gap-4 p-1 transition-all duration-300 ease-in-out">
          <NuxtLink
            v-for="item in navigation"
            :id="item.name.toLowerCase()"
            :key="item.name"
            :aria-label="item.name + ' navigation link'"
            :class="[
              item.name === $route.name
                ? 'text-white/75 shadow-white/50 shadow-2xl text-shadow-sm border border-white/5 backdrop-blur-3xl bg-zinc-900/10'
                : 'text-muted',
            ]"
            :to="item.to"
            class="flex items-center rounded-full px-4 sm:px-6 py-1 border border-transparent hover:bg-zinc-900/50 hover:backdrop-blur-3xl hover:border-white/5 hover:text-main duration-300 ease-in-out transition-all"
          >
            <component :is="item.icon" class="w-7 h-7 sm:w-6 sm:h-6 font-medium" />
            <span class="hidden sm:inline-block ml-2 font-medium">{{ item.name }}</span>
          </NuxtLink>
        </nav>
      </div>
    </header>
  </div>
</template>