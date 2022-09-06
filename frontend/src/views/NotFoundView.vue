<template>
  <div class="notFound">
    <h1>404</h1>
    <h2>page not found</h2>
    <h3>Sorry...</h3>
  </div>
</template>

<script>
export default {
  name: "NotFoundView",
};
</script>

<style scoped>
.notFound {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 15em;
  color: var(--mns-primary-color);
  -webkit-text-stroke-width: 1rem;
  -webkit-text-stroke-color: var(--mns-text-color);
}
h3 {
  color: var(--mns-primary-color);
}
</style>