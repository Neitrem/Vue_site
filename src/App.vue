<template>
    <div>
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