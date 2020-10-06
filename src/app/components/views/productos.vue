<template>
  <div>
    <div class="container">
      <div class="row pt-3">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="sendproduct">
                <div class="form-group">
                  <textarea cols="41" rows="5" placeholder="descripcion producto"
                    v-model="items.descripcion"></textarea>
                </div>
                <div class="form-group">
                  <input class="form-control" type="number" placeholder="cantidad" v-model="items.cantidad" />
                </div>
                <div class="form-group">
                  <input class="form-control" type="number" placeholder="precio compra" v-model="items.precio_comp" />
                </div>
                <div class="form-group">
                  <input class="form-control" type="number" placeholder="precio venta" v-model="items.precio_ven" />
                </div>
                <div class="form-group">
                  <select class="form-control" name="proveedores" v-model="items.id_prov">
                    <option v-for="supplier in suppliers" :key="supplier.id_provee" :value="supplier.id_provee">
                      {{ supplier.descripcion }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <select class="form-control" name="proveedores" v-model="items.categoria">
                    <option v-for="category in categorys" :key="category.id_cat" :value="category.id_cat">
                      {{ category.descrip }}
                    </option>
                  </select>
                </div>
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
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="tabla">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>descripcion</th>
                  <th>cantidad</th>
                  <th>p-provedor</th>
                  <th>p-cliente</th>
                  <th>proveedor</th>
                  <th>categoria</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product of products" :key="product._id">
                  <td>{{ product.descripcion }}</td>
                  <td>{{ product.cantidad }}</td>
                  <td>$ {{ product.precio_comp }}</td>
                  <td>$ {{ product.precio_ven }}</td>
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

  export default {
    name: "productos",
    data() {
      return {
        items: {},
        products: {},
        categorys: [],
        suppliers: [],
        edit:false,
        idEdit: ''
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
        this.items.cantidad = parseInt(this.items.cantidad, 10);
        this.items.precio_comp = parseInt(this.items.precio_comp, 10);
        this.items.precio_ven = parseInt(this.items.precio_ven, 10);

        if(this.edit === false){
          axios
          .post("http://localhost:3000/api/product", this.items)
          .then((data) => {
            console.log('Datos enviados');
            this.getproducts();
            this.items = {};
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
                cantidad : d.cantidad,
                precio_comp : d.precio_comp,
                precio_ven : d.precio_ven,
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