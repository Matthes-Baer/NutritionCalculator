<script lang="ts">
import { store } from "../../store/store";
export default {
  data() {
    return {
      store,
    };
  },
  props: ["product"],
  components: {},
  methods: {},
  mounted() {
    console.log(this.product);
  },
};
</script>
<template>
  <div>{{ product.name }}</div>
</template>
