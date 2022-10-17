<template>
  <div class="widget">
    <div class="widget__container">
        <p class="text">Наша база ежедневно пополняется десятками самых хороших объявлений по
лучшей цене</p>
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
    
    border: 1px solid transparent;
    border-image: linear-gradient(45deg, #553c9a, #ee4b2b);
    -moz-border-image: -moz-linear-gradient(45deg, #553c9a, #ee4b2b);
    -webkit-border-image: -webkit-linear-gradient(45deg, #553c9a, #ee4b2b);
    border-image-slice: 1;
    border-radius: 15px;
    /*background-image: linear-gradient(45deg, #553c9a, #ee4b2b); */
}

.text {
    color: black;
    font-weight: 500;
}
</style>