<script lang="ts" setup>
definePageMeta({
  title: "Contact",
  name: "Contact",
  path: "/contact",
});

const toastStore = useToastStore();

const demandTypes = [
  {
    label: "contact.subject_types.project",
    value: "project",
    color: "bg-blue-500",
    button_color: "blue",
  },
  {
    label: "contact.subject_types.question",
    value: "question",
    color: "bg-yellow-500",
    button_color: "yellow",
  },
  {
    label: "contact.subject_types.bug",
    value: "bug",
    color: "bg-red-500",
    button_color: "red",
  },
  {
    label: "contact.subject_types.other",
    value: "other",
    color: "bg-gray-500",
    button_color: "gray",
  },
];
const selected = ref(demandTypes[0]);
const message = ref("");

async function submitForm() {
  toastStore.showSuccessToast({
    title: "contact.success",
  });
}
</script>

<template>
  <div class="relative h-full flex flex-col gap-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
    <!-- grid -->
    <div
      class="pointer-events-none absolute inset-0 bg-center bg-grid-black/10 dark:bg-grid-white/5 bg-grid-14 [mask-image:radial-gradient(white,transparent_80%)]"
    ></div>

    <div class="px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <h2 class="text-4xl text-center font-bold mb-6">{{ $t("contact.title") }}</h2>
      <form class="flex flex-col gap-3 max-w-[524px] mx-auto" @submit.prevent="submitForm">
        <UFormGroup class="w-full" required :label="$t('contact.fullname')">
          <UInput class="w-full" icon="i-heroicons-envelope" placeholder="you@example.com" />
        </UFormGroup>
        <UFormGroup class="w-full" required :label="$t('contact.subject')">
          <USelectMenu v-model="selected" :options="demandTypes">
            <template #label>
              <div class="rounded-full h-2 w-2" :class="selected.color"></div>
              <span class="text-gray-400">{{ $t(selected.label) }}</span>
            </template>
            <template #option="{ option }">
              <div class="flex items-center gap-3">
                <div class="rounded-full h-2 w-2" :class="option.color"></div>
                <span>{{ $t(option.label) }}</span>
              </div>
            </template>
          </USelectMenu>
        </UFormGroup>
        <UFormGroup class="w-full" required :label="$t('contact.message')">
          <UTextarea autoresize required v-model="message" id="message" name="message" :rows="4" :placeholder="$t('contact.message')" />
        </UFormGroup>
        <div class="flex justify-center">
          <UButton type="submit" :color="selected.button_color" block>
            {{ $t("contact.submit") }}
          </UButton>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
