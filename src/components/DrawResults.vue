<template>
  <div class=" justify-center items-center m-20 text-xl">
    <p lass="w-full text-center  ">
      {{ this.winningNumbers.length }}/5 Numbers.<br />
      <span v-if="price > 0" class=" text-green-600">
        Congratulation you won {{ price }} &#36;
      </span>
      <span v-else class=" text-red-600">
        Good luck next time
      </span>
    </p>
    <div class="mt-10">
      <router-link to="/">
        <button
          class="
          bg-black
          active:bg-gray-100
          text-white
          font-normal
          p-3
          rounded
          outline-none
          focus:outline-none
          mr-2
          mb-1
          uppercase
          shadow
          hover:bg-gray-300
          inline-flex
          items-center
          font-bold
          text-xl mr-5
          "
        >
          Play again
        </button>
      </router-link>
      <button
        class="
          bg-green-600
          active:bg-gray-100
          text-white
          font-normal
          p-3
          rounded
          outline-none
          focus:outline-none
          mr-2
          mb-1
          uppercase
          shadow
          hover:bg-green-300
          inline-flex
          items-center
          font-bold
          text-xl mr-5
          "
        @click="saveHistory"
      >
        Save game
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "draw-results",
  props: {
    winningNumbers: [],
  },
  data() {
    return {
      price: 0,
    };
  },
  mounted() {
    switch (this.winningNumbers.length) {
      case 3:
        this.price = 5;
        break;
      case 4:
        this.price = 10;
        break;
      case 5:
        this.price = 20;
        break;
      default:
        this.price = 0;
        break;
    }
  },
  methods: {
    saveHistory() {
      this.$emit("save", this.price);
    },
  },
};
</script>

<style></style>
