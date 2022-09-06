<template>
  <div class="title">
    <h1>Cours LMS</h1>
  </div>
  <div class="container-fluid courses-list">
    <ul class="list">
      <li v-for="(course, index) in courses" :key="index">
        {{ course.name }}
      </li>
    </ul>
  </div>
  <div class="error" v-if="error">
    <span>{{ error.message }}</span>
  </div>
</template>

<script>
import api from "../axios";

export default {
  name: "LandingPageView",
  data() {
    return {
      courses: [],
      error: "",
    };
  },
  methods: {
    async getCourses() {
      await api
        .get(`user/${this.$route.params.id}/home/`)
        .then((response) => {
          this.courses = response.data;
        })
        .catch((err) => (this.error = err));
    },
  },
  created() {
    this.getCourses();
  },
};
</script>

<style>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: calc(3em + 3.5vw);
  text-align: center;
  -webkit-text-stroke: 1px var(--mns-text-color);
  -webkit-text-fill-color: var(--mns-primary-color);
}
.error {
  display: flex;
  justify-content: center;
  color: var(--mns-primary-color);
  font-size: 2.3em;
}
.courses-list {
  display: flex;
  justify-content: center;
}

.list li {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2em;
  border-top: 3px solid var(--mns-primary-color);
  border-bottom: 3px solid var(--mns-text-color);
  list-style: none;
  background-color: var(--mns-gradient-color);
  color: var(--mns-primary-color);
  margin: 1em 0;
  min-height: 4vh;
  padding: 1em;
  font-size: 1.3em;
  transition: all 0.3s ease-in-out;
}
.list li:nth-child(odd) {
  color: var(--mns-text-color);
}
.list .li:nth-child(even) {
  color: black;
}
.list li:nth-child(odd):hover {
  cursor: pointer;
  background-color: white;
  color: var(--mns-primary-color);
}
.list li:nth-child(even):hover {
  cursor: pointer;
  background-color: var(--mns-primary-color);
  color: white;
}
</style>
