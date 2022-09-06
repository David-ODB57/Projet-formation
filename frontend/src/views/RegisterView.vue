<template>
  <div class="section section-signup">
    <div class="container">
      <div class="title">
        <h1>INSCRIPTION</h1>
      </div>
      <div class="card card-signup">
        <form class="form" @submit.prevent="formCheck">
          <div class="card-body">
            <div class="input-group">
              <div class="input-group-prepend">
                <font-awesome-icon icon="user" class="fab" />
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Nom d'utilisateur..."
                v-model="username"
                required
              />
            </div>
            <div class="input-group">
              <div class="input-group-prepend">
                <font-awesome-icon icon="user" class="fab" />
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Nom..."
                v-model="first_name"
              />
            </div>
            <div class="input-group">
              <div class="input-group-prepend">
                <font-awesome-icon icon="user" class="fab" />
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Prénom..."
                v-model="last_name"
              />
            </div>
            <div class="input-group">
              <div class="input-group-prepend">
                <font-awesome-icon icon="envelope" class="fab" />
              </div>
              <input
                type="email"
                class="form-control"
                placeholder="Email..."
                v-model="email"
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
                v-model="password1"
                required
              />
            </div>
            <div class="input-group">
              <div class="input-group-prepend">
                <font-awesome-icon icon="key" class="fab" />
              </div>
              <input
                type="password"
                class="form-control"
                placeholder="Confirmation..."
                v-model="password2"
              />
            </div>
            <label>Role :</label>
            <select v-model="role">
              <option value="apprenant">Apprenant</option>
              <option value="intervenant">Intervenant</option>
              <option value="administrateur">Administrateur</option>
            </select>
          </div>
          <button class="text-center btn">S'enregistrer</button>
        </form>
        <div v-if="passwordError" class="error">{{ passwordError }}</div>
        <div class="error" v-if="error">
          <span>{{ error.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../axios";

export default {
  name: "RegisterView",
  data() {
    return {
      username: "",
      password1: "",
      password2: "",
      first_name: "",
      last_name: "",
      email: "",
      role: "",
      passwordError: "",
      registrationError: "",
    };
  },
  methods: {
    async register() {
      let user = new FormData();
      user.append("username", this.username);
      user.append("first_name", this.first_name);
      user.append("last_name", this.last_name);
      user.append("email", this.email);
      user.append("password", this.password1);
      user.append("role", this.role);

      await api
        .post("api/register/", user)
        .then((res) => {
          console.log(res);
          if (res.status === 201) this.$router.push({ name: "Login" });
        })
        .catch((error) => {
          console.error(error);
          this.registrationError = error;
        });
    },

    formCheck() {
      //Validate password field length
      this.passwordError =
        this.password1.length >= 6
          ? ""
          : "Votre mot de passe doit contenir au moins 6 caractères!";

      if (!this.passwordError) this.register();
    },
  },
};
</script>

<style scoped>
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
  -webkit-box-shadow: none;
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

.form-control::-moz-placeholder {
  color: #888888;
  opacity: 0.8;
  filter: alpha(opacity=80);
}

.form-control:-moz-placeholder {
  color: #888888;
  opacity: 0.8;
  filter: alpha(opacity=80);
}

.form-control::-webkit-input-placeholder {
  color: #888888;
  opacity: 0.8;
  filter: alpha(opacity=80);
}

.form-control:-ms-input-placeholder {
  color: #888888;
  opacity: 0.8;
  filter: alpha(opacity=80);
}

.form-control {
  border: 1px solid #e3e3e3;
  color: #2c2c2c;
  -webkit-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  -moz-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  -o-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  -ms-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.form-control:focus {
  border: 1px solid var(--mns-primary-color);
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: 0 !important;
  color: #2c2c2c;
}

.input-group .form-control {
  padding: 10px 18px 10px 18px;
  background-color: var(--mns-text-color-opacity);
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
  margin: 0 auto;
}

.card-signup .card-body {
  padding-top: 0px;
  padding-bottom: 0px;
  min-height: auto;
}
section {
  min-height: 100vh;
}
.section-signup {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.error {
  color: var(--mns-primary-color);
  font-size: 1.3em;
}
</style>