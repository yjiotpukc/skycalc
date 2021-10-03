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

  <router-view />
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
</style>
