<template>
  <!-- NavBar -->
  <va-navbar color="primary" shape class="mb-0">
    <template #left>
      <va-navbar-item>
        <img
          src="./assets/my-logo.png"
          alt=""
          style="width: 20px; height: 20px"
        />
      </va-navbar-item>
    </template>
    <template #center>
      <va-navbar-item>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/book-listing"> Book Listing</router-link> |
          <router-link to="/video-recomender">Video Recomender</router-link>
        </div>
      </va-navbar-item>
    </template>
    <template #right>
      <!-- <va-navbar-item>Right</va-navbar-item> -->
    </template>
  </va-navbar>

  <!-- Renderer Vue Pages by VueRouter -->
  <router-view />
</template>

<style>
#app {
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
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

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
