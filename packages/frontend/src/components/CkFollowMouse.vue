<template>
  <span :class="$style.root" ref="container">
    <span ref="el" style="position: absolute;">
      <slot></slot>
    </span>
  </span>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, shallowRef } from 'vue';

const el = shallowRef<HTMLElement>();
const container = shallowRef<HTMLElement>();

// Define props
const props = defineProps({
  x: {
    type: Boolean,
    default: true,
  },
  y: {
    type: Boolean,
    default: false,
  },
  speed: {
    type: Number,
    default: 0.1,
  },
});

const updatePosition = (e: MouseEvent) => {
  if (el.value && container.value) {
    const containerRect = container.value.getBoundingClientRect();

    const newX = e.clientX - containerRect.left;
    const newY = e.clientY - containerRect.top;
    el.value.style.transform = `translate(${props.x ? newX : 0}px, ${props.y ? newY : 0}px)`;
    el.value.style.transition = `transform ${props.speed}s`
  }
};

onMounted(() => {
  window.addEventListener('mousemove', updatePosition);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updatePosition);
});
</script>

<style lang="scss" module>
.root {
  position: relative;
  display: inline-block;
}
</style>
