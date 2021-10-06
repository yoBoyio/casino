<template>
  <figure class="bg-gray-100 rounded-xl p-8">
    <history-dislay
      v-for="(game, index) in history"
      :key="index"
      :game="game"
    />
  </figure>
</template>

<script>
import { mapGetters } from "vuex";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import HistoryDislay from "../components/HistoryDisplay.vue";
export default {
  components: { HistoryDislay },
  async created() {
    const db = getFirestore();

    const user = this.getUser.email;
    const querySnapshot = await getDocs(collection(db, "history"));
    querySnapshot.forEach((doc) => {
      if (doc.data().user == user) {
        this.history.push(doc.data());
      }
    });
  },
  data() {
    return {
      history: [],
    };
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"]),
  },
};
</script>

<style></style>
