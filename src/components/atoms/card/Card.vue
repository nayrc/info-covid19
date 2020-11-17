<template>
  <div class="card p-3">
    <div class="img">
      <img
        :src="require('./../../../assets/images/covid/PNG/' + imageUrl + '')"
        class="card-img-top"
        alt="..."
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ this.title }}</h5>
      <p class="card-text">
        {{ this.value }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["imageUrl", "title", "value"],
};
</script>
<style>
.card {
  background: #38405f !important;
  color: #fff;
  box-shadow: 0px 0px 6px 0px #38405f;
}
.card-body .card-title {
  font-size: 2rem;
}
.card .card-img-top {
  width: 10rem;
}
</style>
