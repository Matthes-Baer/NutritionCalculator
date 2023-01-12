<script lang="ts">
import { nutritionStore } from "@/store/store";
import CustomButton from "../ui/CustomButton.vue";

export default {
  data() {
    return {
      nutritionStore,
      kcal: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
      name: "",
      amount: 0,
      customAdd: true,
      inputAmount: 100,
    };
  },
  methods: {
    addHandler: function (
      kcal: number,
      fat: number,
      carbs: number,
      protein: number,
      name: string,
      amount: number,
      customAdd: boolean
    ) {
      if (!name) {
        nutritionStore.error = { boolean: true, message: "name is missing" };
        return;
      } else if (!amount) {
        nutritionStore.error = {
          boolean: true,
          message: "gram amount is missing",
        };
        return;
      }
      kcal = (kcal / this.inputAmount) * amount;
      fat = (fat / this.inputAmount) * amount;
      carbs = (carbs / this.inputAmount) * amount;
      protein = (protein / this.inputAmount) * amount;
      nutritionStore.addToCurrentNutrition(
        kcal,
        fat,
        carbs,
        protein,
        name,
        amount,
        customAdd
      );
      this.kcal = 0;
      this.fat = 0;
      this.carbs = 0;
      this.protein = 0;
      this.amount = 0;
      this.inputAmount = 100;
      this.name = "";
    },
  },
  mounted() {
    nutritionStore.error = { boolean: false, message: "" };
  },
  components: { CustomButton },
};
</script>

<template>
  <div class="d-flex flex-column">
    <div class="mx-auto mt-3 mb-3 text-center" style="width: 75%">
      Add a custom food product.
      <br />
      Provide the corresponding nutrition values per input gram
      <br />
      (default: per 100g).
    </div>
    <div class="mx-auto d-flex div-main-container" style="width: 75%">
      <div class="form-group me-4" data-aos="fade-up">
        <span>name</span>
        <input class="form-field" type="text" v-model="name" />
      </div>

      <div class="form-group me-4" data-aos="fade-up">
        <span>input gram</span>
        <input class="form-field" type="number" v-model="inputAmount" />
      </div>

      <div class="form-group" data-aos="fade-up">
        <span>gram</span>
        <input class="form-field" type="number" v-model="amount" min="0" />
      </div>
    </div>
    <div class="mx-auto d-flex div-main-container mt-4" style="width: 75%">
      <div class="form-group me-4" data-aos="fade-up">
        <span>kcal</span>
        <input class="form-field" type="number" v-model="kcal" min="0" />
      </div>

      <div class="form-group me-4" data-aos="fade-up">
        <span>fat</span>
        <input class="form-field" type="number" v-model="fat" min="0" />
      </div>

      <div class="form-group me-4" data-aos="fade-up">
        <span>carbs</span>
        <input class="form-field" type="number" v-model="carbs" min="0" />
      </div>

      <div class="form-group" data-aos="fade-up">
        <span>protein</span>
        <input class="form-field" type="number" v-model="protein" min="0" />
      </div>
    </div>
    <div
      @click="addHandler(kcal, fat, carbs, protein, name, amount, customAdd)"
      v-if="name"
      data-aos="fade-up"
      class="custom-button-container mx-auto mt-4"
    >
      <CustomButton
        name="Add"
        icon="fa-solid fa-plus"
        v-bind:additionalData="name"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../style/customInput.scss";

.custom-button {
  &-container {
    border: 1px solid var(--accentColor);
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    min-width: 100px;
    max-width: 50%;
    padding: 10px;
    transition: all 0.25s;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &-container:hover {
    background-color: var(--accentColor);
    color: var(--darkFontColor);
  }

  &-container:active {
    transform: translateY(5px);
  }
}

@media only screen and (max-width: 1280px) {
  .div-main-container {
    flex-direction: column;
  }
}
</style>
