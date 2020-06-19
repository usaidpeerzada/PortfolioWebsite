<template>
  <div id="app">
    <div class="projects">
      <link
        href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap"
        rel="stylesheet"
      />
      <div class="cards h-100">
        <h3>Here are some of the projects that I have worked on.</h3>
        <b-container fluid>
          <b-card-group deck>
            <b-card
              title="Bookstore CRUD App"
              img-src="../assets/crud.png"
              img-alt="crud app img"
              img-top
              class="black"
            >
              <b-card-text class="text-color">
                This is a create, read, update, delete webapp created using
                NodeJs, ExpressJs, MongoDB, EJS. You can check out the code or
                use this for your own projects, just clone it on github.
              </b-card-text>
              <template class="footer" v-slot:footer>
                <b-button
                  ><b-link
                    href="https://github.com/cliquedev/ejs-client"
                    target="_blank"
                    >View Code</b-link
                  ></b-button
                >
              </template>
            </b-card>

            <b-card
              title="Clique Portfolio Website"
              img-src="../assets/clique.png"
              img-alt="clique img"
              img-top
              class="black"
            >
              <b-card-text class="text-color">
                This website was my first project ever, and I created this with
                HTML/CSS and Bootstrap, used Flexbox, box model and other
                essential CSS properties to make this site responsive.
              </b-card-text>
              <template class="footer" v-slot:footer>
                <b-button
                  ><b-link
                    href="https://github.com/cliquedev/clique"
                    target="_blank"
                    >View Code</b-link
                  ></b-button
                >
              </template>
            </b-card>

            <b-card
              title="Portfolio Website"
              img-src="../assets/portfolioWebsite.png"
              img-alt="website screenshot"
              img-top
              class="black"
            >
              <b-card-text class="text-color">
                This webapp has been created using VueJs, a javascript
                framework, I have implemented <em>Vue Router</em> and other key
                concepts of VueJs in this project.
              </b-card-text>
              <template class="footer" v-slot:footer>
                <b-button
                  ><b-link
                    href="https://github.com/usaidpeerzada/PortfolioWebsite"
                    target="_blank"
                    >View Code</b-link
                  ></b-button
                >
              </template>
            </b-card>
          </b-card-group>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.projects {
  background: #d9f4ff;
  padding-bottom: 7rem;
  color: #747474;
}
h3 {
  font-family: "Amatic SC", cursive;
  padding: 1.5em;
}
.cards {
  margin: 0 1.8rem;
}
.black {
  height: 28rem;
  border-radius: 0.5rem;
  transition: all 0.2s linear;
}
button {
  color: white;
  background: #028090;
  border: 0;
}
button:hover {
  background: #028090;
}
img {
  border-radius: 0.5rem;
}
a {
  color: white;
  text-decoration: none;
}
.black:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>
