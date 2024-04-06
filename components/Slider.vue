<template>
  <!-- Carousel wrapper -->
  <div
    id="carouselBasicExample"
    class="carousel slide carousel-fade mt-5 pt-2"
    data-mdb-ride="carousel"
  >
    <!-- Indicators -->
    <div class="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>

    <!-- Inner -->
    <div class="carousel-inner">
     
      <!-- Single item -->
      <div class="carousel-item active">
        <nuxt-img preset="cover"
          src="/img/slider/audi.webp"
          class="d-block w-100 slider_img"
          alt="Audi"
          loading="lazy"
        />
      
        <div class="carousel-caption d-none d-md-block">
          <h5>Our service is just a call away</h5>
          <p>Choose from a wide range of cabs and browse our rate chart</p>
          <a href="tel:+919520801801" class="btn btn-rounded" target="_blank"
            ><i class="fa-solid fa-phone me-2 text-white"></i>Call Us to Book
            Now</a
          >
        </div>
      </div>
      <!-- Single item -->
      <div class="carousel-item">
        <nuxt-img preset="cover"
          src="/img/slider/innova.webp"
          class="d-block w-100 slider_img"
          alt="Innova"
          loading="lazy"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Travel securely with us</h5>
          <p>Choose from a wide range of cabs and browse our rate chart</p>
          <a href="tel:+919520801801" class="btn btn-rounded" target="_blank"
            ><i class="fa-solid fa-phone me-2 text-white"></i>Call Us to Book
            Now</a
          >
        </div>
      </div>
      <!-- Single item -->
      <div class="carousel-item">
        <nuxt-img preset="cover"
          src="/img/slider/toyota.webp"
          class="d-block w-100 slider_img"
          alt="Toyota"
          loading="lazy"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Your very own cab company</h5>
          <p>Choose from a wide range of cabs and browse our rate chart</p>
          <a href="tel:+919520801801" class="btn btn-rounded" target="_blank"
            ><i class="fa-solid fa-phone me-2 text-white"></i>Call Us to Book
            Now</a
          >
        </div>
      </div>
    </div>
    <!-- Inner -->

    <!-- Controls -->
    <button
      class="carousel-control-prev"
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide="prev"
    >
      <span
        class="carousel-control-prev-icon text-white"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide="next"
    >
      <span
        class="carousel-control-next-icon text-white"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- Carousel wrapper -->
</template>

<script>
export default {
  name: "Slider",
};
</script>

<style scoped>
.carousel-caption h5 {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
}

.carousel-caption p {
  font-size: 1.1rem;
  color: #fff;
}

.carousel-item {
  position: relative;
}

.carousel-caption {
  position: absolute;
  top: 13rem;
}

.carousel-item img {
  filter: brightness(50%);
}

@media screen and (max-width: 768px) {
  .carousel-item img {
    filter: brightness(100%);
  }
}
</style>
