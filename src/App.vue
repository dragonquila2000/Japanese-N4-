<template>
  <nav>
    <router-link to="/N5">N5</router-link>
    <router-link to="/N4" style="margin-left: 10px">N4</router-link>
    <router-link to="/Kanji-N5" style="margin-left: 10px">Kanji N5</router-link>
    <router-link to="/Kanji-N4" style="margin-left: 10px">Kanji N4</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
