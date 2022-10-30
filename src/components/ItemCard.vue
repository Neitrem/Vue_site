<template>
  <div class="card">
        <div class="card__container">
            <img v-if="this.item.type === 'car'" src="../assets/car_img.jpg" class="img">
            <img v-else src="../assets/home_img.jpg" class="img">
            <p class="title">{{ this.item.title }}</p>
            <p class="cost">{{ this.item.cost }} $</p>
            <div  class="stats">
                <div v-if="this.item.type === 'car'" class="stats__car">
                    <p class="point">Пробег: {{ this.item.mileage }}</p>
                    <p class="point">Класс: {{ this.item.frame_type }}</p>
                    <p class="point">Привод: {{ this.item.drive }}</p>
                </div>
                <div v-else class="stats__house">
                    <p class="point">Площадь: {{ this.item.area }}</p>
                    <p class="point">Кол-во комнат: {{ this.item.floor }}</p>
                    <p class="point">Этаж: {{ this.item.rooms_count }}</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.card {
    position: relative;
    display: inline-block;
}
.card__container {
    margin: 10px;
    position: relative;
    border-radius: 15px;
    background:  #fff;
    box-shadow: 1px -1px 5px gray;
    display: inline-flex;
    display: block;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px;
}

.img {
    width: 250px;
    height: 250px;
}
</style>