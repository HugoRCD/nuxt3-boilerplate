<script lang="ts" setup>
const { appName } = useAppConfig();
useHead({
  title: appName,
  meta: [
    {name: "viewport", content: "width=device-width, initial-scale=1"},
    {name: "keywords", content: "Home"},
    {name: "description", content: "Nuxt Starter"}
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
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </Body>
  </Html>
</template>
