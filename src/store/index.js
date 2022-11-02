import { createStore } from "vuex";
import axios from 'axios';

export default createStore ({
    state: {
        items: [],
        isOpenForm: false
    },
    getters: {
        getByType: (state) => (type) => {
            return state.items.filter(e => e.type === type);
        },
        getNewID(state) {
            return state.items.length + 1;
        }
    },
    mutations: {
        setItems(state, newData) {
            state.items = newData;
        },
        addNewItem(state, item) {
            state.items.push(item);
        },
        changeVisibility(state) {
			state.isOpenForm = !state.isOpenForm
		},
    },
    actions: {
        async getNewData(context){
            try{ 
                await axios
                        .get('http://localhost:3000/items', 
                        {
                            headers: {
                                "Access-Control-Allow-Origin"
                                : 
                                "*"
                                }
                        })
                        .then(response => (context.commit('setItems', response.data)));
            } catch (e) {
                console.log(e);
            }
        }
        
    }
})