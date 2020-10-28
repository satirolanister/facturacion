<template>
    <div class="mx-3 mb-3"> 
        <div class="row">
            <div class="card">
                <div class="card-body">
                    <form @submit.prevent="addprovedor">
                        <div class="form-group">
                            <div>
                                <input type="number" required placeholder="Codigo Categoria" v-model="categoria.id_cat">
                            </div>
                            <div>
                                <input type="text" required placeholder="Nombre" v-model="categoria.descrip">
                            </div>
                            <div class="mt-2">
                                <button class="btn btn-success">Agregar Categoria</button>
                                <button class="btn btn-danger" @click="form">Cancelar</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            cate: '',
            categoria: {}
        }
    }, 
    methods: {
        form(){
            this.categoria = ""
            this.$emit('cancelarCat', this.cate);
        },
        addprovedor(){
            this.categoria.id_cat = parseInt(this.categoria.id_cat);
            axios
                .post('http://localhost:3000/api/categorias', this.categoria)
                .then(data => {
                    console.log(data);
                    this.categoria = {};
                })
                .catch(err=>console.log(err));
            this.form();
        }
    }

}
</script>