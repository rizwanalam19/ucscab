<template>
  <div class="my-5 pt-2 lh-lg">
    <section class="page_header">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-6">
            <form-wizard
              class="rounded-7 w-100"
              v-if="!submitted"
              @onComplete="submitEnquiryForm"
            >
              <div class="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-train-freight-front"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.065.158A1.5 1.5 0 0 1 5.736 0h4.528a1.5 1.5 0 0 1 .67.158l3.237 1.618a1.5 1.5 0 0 1 .83 1.342V13.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V3.118a1.5 1.5 0 0 1 .828-1.342L5.065.158ZM2 9.372V13.5A1.5 1.5 0 0 0 3.5 15h4V8h-.853a.5.5 0 0 0-.144.021L2 9.372ZM8.5 15h4a1.5 1.5 0 0 0 1.5-1.5V9.372l-4.503-1.35A.5.5 0 0 0 9.353 8H8.5v7ZM14 8.328v-5.21a.5.5 0 0 0-.276-.447l-3.236-1.618A.5.5 0 0 0 10.264 1H5.736a.5.5 0 0 0-.223.053L2.277 2.67A.5.5 0 0 0 2 3.118v5.21l1-.3V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.028l1 .3Zm-2-.6V5H8.5v2h.853a1.5 1.5 0 0 1 .431.063L12 7.728ZM7.5 7V5H4v2.728l2.216-.665A1.5 1.5 0 0 1 6.646 7H7.5Zm-1-5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-3 8a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm9 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM5 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  />
                </svg>
              </div>
              <h3 class="text-center mt-2 fw-bold">
                Railway Station Cab Booking
              </h3>
              <tab-content title="Trip Information" :selected="true">
                <div class="form-group">
                  <div class="form-check form-check-inline">
                    <input
                      v-model="form.data.travelingToORFrom"
                      class="form-check-input"
                      type="radio"
                      name="travelingToORFrom"
                      id="fromRailwayStation"
                      value="fromRailwayStation"
                      required
                    />
                    <label class="form-check-label" for="fromRailwayStation"
                      >From Railway Station</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="form.data.travelingToORFrom"
                      class="form-check-input"
                      type="radio"
                      name="travelingToORFrom"
                      id="toRailwayStation"
                      value="toRailwayStation"
                      required
                    />
                    <label class="form-check-label" for="toRailwayStation"
                      >To Railway Station</label
                    >
                  </div>
                </div>
                <div class="form-group row mt-3">
                  <div class="col">
                    <label for="city">City</label>
                    <input
                      id="city"
                      type="text"
                      class="form-control"
                      placeholder="e.g; Kolkata"
                      v-model="form.data.city"
                      required
                    />
                  </div>
                  <div class="col">
                    <label for="dropLocation">Drop Location</label>
                    <input
                      id="dropLocation"
                      type="text"
                      class="form-control"
                      placeholder="e.g; Gate 3"
                      v-model="form.data.dropLocation"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row mt-3">
                  <div class="col">
                    <label for="pickupDate">Pickup Date</label>
                    <input
                      id="pickupDate"
                      type="date"
                      class="form-control"
                      v-model="form.data.pickupDate"
                      required
                    />
                  </div>
                  <div class="col">
                    <label for="pickupTime">Pickup Time</label>
                    <input
                      id="pickupTime"
                      type="time"
                      class="form-control"
                      v-model="form.data.pickupTime"
                      required
                    />
                  </div>
                </div>
              </tab-content>

              <tab-content title="Your Information">
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                      v-model="form.name"
                      required
                    />
                  </div>
                  <div class="col">
                    <label for="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="Email Address"
                      v-model="form.email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row mt-3">
                  <div class="col">
                    <label for="phoneNumber">Phone Number</label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      class="form-control"
                      placeholder="Phone Number"
                      v-model="form.phone_number"
                      required
                    />
                  </div>
                  <div class="col">
                    <label for="query">Query (optional)</label>
                    <textarea
                      v-model="form.query"
                      class="form-control"
                      id="query"
                      rows="1"
                      placeholder="Type your query (optional)"
                    ></textarea>
                  </div>
                </div>
              </tab-content>
            </form-wizard>
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
          <div class="col-md-6"></div>
        </div>
      </div>
    </section>

    <section class="my-5 py-3 py-md-4 container">
      <h2 class="fw-bold mb-4">Railway Transfer</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
          excepturi aspernatur explicabo quaerat quas libero voluptatem
          consequatur laboriosam sed unde aut in tempora eum illo ut ab culpa
          corrupti natus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          laboriosam? Quaerat repellat possimus dolores, quod voluptatem ullam.
          Ratione, doloribus, iure quia itaque odio qui obcaecati corporis quod,
          pariatur tempore consequuntur!
        </p>
      </div>
    </section>

    <Rates />
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";
import axios from "axios";
export default {
  name: "AirportTransfer",
  components: {
    FormWizard,
    TabContent,
  },
  data() {
    return {
      submitted: false,
      form: {
        name: "",
        email: "",
        phone_number: "",
        query: "",
        data: {
          travelingToORFrom: "",
          city: "",
          dropLocation: "",
          pickupDate: "",
          pickupTime: "",
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
.page_header {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/railway-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
