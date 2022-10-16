<template>
  <div class="top">
    <div class="top__container">
        <p class="logo">Brom.ru</p>
        <p class="second-name">Доска объявлений авто и недвижимости</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.top__container {
    margin: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid gray;
}

.second-name {
    text-align: center;
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
}

.logo {
    display: inline-block;
    width: fit-content;

    font-size: 70px;
    font-weight: 600;
    color: transparent;
    background-clip: text;
    background-image: linear-gradient(45deg, #553c9a, #ee4b2b);
}
</style>