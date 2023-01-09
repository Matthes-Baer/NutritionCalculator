<script lang="ts">
import { nutritionStore } from "../../store/store";
import CustomButton from "../ui/CustomButton.vue";

export default {
  data() {
    return {
      nutritionStore,
      amount: 0,
      borderData: this.product.id % 2 == 0 ? "borderRight" : "borderLeft",
    };
  },
  props: ["product"],
  components: { CustomButton },
  // Functions have to be implemented as methods - There is also the opportunity to add such methods directly in the corresponding store.
  methods: {
    addToCurrentNutrition: function (
      kcal: number,
      fat: number,
      carbs: number,
      protein: number,
      name: string
    ) {
      if (!this.amount) {
        alert("Pick a valid gram value");
        return;
      }

      nutritionStore.currentNutrtion.kcal +=
        kcal.toString().length > 3 ? +kcal.toFixed(2) : kcal;
      nutritionStore.currentNutrtion.fat +=
        fat.toString().length > 3 ? +fat.toFixed(2) : fat;
      nutritionStore.currentNutrtion.carbs +=
        carbs.toString().length > 3 ? +carbs.toFixed(2) : carbs;
      nutritionStore.currentNutrtion.protein +=
        protein.toString().length > 3 ? +protein.toFixed(2) : protein;

      this.amount = 0;

      if (!nutritionStore.currentNutrtion.items.find((e) => e === name)) {
        nutritionStore.currentNutrtion.items.push(name);
      }
    },
  },
  mounted() {},
};
</script>
<template>
  <div class="col-md-3 card" :class="borderData">
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h3>{{ product.name }}</h3>

        <div
          @click="
            $router.push({
              name: 'detailPage',
              params: { itemID: product.id },
            })
          "
          class="d-flex align-items-center info-circle"
        >
          <i class="fa-sharp fa-solid fa-circle-info"></i>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center form-group me-4" style="flex: 1">
          <span>gram</span>
          <input class="form-field" type="number" v-model="amount" min="0" />
        </div>
        <div
          style="flex: 1.5; border: 1px solid red"
          class="d-flex align-items-center"
        >
          <CustomButton
            name="Add: "
            :additionalData="product.name"
            icon="fa-solid fa-plus"
            @clicked="
              addToCurrentNutrition(
                (product.values.kcal / 100) * amount,
                (product.values.fat / 100) * amount,
                (product.values.carbs / 100) * amount,
                (product.values.protein / 100) * amount,
                product.name
              )
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../style/customInput.scss";

.product-image {
  max-width: 75px;
  max-height: 75px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 0px #252525;
  margin: 15px;
}

.borderRight {
  border-right: 1px solid var(--accentColor);
}

.borderLeft {
  border-left: 1px solid var(--accentColor);
}
.card {
  /* backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%); */
  background-color: transparent;
  border-radius: 12px;
  border-top: 1px solid var(--accentColor);
  border-style: dashed;
  margin: 15px;
  color: white;
}

.info {
  &-circle {
    transition: all 0.25s;
    cursor: pointer;
  }

  &-circle:hover.info-circle {
    opacity: 0.5;
  }
}
</style>
