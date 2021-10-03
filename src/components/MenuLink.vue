<template>
  <router-link
    v-slot="{ href, route, navigate, isActive }"
    to="/apparel"
  >
    <li
      class="pure-menu-item"
      :class="{ 'pure-menu-selected': isActive }"
    >
      <a
        :href="href"
        class="pure-menu-link"
        @click="navigate"
      >{{ route.name }}</a>
    </li>
  </router-link>
</template>
