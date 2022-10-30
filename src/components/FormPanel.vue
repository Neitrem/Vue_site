<template>
    <div class="form">
        <button @click="this.$store.commit('changeVisibility')">Закрыть</button>
        <div class="form__container">
            <form @submit.prevent class="inp-form">
                <input 
                    v-model="uni_model.title"
                    placeholder="Название" 
                    type="text"
                >
                <div v-if="this.$route.query.type === 'house'" class="block">
                    <input 
                        v-model="uni_model.area"
                        placeholder="Площадь" 
                        type="text"
                    >
                    <input 
                        v-model="uni_model.floor"
                        placeholder="Этаж" 
                        type="text"
                    >
                    <input 
                        v-model="uni_model.rooms_count"
                        placeholder="Количество комнат" 
                        type="text"
                    >
                </div>
                <div v-else class="block">
                    <input 
                        v-model="uni_model.mileage"
                        placeholder="Пробег" 
                        type="text"
                    >
                    <input 
                        v-model="uni_model.frame_type"
                        placeholder="Тип кузова" 
                        type="text"
                    >
                    <input 
                        v-model="uni_model.drive"
                        placeholder="привод" 
                        type="text"
                    >
                </div>
                <input 
                    v-model="uni_model.cost"
                    placeholder="Цена" 
                    type="text"
                >
                <button @click="createItem">Сохранить</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            uni_model: {
                id: 1,
                title: '',
                area: '',
                floor: '',
                rooms_count: '',
                mileage: '',
                frame_type: '',
                drive: '',
                cost: ''
            }
        }
    },
    methods: {
        
        createItem() {
            console.log("new")
            if(this.$route.query.type === 'car') {
                
                this.$store.commit('addNewItem', { 
                                                "id": this.$store.getters.getNewID, 
                                                "type": this.$route.query.type, 
                                                "title": this.uni_model.title,  
                                                "area": this.uni_model.area, 
                                                "floor": this.uni_model.floor, 
                                                "rooms_count": this.uni_model.rooms_count, 
                                                "cost": this.uni_model.cost
                });
            }
            else {
                this.$store.commit('addNewItem', { 
                                                "id": this.$store.getters.getNewID, 
                                                "type": this.$route.query.type, 
                                                "title": this.uni_model.title,
                                                "mileage": this.uni_model.mileage, 
                                                "frame_type": this.uni_model.frame_type, 
                                                "drive": this.uni_model.drive, 
                                                "cost": this.uni_model.cost
                });
            }
            
        }
    }
}
</script>

<style>
.form {
    z-index: 9;
    position: absolute;
    width:100%;
    height: 100%;
    background: rgba(130, 130, 130, 0.8);
    	
    backdrop-filter: blur(2px); 
    display: flex;
    justify-content: center;
    align-items: center;
}
.form__container {
    
    width: 300px;
    height: 300px;
    background: #fff;
    
    border-radius: 15px;
}
.inp-form {
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.block {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>