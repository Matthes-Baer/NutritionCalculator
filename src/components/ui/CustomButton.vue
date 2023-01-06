<script lang="ts">
export default {
  props: ["name"],

  methods: {
    // This method serves the purpose to emit a message to the parent component with "clicked".
    // The parent component listens to that and executes it's corresponding function.
    clicked() {
      this.$emit("clicked");
    },
  },
};
</script>
<template>
  <div @click="clicked">
    <i class="fa-solid fa-plus"></i>
    <p>{{ name }}</p>
  </div>
</template>
