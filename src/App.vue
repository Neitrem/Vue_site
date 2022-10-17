<template>
    <div class="app">
        <top-panel></top-panel>
        <div class="wrap">
            <div class="left-panel">
                <nav-panel></nav-panel>
            </div>
            <div class="line"></div>
            <div class="rigth-panel">
                
            </div>
        </div>
    </div>
</template>

<script>
import NavPanel from '@/components/NavPanel';
import TopPanel from '@/components/TopPanel';


/* eslint-disable vue/no-unused-components */


export default {
    components: {
        TopPanel, NavPanel
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

    font-family: 'Courier New', Courier, monospace
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

.rigth-panel {
    width: 60%;
    height: 100%;
}

.line {
    margin: 15px 0 15px 0;
    border-left: 1px solid gray;
    height: 100%;
}

</style>