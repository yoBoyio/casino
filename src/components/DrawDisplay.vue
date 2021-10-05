<template>
  <div class="p-20">
    <blockquote>
      <p class="text-3xl font-semibold pb-10">Pick 5 numbers</p>
    </blockquote>
    <div class="flex items-center justify-center">
      <DrawNumber
        @myEvent="validateNumbers"
        v-for="index in 5"
        :key="index"
        :id="index"
      />
      <button
        class="
          bg-black
          active:bg-gray-100
          text-white
          font-normal
          px-4
          py-2
          rounded
          outline-none
          focus:outline-none
          mr-2
          mb-1
          uppercase
          shadow
          hover:shadow-md
          inline-flex
          items-center
          font-bold
          text-2xl
        "
        @click="onSubmit"
        type="button"
      >
        Submit
      </button>
    </div>
    <div v-if="errorMessage" class="text-center mt-2 text-red-500">
      {{ this.errorMessage }}
    </div>
  </div>
</template>

<script>
import DrawNumber from "../components/DrawNumber.vue";
import { mapActions } from "vuex";

export default {
  name: "draw-display",
  data() {
    return {
      numberArray: [],
      errorMessage: "",
    };
  },
  components: {
    DrawNumber,
  },
  methods: {
    ...mapActions(["addNumbers"]),

    validateNumbers(number) {
      const value = parseInt(number.value);
      const id = number.id;
      const isUnique = this.numberArray.some((num) => num.value === value);
      const numExists = this.numberExists(id);
      if (!isUnique) {
        if (numExists) {
          const index = this.numberArray.findIndex((num) => num.id == id);
          this.numberArray[index].value = value;
        } else {
          this.numberArray.push({ id: id, value: value });
        }
      }
    },
    numberExists(id) {
      return this.numberArray.some((num) => {
        num.id === id;
      });
    },
    onSubmit() {
      this.errorMessage = "";
      if (this.numberArray.length == 5) {
        this.addNumbers(
          this.numberArray.map((number) => {
            return number;
          })
        );
        this.$router.push({ name: "Draw" });
      } else {
        this.errorMessage = "Select 5 unique numbers";
      }
    },
  },
};
</script>

<style></style>
