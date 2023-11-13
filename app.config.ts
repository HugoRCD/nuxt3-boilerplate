export default defineAppConfig({
  appName: "Nuxt Starter",
  appDescription: "Nuxt Starter is a starter template for Nuxt3",
  appVersion: "1.0.0",
  ui: {
    primary: "orange",
    gray: "neutral",
    notifications: {
      position: "top-0 right-0",
    },
    notification: {
      progress: {
        base: "absolute bottom-0 end-0 start-0 h-0",
        background: "bg-transparent dark:bg-transparent",
      },
    },
  },
});
