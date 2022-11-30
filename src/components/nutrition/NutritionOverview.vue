<script lang="ts">
import { store } from "../../store/store";
import items from "../../data/items";

export default {
  data() {
    return {
      store,
      items: items,
    };
  },
  props: [],
  components: {},
  methods: {},
  mounted() {},
};
</script>

<template>
  <div v-for="item in items" :key="item.id">{{ item.name }}</div>
  <div v-for="item in store.itemsData" :key="item.id">{{ item.name }}</div>
</template>
