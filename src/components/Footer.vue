<template>
  <footer class="fixed w-full bottom-0 bg-gray-500 pb-6">
    <div class="container mx-auto px-4">
      <hr class="mb-6 border-b-1 border-gray-500" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4">
          <div class="text-sm text-white font-semibold py-1">
            Copyright © {{ date }}
            <a
              href="https://github.com/yoBoyio"
              class="text-white hover:text-gray-400 text-sm font-semibold py-1"
              >yoBoyio</a
            >
          </div>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <ul class="flex flex-wrap list-none md:justify-end justify-center">
            <li>
              <a
                href="https://github.com/yoBoyio/casino"
                target="_blank"
                class="
                  text-white
                  hover:text-gray-400
                  text-m
                  font-semibold
                  block
                  py-1
                  px-3
                "
              >
                <font-awesome-icon
                  class="mr-1"
                  size="lg"
                  :icon="['fab', 'github']"
                />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
