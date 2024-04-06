<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
export default {
  name: "Default",
  components: { TheHeader, TheFooter },
};
</script>

<style></style>
