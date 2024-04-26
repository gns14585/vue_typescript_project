<template>
  <div class="pagenation">
    <button class="pagenation__button" @click="moveToPrev">
      <img src="@/assets/icon/arrow-left.svg" alt="" />
    </button>

    <button
      v-for="index in pages[step]"
      :key="index"
      class="pagenation__button"
      @click="movePage(index)"
      :class="{ active: index === page }"
    >
      {{ index }}
    </button>

    <button class="pagenation__button" @click="moveToNext">
      <img src="@/assets/icon/arrow-right.svg" alt="" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from "vue";

interface Props {
  totalPage: number;
}

const props = defineProps<Props>();
const { totalPage } = toRefs(props);

const step = ref<number>(0);
const pages = computed(() => {
  const newArr: number[] = new Array();
  for (let i = 1; i <= totalPage.value; i++) {
    newArr.push(i);
  }
  const length = newArr.length;
  const divide =
    Math.floor(length / 10) + (Math.floor(length & 10) > 0 ? 1 : 0);
  const res = new Array();

  for (let i = 0; i <= divide; i++) {
    res.push(newArr.splice(0, 10));
  }
  return res;
});

// 해당페이지로 이동시키는 함수
const page = ref<number>(1);
const emit = defineEmits(["send-event"]);
const movePage = (pageIdx: number) => {
  emit("send-event", pageIdx);
  page.value = pageIdx;
};

// 뒤로가기
const moveToPrev = () => {
  if (page.value <= 1) {
    return;
  } else {
    page.value--;
  }
  emit("send-event", page.value);
};

// 앞으로가기
const moveToNext = () => {
  if (page.value < pages.value.length) {
    page.value++;
  } else {
    return;
  }
  emit("send-event", page.value);
};
</script>

<style lang="scss" scoped>
.pagenation {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  gap: 8px;

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;

    padding: 3px 7px;

    color: $color-gray-500;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;

    background: transparent;
    border: none;
    outline: none;

    cursor: pointer;

    &:hover {
      background-color: $color-gray-100;
      border-radius: 4px;

      color: $color-black-900;
    }

    &.active {
      background-color: $color-gray-100;
      border-radius: 4px;

      color: $color-black-900;
    }
  }
}
</style>
