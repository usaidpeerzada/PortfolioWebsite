<template>
  <div>
    <div
      class="relative z-10 pb-2 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-2 xl:pb-2"
    >
      <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          class="relative flex items-center justify-between sm:h-10 lg:justify-start"
        >
          <div
            class="flex items-center  flex-grow flex-shrink-0 lg:flex-grow-0"
          >
            <div class="flex items-center justify-between w-full md:w-auto">
              <div class="flex-shrink-0">
                <img
                  class="h-8 w-8"
                  src="../assets/logo.png"
                  alt="Workflow logo"
                />
              </div>

              <div class="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                >
                  <svg
                    class="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:block md:ml-10 md:pr-4">
            <router-link
              to="/"
              class="font-medium text-teal-500 hover:text-teal-900 transition duration-150 ease-in-out"
              >Home
            </router-link>
            <router-link
              to="/projects"
              class=" ml-8 font-medium text-teal-500 hover:text-teal-900 transition duration-150 ease-in-out"
              >Projects
            </router-link>
            <router-link
              to="/blog"
              target= '_blank'
              class="ml-8 font-medium text-teal-500 hover:text-teal-900 transition duration-150 ease-in-out"
            >
            Blog
            </router-link>
            <router-link
              to="/resume"
              class="ml-8 font-medium text-teal-500 hover:text-teal-900 transition duration-150 ease-in-out"
            >
              Resume
            </router-link>
          </div>
        </nav>
      </div>

      <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
      <div
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div class="rounded-lg shadow-md">
          <div
            class="rounded-lg bg-white shadow-xs overflow-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div class="px-5 pt-3 flex items-center justify-between">
              <div class="flex-shrink-0 pb-2">
                <img
                  class="h-8 w-8"
                  src="../assets/logo.png"
                  alt="Workflow logo"
                />
              </div>
              <div class="-mr-2">
                <button
                  @click="isOpen = !isOpen"
                  type="button"
                  class="inline-flex items-center justify-center p-2 mb-3 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Close menu"
                >
                  <svg
                    class="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      v-if="isOpen"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                    <path
                      v-if="!isOpen"
                      fill-rule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-3">
              <router-link
                to="/"
                class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-teal-500 hover:text-teal-300 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                Home</router-link
              >
              <router-link
                to="/projects"
                class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-teal-500 hover:text-teal-300 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                Projects</router-link
              >
              <router-link
                to="/resume"
                class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-teal-500 hover:text-teal-300 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                Resume
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
