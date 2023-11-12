<script setup>
const { locale, t } = useI18n();

const open = ref(false);
const commandPaletteRef = ref();

const actions = [
  {
    id: "back_to_home",
    label: "Back to home",
    icon: "i-heroicons-home",
    click: () => {
      useRouter().push("/");
      open.value = false;
    },
    shortcuts: ["⌘", "Z"],
  },
  {
    id: "switch_french",
    label: "Switch to french",
    icon: "i-heroicons-flag",
    click: () => {
      locale.value = "fr";
      open.value = false;
    },
    shortcuts: ["⌘", "F"],
  },
  {
    id: "switch_english",
    label: "Switch to english",
    icon: "i-heroicons-flag",
    click: () => {
      locale.value = "en";
      open.value = false;
    },
    shortcuts: ["⌘", "E"],
  },
];

const groups = computed(() =>
  [
    {
      key: "actions",
      commands: actions,
    },
  ].filter(Boolean),
);

function onSelect(option) {
  if (option.click) {
    option.click();
  } else if (option.to) {
    useRouter().push(option.to);
  } else if (option.href) {
    window.open(option.href, "_blank");
  }
}

onMounted(() => {
  if (process.client) {
    document.addEventListener("keydown", (event) => {
      if (event.metaKey && event.key === "k") open.value = !open.value;
    });
    document.addEventListener("keydown", (event) => {
      if (event.metaKey && event.key === "z") {
        event.preventDefault();
        actions.find((action) => action.id === "back_to_home").click();
      }

      if (event.metaKey && event.key === "f") {
        event.preventDefault();
        actions.find((action) => action.id === "switch_french").click();
      }

      if (event.metaKey && event.key === "e") {
        event.preventDefault();
        actions.find((action) => action.id === "switch_english").click();
      }
    });
  }
});
</script>

<template>
  <UModal v-model="open">
    <UCommandPalette icon="i-heroicons-command-line" ref="commandPaletteRef" :groups="groups" :autoselect="false" @update:model-value="onSelect" />
  </UModal>
</template>
