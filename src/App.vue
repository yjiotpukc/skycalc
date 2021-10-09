<script setup lang="ts">
import MenuLink from "./components/MenuLink.vue";
</script>

<template>
  <header class="header">
    <nav class="pure-menu pure-menu-horizontal">
      <router-link
        to="/"
        class="pure-menu-heading pure-menu-link"
      >
        Skycalc
      </router-link>
      <ul class="pure-menu-list">
        <MenuLink to="/apparel" />
        <MenuLink to="/weapons" />
        <MenuLink to="/potions" />
        <MenuLink to="/gear" />
      </ul>
    </nav>
  </header>

  <h1 class="heading">
    {{ $route.name }}
  </h1>

  <main class="main">
    <router-view />
  </main>

  <footer class="footer">
    Favicon was taken from <a href="https://icons8.com">https://icons8.com</a>
  </footer>
</template>

<style>
#app {
  min-height: 100vh;
  width: 100%;
  position: absolute;
  padding-bottom: 30px;
  box-sizing: border-box;
}

.header {
  font-size: 1.25em;
  border-bottom: 1px solid #bbb;
}

.pure-menu-heading {
  text-transform: none;
  font-weight: bold;
}

.main {
  padding: 0 0 0 4em;
}

.heading {
  background-color: #4d4d4d;
  color: #E6E6E6;
  margin: 0;
  padding: 1em 2em;
}

.footer {
  position: absolute;
  bottom: 0;
  height: 30px;
  width: 100%;
  text-align: right;
  padding: 0 2em;
  box-sizing: border-box;
}
</style>
