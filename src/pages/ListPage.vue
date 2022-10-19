<template>
  <div class="list-page">
    <div class="head">
        <p class="title">{{  }}</p>
        <p class="amount">{{  }}</p>
    </div>
    <div v-for="item in items" class="list" v-bind:key="item.id">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.list {
    display: flex;
    flex-direction: row;
    column-count: 3;
    justify-content: space-between;
}
</style>