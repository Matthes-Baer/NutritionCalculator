<script lang="ts">
import NutritionOverviewVue from "./NutritionOverview.vue";
import NutritionResultVue from "./NutritionResult.vue";
import { nutritionStore } from "@/store/store";

export default {
  data() {
    return {
      nutritionStore,
    };
  },
  props: [],
  components: { NutritionOverviewVue, NutritionResultVue },
  methods: {},
  mounted() {},
};
</script>

<template>
  <NutritionOverviewVue />
  <NutritionResultVue />
  <div v-if="nutritionStore.inputError" class="error-container">
    <h1>ERROR</h1>
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
