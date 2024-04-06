<template>
  <main>
    <section class="my-5 pb-4 pb-md-5 container">
      <h2 class="fw-bold">Cab / Taxi Tariff</h2>
      <div class="table-responsive mt-4 mt-md-5">
        <table class="table table-striped table-hover align-middle">
          <thead class="text-white">
            <tr>
              <th scope="col" class="fw-bold text-uppercase">Cab / Taxi</th>
              <th scope="col" class="fw-bold text-uppercase">10 hr/100 km</th>
              <th scope="col" class="fw-bold text-uppercase">8 hr/80 km</th>
              <th scope="col" class="fw-bold text-uppercase">4 hr/40 km</th>
              <th scope="col" class="fw-bold text-uppercase">
                airport/railway station
              </th>
              <th scope="col" class="fw-bold text-uppercase">
                Over-limit Charges
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="fw-bold">Sedan</th>
              <td><strong>---</strong></td>
              <td>
                <strong>---</strong>
              </td>
              <td>
                <strong>---</strong>
              </td>
              <td><strong>---</strong></td>
              <td>
                <strong>---</strong>
              </td>
            </tr>
            <tr>
              <th scope="row" class="fw-bold">Mini SUV</th>
              <td><strong>---</strong></td>
              <td>
                <strong>---</strong>
              </td>
              <td>
                <strong>---</strong>
              </td>
              <td><strong>---</strong></td>
              <td>
                <strong>---</strong>
              </td>
            </tr>
            <tr>
              <th scope="row" class="fw-bold">SUV</th>
              <td><strong>---</strong></td>
              <td>
                <strong>---</strong>
              </td>
              <td>
                <strong>---</strong>
              </td>
              <td><strong>---</strong></td>
              <td>
                <strong>---</strong>
              </td>
            </tr>
            <tr>
              <th scope="row" class="fw-bold">Premium SUV</th>
              <td><strong>---</strong></td>
              <td>
                <strong>---</strong>
              </td>
              <td>---</td>
              <td>---</td>
              <td>
                <strong>---</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-5">
        <h4 class="mb-4">Terms &amp; Conditions</h4>
        <ul class="list-group list-group-light list-group-small">
          <li class="list-group-item">
            Time or Kilometer shall be calculated from garage-out and garage-in
            basis.
          </li>
          <li class="list-group-item">
            Parking/toll shall be charged separately.
          </li>
          <li class="list-group-item">
            Higher rates may be applicable during festive seasons like Diwali,
            Eid, Christmas or any festive day of India.
          </li>
          <li class="list-group-item">
            The rates shall be charged on the calculation of km. or hr.
            whichever is higher.
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
thead {
  background-color: #2399c0;
}
</style>
