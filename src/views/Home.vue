<template>
  <figure class="bg-gray-100 rounded-xl p-8">
    <div class="fa-3x font-bold">
      <i class="fas fa-hand-holding-usd"></i>
      Casino live Bet
    </div>
    <draw-display v-if="isUserAuth" />
    <div v-else class="pt-6 md:p-8 text-center text-2xl space-y-4">
      <router-link class="text-blue-700 font-semibold" :to="{ name: 'Login' }">
        Login
      </router-link>
      and play
    </div>
  </figure>
</template>

<script>
import DrawDisplay from "../components/DrawDisplay.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: { DrawDisplay },
  data() {
    return {
      numbers: [],
    };
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"]),
  },
  methods: {},
};
</script>

<style>
</style>