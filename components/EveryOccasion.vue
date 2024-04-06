<template>
  <div class="container my-5 py-3 pt-md-4 pb-md-5">
    <h2 class="fw-bold">A car for every occasion</h2>
    <p>
      We offer domestic cabs, SUVs for outstation and city-taxi at best rates in
      the market
    </p>
    <div class="row row-cols-1 row-cols-md-4 g-2 mt-3">
      <div class="col">
        <div class="card">
          <NuxtLink to="/services/local-car-rental/">
            <nuxt-img
              preset="cover"
              src="/img/every-occasion/domestic.webp"
              class="card-img-top"
              alt="Domestic Cab"
            />
            <div class="card-body">
              <div class="card-title">
                <h6 class="text-uppercase text-dark">Local Car Rental</h6>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <NuxtLink to="/services/outstation-car-rental/">
            <nuxt-img
              preset="cover"
              src="/img/every-occasion/outstation.webp"
              class="card-img-top"
              alt="Out-Station Cab"
            />
            <div class="card-body">
              <div class="card-title">
                <h6 class="text-uppercase text-dark">Outstation Car Rental</h6>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <NuxtLink to="/services/railway-transfer/">
            <nuxt-img
              preset="cover"
              src="/railway.jpg"
              class="card-img-top"
              alt="Rental Cab"
            />
            <div class="card-body">
              <div class="card-title">
                <h6 class="text-uppercase text-dark">
                  Railway Station Transfer
                </h6>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <NuxtLink to="/services/airport-transfer/">
            <nuxt-img
              preset="cover"
              src="/airport.jpg"
              class="card-img-top"
              alt="Rental Cab"
            />
            <div class="card-body">
              <div class="card-title">
                <h6 class="text-uppercase text-dark">Airport Transfer</h6>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style></style>
