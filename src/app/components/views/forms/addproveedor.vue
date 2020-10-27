<template>
    <div class="mx-3 mb-3"> 
        <div class="row">
            <div class="card">
                <div class="card-body">
                    <form @submit.prevent="addprovedor">
                        <div class="form-group">
                            <div>
                                <input type="number" required placeholder="NIT o CC" v-model="proveedor.id_provee">
                            </div>
                            <div>
                                <input type="text" required placeholder="Nombre" v-model="proveedor.descripcion">
                            </div>
                            <div class="mt-2">
                                <button class="btn btn-success">Agregar Proveedor</button>
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
            provee: '',
            proveedor: {}
        }
    }, 
    methods: {
        form(){
            this.provee = ""
            this.$emit('cancelar', this.provee);
        },
        addprovedor(){
            this.proveedor.id_provee = parseInt(this.proveedor.id_provee);
            axios
                .post('http://localhost:3000/api/proveedores', this.proveedor)
                .then(data => {
                    console.log(data);
                    this.proveedor = {};
                })
                .catch(err=>console.log(err));
            this.form();
        }
    }

}
</script>