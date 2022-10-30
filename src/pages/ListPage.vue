<template>
	<div class="list-page">
		<div class="head">
			<p class="title">{{  }}</p>
			<p class="amount">{{  }}</p>
			<button @click="this.$store.commit('changeVisibility')">Open</button>
		</div>
		<div class="list">
			<item-card v-bind:item="item" v-for="item in this.$store.getters.getByType(this.$route.query.type)" v-bind:key="item.id"></item-card>
		</div>
	</div>
</template>

<script>
import ItemCard from '@/components/ItemCard'

export default {

	components: {
		ItemCard
	},
}
</script>

<style scoped>
.list {
	position: relative;
    column-count: 3;
	column-count: 3;
    justify-content: space-around;
	width: 100%;
}
</style>