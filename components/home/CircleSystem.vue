<script setup lang="ts"></script>

<template>
  <div class="absolute inset-0 flex items-center justify-center -z-1">
    <div class="circle-lg" />
    <div class="circle-md" />
    <div class="circle-sm" />
  </div>
</template>

<style scoped lang="scss">
.circle-lg,
.circle-md,
.circle-sm {
  width: 24rem;
  height: 24rem;
  background: linear-gradient(rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 64.93%);
  border-radius: 999px;
  box-sizing: border-box;
  position: absolute;
}

.circle-lg::before,
.circle-md::before,
.circle-sm::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 999px;
  padding: 1px;
  background: linear-gradient(rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 50%),
    linear-gradient(rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 64.93%);
  -webkit-mask: linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box,
    linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px);
  -webkit-mask-composite: xor;
}

.circle-lg {
  width: 24rem;
  height: 24rem;
}

.circle-md {
  width: 18rem;
  height: 18rem;
}

.circle-sm {
  width: 12rem;
  height: 12rem;
}

.light .circle-lg,
.light .circle-md,
.light .circle-sm {
  background: linear-gradient(rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0) 64.93%);
}

.light .circle-lg::before,
.light .circle-md::before,
.light .circle-sm::before {
  background: linear-gradient(rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0) 50%), linear-gradient(rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0) 64.93%);
  -webkit-mask: linear-gradient(rgb(0, 0, 0) 0px, rgb(0, 0, 0) 0px) content-box content-box, linear-gradient(rgb(0, 0, 0) 0px, rgb(0, 0, 0) 0px);
}
</style>
