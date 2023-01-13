<script lang="ts">
export default {
  data() {
    return {};
  },
  props: ["nutritionValues", "type", "unit"],
};
</script>

<template>
  <div class="row">
    <div class="col-lg-8">{{ type }}:</div>
    <div class="col-lg-4">{{ nutritionValues?.values[type] }}{{ unit }}</div>
  </div>
</template>
