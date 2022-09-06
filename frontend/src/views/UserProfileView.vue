<template>
  <div class="container-fluid">
    <div class="content justify-content-center align-items-center" v-if="error">
      <span class="message">Page {{ error.response.statusText }}</span>
    </div>
    <div class="content" v-else>
      <div class="title">
        <h1>
          Profile
          <span class="user">{{ user.first_name }} {{ user.last_name }}</span>
        </h1>
      </div>
      <img
        :src="'http://localhost:8000' + user.avatar"
        class="img-thumbnail"
        :alt="user.first_name"
        style="height: 150px; width: 225px"
      />
      <div class="user-datum">
        <div class="user-data">
          <span class="label">Nom:</span>
          <span class="data">{{ user.last_name }}</span>
        </div>
        <div class="user-data">
          <span class="label">Prénom:</span>
          <span class="data">{{ user.first_name }}</span>
        </div>
        <div class="user-data">
          <span class="label">Téléphone:</span>
          <span class="data">{{ user.phonenumber }}</span>
        </div>
        <div class="user-data">
          <span class="label">Ville:</span>
          <span class="data">{{ user.city }}</span>
        </div>
        <div class="user-data">
          <span class="label">Email:</span>
          <span class="data">{{ user.email }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import api from "../axios";

export default {
  name: "UserProfileView",
  data() {
    return {
      role: "",
      error: "",
      user: {},
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {},
  created() {
    api
      .get(`user/${this.$route.params.id}/profile/`)
      .then((response) => {
        let user = response.data;
        console.log(user);
        this.user = user;
      })
      .catch((err) => {
        this.error = err;
      });
  },
};
</script>

<style>
.user-datum {
  display: flex;
  flex-direction: column;
}
.user-data .label {
  color: var(--mns-primary-color);
  margin-right: 0.5rem;
  font-weight: bold;
}
.user-data .data {
  color: var(--mns-text-color);
}
.title {
  display: flex;
  justify-content: center;
}
.content {
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 2em;
  background-color: transparent;
  border: 3px solid rgba(0, 0, 0, 0.3);
  margin: 2vw;
}
.message {
  color: red;
  font-size: 2em;
  font-weight: 600;
}
.user {
  color: var(--mns-text-color);
}
h1 {
  font-size: 5em;
}
.img-thumbnail {
  border: none;
  outline: 1px solid white;
}
</style>