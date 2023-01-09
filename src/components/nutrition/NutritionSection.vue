<script lang="ts">
import NutritionOverviewVue from "./NutritionOverview.vue";
import NutritionResultVue from "./NutritionResult.vue";
import { nutritionStore } from "@/store/store";
import ErrorMessageVue from "../ui/ErrorMessage.vue";

export default {
  data() {
    return {
      nutritionStore,
    };
  },
  props: [],
  components: { NutritionOverviewVue, NutritionResultVue, ErrorMessageVue },
  methods: {},
  mounted() {},
};
</script>

<template>
  <NutritionOverviewVue />
  <NutritionResultVue />
  <ErrorMessageVue v-if="nutritionStore.error.boolean" />
</template>
