<script setup lang="ts"></script>

<template>
  <div class="absolute inset-0 flex items-center justify-center -z-1">
    <div class="circle circle-lg"></div>
    <div class="circle circle-md"></div>
    <div class="circle circle-sm"></div>
  </div>
</template>

<style scoped lang="scss">
$circle-sizes: (
  "lg": 24rem,
  "md": 18rem,
  "sm": 12rem,
);

@mixin circle($size) {
  $circle-size: map-get($circle-sizes, $size);

  width: $circle-size;
  height: $circle-size;
  background: linear-gradient(rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 80.93%);
  border-radius: 999px;
  box-sizing: border-box;
  position: absolute;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 999px;
    padding: 1px;
    background: linear-gradient(rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 90%),
      linear-gradient(rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 64.93%);
    -webkit-mask: linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box,
      linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px);
    -webkit-mask-composite: xor;
  }
}

.circle {
  @each $size, $value in $circle-sizes {
    &.circle-#{$size} {
      @include circle($size);
    }
  }
}

.light {
  .circle {
    background: linear-gradient(rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0) 64.93%);

    &::before {
      background: linear-gradient(rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0) 50%), linear-gradient(rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0) 10%);
      -webkit-mask: linear-gradient(rgb(0, 0, 0) 0px, rgb(0, 0, 0) 0px) content-box content-box, linear-gradient(rgb(0, 0, 0) 0px, rgb(0, 0, 0) 0px);
      -webkit-mask-composite: xor;
    }
  }
}
</style>
