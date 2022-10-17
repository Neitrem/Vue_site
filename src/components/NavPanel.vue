<template>
    <div class="nav">
        <div class="nav__container">
            <ul class="list">
                <li class="list-el">Главная</li>
                <li class="list-el">Авто</li>
                <li class="list-el">Недвижимость</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.nav__container {
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-right: 1px solid gray;

    height: 100%;
}

.list {
    list-style: none;
    width: 60%;
}

.list-el {

}
</style>