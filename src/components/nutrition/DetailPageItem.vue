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
  methods: {
    getImageUrl: (name: string) => {
      return new URL(`../../assets/images/${name}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div v-if="specificItem?.image">
    <img :src="getImageUrl(specificItem.image)" />
  </div>
</template>
