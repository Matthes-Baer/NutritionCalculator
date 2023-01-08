<script lang="ts">
import router from "@/router";
import { findSpecificItem } from "@/data/items";

export default {
  data() {
    return {
      specificItem: findSpecificItem(
        +router.currentRoute.value.params["itemID"]
      ),
    };
  },
};
</script>

<template>{{ specificItem }}</template>
