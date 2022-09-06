<template>
  <div class="section section-signup">
    <div class="title">
      <h1>LOGIN</h1>
    </div>
    <div class="card card-signup">
      <form class="form" @submit.prevent="login" role="form">
        <div class="card-body">
          <div class="input-group">
            <div class="input-group-prepend">
              <font-awesome-icon icon="user" class="fab" />
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Nom..."
              v-model="name"
              name="name"
            />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <font-awesome-icon icon="key" class="fab" />
            </div>
            <input
              type="password"
              class="form-control"
              placeholder="Password..."
              v-model="password"
              name="password"
            />
          </div>
        </div>
        <button type="submit" class="text-center btn">Se connecter</button>
      </form>
    </div>
    <div class="error" v-show="error">
      <span>{{ error.message }}</span>
    </div>
    <div>
      <router-link class="register-link" :to="{ name: 'Register' }"
        >Vous n'avez pas de compte ?</router-link
      >
    </div>
    <div>
      <router-link class="forgot-password" to="#"
        >Mot de passe oublié ?</router-link
      >
    </div>
  </div>
</template>

<script>
import api from "../axios";

export default {
  name: "LoginView",
  data() {
    return {
      name: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async getToken() {
      await api
        .get("api/login-set-cookie/")
        .then((response) => {
          console.log(response.data);
          api.defaults.headers.common["X-CSRFToken"] =
            response.data["X-CSRFToken"];
        })
        .catch((err) => console.log(err));
    },

    async login() {
      let data = new FormData();
      data.append("username", this.name);
      data.append("password", this.password);

      await api
        .post("api/login/", data, api.headers)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.$store.dispatch("login", res.data.user);
            this.$router.push({
              name: "Landing",
              params: { id: this.$store.getters.currentUser.id },
            });
          }
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
  created() {
    this.getToken();
  },
};
</script>

<style>
.title h1 {
  font-size: calc(2.5rem + 2vw);
  text-shadow: -1px 1px 10px var(--mns-text-color);
  margin-bottom: 3rem;
}

.btn {
  max-width: fit-content;
  background-color: var(--mns-text-color);
  color: var(--mns-primary-color);
  margin: 2rem 0;
  font-family: Alata;
}
.btn:disabled,
.btn:disabled:hover,
.btn:disabled:focus,
.btn:disabled:active,
.btn[disabled],
.btn[disabled]:hover,
.btn[disabled]:focus,
.btn[disabled]:active {
  background-color: #888888;
  border-color: #888888;
}

.btn:hover,
.btn:focus,
.btn:active {
  box-shadow: none;
  outline: 0 !important;
}

.fab {
  font-size: 1.325rem;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--mns-primary-color);
  box-shadow: 0 0 25px var(--mns-text-color);
  outline: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding-top: 3rem;
}

.form-control:-moz-placeholder {
  color: #888888;
  opacity: 0.8;
  filter: opacity(80);
}

.form-control::-webkit-input-placeholder {
  color: #888888;
  opacity: 0.8;
  filter: opacity(80);
}

.form-control {
  border: 1px solid #e3e3e3;
  color: #2c2c2c;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  background-color: color 0.3s ease-in-out;
  box-shadow: none;
}

.form-control:focus {
  border: 1px solid var(--mns-primary-color);
  box-shadow: none;
  outline: 0 !important;
  color: #2c2c2c;
}

.input-group .form-control {
  padding: 10px 18px 10px 18px;
  background-color: var(--mns-text-color);
}

.input-group {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.input-group .input-group-prepend {
  margin-right: 1em;
}

.card {
  background-color: transparent;
}

.card-signup {
  max-width: 350px;
  margin-bottom: 3em;
}

.card-signup .card-body {
  padding-top: 0px;
  padding-bottom: 0px;
  min-height: auto;
}

.section-signup {
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.error {
  color: var(--mns-primary-color);
  font-size: 2.3em;
}
.register-link {
  color: var(--mns-text-color);
}
.forgot-password {
  color: var(--mns-primary-color);
}
</style>
