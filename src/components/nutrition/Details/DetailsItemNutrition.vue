<script lang="ts">
export default {
  data() {
    return {};
  },
  props: ["nutritionValues", "type", "unit"],
};
</script>

<template>
  <div class="d-flex justify-content-between">
    <div>{{ type }}:</div>
    <div>{{ nutritionValues?.values[type] }}{{ unit }}</div>
  </div>
</template>
