<template>
    <div class="app">
        <top-panel></top-panel>
        <div class="wrap">
            <div class="left-panel">
                <div class="left-panel__container">
                    <nav-panel></nav-panel>
                    <left-widget></left-widget>
                </div>
            </div>
            <!-- <div class="line"></div>-->
            <div class="rigth-panel">
                <div class="right-panel__container">
                    <img class="img" src="@/assets/home_page_img.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavPanel from '@/components/NavPanel';
import TopPanel from '@/components/TopPanel';
import LeftWidget from '@/components/LeftWidget';


/* eslint-disable vue/no-unused-components */


export default {
    components: {
        TopPanel, NavPanel, LeftWidget
    },
    data () {
        return {

        }
    }, 
    methods: {

    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Courier New', Courier, monospace;
    text-decoration: none;
    color: black;
}

.link:hover {
    border-bottom: 1px solid gray;
}

.link:active {
    font-weight: 600;
}

.post {
    margin-top: 15px;
    padding: 15px;
    border: 1px solid teal;
}

form {
    display: flex;
    flex-direction: column;
}

.input {
    padding: 10px 15px;
    margin-top: 15px;
    width: 100%;
    border: 1px solid teal;
}

.btn {
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
}

.wrap {
    height: 1000px;
    margin: 15px;
    display: flex;
    justify-content: space-between;
}
.left-panel {
    width: 20%;
    height: 100%;
}

.left-panel__container {
    margin: 15px;
    border-right: 1px solid gray;;
    height: 100%;
}

.rigth-panel {
    display: flex;
    width: 80%;
    height: 100%;
}

.right-panel__container {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
}

.img {
    margin: 15px;
    border-radius: 15px;
    width: 80%;
}

</style>