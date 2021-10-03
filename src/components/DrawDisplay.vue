
<template>
  <div class="p-20">
    <blockquote>
      <p class="text-3xl font-semibold pb-10">Pick 5 numbers</p>
    </blockquote>
    <div class="flex items-center justify-center">
      <DrawNumber v-for="time in 5" :key="time" :id="index" />
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
        type="button"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import DrawNumber from "../components/DrawNumber.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "draw-display",
  data() {
    return {
      numbers: [],
    };
  },
  components: {
    DrawNumber,
  },
  methods: {
    ...mapActions(["addNumbers"]),

    numberExists() {
      // return this.numbers.some((num) => {
      //   return num.id === id;
      // });
      console.log(this.numbers);
    },
  },
  computed: {
    ...mapGetters(["getNumbers"]),
  },
};
</script>

<style>
</style>