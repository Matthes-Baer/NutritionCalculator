<script lang="ts">
export default {
  props: {
    name: String,
    icon: String,
    additionalData: String,
  },

  methods: {
    // This method serves the purpose to emit a message to the parent component with "clicked".
    // The parent component listens to that and executes it's corresponding function.
    // clicked() {
    //   this.$emit("clicked");
    // },
    // Prone to error that it doesnt react on every click
  },
};
</script>
<template>
  <div class="d-flex container align-items-center">
    <i :class="icon" class="me-3" style="flex: 1"></i>
    <div style="flex: 4; font-size: small">
      {{ name }}{{ additionalData && additionalData }}
    </div>
  </div>
</template>

<style>
.container {
  width: 100%;
}
</style>
