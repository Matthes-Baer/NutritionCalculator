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
    <div class="col-lg-8 type">{{ type }}:</div>
    <div class="col-lg-4 value">
      {{ nutritionValues?.values[type] }}{{ unit }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.value {
  margin-right: 0;
}
</style>
