<template>
  <div class="p-5">
    <div class="dropdown inline-block relative">
      <select
        class="w-14 h-14 text-2xl text-center border-2 border-black"
        name="luckyNums"
        id="luckyNums"
      >
        <option
          @blur="numberCheck"
          class="text-2xl"
          v-for="number in numbers"
          :key="number"
          value="number"
        >
          {{ number }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
  },
  data() {
    return {
      numbers: 30,
    };
  },
  methods: {
    numberCheck() {
      this.$emit("number-check", {
        value: this.$refs.input.value,
        id: this.id,
      });
    },
  },
};
</script>

<style>
</style>