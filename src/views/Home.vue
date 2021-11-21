<template>
  <div>
    <div id="app" class="flex flex-col h-screen justify-between">
      <div class="relative bg-white overflow-hidden">
        <div class="max-w-screen-xl mx-auto">
          <div
            class="
              relative
              lg:h-screen
              sm:h-screen
              z-10
              pb-8
              bg-white
              lg:max-w-2xl lg:w-full lg:pb-28
              xl:pb-32
            "
          >
            <svg
              class="
                hidden
                lg:block
                absolute
                right-0
                inset-y-0
                h-full
                w-48
                text-white
                transform
                translate-x-1/2
              "
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                class="
                  relative
                  flex
                  items-center
                  justify-between
                  sm:h-10
                  lg:justify-start
                "
              >
                <div
                  class="
                    flex
                    items-center
                    flex-grow flex-shrink-0
                    lg:flex-grow-0
                  "
                >
                  <div
                    class="flex items-center justify-between w-full md:w-auto"
                  >
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
                        class="
                          inline-flex
                          items-center
                          justify-center
                          p-2
                          rounded-md
                          text-gray-400
                          hover:text-gray-500 hover:bg-gray-100
                          focus:outline-none
                          focus:bg-gray-100
                          focus:text-gray-500
                          transition
                          duration-150
                          ease-in-out
                        "
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
                    class="
                      font-medium
                      text-teal-500
                      hover:text-teal-900
                      transition
                      duration-150
                      ease-in-out
                    "
                    >Home</router-link
                  >
                  <router-link
                    to="/projects"
                    class="
                      ml-8
                      font-medium
                      text-teal-500
                      hover:text-teal-900
                      transition
                      duration-150
                      ease-in-out
                    "
                    >Projects</router-link
                  >
                  <router-link
                    to="/blog"
                    target="_blank"
                    v-on:click="beforeEnter"
                    class="
                      ml-8
                      font-medium
                      text-teal-500
                      hover:text-teal-900
                      transition
                      duration-150
                      ease-in-out
                    "
                    >Blog</router-link
                  >
                  <router-link
                    to="/resume"
                    class="
                      ml-8
                      font-medium
                      text-teal-500
                      hover:text-teal-900
                      transition
                      duration-150
                      ease-in-out
                    "
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
              class="
                absolute
                top-0
                inset-x-0
                p-2
                transition
                transform
                origin-top-right
                md:hidden
              "
            >
              <div class="rounded-lg shadow-md">
                <div
                  class="rounded-lg bg-white shadow-xs overflow-hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="main-menu"
                >
                  <div class="px-5 pt-4 flex items-center justify-between">
                    <div class="flex-shrink-0 pb-3">
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
                        class="
                          inline-flex
                          items-center
                          justify-center
                          p-2
                          mb-3
                          rounded-md
                          text-gray-400
                          hover:text-gray-500 hover:bg-gray-100
                          focus:outline-none
                          focus:bg-gray-100
                          focus:text-gray-500
                          transition
                          duration-150
                          ease-in-out
                        "
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
                  <div
                    :class="isOpen ? 'block' : 'hidden'"
                    class="px-2 pt-2 pb-3"
                  >
                    <router-link
                      to="/"
                      class="
                        mt-1
                        block
                        px-3
                        py-2
                        rounded-md
                        text-base
                        font-medium
                        text-teal-500
                        hover:text-teal-300 hover:bg-gray-50
                        focus:outline-none focus:text-gray-900 focus:bg-gray-50
                        transition
                        duration-150
                        ease-in-out
                      "
                      >Home</router-link
                    >
                    <router-link
                      to="/projects"
                      class="
                        mt-1
                        block
                        px-3
                        py-2
                        rounded-md
                        text-base
                        font-medium
                        text-teal-500
                        hover:text-teal-300 hover:bg-gray-50
                        focus:outline-none focus:text-gray-900 focus:bg-gray-50
                        transition
                        duration-150
                        ease-in-out
                      "
                      >Projects</router-link
                    >
                    <router-link
                      to="/blog"
                      class="
                        mt-1
                        block
                        px-3
                        py-2
                        rounded-md
                        text-base
                        font-medium
                        text-teal-500
                        hover:text-teal-300 hover:bg-gray-50
                        focus:outline-none focus:text-gray-900 focus:bg-gray-50
                        transition
                        duration-150
                        ease-in-out
                      "
                      >Blog</router-link
                    >
                    <router-link
                      to="/resume"
                      class="
                        mt-1
                        block
                        px-3
                        py-2
                        rounded-md
                        text-base
                        font-medium
                        text-teal-500
                        hover:text-teal-300 hover:bg-gray-50
                        focus:outline-none focus:text-gray-900 focus:bg-gray-50
                        transition
                        duration-150
                        ease-in-out
                      "
                    >
                      Resume
                    </router-link>
                  </div>
                </div>
              </div>
            </div>

            <main
              class="
                mt-10
                mx-auto
                max-w-screen-xl
                px-4
                sm:mt-12 sm:px-6
                md:mt-16
                lg:mt-20 lg:px-8
                xl:mt-28
              "
            >
              <div class="sm:text-center lg:text-left">
                <h5 class="text-2xl text-teal-400 tracking-tight">Hi, I'm</h5>
                <h3
                  class="
                    text-4xl
                    tracking-tight
                    leading-10
                    font-extrabold
                    text-teal-600
                    sm:text-5xl sm:leading-none
                    md:text-6xl
                  "
                >
                  Usaid,
                </h3>
                <h5
                  class="
                    underline
                    font-medium
                    text-2xl text-teal-400
                    tracking-tight
                  "
                >
                  a full stack developer.
                </h5>
                <p
                  class="
                    mt-3
                    text-base
                    font-medium
                    text-gray-500
                    sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
                    md:mt-5 md:text-xl
                    lg:mx-0
                  "
                >
                  I love my laptop and coffee, passionate about coding and
                  learning new things.
                </p>
                <p
                  class="
                    mt-3
                    text-base
                    font-semibold
                    text-gray-500
                    sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
                    md:mt-5 md:text-xl
                    lg:mx-0
                  "
                >
                  Want to work with me? Hit the mail button and let's chat!
                </p>
                <div
                  class="
                    mt-5
                    sm:mt-8 sm:flex sm:justify-center
                    lg:justify-start
                  "
                >
                  <div class="rounded-md shadow">
                    <a
                      href="mailto:usaidpeerzada@gmail.com"
                      class="
                        w-full
                        flex
                        items-center
                        justify-center
                        px-8
                        py-3
                        border border-transparent
                        text-base
                        leading-6
                        font-medium
                        rounded-md
                        text-white
                        bg-teal-600
                        hover:bg-teal-500
                        focus:outline-none
                        focus:border-teal-700
                        focus:shadow-outline-teal
                        transition
                        duration-150
                        ease-in-out
                        md:py-4 md:text-lg md:px-10
                      "
                      target="_blank"
                    >
                      Mail
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="https://www.github.com/usaidpeerzada"
                      class="
                        w-full
                        flex
                        items-center
                        justify-center
                        px-8
                        py-3
                        border border-transparent
                        text-base
                        leading-6
                        font-medium
                        rounded-md
                        text-teal-500
                        bg-teal-300
                        hover:text-teal-600 hover:bg-teal-200
                        focus:outline-none
                        focus:shadow-outline-teal
                        focus:border-teal-300
                        transition
                        duration-150
                        ease-in-out
                        md:py-4 md:text-lg md:px-10
                      "
                      target="_blank"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            class="h-66 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="../assets/main.png"
            alt=""
          />
        </div>
      </div>
      <div class="">
        <div class="bg-teal-300 mb-12">
          <div class="flex flex-row justify-center m-auto p-auto">
            <div class="text-center px-1 py-2 m-2">
              <a href="https://www.twitter.com/Usaidamin" target="_blank">
                <i class="fab fa-2x fa-twitter text-teal-600"></i
              ></a>
            </div>
            <div class="text-gray-700 text-center px-1 py-2 m-2">
              <a href="https://t.me/usaidev" target="_blank"
                ><i class="fab fa-2x fa-telegram text-teal-600"></i
              ></a>
            </div>
            <div class="text-gray-700 text-center px-1 py-2 m-2">
              <a href="https://dev.to/usaidpeerzada" target="_blank"
                ><i class="fab fa-2x fa-dev text-teal-600"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return { isOpen: false };
  },
};
</script>

<style scoped>
.home {
  background-color: #00a896;
}

.home-div {
  padding: 8rem;
}

.home-div-bottom {
  padding: 5.5rem;
  background-color: #02c39a;
}
</style>
