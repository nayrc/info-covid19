<template>
  <div class="info-indonesia container text-center my-5">
    <h3 class="title">Indonesia</h3>
    <p>Update Terakhir</p>
    <p>{{ this.indonesia.lastUpdated | dateFormatter }}</p>
    <div class="row my-5">
      <div class="col-md-4 my-3">
        <Card
          image-url="infected.png"
          title="Positif"
          :value="this.indonesia.confirmed | numberFormatter"
        />
      </div>
      <div class="col-md-4 my-3">
        <Card
          image-url="Stay at Home.png"
          title="Sembuh"
          :value="this.indonesia.recovered | numberFormatter"
        />
      </div>
      <div class="col-md-4 my-3">
        <Card
          image-url="Death.png"
          title="Meninggal Dunia"
          :value="this.indonesia.deaths | numberFormatter"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import { Card } from "./atoms";

export default {
  name: "info-indonesia",
  components: {
    Card,
  },
  data: () => ({
    baseEndPoint: "https://covid19.mathdro.id/api/countries/ID",
    indonesia: {
      confirmed: 0,
      deaths: 0,
      recovered: 0,
      lastUpdated: "",
    },
  }),
  methods: {
    async getIndonesiaData() {
      const res = await axios.get(this.baseEndPoint);
      this.indonesia.confirmed = res.data.confirmed.value;
      this.indonesia.deaths = res.data.deaths.value;
      this.indonesia.recovered = res.data.recovered.value;
      this.indonesia.lastUpdated = res.data.lastUpdate;
    },
  },
  filters: {
    numberFormatter(val) {
      return Number(val).toLocaleString();
    },

    dateFormatter(datetime) {
      return moment(datetime).format("dddd, D MMMM YYYY");
    },
  },
  created() {
    this.getIndonesiaData();
  },
};
</script>
<style></style>
