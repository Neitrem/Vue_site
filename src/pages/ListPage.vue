<template>
	<div class="list-page">
		<div class="head">
			<p class="title">{{  }}</p>
			<p class="amount">{{  }}</p>
		</div>
		<div class="list">
			<item-card v-for="item in this.items" v-bind:key="item.id"></item-card>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import ItemCard from '@/components/ItemCard'
import ItemCard from '@/components/ItemCard.vue';


export default {
	components: {
		ItemCard
ItemCard
	},
	data() {
		return {
			items: []
		}
	},
	methods: {
        async fetchItems () {
            try {
                const response = await axios.get('http://localhost:3000/items')
				this.items = response.data;
                console.log(response);
            } catch (e) {
                console.log(e);
            }
        }
    },
	mounted() {
		this.fetchItems();
	}
}
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: row;
    column-count: 3;
    justify-content: space-between;
}
</style>