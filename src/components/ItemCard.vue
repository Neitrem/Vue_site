<template>
  <div class="card">
        <div class="card__container">
            <img src="" alt="" class="img">
            <p class="title">{{  }}</p>
            <p class="cost">{{  }} $</p>
            <div  class="stats">
                <div v-if="type === 'car'" class="stats__car">
                    <p class="mileage">Пробег: {{  }}</p>
                    <p class="frame-type">Класс: {{  }}</p>
                    <p class="drive-type">Привод: {{  }}</p>
                </div>
                <div v-else class="stats__house">
                    p.
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