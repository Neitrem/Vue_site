<template>
  <div class="widget">
    <div class="widget__container">
        <p class="text">Наша база ежедневно пополняется десятками самых хороших объявлений по
лучшей цене</p>
    </div>
    <div class="stats">
      <p class="stats__head">
        Количество объявлений в базе brom.ru:
      </p>
      <p class="point">Автомобили: {{ this.$store.getters.getAmount.cars }}</p>
      <p class="point">Недвижимость: {{ this.$store.getters.getAmount.houses }}</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.widget__container {
    margin: 15px;
    padding: 5px;
    background-image: url(../assets/left_widget_img.jpg);
    background-size: cover;
    border: 1px solid transparent;
    border-image: linear-gradient(45deg, #553c9a, #ee4b2b);
    -moz-border-image: -moz-linear-gradient(45deg, #553c9a, #ee4b2b);
    -webkit-border-image: -webkit-linear-gradient(45deg, #553c9a, #ee4b2b);
    border-image-slice: 1;
    border-radius: 15px;
    /*background-image: linear-gradient(45deg, #553c9a, #ee4b2b); */
}

.img {
  display: block;
}

.text {
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    
    -webkit-text-stroke: 0.5px gray;
}

.stats {
  margin: 15px;
}

.stats__head {
  font-weight: 600;
}
</style>