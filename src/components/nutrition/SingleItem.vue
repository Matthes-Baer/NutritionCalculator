<script lang="ts">
import { nutritionStore } from "@/store/store";
import CustomButton from "../ui/CustomButton.vue";

export default {
  data() {
    return {
      nutritionStore,
      amount: 0,
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
      nutritionStore.inputError = false;
      if (!this.amount) {
        nutritionStore.inputError = true;
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
  <div class="col-md-3 card">
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
        <div class="d-flex align-items-center custom-button-container">
          <CustomButton
            name="Add"
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

<style scoped lang="scss">
@import "../../style/customInput.scss";

.product-image {
  max-width: 75px;
  max-height: 75px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 0px #252525;
  margin: 15px;
}

.card {
  /* backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%); */
  background-color: transparent;
  border-radius: 12px;
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

.custom-button {
  &-container {
    border: 1px solid var(--accentColor);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    transition: all 0.25s;
    cursor: pointer;
  }
  &-container:hover {
    background-color: var(--accentColor);
    color: var(--darkFontColor);
  }

  &-container:active {
    transform: translateY(5px);
  }
}
</style>
