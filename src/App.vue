<template>
    <div>
        <top-panel></top-panel>
        <div class="wrap">
            <div class="left-panel">
                <div class="left-panel__container">
                    <button @click="fetchItems"></button>
                    <nav-panel></nav-panel>
                    <left-widget></left-widget>
                </div>
            </div>
            <!-- <div class="line"></div>-->
            <div class="rigth-panel">
                <div class="right-panel__container">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavPanel from '@/components/NavPanel';
import TopPanel from '@/components/TopPanel';
import LeftWidget from '@/components/LeftWidget';
import axios from 'axios';


/* eslint-disable vue/no-unused-components */

/* eslint-disable no-unused-vars */

/* eslint-disable no-empty */ 


export default {
    components: {
        TopPanel, NavPanel, LeftWidget
    },
    data () {
        return {

        }
    }, 
    methods: {
        async fetchItems () {
            try {
                const response = await axios.get('http://localhost:3000/items')
                console.log(response);
            } catch (e) {
                alert('Error!');
            }
        }
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
    display: inline-block;
    width: 80%;
    height: 100%;
}





</style>