<template>
  <figure class="bg-gray-100 rounded-xl p-8">
    <div class="fa-3x font-bold">
      <i class="fas fa-hand-holding-usd"></i>
      Casino live Draw
    </div>
    <div v-if="start && !finished">
      <div class="">
        <h1 class="p-5 text-xl">Lucky numbers</h1>
        <ul id="luckyNum" class=" flex justify-center">
          <li
            v-for="luckyNum in 5"
            :key="luckyNum"
            :class="[
              'm-5',
              'w-14',
              'h-14',
              'text-2xl',
              'pt-3',
              'text-center',
              'border-2',
              'border-black',
            ]"
          ></li>
        </ul>
      </div>
      <div class="">
        <h1 class="pt-10 text-xl">My numbers</h1>
        <ul id="myNum" class=" flex justify-center">
          <li
            v-for="number in getNumbers"
            :key="number.id"
            :class="[
              'm-5',
              'w-14',
              'h-14',
              'text-2xl',
              'pt-3',
              'text-center',
              'border-2',
              'border-black',
            ]"
          >
            {{ number.value }}
          </li>
        </ul>
      </div>
    </div>

    <div v-else-if="!start && finished">
      <draw-results @save="saveGame" :winningNumbers="this.winningNumbers" />
    </div>

    <div v-else>
      <h1 class="pt-10 text-xl">Play from home</h1>
    </div>
  </figure>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DrawResults from "../components/DrawResults.vue";

import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";

export default {
  name: "Draw",
  components: { DrawResults },
  data() {
    return {
      randomNumbers: [],
      winningNumbers: [],
      start: false,
      finished: false,
    };
  },
  mounted() {
    if (this.getNumbers.length != 0) {
      this.start = true;
      setTimeout(() => {
        const timer = (ms) => new Promise((res) => setTimeout(res, ms));
        this.getRandomNumbers(timer);
      }, 3000);
    }
  },
  methods: {
    ...mapActions(["deleteNumbers"]),

    async getRandomNumbers(timer) {
      for (var i = 0; i < 5; i++) {
        await timer(4000);
        console.log("loop");
        var randomNumber = this.generateRandom();
        this.randomNumbers.push(randomNumber);
        const li = document.getElementById("luckyNum").querySelectorAll("li")[
          i
        ];
        li.innerText = randomNumber;
        li.value = randomNumber;

        if (this.checkNumber(randomNumber)) {
          li.classList.value += " border-green-600 ";
        } else {
          li.classList.value += " border-red-600 ";
        }
        li.classList.value += " border-4 ";
      }
      await timer(3000);
      this.start = false;
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
    async saveGame(price) {
      const db = getFirestore();
      var user = this.getUser.email;
      try {
        const docRef = await addDoc(collection(db, "history"), {
          amount: price,
          draws: this.randomNumbers,
          status: price > 0 ? true : false,
          user: user,
          date: Timestamp.fromDate(new Date()),
          playedNumbers: this.getNumbers,
          winningNumbers: this.winningNumbers,
        });
        alert(`Game ${docRef.id} was saved to history.`),
          this.$router.push("/");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
  computed: {
    ...mapGetters(["getNumbers", "getSpecificNumber", "getUser"]),
  },
  destroyed() {
    this.deleteNumbers();
    this.start = false;
    this.finished = true;
  },
};
</script>

<style></style>
