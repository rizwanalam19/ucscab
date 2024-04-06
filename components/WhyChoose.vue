<template>
  <main class="my-5 pb-4 pb-md-5">
    <section class="container">
      <h2 class="fw-bold text-md-center has_logo_color">Why Choose UCS Cab?</h2>
      <div class="row row-cols-2 row-cols-md-4 g-3 mt-3 mt-md-4">
        <div class="col">
          <div class="card">
            <nuxt-img
              preset="cover"
              src="/img/why/cars.webp"
              class="card-img-top"
              alt="Car"
            />
            <div class="card-body">
              <h5 class="card-title">Variety of Cars</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <nuxt-img
              preset="cover"
              src="/img/why/pocket-friendly.webp"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Pocket Friendly</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <nuxt-img
              preset="cover"
              src="/img/why/safe.webp"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Secured &amp; Safe Rides</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <nuxt-img
              preset="cover"
              src="/img/why/skilled-driver.webp"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Experienced &amp; Courteous Chauffeurs</h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <nuxt-img
              preset="cover"
              src="/img/why/clean.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Well Maintained Car</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <nuxt-img
              preset="cover"
              src="/img/why/puntual.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">On Time Punctuality</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow">
            <nuxt-img
              preset="cover"
              src="/img/why/sanistised.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Cleaned & Sanitised Car</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow">
            <nuxt-img
              preset="cover"
              src="/img/why/customer-support.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">24×7 Customer Support</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.has_logo_color {
  color: #111340;
}
</style>
