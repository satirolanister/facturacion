<template>
  <div>
    <div class="container">
      <div class="row pt-3">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="sendproduct">
                <div class="form-group">
                  <textarea
                    cols="41"
                    rows="5"
                    placeholder="descripcion producto"
                    v-model="items.descripcion"
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    type="number"
                    placeholder="cantidad"
                    v-model="items.cantidad"
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    type="number"
                    placeholder="precio compra"
                    v-model="items.precio_comp"
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    type="number"
                    placeholder="precio venta"
                    v-model="items.precio_ven"
                  />
                </div>
                <div class="form-group">
                  <select
                    class="form-control"
                    name="proveedores"
                    v-model="items.id_prov"
                  >
                    <option
                      v-for="supplier in suppliers"
                      :key="supplier.id_provee"
                      :value="supplier.id_provee"
                    >
                      {{ supplier.descripcion }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <select
                    class="form-control"
                    name="proveedores"
                    v-model="items.categoria"
                  >
                    <option
                      v-for="category in categorys"
                      :key="category.id_cat"
                      :value="category.id_cat"
                    >
                      {{ category.descrip }}
                    </option>
                  </select>
                </div>
                <button class="btn btn-primary btn-block">
                  Insertar producto
                </button>
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
                          <button class="btn btn-secondary">Editar</button>
                        </div>
                        <div class="pt-1">
                          <button class="btn btn-danger">Borrar</button>
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

      axios
        .post("http://localhost:3000/api/product", this.items)
        .then((data) => {
          console.log(data.data);
          this.items = {};
          this.getproducts();
        })
        .catch((err) => console.log(err));
      this.items = {};
      this.getproducts();
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
  },
};
</script>