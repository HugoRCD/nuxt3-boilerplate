<template>
  <div class="flex flex-col h-screen">
    <LayoutNavbar />
    <div class="flex-1">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>
