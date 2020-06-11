<template>
  <div class="projects" id="app">
    <link
      href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap"
      rel="stylesheet"
    />

    <div class="cards">
      <h3>Here are some of the projects that I have worked on.</h3>
      <b-container fluid>
        <b-card-group deck>
          <b-card
            title="Bookstore CRUD App"
            img-src="../assets/crud.png"
            img-alt="crud app img"
            img-top
            class="mb-2 black"
          >
            <b-card-text>
              This is a create, read, update, delete webapp created using
              NodeJs, ExpressJs, MongoDB, EJS, the purpose of this webapp was to
              manipulate bookstore database for a bookstore client. You can
              check out the code or use this for your own projects, just clone
              it on github.
            </b-card-text>
            <template class="footer" v-slot:footer>
              <b-button variant="outline-success"
                ><b-link
                  href="https://github.com/cliquedev/ejs-client"
                  class="link-style"
                  target="_blank"
                  >Check Code</b-link
                ></b-button
              >
            </template>
          </b-card>

          <b-card
            title="Clique Portfolio Website"
            img-src="../assets/clique.png"
            img-alt="clique img"
            img-top
            class="mb-2 black"
          >
            <b-card-text>
              This website was my first project ever, and I created this with
              HTML/CSS and Bootstrap, used Flexbox, box model and other
              essential CSS properties to make this site responsive.
            </b-card-text>
            <template class="footer" v-slot:footer>
              <b-button variant="outline-success"
                ><b-link
                  href="https://github.com/cliquedev/clique"
                  class="link-style"
                  target="_blank"
                  >Check Code</b-link
                ></b-button
              >
            </template>
          </b-card>

          <b-card
            title="Title"
            img-src=""
            img-alt="Image"
            img-top
            class="mb-2 black"
          >
            <b-card-text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </b-card-text>
            <template class="footer" v-slot:footer>
              <small class="text-muted">Last updated 3 mins ago</small>
            </template>
          </b-card>
        </b-card-group>
      </b-container>
    </div>
  </div>
</template>

<script>
// export default {
//   data: function() {
//     return {
//       isActive: false
//     };
//   },
// };
</script>

<style scoped>
.projects {
  background: #69d5b1;
  padding-bottom: 5rem;
}
h3 {
  color: #747474;
  font-family: "Amatic SC", cursive;
  padding: 1.5em;
}
.card-img-top {
  border-radius: 2rem;
}
.cards {
  margin: 0 1.5rem;
}
.black {
  height: 35rem;
  border-radius: 2rem;
}

.link-style {
  color: green;
  text-decoration: none;
  border-radius: 2rem;
}
.black:hover {
  box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.5);
}
</style>
