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
                  class="bi bi-airplane-engines"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z"
                  />
                </svg>
              </div>
              <h3 class="text-center mt-2 fw-bold">Airport Cab Booking</h3>
              <tab-content title="Trip Information" :selected="true">
                <div class="form-group">
                  <span class="me-4">I am Traveling:</span>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="form.data.travelingToORFrom"
                      class="form-check-input"
                      type="radio"
                      name="travelingToORFrom"
                      id="fromAirport"
                      value="fromAirport"
                      required
                    />
                    <label class="form-check-label" for="fromAirport"
                      >From Airport</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="form.data.travelingToORFrom"
                      class="form-check-input"
                      type="radio"
                      name="travelingToORFrom"
                      id="toAirport"
                      value="toAirport"
                      required
                    />
                    <label class="form-check-label" for="toAirport"
                      >To Airport</label
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
      <h2 class="fw-bold mb-4">Airport Transfer</h2>
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
        .post("#", this.form)
        .then(function (response) {
          that.submitted = true;
          console.log(this.form);
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
    url("/airport-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
