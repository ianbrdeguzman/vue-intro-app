<script setup lang="ts"></script>

<template>
  <nav>
    <router-link class="link" to="/" active-class="active">Home</router-link>
    <router-link class="link" to="/users" active-class="active"
      >Users</router-link
    >
    <router-link class="link" to="/posts" active-class="active"
      >Posts</router-link
    >
  </nav>
  <router-view class="main"></router-view>
  <footer>
    <p>made by <a href="https://github.com/ianbrdeguzman">ianbrdeguzman</a></p>
  </footer>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.main {
  min-height: calc(100vh - 9rem);
  display: flex;
  justify-content: center;
  align-items: center;
}

.link {
  display: block;
  padding: 1rem;
}

footer {
  padding: 1rem;
  text-align: center;
}
</style>
