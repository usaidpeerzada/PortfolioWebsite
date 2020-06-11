<template>
  <div class="home">
    <link
      href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap"
      rel="stylesheet"
    />
    <b-container fluid class="home-top">
      <div class="home-div">
        <b-row class="justify-content-md-center">
          <b-col cols="12" md="auto">
            <img
              class="myAvatar"
              src="../assets/usaid.jpg"
              fluid
              alt="avatar"
            />
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center space">
          <b-col cols="12" md="auto">
            <h3>
              Hey There, I'm Usaid, a fullstack developer, I would love to work
              with you.
            </h3>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <b-container fluid class="home-bottom">
      <div class="home-div-bottom">
        <b-row class="justify-content-md-center">
          <b-col cols="12" md="auto">
            <a
              class="social"
              href="https://www.twitter.com/Usaidamin"
              target="_blank"
            >
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
            <a class="social" href="tel:+918825014161" target="_blank"
              ><i class="fab fa-2x fa-whatsapp"></i
            ></a>
          </b-col>
          <b-col cols="12" md="auto">
            <a class="social" href="https://t.me/usaidev" target="_blank"
              ><i class="fab fa-2x fa-telegram"></i
            ></a>
          </b-col>
          <b-col cols="12" md="auto">
            <a
              class="social"
              href="mailto:usaidpeerzada@gmail.com"
              target="_blank"
              ><i class="fas fa-2x fa-envelope"></i
            ></a>
          </b-col>
        </b-row>
      </div>
    </b-container>
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
}
h3 {
  padding-top: 20px;
  color: white;
  font-family: "Amatic SC", cursive;
  font-weight: bolder;
}
.home-top {
  background-color: #69d5b1;
}
.home-div {
  padding: 8rem;
}
.myAvatar {
  width: 10rem;
  margin: 0 auto;
  border-radius: 50%;
}
.space {
  padding-top: 10px;
}
.home-bottom {
  background-color: #e6f5f0;
}
.home-div-bottom {
  padding: 5.5rem;
}
.social {
  color: #8ee4af;
}
</style>
