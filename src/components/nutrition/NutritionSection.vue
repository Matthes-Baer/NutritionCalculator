<script lang="ts">
import NutritionOverviewVue from "./NutritionOverview.vue";
import NutritionResultVue from "./NutritionResult.vue";

export default {
  data() {
    return {};
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
</template>
