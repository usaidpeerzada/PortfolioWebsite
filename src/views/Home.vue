<template>
  <div class="home h-100">
    <link
      href="https://fonts.googleapis.com/css2?family=Alegreya&family=Alegreya+Sans&family=Bungee&family=Merriweather&family=Merriweather+Sans&family=Nunito&family=Nunito+Sans:wght@400;900&family=Quattrocento&family=Quattrocento+Sans&family=Roboto&family=Roboto+Mono&family=Roboto+Slab&display=swap"
      rel="stylesheet"
    />

    <div class="home-div">
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="auto">
          <img class="myAvatar" src="../assets/usaid.png" fluid alt="avatar" />
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center space w">
        <b-col cols="12" md="auto" xs="12">
          <h3>
            Hey There, I'm Usaid, a passionate Full-Stack Developer 👨🏼‍💻 with lots
            of enthusiasm towards photography 📸 and I run on Coffee ☕️
          </h3>
        </b-col>
      </b-row>
    </div>
    <div class="home-div-bottom">
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="auto">
          <a href="https://www.twitter.com/Usaidamin" target="_blank">
            <i class="fab fa-2x fa-twitter"></i
          ></a>
        </b-col>
        <b-col cols="12" md="auto">
          <a
            class="social"
            href="https://www.github.com/usaidpeerzada"
            target="_blank"
            ><i class="fab fa-2x fa-github"></i
          ></a>
        </b-col>
        <b-col cols="12" md="auto">
          <a href="tel:+918825014161" target="_blank"
            ><i class="fab fa-2x fa-whatsapp"></i
          ></a>
        </b-col>
        <b-col cols="12" md="auto">
          <a href="https://t.me/usaidev" target="_blank"
            ><i class="fab fa-2x fa-telegram"></i
          ></a>
        </b-col>
        <b-col cols="12" md="auto">
          <a href="mailto:usaidpeerzada@gmail.com" target="_blank"
            ><i class="fas fa-2x fa-envelope"></i
          ></a>
        </b-col>
        <b-col cols="12" md="auto">
          <a href="https://dev.to/usaidpeerzada" target="_blank"
            ><i class="fab fa-2x fa-dev"></i
          ></a>
        </b-col>
      </b-row>
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
  min-height: 100%;
  height: 100%;
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
.myAvatar {
  width: 10rem;
  margin: 0 auto;
  border-radius: 50%;
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.space {
  padding-top: 10px;
}
.home-div-bottom {
  padding: 5.5rem;
  background-color: #02c39a;
}
a {
  color: #c8e7ff;
}
</style>
