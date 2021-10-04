<template>
  <div class="flex-auto justify-items-center">
    <div v-for="number in numbers" :key="number">{{ number }}</div>
  </div>
</template>

<script>
export default {
  name: "Draw",
  components: {},
  data() {
    return {
      randomNumbers: [],
      finished: false,
    };
  },
  methods: {
    async getRandomNumbers(timer) {
      for (var i = 0; i < 5; i++) {
        await timer(4000);
        var randomNumber = this.generateRandom();
        this.randomNumbers.push(randomNumber);
        const card = this.$refs.draws.$refs.card[i];
        const input = card.$refs.input;
        input.value = randomNumber;
        if (this.checkNumber(randomNumber)) {
          card.$el.classList.value =
            card.$el.classList.value + " border-green-600 ";
          console.log("green", card.$el.classList);
        } else {
          card.$el.classList.value =
            card.$el.classList.value + " border-red-600 ";
        }
        card.$el.classList.value = card.$el.classList.value + " border-4 ";
      }
      await timer(3000);
      this.finished = true;
    },
    generateRandom() {
      var randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * 30) + 1;
      } while (this.randomNumbers.includes(randomNumber));
      return randomNumber;
    },
    checkNumber(number) {
      if (this.getSpecificNumber(number).length >= 1) {
        this.winningNumbers.push(number);
        return true;
      }
      return false;
    },
  },
};
</script>

<style></style>
