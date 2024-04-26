<template>
  <div class="basic-layout" :layout-theme="theme">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

interface Props {
  theme?: string; // ? 붙는이유 : 해당값이 언디파인이거나 string 일 수도 있음
}

const props = defineProps<Props>();
const { theme } = toRefs(props);
</script>

<style scoped lang="scss">
.basic-layout {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background-color: $color-white-000;
  border-radius: 24px;

  &[layout-theme="blue"] {
    background-color: $color-blue-000;
  }
}
</style>
