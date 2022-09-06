<template>
  <NavBar />
  <router-view></router-view>
  <Footer />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/MyFooter.vue";

export default {
  name: "App",
  components: { NavBar, Footer },
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
};
</script>

<style>
body {
  background: var(--mns-gradient-color);
}
/* tells the browser to take the padding and border 
into consideration when calculating the height */
* {
  box-sizing: border-box;
}
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  margin: 0;
  font-family: "Gilroy-ExtraBold";
  color: var(--mns-primary-color);
}

h2 {
  margin: 0;
  font-family: "Alata";
  color: var(--mns-text-color);
}
</style>
