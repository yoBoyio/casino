<template>
  <div class="navbar-end">
    <div class="navbar-item">
      <div id="nav">
        <router-link v-for="item of displayMenu" :key="item.name" :to="item.to">
          {{ item.name }}
        </router-link>
        <button v-on:click="signOutAction" v-if="isUserAuth">Logout</button>
      </div>
      <span class="text-left   text-xl" v-if="isUserAuth"
        >Welcome {{ getUser.email }}</span
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["signOutAction"]),
  },
  data() {
    return {
      navItems: [
        { name: "Home", to: { name: "Home" } },
        { name: "Draw", to: { name: "Draw" } },
        { name: "History", to: { name: "History" } },
        { name: "Login", to: { name: "Login" } },
        { name: "Register", to: { name: "Register" } },
      ],
    };
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"]),
    displayMenu() {
      if (this.isUserAuth) {
        return this.navItems.slice(0, 3);
      }

      return this.navItems;
    },
  },
};
</script>
<style scoped>
#nav {
  padding: 30px;
  justify-content: center;
  display: flex;
}

#nav a,
button {
  font-weight: bold;
  font-size: 1.2rem;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  /* color: #fc466b; */
  background: rgb(252, 70, 107, 0.14);
  border-radius: 18px;
}
</style>
