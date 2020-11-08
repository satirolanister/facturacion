<template>
  <div>
    <div class="container">
      <form>
        <div class="row pt-5">
          <div class="col-md-5">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="card">
                      <div class="card-body">
                        <div>
                        <div class="form-group">
                          <div>
                            <label for="">CC / NIT: </label>
                            <br>
                            <input class="col-md-10" required type="number" placeholder="CC / NIT " v-model="cc" autofocus>
                            <button class="btn btn-secondary" @click.prevent="getclientId" data-toggle="modal"
                              data-target="#exampleModal"><i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                            <modal v-if="existe === false" v-bind:cel="cc" @cancelar="existe = $event"></modal>
                          </div>
                        </div>
                        <div class="form-group">
                          <div>
                            <label for="">Nombre Cliente:</label>
                            <input class="col-md-10" disabled type="text" placeholder="Nombre cliente"
                              v-model="nombre" />
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="">Vendedor:</label>
                          <br>
                          <input required class="col-md-10" type="text" placeholder="Vendedor" />
                        </div>
                        <div class="form-group">
                          <label for="">Metodo de pago:</label>
                          <select required class="col-md-10">
                            <option value="1">Efectivo</option>
                          </select>
                        </div>
                        </div>
                        <button class="btn btn-success btn-block" @click.prevent="addFactura()">Agregar venta</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="form-group">
              <div class="row">
                <div class="col-7">
                  <div class="row mx-2">
                    <div class="card">
                      <div class="card-body">
                        <div>
                          <input type="text" class="col-sm-10" placeholder="Codigo de producto" v-model="buscar">
                          <button class="btn btn-secondary" @click.prevent="getProductId"><i class="fa fa-search"
                              aria-hidden="true"></i></button>
                          <input type="currency" required class="col-md-10 mt-1" placeholder="Valor" v-model="val" />
                          <input type="number" required class="col-md-10 mt-1" placeholder="cantidad" v-model="can">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-5">
                  <div class="card">
                    <div class="card-body">
                      <div class="row justify-content-start">
                       <div class="col-6">
                         <label>Descripción: {{product.descripcion}}</label>
                       </div> 
                      <div class="col-6">
                      <label>existencia: {{product.existencia}}</label>
                      </div>
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-primary mt-2 col-md-12" @click.prevent="addproduct">+</button>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead class="thead-dark">
                  <tr>
                    <th>Codigo</th>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th>
                    <th>Precio total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="producto of productos" :key="producto._id">
                    <td>{{producto._id}}</td>
                    <td>{{producto.descripcion}}</td>
                    <td>{{producto.cantidad}}</td>
                    <td>$ {{new Intl.NumberFormat('es-CO').format(producto.valor)}}</td>
                    <td>$ {{new Intl.NumberFormat('es-CO').format(producto.total)}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'

  import modal from './forms/addclientform.vue'

  export default {

    name: "factura",
    components: {
      modal
    },
    data() {
      return {
        productos: [],
        product: {},
        cc: '',
        existe: '',
        nombre: '',
        buscar: '',
        can: '',
        val: '',
        fullprice: ''
      }
    },
    mounted() {
      this.formatDecimal();
    },

    methods: {

      formatDecimal() {
        var currencyInput = document.querySelector('input[type="currency"]')
        var currency = 'COP' // https://www.currency-iso.org/dam/downloads/lists/list_one.xml

        // format inital value
        onBlur({
          target: currencyInput
        })

        // bind event listeners
        currencyInput.addEventListener('focus', onFocus)
        currencyInput.addEventListener('blur', onBlur)


        function localStringToNumber(s) {
          return Number(String(s).replace(/[^0-9.-]+/g, ""))
        }

        function onFocus(e) {
          var value = e.target.value;
          e.target.value = value ? localStringToNumber(value) : ''
        }

        function onBlur(e) {
          var value = e.target.value

          var options = {
            maximumFractionDigits: 2,
            currency: currency,
            style: "currency",
            currencyDisplay: "symbol"
          }

          e.target.value = value ?
            localStringToNumber(value).toLocaleString(undefined, options) :
            ''
        }
      },

      getclientId() {

        const id = parseInt(this.cc);
        axios
          .get('http://localhost:3000/api/user/' + id)
          .then((data) => {
            this.existe = data.data.success;
            if (this.existe === false) {
              alert('Se debe registrar cliente');
              this.cc = this.cc;
              this.nombre = '';
            } else {
              this.nombre = data.data.nombre + ' ' + data.data.apellido;
              this.cc = data.data._cel;
            }
          })
          .catch((err) => {
            console.log(err)
          });
      },

      getProductId() {
        if (this.buscar === '' || this.buscar === 'undefined') {
          alert('se debe colocar el codido de producto');
        } else {
          this.buscar = parseInt(this.buscar)
          axios
            .get('http://localhost:3000/api/product/' + this.buscar)
            .then(data => {
              if (data.data.message === 'Codigo de producto no existe') {
                alert('Codigo de producto no encontrado');
                this.buscar = ''
              } else {
                this.product = data.data;
              }

            })
            .catch(err => console.log(err));

        }
      },

      addproduct() {

        if (this.buscar === '' || this.buscar === 'undefined') {
          alert('se debe realizar busqueda primero');
        } else {
          this.product._id = parseInt(this.product._id);
          this.val = parseInt(this.val);
          this.can = parseInt(this.can);
          let datos = {
            _id: this.product._id,
            descripcion: this.product.descripcion,
            valor: this.val,
            cantidad: this.can,
            total: (this.val * this.can)
          };
          this.productos.push(datos);
          this.product.descripcion = '';
          this.product.existencia = '';
          this.can = '';
          this.val = '';
          this.buscar = ''
        }
      },

      addFactura() {
        //factura

        let id_client = {
          id_client: parseInt(this.cc)
        };

        let numfactura;
        let product = [];

        axios
          .post('http://localhost:3000/api/sale', id_client)
          .then(data => {
            numfactura = data.data.Numfactura;

            this.productos.forEach((value, index) => {
              let obj = {
                id_factura: numfactura,
                id_producto: value._id,
                cantidad: value.cantidad,
                valor: value.total
              };
              console.log(data);
              product.push(obj);
            });

            // detalle factura
            this.adddetalle(product);
            product = []
            id_client = {}
            numfactura = '';

          })
          .catch(err => {
            console.log(err);
          });


      },
      adddetalle(product) {
        axios
          .post('http://localhost:3000/api/detalle', product)
          .then(data => {
            console.log(data);

            this.cc = ''
            this.productos = [];
            this.product = {};
            this.existe = '';
            this.nombre = '';
            this.buscar = '';
            this.can = '',
              this.val = '',
              this.fullprice = ''
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  };
</script>