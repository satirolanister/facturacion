<template>
    <div>
        <div class="container">
            <div class="row pt-3">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="sendproduct">
                                <div class="form-group">
                                    <textarea cols="54" rows="5" placeholder="descripcion producto"
                                        v-model="products.descripcion"></textarea>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="number" placeholder="cantidad"
                                        v-model="products.cantidad">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="number" placeholder="precio compra"
                                        v-model="products.precio_comp">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="number" placeholder="precio venta"
                                        v-model="products.precio_ven">
                                </div>
                                <div class="form-group">
                                    <select class="form-control" name="proveedores" v-model="products.id_provee">
                                        <option v-for="supplier in suppliers" :key="supplier.id_provee" :value="supplier.id_provee">
                                            {{supplier.descripcion}}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select class="form-control" name="proveedores" v-model="products.categoria">
                                        <option v-for="category in categorys" :key="category.id_cat" :value="category.id_cat" >
                                            {{category.descrip}}
                                        </option>
                                    </select>
                                </div>
                                <button class="btn btn-primary btn-block">Insertar producto</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>descripcion</th>
                                <th>cantidad</th>
                                <th>p-provedor </th>
                                <th>p-cliente</th>
                                <th>proveedor</th>
                                <th>categoria</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product of products" :key="product._id">
                                <td>{{product.descripcion}}</td>
                                <td>{{product.cantidad}}</td>
                                <td>{{product.precio_comp}}</td>
                                <td>{{product.precio_ven}}</td>
                                <td>{{product.id_provee}}</td>
                                <td>{{product.categoria}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'


    export default {
        name: 'productos',
        data() {
            return {
                products: {},
                categorys: [],
                suppliers: []
            }
        },
        mounted() {
            this.getproducts(),
            this.getCategory(),
            this.getSupplier()
        },
        methods: {
            getproducts(){
                axios
                    .get('http://localhost:3000/api/product')
                    .then(data => console.log(data.data))
                    .catch(err => {
                        console.log(err);
                    })
            },

            sendproduct() {
                console.log(this.products);
                this.products = {};
            },
            getCategory() {

                axios
                    .get('http://localhost:3000/api/categorias')
                    .then(responde => {
                        this.categorys = responde.data
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            getSupplier() {

                axios
                    .get('http://localhost:3000/api/proveedores')
                    .then(data => {
                        this.suppliers = data.data
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        }
    }
</script>