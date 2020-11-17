<template>
  <div class="country container text-center my-5">
    <h3 class="title">Pilih Negara</h3>
    <p>Update Terakhir</p>
    <p>{{ this.detailCountry.lastUpdated | dateFormatter }}</p>
    <div class="row">
      <div class="col-md-12">
        <v-select
          :options="optionsCountry"
          v-model="countrySelected"
          @input="setCountrySelected"
          label="name"
          :reduce="(name) => name.iso2"
          placeholder="Pilih Negara"
          class="select-negara"
        />
      </div>
      <div class="col-md-4 my-5">
        <Card
          image-url="infected.png"
          title="Positif"
          :value="this.detailCountry.confirmed | numberFormatter"
        />
      </div>
      <div class="col-md-4 my-5">
        <Card
          image-url="Stay at Home.png"
          title="Sembuh"
          :value="this.detailCountry.recovered | numberFormatter"
        />
      </div>
      <div class="col-md-4 my-5">
        <Card
          image-url="Death.png"
          title="Meninggal Dunia"
          :value="this.detailCountry.deaths | numberFormatter"
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
  name: "country",
  components: {
    Card,
  },
  data: () => ({
    baseEndPoint: "https://covid19.mathdro.id/api/countries/",
    countrySelected: "",
    optionsCountry: [],
    detailCountry: {
      confirmed: 0,
      deaths: 0,
      recovered: 0,
      lastUpdated: "",
    },
  }),
  methods: {
    async getCountry() {
      let res = await axios.get(this.baseEndPoint);
      res.data.countries.forEach((item) => {
        let countryObj = {
          name: item.name,
          iso2: item.iso2,
        };
        this.optionsCountry.push(countryObj);
        // console.log(countryObj);
      });
    },
    async setCountrySelected(val) {
      let res = await axios.get(this.baseEndPoint + val);
      this.detailCountry.confirmed = this.numberFormatter(
        res.data.confirmed.value
      );
      this.detailCountry.deaths = this.numberFormatter(res.data.deaths.value);
      this.detailCountry.recovered = this.numberFormatter(
        res.data.recovered.value
      );
      this.detailCountry.lastUpdated = this.dateFormatter(res.data.lastUpdated);
      console.log(val);
    },

    numberFormatter(val) {
      return Number(val.toFixed(0)).toLocaleString();
    },

    dateFormatter(datetime) {
      return moment(datetime).format("dddd, D MMMM YYYY");
    },
  },
  created() {
    this.getCountry();
  },
};
</script>
<style>
.select-negara {
  font-size: 1.5rem;
}
</style>
