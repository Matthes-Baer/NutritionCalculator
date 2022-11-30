<script lang="ts">
import { store } from "../../store/store";
import items from "../../data/items";
import SingleItem from "./SingleItem.vue";

export default {
  data() {
    return {
      store,
      items: items,
    };
  },
  props: [],
  components: {
    SingleItem,
  },
  methods: {},
  mounted() {},
};
</script>

<template>
  <!-- <div v-for="item in items" :key="item.id">{{ item.name }}</div> -->
  <div>
    <!-- To loop through data with a component the loop has to be integrated in the component while the items within the loop have to be integrated as props in the respective component - v-bind: is identical to : -->
    <SingleItem
      v-for="item in store.itemsData"
      :key="item.id"
      v-bind:product="item"
    />
  </div>
</template>
