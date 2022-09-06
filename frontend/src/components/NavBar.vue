<template>
  <nav class="navbar navbar-expand-lg" role="navigation">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <router-link class="app-name-container" to="/">LMS</router-link>
        <a class="mns-link" href="https://www.metz-numeric-school.fr">
          <img
            width="70"
            height="70"
            src="@/assets/logo.svg"
            alt="logo MNS"
            class="d-inline-block align-text-top img-fluid"
          />
          <h3 class="title-logo">Metz Numeric School</h3>
        </a>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarToggler"
      >
        <ul class="navbar-nav mb-lg-0">
          <li class="nav-item" v-if="isLoggedIn">
            <router-link
              class="nav-link"
              :to="{ name: 'Home' }"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Contact</a>
          </li>
          <li class="nav-item" v-if="currentUser">
            <router-link
              class="nav-link"
              :to="{ name: 'Profile', params: { id: currentUser.id } }"
              >Profile</router-link
            >
          </li>
        </ul>
        <div class="status-container" v-if="currentUser">
          <div class="status">
            <font-awesome-icon icon="user" class="fab fab-user" />
            <span
              >Bienvenue, <i>{{ currentUser.username }}</i></span
            >
          </div>
          <div class="logout">
            <a class="nav-link" @click.prevent="logout"
              ><font-awesome-icon icon="sign-out" class="fab fab-user" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Home" });
      // full page reload to clear cookies, state etc.
      // window.location.href = "/api/login";
    },
  },
  created() {
    this.isLoggedIn;
    this.currentUser;
  },
};
</script>

<style scoped>
.container {
  margin: 0;
}
a {
  display: flex;
  flex-direction: column;
}
ul {
  margin-right: 1.7rem;
  margin-bottom: 1.3rem;
}
li {
  font-size: 1.5em;
  font-weight: bold;
}
.status {
  /* padding: 0 1rem; */
}
.status span {
  color: var(--mns-text-color);
  margin-left: 0.7rem;
}
span i {
  color: var(--mns-primary-color);
  font-family: Alata, sans-serif;
  font-weight: bold;
}
.fab-user {
  font-size: 1.7rem;
}
.navbar-collapse {
  margin-left: 3rem;
}
.navbar-nav .nav-link:not(.active):hover {
  color: var(--mns-primary-color);
  text-decoration: underline;
  transition: all 1s;
}
.navbar-nav .nav-link.active {
  color: var(--mns-primary-color);
  text-decoration: underline;
  text-shadow: 0px 0px 3px var(--mns-text-color);
}
.title-logo {
  font-size: 0.7em;
  color: var(--mns-text-color);
}
.mns-link {
  display: flex;
  align-items: stretch;
  text-decoration: none;
  justify-content: flex-end;
  margin-left: 0.5em;
}
.navbar-toggler {
  border: 1px solid var(--mns-text-color-opacity);
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 98, 33, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
.navbar-toggler:focus {
  box-shadow: 0 0 0 var(--mns-primary-color);
}
.app-name-container {
  text-decoration: none;
  font-family: "Gilroy-ExtraBold";
  font-size: 5em;
  color: var(--mns-primary-color);
  -webkit-text-stroke: 1px var(--mns-text-color);
  -webkit-text-fill-color: var(--mns-primary-color);
  text-shadow: 0px 0px 10px var(--mns-primary-color);
  margin: 0;
}
.status-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.logout {
  color: var(--mns-text-color);
  margin: 0 2em;
}
.logout:hover {
  cursor: pointer;
  color: var(--mns-primary-color);
}
</style>