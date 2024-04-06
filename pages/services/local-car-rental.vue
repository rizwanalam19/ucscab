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
                  class="bi bi-car-front"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z"
                  />
                  <path
                    d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z"
                  />
                </svg>
              </div>
              <h3 class="text-center mt-2 fw-bold">Local Booking</h3>
              <tab-content title="Trip Information" :selected="true">
                <div class="form-group row">
                  <div class="col">
                    <label for="fromCity">From City</label>
                    <input
                      id="fromCity"
                      type="text"
                      class="form-control"
                      placeholder="e.g; Kolkata"
                      v-model="form.data.fromCity"
                      
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
                  <div class="mt-4">
                    <div class="form-check form-check-inline">
                      <input
                        v-model="form.data.packageName"
                        class="form-check-input"
                        type="radio"
                        name="packageName"
                        id="8/80"
                        value="8/80"
                        required
                      />
                      <label class="form-check-label" for="8/80"
                        >8 hr/80 km</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        v-model="form.data.packageName"
                        class="form-check-input"
                        type="radio"
                        name="packageName"
                        id="10/100"
                        value="10/100"
                        required
                      />
                      <label class="form-check-label" for="10/100"
                        >10 hr/100 km</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        v-model="form.data.packageName"
                        class="form-check-input"
                        type="radio"
                        name="packageName"
                        id="12/120"
                        value="12/120"
                        required
                      />
                      <label class="form-check-label" for="12/120"
                        >12 hr/120 km</label
                      >
                    </div>
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
      <h2 class="fw-bold mb-4">Local Car Rental</h2>
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
  name: "LocalCarRental",
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
          fromCity: "",
          pickupDate: "",
          pickupTime: "",
          packageName: "",
        },
      },
    };
  },
  methods: {
    async submitEnquiryForm() {

      let that = this;
      console.log("Yeh form ka data hai",this.form);
      await axios
        .post("https://docs.google.com/forms/u/0/d/e/1FAIpQLScAa94EDxHXYqsbsSZ3t50ERwgIyGMhlGslAgcV0DNcxUdq5A/formResponse", this.form)
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
    url("/local-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
