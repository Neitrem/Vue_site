<template>
  <div class="card">
        <div class="card__container">
            <img src="" alt="" class="img">
            <p class="title">{{  }}</p>
            <p class="cost">{{  }} $</p>
            <div  class="stats">
                <div v-if="type === 'car'" class="stats__car">
                    <p class="point">Пробег: {{  }}</p>
                    <p class="point">Класс: {{  }}</p>
                    <p class="point">Привод: {{  }}</p>
                </div>
                <div v-else class="stats__house">
                    <p class="point">Площадь: {{  }}</p>
                    <p class="point">Кол-во комнат: {{  }}</p>
                    <p class="point">Этаж: {{  }}</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>