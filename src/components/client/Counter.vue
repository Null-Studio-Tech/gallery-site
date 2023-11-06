<script setup lang="ts">
import { ref } from "vue";

const counter = ref(0);

const onClickAdd = () => {
  counter.value++;
};
</script>

<template>
  <p class="">
    count: <span>{{ counter }}</span>
  </p>
  <button class="border border-solid border-white px-3" @click="onClickAdd">
    add
  </button>
</template>
