<template>
  <div class="home">
    <link
      href="https://fonts.googleapis.com/css2?family=Alegreya&family=Alegreya+Sans&family=Bungee&family=Merriweather&family=Merriweather+Sans&family=Nunito&family=Nunito+Sans:wght@400;900&family=Quattrocento&family=Quattrocento+Sans&family=Roboto&family=Roboto+Mono&family=Roboto+Slab&display=swap"
      rel="stylesheet"
    />

    <div class="container mx-auto home-div text-center">
      <div class="md:flex center ">
        <div class="md:flex-shrink-0">
          <img
            class="rounded-lg md:w-56"
            src="../assets/usaid.png"
            alt="avatar"
          />
        </div>
        <div class="mt-4 md:mt-0 md:ml-6 p-4">
          <div class="uppercase tracking-wide text-sm text-gray-200 font-bold">
            Hi, I'm Usaid
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
            >I'm a Full Stack Developer</a
          >
          <p class="mt-2 text-gray-200 text-md -mx-12">
            I love my laptop and coffee, passionate about coding and learning
            new things, somedays I click pictures of beautiful nature.
          </p>
        </div>
      </div>
    </div>
    <div class="home-div-bottom">
      <div class="flex flex-row justify-center">
        <div class="text-gray-700 text-center px-1 py-2 m-2">
          <a href="https://www.twitter.com/Usaidamin" target="_blank">
            <i class="fab fa-2x fa-twitter"></i
          ></a>
        </div>
        <div class="text-gray-700 text-center px-1 py-2 m-2">
          <a
            class="social"
            href="https://www.github.com/usaidpeerzada"
            target="_blank"
            ><i class="fab fa-2x fa-github"></i
          ></a>
        </div>
        <div class="text-gray-700 text-center px-1 py-2 m-2">
          <a href="tel:+918825014161" target="_blank"
            ><i class="fab fa-2x fa-whatsapp"></i
          ></a>
        </div>
        <div class="text-gray-700 text-center px-1 py-2 m-2">
          <a href="https://t.me/usaidev" target="_blank"
            ><i class="fab fa-2x fa-telegram"></i
          ></a>
        </div>
        <div class="text-gray-700 text-center px-1 py-2 m-2">
          <a href="mailto:usaidpeerzada@gmail.com" target="_blank"
            ><i class="fas fa-2x fa-envelope"></i
          ></a>
        </div>
        <div class="text-gray-700 text-center px-1 py-2 m-2">
          <a href="https://dev.to/usaidpeerzada" target="_blank"
            ><i class="fab fa-2x fa-dev"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      hover: false
    };
  }
};
</script>
<style scoped>
.home {
  background-color: #00a896;
}
h3 {
  padding-top: 20px;
  color: white;
  font-family: "Nunito Sans", sans-serif;
}
.home-div {
  padding: 8rem;
}
.home-div-bottom {
  padding: 5.5rem;
  background-color: #02c39a;
}
a {
  color: #c8e7ff;
}
</style>
