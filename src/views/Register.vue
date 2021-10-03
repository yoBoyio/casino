<template>
  <div>
    <main>
      <section class="absolute w-full h-full">
        <div class="absolute top-0 w-full h-full"></div>
        <div class="container mx-auto px-4 h-full">
          <div class="flex content-center items-center justify-center h-full">
            <user-form :action="this.$options.name" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import UserForm from "../components/UserForm.vue";
export default {
  name: "Register",
  components: { UserForm },
};
</script>