<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-body">
                        <slot name="body">
                            <form>
                                <div class="row justify-content-start form-group">
                                    <div>
                                        <input type="number" required placeholder="Codigo Categoria"
                                            v-model="categoria.id_cat">
                                    </div>
                                    <div>
                                        <input class="mt-1" type="text" required placeholder="Nombre" v-model="categoria.descrip">
                                    </div>
                                    <div class="mt-2">
                                        <button type="button" class="btn btn-success btn-block" @click.prevent="addprovedor">Agregar
                                            Categoria</button>
                                        <button type="button" class="btn btn-danger btn-block"
                                            @click="form">Cancelar</button>
                                    </div>
                                </div>
                            </form>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>

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
            form() {
                this.categoria = ""
                this.$emit('cancelarCat', this.cate);
            },
            addprovedor() {
                this.categoria.id_cat = parseInt(this.categoria.id_cat);
                axios
                    .post('http://localhost:3000/api/categorias', this.categoria)
                    .then(data => {
                        console.log(data);
                        this.categoria = {};
                    })
                    .catch(err => console.log(err));
                this.form();
            }
        }

    }
</script>