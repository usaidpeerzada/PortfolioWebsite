<template>
  <div class="space">
    <link
      href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap"
      rel="stylesheet"
    />
    <div>
      <b-navbar toggleable="lg" type="dark" class="navbar">
        <b-navbar-brand class="brand font-weight-bold"
          >Usaid Peerzada</b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav class="font-weight-bold">
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              ><router-link to="/" class="link">Home</router-link></b-nav-item
            >
            <b-nav-item
              ><router-link to="/projects" class="link"
                >Projects</router-link
              ></b-nav-item
            >
            <b-nav-item
              ><router-link to="/blog" class="link"
                >Blog</router-link
              ></b-nav-item
            >
            <b-nav-item
              ><router-link to="/resume" class="link"
                >Resume</router-link
              ></b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.brand {
  font-family: "Unica One", cursive;
}
.navbar {
  background-color: #028090;
  color: #fff;
}
.link {
  text-decoration: none;
  color: #fff;
}
</style>
