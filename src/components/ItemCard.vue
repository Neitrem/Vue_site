<template>
  <div class="card">
        <div class="card__container">
            <img src="" alt="" class="img">
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

</style>