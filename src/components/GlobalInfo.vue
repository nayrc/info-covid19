<template>
  <div class="info-global container text-center my-5">
    <h3 class="title">Global</h3>
    <p>Update Terakhir</p>
    <p>{{ this.global.lastUpdated | dateFormatter }}</p>
    <div class="row my-5">
      <div class="col-md-4 my-3">
        <Card
          image-url="infected.png"
          title="Positif"
          :value="this.global.confirmed | numberFormatter"
        />
      </div>
      <div class="col-md-4 my-3">
        <Card
          image-url="Stay at Home.png"
          title="Sembuh"
          :value="this.global.recovered | numberFormatter"
        />
      </div>
      <div class="col-md-4 my-3">
        <Card
          image-url="Death.png"
          title="Meninggal Dunia"
          :value="this.global.deaths | numberFormatter"
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
  name: "info-global",
  components: {
    Card,
  },
  data: () => ({
    baseEndPoint: "https://covid19.mathdro.id/api/",
    global: {
      confirmed: 0,
      deaths: 0,
      recovered: 0,
      lastUpdated: "",
    },
  }),
  methods: {
    async getGlobalData() {
      const res = await axios.get(this.baseEndPoint);
      this.global.confirmed = res.data.confirmed.value;
      this.global.deaths = res.data.deaths.value;
      this.global.recovered = res.data.recovered.value;
      this.global.lastUpdated = res.data.lastUpdate;
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
    this.getGlobalData();
  },
};
</script>
<style></style>
