<template>
  <div class="w-full lg:w-4/12 px-4">
    <div
      class="
        relative
        flex flex-col
        min-w-0
        break-words
        w-full
        mb-6
        shadow-lg
        rounded-lg
        bg-gray-300
        border-0
      "
    >
      <div class="rounded-t mb-0 px-6 py-6">
        <div class="text-center mb-3">
          <h6 class="text-gray-600 text-sm font-bold">Sign in with</h6>
        </div>
        <div class="btn-wrapper text-center">
          <button
            class="
              bg-white
              active:bg-gray-100
              text-gray-800
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
              text-xs
            "
            type="button"
            style="transition: all 0.15s ease 0s"
          >
            <font-awesome-icon
              class="mr-1"
              size="lg"
              :icon="['fab', 'google']"
            />Google
          </button>
        </div>
        <hr class="mt-6 border-b-1 border-gray-400" />
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <div class="text-gray-500 text-center mb-3 font-bold">
          <small>Or with your credentials</small>
        </div>
        <form @submit.prevent="validate">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
              >Email</label
            ><input
              v-model="email"
              type="email"
              class="
                border-0
                px-3
                py-3
                placeholder-gray-400
                text-gray-700
                bg-white
                rounded
                text-sm
                shadow
                focus:outline-none
                focus:ring
                w-full
              "
              placeholder="Email"
              style="transition: all 0.15s ease 0s"
            />
          </div>
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
              >Password</label
            ><input
              v-model="password"
              type="password"
              class="
                border-0
                px-3
                py-3
                placeholder-gray-400
                text-gray-700
                bg-white
                rounded
                text-sm
                shadow
                focus:outline-none
                focus:ring
                w-full
              "
              placeholder="Password"
              style="transition: all 0.15s ease 0s"
            />
          </div>
          <!-- error message -->
          <div v-if="error" class="text-center mt-2 text-red-500">
            {{ this.error }}
          </div>

          <div class="text-center mt-6">
            <button
              class="
                bg-gray-900
                text-white
                active:bg-gray-700
                text-sm
                font-bold
                uppercase
                px-6
                py-3
                rounded
                shadow
                hover:shadow-lg
                outline-none
                focus:outline-none
                mr-1
                mb-1
                w-full
              "
              type="submit"
              style="transition: all 0.15s ease 0s"
            >
              {{ this.action }}
            </button>
          </div>
        </form>

        <div class="flex flex-wrap mt-6">
          <div class="w-full text-center">
            <router-link
              :to="{ name: this.buttonText }"
              class="text-purple-900"
              >{{ this.buttonText }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "user-form",
  props: ["action"],
  methods: {
    ...mapActions(["signUpAction", "signInAction"]),
    validate() {
      this.error = "";
      if (!this.email) {
        this.error = "E-mail cannot be empty";
      }
      if (!this.password) {
        this.error = "Password cannot be empty";
      }
      if (!this.email && !this.password) {
        this.error = "Please fill all the fields ";
      }
      if (this.error.length <= 0) {
        this.authenticate();
      }
    },
    async authenticate() {
      if (this.action.toLowerCase() == "login") {
        this.signIn();
      } else if (this.action.toLowerCase() == "register") {
        this.signUp();
      }

      this.error = this.getError;
    },
    signUp() {
      this.signUpAction({ email: this.email, password: this.password });
    },
    signIn() {
      this.signInAction({ email: this.email, password: this.password });
    },
  },

  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  computed: {
    ...mapGetters(["getError"]),

    buttonText: function () {
      let buttonName = "";
      if (this.action.toLowerCase() == "login") buttonName = "Register";
      else if (this.action.toLowerCase() == "register") buttonName = "Login";
      return buttonName;
    },
  },
  watch: {
    "$store.state.error": {
      handler() {
        // this.error = this.$store.state.error;
        this.error = this.getError;
      },
    },
  },
};
</script>

<style>
</style>