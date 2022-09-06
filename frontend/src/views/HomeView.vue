<template>
  <div></div>
</template>

<script>
export default {
  name: "HomeView",
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
    loggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  created() {
    let user = this.currentUser;

    this.loggedIn && user
      ? this.$router.push({
          name: "Landing",
          params: { id: user.id },
        })
      : this.$router.push({ name: "Login" });
  },
};
</script>

<style>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>