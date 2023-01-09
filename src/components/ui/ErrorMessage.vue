<script lang="ts">
import { nutritionStore } from "@/store/store";

export default {
  data() {
    return {
      nutritionStore,
    };
  },
  mounted() {
    console.log(nutritionStore.error);
  },
};
</script>
<template>
  <div class="error-container">
    <h1>ERROR</h1>
    <div>{{ nutritionStore.error.message }}</div>
    <div @click="nutritionStore.error = { boolean: false, message: '' }">
      EXIT ERROR
    </div>
  </div>
</template>

<style scoped lang="scss">
.error {
  &-container {
    border: 1px solid var(--accentColor);
    padding: 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    opacity: 0;
    animation: errorStartAnimation 1s ease-in-out 0.5s forwards;
    background-color: var(--bodyBackgroundColor);
    z-index: 9000;
  }
}

@keyframes errorStartAnimation {
  0% {
    opacity: 0;
    transform: translateX(-15px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
