<template>
    <div class="nav">
        <div class="nav__container">
            <ul class="list">
                <li class="list-el">
                    <a class="link" href="#">Главная</a>
                </li>
                <li class="list-el">
                    <a class="link" href="#">Авто</a>
                </li>
                <li class="list-el">
                    <a class="link" href="#">Недвижимость</a>
                </li>
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
    margin:15px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;
}

.list {
    list-style: none;
    width: 60%;
}

.list-el {
    padding: 5px;
    margin-bottom: 10px;
}
</style>