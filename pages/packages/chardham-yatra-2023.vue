<template>
  <div class="my-5">
    <!-- hero -->
    <section class="chardham_hero d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-md-6 my-auto d-none d-md-block">
            <p class="text-white display-3 fw-bold text-capitalize">
              book hassle free chardham yatra 2023 with UCS Cab
            </p>
            <a
              href="tel:+919520801801"
              class="btn btn-rounded fs-6"
              target="_blank"
              role="button"
            >
              <i class="fa-solid fa-phone me-1 text-white"></i> +91 95208 01801
            </a>
          </div>
          <div class="col-md-6 py-5">
            <form
              v-if="!submitted"
              class="bg-white rounded-7 p-5"
              @submit.prevent="submitEnquiryForm"
            >
              <h3 class="text-dark text-center fw-bold fs-1">
                Book Your Cab Now
              </h3>
              <div class="row">
                <div class="col">
                  <label for="name" class="form-label"></label>
                  <input
                    v-model="form.name"
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="col">
                  <label for="email" class="form-label"></label>
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label for="ph-number" class="form-label"></label>
                  <input
                    v-model="form.phone_number"
                    type="tel"
                    class="form-control"
                    id="ph-number"
                    placeholder="Mobile Number"
                    required
                  />
                </div>
                <div class="col">
                  <label for="date" class="form-label"></label>
                  <input
                    v-model="form.data.date"
                    type="date"
                    class="form-control"
                    id="date"
                    required
                  />
                </div>
              </div>
              <div class="my-4">
                <p class="fs-5 is_color_primary">Choose Yatra</p>
                <div class="form-check form-check-inline">
                  <input
                    v-model="form.data.yatra_type"
                    class="form-check-input"
                    type="radio"
                    name="choose_yatra"
                    id="chardham"
                    value="chardham"
                    required
                  />
                  <label class="form-check-label" for="chardham"
                    >Char Dham</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    v-model="form.data.yatra_type"
                    class="form-check-input"
                    type="radio"
                    name="choose_yatra"
                    id="teendham"
                    value="teendham"
                    required
                  />
                  <label class="form-check-label" for="teendham"
                    >Teen Dham</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    v-model="form.data.yatra_type"
                    class="form-check-input"
                    type="radio"
                    name="choose_yatra"
                    id="dodham"
                    value="dodham"
                    required
                  />
                  <label class="form-check-label" for="dodham">Do Dham</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    v-model="form.data.yatra_type"
                    class="form-check-input"
                    type="radio"
                    name="choose_yatra"
                    id="ekdham"
                    value="ekdham"
                    required
                  />
                  <label class="form-check-label" for="ekdham">Ek Dham</label>
                </div>
              </div>

              <div>
                <p class="fs-5 is_color_primary">
                  Choose Taxi/Complete Package
                </p>
                <div class="form-check form-check-inline">
                  <input
                    v-model="form.data.package"
                    class="form-check-input"
                    type="radio"
                    name="taxi_or_package"
                    id="taxi"
                    value="taxi"
                    required
                  />
                  <label class="form-check-label" for="taxi">Only Taxi</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    v-model="form.data.package"
                    class="form-check-input"
                    type="radio"
                    name="taxi_or_package"
                    id="package"
                    value="package"
                    required
                  />
                  <label class="form-check-label" for="package"
                    >Complete Package</label
                  >
                </div>
              </div>
              <div class="mt-4">
                <textarea
                  v-model="form.query"
                  class="form-control"
                  id="textAreaExample"
                  rows="4"
                  placeholder="Type your query (optional)"
                ></textarea>
              </div>
              <button
                type="submit"
                class="btn btn-primary d-block mx-auto btn-rounded fs-6 mt-4"
              >
                Send Your Query
              </button>
            </form>
            <div
              v-if="submitted"
              class="card bg-white d-flex align-items-center py-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                fill="currentColor"
                class="bi bi-check2-circle text-success"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"
                />
                <path
                  d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
                />
              </svg>
              <p class="fs-1 text-center fw-bold text-dark mt-4">
                Submitted Successfully!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- why choose -->
    <section class="my-5 py-md-5 container">
      <h3 class="fw-bold">Why should you do Chardham Yatra?</h3>
      <p class="mt-4">
        In Hinduism, Teerth Yatra is one of the five duties of every Hindu. The
        other four duties are Dharma, Worship, Sanskaras, and Observing
        religious festivals. It is believed that every Hindu must visit this
        pilgrimage once in their lifetime as the Yatra helps in attaining
        salvation or what is known as Moksha by washing away the sins.
      </p>

      <h3 class="fw-bold mt-5">Char Dham Yatra</h3>
      <p class="mt-4">
        The Char Dhams generally include four sacred temples, Badrinath,
        Kedarnath, Gangotri and Yamunotri.
      </p>
      <ul>
        <li>
          <span class="fw-bold">Bardinath</span>: The Badrinath temple is the
          home of Lord Vishnu and is the pilgrim centres in the Uttarakhand.
        </li>
        <li>
          <span class="fw-bold">Kedarnath</span>: Kedarnath temple is the home
          of Lord Shiva and is located in the Rudraprayag District of
          Uttarakhand.
        </li>
        <li>
          <span class="fw-bold">Gangotri</span>: Gangotri temple is situated
          near a sacred rock where Bhagiratha worshipped Shiva and is dedicated
          to Goddess Ganga.
        </li>
        <li>
          <span class="fw-bold">Yamunotri</span>: Yamunotri temple is located in
          Uttarakashi and is the home of Goddess Yamuna.
        </li>
      </ul>
      <div class="text-center mt-5">
        <a
          href="tel:+919520801801"
          class="btn btn-rounded fs-5"
          target="_blank"
          role="button"
        >
          <i class="fa-solid fa-phone me-1 text-white"></i> book now with UCS
          Cab
        </a>
      </div>
    </section>

    <!-- tour content -->
    <section class="py-5 tour_content">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-md-6 my-auto">
            <h3 class="fw-bold">
              Make the Most of your Chardham Yatra Tour with UCS Cab
            </h3>
            <p class="mt-4">
              Planning for your Chardham yatra this year? You have knocked on
              the right door. UCS Cab will ensure that your tour of four holy
              sites is seamless. Among the countless religious sites and
              circuits that devotees visit in Uttarakhand, one of the most
              prominent is the Uttarakhand Chardham yatra.
            </p>
          </div>
          <div class="col-md-6">
            <nuxt-img
              preset="cover"
              src="/kedarnath.jpg"
              alt="Mountains"
              class="img-fluid rounded"
            />
          </div>
        </div>
      </div>
      <div class="text-center mt-4">
        <a
          href="tel:+919520801801"
          class="btn btn-rounded fs-5"
          target="_blank"
          role="button"
        >
          <i class="fa-solid fa-phone me-1 text-white"></i> book now with UCS
          Cab
        </a>
      </div>
    </section>

    <!-- rates -->
    <section class="my-5 py-md-5 container">
      <h3 class="fw-bold">Taxi Fare for Chardham Yatra 2023:</h3>
      <div class="table-responsive">
        <table class="table table-striped table-hover mt-4">
          <thead>
            <tr>
              <th scope="col" class="fw-bold fs-5 text-white">Cab / Taxi</th>
              <th scope="col" class="fw-bold fs-5 text-white">Tariff</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Sedan</th>
              <td>₹ 4500/- Per Day</td>
            </tr>
            <tr>
              <th scope="row">Mini SUV</th>
              <td>₹ 6000/ - Per Day</td>
            </tr>
            <tr>
              <th scope="row">SUV</th>
              <td>₹ 6500/- Per Day</td>
            </tr>
            <tr>
              <th scope="row">Premium SUV</th>
              <td>₹ 7000/- Per Day</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-center mt-5">
        <a
          href="tel:+919520801801"
          class="btn btn-rounded fs-5"
          target="_blank"
          role="button"
        >
          <i class="fa-solid fa-phone me-1 text-white"></i> book now with UCS
          Cab
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      submitted: false,
      form: {
        name: "",
        email: "",
        phone_number: "",
        query: "",
        data: {
          date: "",
          yatra_type: "",
          package: "",
        },
      },
    };
  },
  methods: {
    async submitEnquiryForm() {
      let that = this;
      await axios
        .post("", this.form)
        .then(function (response) {
          that.submitted = true;
        })
        .catch(function (error) {
          alert("Error in Form");
          that.submitted = false;
        });
    },
  },
};
</script>

<style scoped>
.chardham_hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/chardham-hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.chardham_hero div p {
  font-weight: 600;
}

thead {
  background-color: #2399c0;
}

.tour_content {
  background-color: #f9fafb;
}

@media screen and (max-width: 768px) {
  .chardham_hero {
    height: auto;
  }
}

.is_color_primary {
  color: #2399c0;
}
</style>
