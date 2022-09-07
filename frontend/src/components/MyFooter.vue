<template>
  <div class="container-fluid footer">
    <hr class="footer-divider" />
    <div class="links">
      <router-link class="router-link" to="/Rgpd">RGPD</router-link>
      <a href="https://aws.amazon.com/fr/compliance/gdpr-center/" class="router-link" rel="noopener noreferrer" target="_blank">AWS RGPD</a>
    </div>
    <div class="copyright">LMS Copyright@2022</div>
    <hr class="footer-divider" />
  </div>
</template>

<script>
export default {
  name: "MyFooter",
};
</script>

<style>
.router-link {
  color: var(--mns-text-color);
  font-size: 1.2em;
  font-family: "Alata", sans-serif;
  text-decoration: none;
  transition: all 0.3s;
}
.router-link:hover {
  color: var(--mns-primary-color);
  text-decoration: underline;
  text-shadow: 0 0 15px var(--mns-primary-color);
}
.links {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
}
.links a {
  margin: 0 1em;
}
.copyright {
  color: var(--mns-primary-color);
}
.footer-divider {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--mns-primary-color);
  border-radius: 5px;
  width: 75%;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
}
</style>
