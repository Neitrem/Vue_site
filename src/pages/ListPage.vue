<template>
	<div class="list-page">
		<div class="head">
			<p class="title">{{  }}</p>
			<p class="amount">{{  }}</p>
		</div>
		<div class="list">
			<item-card v-bind:item="item" v-for="item in this.items" v-bind:key="item.id"></item-card>
		</div>
	</div>
</template>

<script>

import ItemCard from '@/components/ItemCard'
import axios from 'axios';

export default {

	components: {
		ItemCard
	},
	data() {
		return {
			items: []
		}
	},
	methods: {
        async fetchItems () {
            try{ 
				await axios
						.get('http://localhost:3000/items')
						.then(response => (this.items = response.data));
				this.items = this.items.filter(e => e.type === this.$route.query.type);
            } catch (e) {
                console.log(e);
            }
        }
    },
	watch: {
		'$route.query.type': {
			immediate: true,
			handler() {
				this.fetchItems();
			}
		}
	}
	
}
</script>

<style scoped>
.list {
	position: relative;
    column-count: 3;
	column-count: 3;
    justify-content: space-around;
	width: 100%;
	height: 1000px;
}
</style>