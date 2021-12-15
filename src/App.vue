<template>

  <!-- NavBar -->
    <va-navbar color="primary" shape class="mb-2">
      <template #left>
        <va-navbar-item>
          <img src="./assets/my-logo.png" alt="" style="width: 20px; height: 20px;">
        </va-navbar-item>
      </template>
      <template #center>
        <va-navbar-item>
          <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> | 
          <router-link to="/data-engineering-listing">Data Engineering Book Listing</router-link>
        </div>
        </va-navbar-item>
      </template>
      <template #right>
        <va-navbar-item>Right</va-navbar-item>
      </template>
    </va-navbar>

  <!-- Renderer Vue Pages by VueRouter -->
  <router-view />

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
