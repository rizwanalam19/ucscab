<template>
  <div class="container my-5 pt-5">
    <h1 v-if="error.statusCode === 404" class="text-center">
      404: Page not found
    </h1>
    <h1 v-else>An error occurred</h1>
    <h5 class="text-center my-4">
      We are sorry. The page you are looking for is not available. Perhaps you
      can go to our
    </h5>
    <h5 class="text-center">
      <NuxtLink to="/" class="fw-bold">Home Page</NuxtLink>
    </h5>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  props: ["error"],
  head() {
    return {
      title: "Page not found - UCS Cab",
    };
  },
};
</script>
