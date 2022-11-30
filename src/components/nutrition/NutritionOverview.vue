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

  <div>
    Derzeit kann einem bestimmten Food-Item im Nachhinein nicht anerkannt
    werden, wie viel Nährwerte diesem Item zuzuweisen sind. Um eine solche Logik
    zu implementieren, bräuchte man einen state mit Array, das jedes Food-Item
    auflistet und jeweilig spezifisch/individuell die dazugehörigen Werte
    zuweist
    <h3>Es sollte von Kommazahlen abgewichen werden.</h3>
  </div>

  <h3>Current Nutrition values</h3>
  <h4>Kcal: {{ store.currentNutrtion.kcal }}</h4>
  <h4>Fat: {{ store.currentNutrtion.fat }}</h4>
  <h4>Sugar: {{ store.currentNutrtion.sugar }}</h4>
  <h4>Proteine: {{ store.currentNutrtion.proteine }}</h4>
  <div v-for="(item, index) in store.currentNutrtion.items" :key="index">
    {{ item }}
  </div>
</template>
