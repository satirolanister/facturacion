<template>
  <div>
    <div class="container">
      <div class="row pt-3">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="sendproduct">
                <div>
                <div class="form-group">
                  <textarea class="form-control" required rows="3" placeholder="descripcion producto"
                    v-model="items.descripcion"></textarea>
                </div>
                <div class="form-group">
                  <input class="form-control" required type="number" placeholder="cantidad" v-model="items.existencia" />
                </div>
                <div class="form-group">
                  <input class="form-control" required type="number" placeholder="precio unitario" v-model="items.precio_u" />
                </div>
                <div class="form-group">
                  <label >Seleccione un proveedor</label>
                  <select @click="getSupplier" required class="form-control" name="proveedores" v-model="items.id_prov">
                    <option v-for="supplier in suppliers" :key="supplier.id_provee" :value="supplier.id_provee">
                      {{ supplier.descripcion }}
                    </option>
                    <option @click.prevent="provee=true">Agregar proveedor</option>
                  </select>
                </div>
                <template v-if="provee === true">
                      <addprovedor @cancelar="provee = $event"></addprovedor>
                </template>
                <div class="form-group">
                  <label >Seleccione un categoria</label>
                  <select @click="getCategory" required class="form-control" name="proveedores" v-model="items.categoria">
                    <option v-for="category in categorys" :key="category.id_cat" :value="category.id_cat">
                      {{ category.descrip }}
                    </option>
                    <option @click.prevent="cate =true ">Agregar Categoria</option>
                  </select>
                </div>
                <template v-if="cate === true">
                      <addcategoria @cancelarCat="cate = $event"></addcategoria>
                </template>
                <template v-if="edit === false">
                  <button class="btn btn-primary btn-block">
                    Insertar producto
                  </button>
                </template>
                <template v-else>
                  <button class="btn btn-primary btn-block">
                    Editar producto
                  </button>
                </template>
                </div>  
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="tabla">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>codigo</th>
                  <th>descripcion</th>
                  <th>Existencias</th>
                  <th>Precio Unitario</th>
                  <th>proveedor</th>
                  <th>categoria</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product of products" :key="product._id">
                  <td>{{product._id}}</td>
                  <td>{{ product.descripcion }}</td>
                  <td>{{ product.existencia }}</td>
                  <td>$ {{ new Intl.NumberFormat('es-CO').format(product.precio_u)}}</td>
                  <td>{{ product.id_prov }}</td>
                  <td>{{ product.categoria }}</td>
                  <td>
                    <div>
                      <div>
                        <div class="pt-1">
                          <button class="btn btn-secondary" @click="editproduct(product._id)">Editar</button>
                        </div>
                        <div class="pt-1">
                          <button class="btn btn-danger" @click="deleteproduct(product._id)">Borrar</button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import addprovedor from "./forms/addproveedor.vue";
  import addcategoria from "./forms/addcategoria.vue";
  import item from "../../item";

  export default {
    name: "productos",
    components:{
      addprovedor,
      addcategoria
    },
    data() {
      return {
        items: new item(),
        products: {},
        categorys: [],
        suppliers: [],
        edit:false,
        idEdit: '',
        provee: '',
        cate: ''
      };
    },
    mounted() {
      this.getproducts(), this.getCategory(), this.getSupplier();
    },
    methods: {
      getproducts() {
        axios
          .get("http://localhost:3000/api/product")
          .then((data) => {
            this.products = data.data;
          })
          .catch((err) => {
            console.log(err);
          });
      },

      sendproduct() {
        this.items.existencia = parseInt(this.items.existencia, 10);
        this.items.precio_u = parseInt(this.items.precio_u, 10);
        if(this.edit === false){
        axios
          .post("http://localhost:3000/api/product", this.items)
          .then((data) => {
            console.log('Datos enviados');
            this.getproducts();
            this.items = new item();
          })
          .catch((err) => console.log(err));
        }else{
          axios
          .put('http://localhost:3000/api/product/'+this.idEdit, this.items)
          .then(res => {
            console.log(res.data);
            this.getproducts();
            this.edit=false
            this.items = {}
          })
          .catch(err=>console.log(err))
        }
      },
      getCategory() {
        axios
          .get("http://localhost:3000/api/categorias")
          .then((responde) => {
            this.categorys = responde.data;
          })
          .catch((err) => {
            console.log(err);
          });
      },
      getSupplier() {
        axios
          .get("http://localhost:3000/api/proveedores")
          .then((data) => {
            this.suppliers = data.data;
          })
          .catch((err) => {
            console.log(err);
          });
      },
      deleteproduct(id) {
        axios
          .delete('http://localhost:3000/api/product/' + id)
          .then(res => {
            console.log(res.status);
            this.getproducts();
          })
          .catch(err => console.log(err));
      },
      editproduct(id) {
        axios
          .get('http://localhost:3000/api/product/' + id)
          .then(data => {
            let d = data.data;
              this.items={
                descripcion : d.descripcion,
                existencia : d.existencia,
                precio_u : d.precio_u,
                id_prov : d.id_prov,
                categoria : d.categoria
              };
              this.edit=true
              this.idEdit = id;
          })
          .catch(err => console.log(err));
      }
    },
  };
</script>