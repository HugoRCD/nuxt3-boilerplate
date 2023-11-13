<script lang="ts" setup>
const { appName } = useAppConfig();
useHead({
  title: appName,
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "keywords", content: "Home" },
    { name: "description", content: "Nuxt Starter" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});

const toastStore = useToastStore();
const toast = computed(() => {
  return {
    show: toastStore.getShow,
    title: toastStore.getTitle,
    message: toastStore.getMessage,
    type: toastStore.getType,
    infos: toastStore.getInfos,
  };
});

useHead({
  title: "Nuxt Starter - Start your next Nuxt project in seconds",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "author", content: "Hugo Richard" },
    { charset: "utf-8" },
    {
      name: "description",
      content: "Start your next Nuxt project in seconds, with everything you need included",
    },
    {
      name: "keywords",
      content: "Nuxt, Starter, Resend, Bun, Tailwind, TypeScript, ESLint",
    },
    {
      property: "og:title",
      content: "Nuxt Starter - Start your next Nuxt project in seconds",
    },
    {
      property: "og:url",
      content: "https://nuxtstarter.hrcd.fr/",
    },
    {
      property: "og:description",
      content: "Start your next Nuxt project in seconds, with everything you need included",
    },
    {
      property: "og:image",
      content: "https://nuxtstarter.hrcd.fr/homescreen.png",
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:image",
      content: "https://nuxtstarter.hrcd.fr/homescreen.png",
    },
    {
      property: "twitter:url",
      content: "https://nuxtstarter.hrcd.fr/",
    },
    {
      property: "twitter:title",
      content: "Nuxt Starter - Start your next Nuxt project in seconds",
    },
    {
      property: "twitter:description",
      content: "Start your next Nuxt project in seconds, with everything you need included",
    },
  ],
});
</script>

<template>
  <Html :lang="$i18n.locale">
    <ToastsBasic
      :show="toast.show"
      :title="toast.title"
      :description="toast.message"
      :type="toast.type"
      :infos="toast.infos"
      @close="toastStore.closeToast()"
    />
    <Body class="bg-white dark:bg-zinc-950">
      <LayoutCommandConsole />
      <LayoutScrollToTop />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <UNotifications />
    </Body>
  </Html>
</template>
