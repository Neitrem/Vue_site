<template>
    <div class="nav">
        <div class="nav__container">
            <ul class="list">
                <li class="list-el">
                    <router-link 
                        class="link" 
                        :to="{ name: 'main'}" 
                    >
                        Главная
                    </router-link>
                </li>
                <li class="list-el">
                    <router-link 
                        class="link" 
                        :to="{ name: 'list', query: {type: 'car'}}" 
                    >
                        Авто
                    </router-link>
                </li>
                <li class="list-el">
                    <router-link 
                        class="link" 
                        :to="{ name: 'list', query: {type: 'house'}}"
                    >
                        Недвижимость
                    </router-link>
                </li>
                <li class="list-el">
                    <router-link 
                        class="link" 
                        :to="{ name: 'about'}"
                    >
                        О нас
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

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