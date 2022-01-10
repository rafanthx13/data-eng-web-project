<template>
  <!-- NavBar -->
  <va-navbar color="primary" class="mb-0">
    <!-- LEFT -->
    <template #left>
      <va-navbar-item>
        <img class="logo" src="./assets/my-logo.png" alt="" style="width: 50px; height: 50px" />
      </va-navbar-item>
    </template>
    <!-- CENTER -->
    <template #center>
      <span class="app-navbar__text">
        <va-navbar-item>
          <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/book-listing"> Book Listing</router-link> |
            <router-link to="/video-recommender">Video Recomender</router-link> |
            <router-link to="/jobs-dashboard">Jobs DashBoard</router-link>
          </div>
        </va-navbar-item>
      </span>
    </template>
    <!-- RIGHT -->
    <!-- <template #right>
      <va-navbar-item>Right</va-navbar-item>
    </template> -->
  </va-navbar>

  <!-- Renderer Vue Pages by VueRouter -->
  <router-view />
</template>

<style>
#app {
  font-family: 'DM Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* Somente em celular */
@media (max-width: 767.98px) {
  .logo {
    display: none; /* some com o icone */
  }
  .va-navbar__background-shape,
  .va-navbar__center {
    display: flex !important;
    flex-direction: column;
  }
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
