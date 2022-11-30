<script lang="ts">
// defineProps<{ data: string }>();

import { store } from "../store/store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <!-- <div>{{ data }}</div> -->
  <h2>{{ store.count }}</h2>
</template>
