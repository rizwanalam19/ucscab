<template>
  <footer class="page_footer pt-5">
    <section class="container-fluid px-md-5">
      <div class="row">
        <div class="col-md-3">
          <nuxt-img
            preset="cover"
            src="/img/logo/logo2.png"
            alt="Logo2"
            class="img-fluid"
            width="200"
          />
          <small class="d-block mt-4 has_color_custom"
            >Have questions or need additional help?</small
          >
          <small class="d-block has_color_custom"
            >Give us a call at
            <small class="fw-bold has_color_custom">
              (888) 688-6769</small
            ></small
          >
        </div>
        <div class="col-md-3 mt-4 mt-md-0">
          <h5 class="text-white text-uppercase fw-bold">Quick Links</h5>
          <ul class="list-unstyled mt-3 lh-lg">
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li><NuxtLink to="#">About Us</NuxtLink></li>
            <li><NuxtLink to="/contact-us/">Contact Us</NuxtLink></li>
            <li>
              <NuxtLink to="/packages/chardham-yatra-2023/"
                >Chardham Yatra 2023</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="col-md-3 mt-4 mt-md-0">
          <h5 class="text-white text-uppercase fw-bold">Services</h5>
          <ul class="list-unstyled mt-3 lh-lg">
            <li><NuxtLink to="#">Local Car Rental</NuxtLink></li>
            <li><NuxtLink to="#">Outstation Car Rental</NuxtLink></li>
            <li><NuxtLink to="#">Corporate Car Rental</NuxtLink></li>

            <li><a href="#">Airport/Railway Stn./Employee Transfer</a></li>
          </ul>
        </div>
        <div class="col-md-3 mt-4 mt-md-0">
          <h5 class="text-white text-uppercase fw-bold">Get in Touch</h5>
          <ul class="list-unstyled mt-3 lh-lg">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Sitemap</a></li>
            <li>
              <a
                href="https://www.facebook.com/UcsCabOfficial/"
                target="_blank"
              >
                <i class="fab fa-facebook fa-lg has_color_custom"></i>
              </a>
              <a
                href="https://www.instagram.com/ucscabofficial/?hl=en"
                target="_blank"
              >
                <i class="fab fa-instagram fa-lg ms-2 has_color_custom"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <hr class="text-white mx-md-5" />
    <section class="text-center copyright pb-3">
      <small class="has_color_custom"
        >&#169; 2022 Copyright:
        <NuxtLink to="/" class="">UCS Cab</NuxtLink></small
      >
    </section>
    <section>
      <!-- whatsapp -->
      <a
        href="https://wa.me/+919520801801"
        class="whatsapp_float"
        target="_blank"
        ><nuxt-img
          preset="cover"
          src="/whatsapp.webp"
          alt="WhatsApp icon"
          class="img-fluid"
      /></a>
    </section>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.page_footer {
  background-color: #021d3e;
}
.has_color_custom,
.page_footer ul li a,
.copyright a {
  color: #bccbde;
}

.page_footer ul li a:hover,
.copyright a:hover {
  color: #2399c0;
}
</style>
