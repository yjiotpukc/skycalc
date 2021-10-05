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
      </ul>
    </nav>
  </header>

  <h1 class="heading">
    {{ $route.name }}
  </h1>

  <main class="main">
    <router-view />
  </main>
</template>

<style>
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
</style>
