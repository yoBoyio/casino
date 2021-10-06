<template>
  <div
    class="
      border-4
      m-auto
      p-1
      rounded
      border-black
      w-1/2
      text-center
      mb-5
    "
    :class="{ 'border-green-300': this.game.status }"
  >
    <div class="mx-2 flex">
      <p class="font-bold">Date:</p>
      {{ game.date.toDate().toDateString() }}
    </div>
    <div class="mx-2 flex">
      <p class="font-bold">Numbers:</p>

      <p
        v-for="draw in game.draws"
        :key="draw"
        class="px-1 font-bold text-red-500"
        :class="{ 'text-green-500': game.winningNumbers.includes(draw) }"
      >
        {{ draw }}
      </p>
    </div>

    <div class="mx-2 flex">
      <p class="font-bold">Status:</p>
      {{ game.status ? "Won" : "Lost" }}
    </div>
    <div class="mx-2 flex flex-grow">
      <p class="font-bold">Total amount:</p>
      {{ game.amount > 0 ? game.amount : 0 }}
    </div>
  </div>
</template>

<script>
export default {
  name: "history-display",
  props: {
    game: [],
  },
};
</script>

<style></style>
