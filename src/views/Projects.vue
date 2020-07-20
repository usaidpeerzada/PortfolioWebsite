<template>
  <div class="container mx-auto px-5 mb-0 projects">
    <NavBar />
    <link
      href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap"
      rel="stylesheet"
    />
    <h3 class="p-4 font-large">
      Here are some of the projects that I have worked on.
    </h3>

    <div class="flex flex-wrap ">
      <div class="mb-4 flex pl-4">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-teal-100">
          <img class="w-full" src="../assets/crud.png" alt="crud app img" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Bookstore CRUD App</div>
            <p class="text-gray-700 text-base">
              This is a create, read, update, delete webapp created using
              NodeJs, ExpressJs, MongoDB, EJS. You can check out the code or use
              this for your own projects, just clone it on github.
            </p>
          </div>
          <div class="px-6 py-4">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >#NodeJS</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >#MongoDB</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              >#EJS</span
            >
            <button class="text-white font-bold py-2 px-4 rounded-full">
              <a
                href="https://github.com/usaidpeerzada/Bookstore-CRUD-App"
                target="_blank"
                >View Code
              </a>
            </button>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-auto mb-4 pl-4">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-teal-100">
          <img class="w-full" src="../assets/clique.png" alt="crud app img" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 ">
              Clique Portfolio Website
            </div>
            <p class="text-gray-700 text-base">
              This website was my first project ever, and I created this with
              HTML/CSS and Bootstrap, used Flexbox, box model and other
              essential CSS properties to make this site responsive.
            </p>
          </div>
          <div class="px-6 py-4">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >#HTML</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >#CSS</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              >#Bootstrap</span
            >
            <button class="text-white font-bold py-2 px-4 rounded-full">
              <a href="https://github.com/cliquedev/clique" target="_blank"
                >View Code
              </a>
            </button>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-auto mb-2 pl-4">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-teal-100">
          <img
            class="w-full"
            src="../assets/portfolioWebsite.png"
            alt="website screenshot"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Portfolio Website</div>
            <p class="text-gray-700 text-base">
              This webapp has been created using VueJs, a javascript framework,
              I have implemented <em>Vue Router</em> and other key concepts of
              VueJs in this project.
            </p>
          </div>
          <div class="px-6 py-4">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >#VueJS</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >#TailwindCSS</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              >#Axios</span
            >
            <button class="text-white font-bold py-2 px-4 rounded-full">
              <a
                href="https://github.com/usaidpeerzada/PortfolioWebsite"
                target="_blank"
                >View Code
              </a>
            </button>
          </div>
        </div>
      </div>
      <!-- New Projects Start -->
      <div class="w-full lg:w-auto mb-4 pl-4">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-teal-100">
          <img
            class="w-full"
            src="../assets/reactClone.png"
            alt="react app img"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 ">
              Google Keep Clone using ReactJs
            </div>
            <p class="text-gray-700 text-base">
              This is a google keep notes clone webapp creted in ReactJs, It
              uses some core concepts of ReactJs Framework.
            </p>
          </div>
          <div class="px-6 py-4">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >#ReactJs</span
            >
            <br />
            <button class="text-white font-bold py-2 px-4 rounded-full">
              <a
                href="https://github.com/usaidpeerzada/GoogleKeepClone-ReactJs"
                target="_blank"
                >View Code
              </a>
            </button>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-auto mb-4 pl-4">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-teal-100">
          <img class="w-full" src="../assets/todo.png" alt="todo app img" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 ">
              ToDo WebApp
            </div>
            <p class="text-gray-700 text-base">
              This is a fullstack todolist app created using EJS, MongoDB,
              ExpressJs and NodeJs. You can created todos and delete them in
              this app.
            </p>
          </div>
          <div class="px-6 py-4">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >#EJS</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >#MongoDB</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >#NodeJs</span
            >

            <button class="text-white font-bold py-2 px-4 rounded-full">
              <a
                href="https://github.com/usaidpeerzada/ToDoList-FullStack"
                target="_blank"
                >View Code
              </a>
            </button>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-auto mb-4 pl-4">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-teal-100">
          <img class="w-full" src="../assets/journal.png" alt="todo app img" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 ">
              My Journal
            </div>
            <p class="text-gray-700 text-base">
              This is a fullstack journal created using EJS, Mongoose, NodeJs,
              you can store your entries in this application.
            </p>
          </div>
          <div class="px-6 py-4">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >#EJS</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >#Mongoose</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >#NodeJs</span
            >

            <button class="text-white font-bold py-2 px-4 rounded-full">
              <a
                href="https://github.com/usaidpeerzada/MyJournal-FullStack"
                target="_blank"
                >View Code
              </a>
            </button>
          </div>
        </div>
      </div>
      <!-- New Projects End -->
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style scoped>
.projects {
  padding-bottom: 7rem;
  color: #747474;
}
h3 {
  font-family: "Amatic SC", cursive;
  font-size: 2rem;
}
button {
  background: #028090;
  border: 0;
  margin-top: 1rem;
}
button:hover {
  background: #028090;
}

a {
  color: white;
  text-decoration: none;
}
</style>
