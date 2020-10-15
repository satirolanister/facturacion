<template>
  <div>
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="">
                <div class="row">
                <div class="col-md-8">   
                <div class="form-group">
                  <div>
                      <label for="">CC / NIT: </label>
                      <input class="col-md-9" type="number" placeholder="CC / NIT " v-model="cc" >
                      <button class="btn btn-secondary" @click="getclientId" >Buscar</button>
                  </div>  
                </div>
                <div class="form-group">
                  <div>
                  <label for="">Nombre Cliente:</label>      
                  <input class="col-md-9" type="text" placeholder="Nombre cliente" v-model="nombre"/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="">Vendedor:</label>  
                  <input class="col-md-9" type="text" placeholder="Vendedor"/>
                </div>
                <div class="form-group">
                        <label for="">Metodo de pago:</label>
                        <select class="col-md-9">
                            <option value="1">Efectivo</option>
                        </select>
                </div>
                </div>
                <div class="col-md-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                    <div class="col-6">
                      <button class="btn btn-secondary" @click="buscar = true">Buscar factura</button>
                    </div>
                    <div class="col-6">
                      <button class="btn btn-success">Generar factura</button>  
                    </div>
                  </div>  
                  </div>
                  </div>
                </div>
                </div>
                <template v-if="existe === false">
                        <form @submit.prevent="createClient">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="card">
                                <div class="card-body">
                                  <div class="form-group">
                                  <div>  
                                  <input type="number" v-model="client._cel" placeholder="Cedula">
                                  </div>
                                  <div>
                                  <input type="text" v-model="client.nombre" placeholder="Nombre">
                                  </div>
                                  <div>
                                  <input type="text" v-model="client.apellido" placeholder="Apellido">
                                  </div>
                                  <div>
                                  <input type="date" v-model="client.f_nacimiento" placeholder="Fecha de nacimiento">
                                  </div>
                                  <div>
                                  <input type="text" v-model="client.direccion" placeholder="dirección">
                                  </div>
                                  <div>
                                  <input type="number" v-model="client.telefono" placeholder="telefono">
                                  </div>
                                  <button class="btn btn-success">Agregar</button>
                                  <button class="btn btn-danger" @click='existe=` `'>Cancelar</button>                                  
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </template>
                <template v-if="buscar === true">
                      <form @submit.prevent="">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="card">
                              <div class="card-body">
                                <div class="form-group">
                                  <div>
                                    <input type="number" v-model="n_factura" placeholder="N factura">
                                  </div>
                                  <br>
                                  <div>
                                    <button class="btn btn-secondary">Buscar</button>
                                    <button class="btn btn-danger" @click="buscar = false">Cancelar</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                </template>
                <hr>
                <div>
                    <div class="form-group">
                      <label for="">Codigo:</label>
                      <input type="text" placeholder="Codigo de producto" v-model="buscar">
                      <button class="btn btn-secondary" @click="getProductId">Buscar</button>
                    </div>  
                    <div class="form-group">
                      <input type="text" placeholder="Descripcion" v-model="product.descripcion">
                      <input type="number" placeholder="Existencias" v-model="product.existencia">
                      <input type="number" placeholder="precio" v-model="val">
                      <input type="number" placeholder="cantidad" v-model="can">
                      <button class="btn btn-primary" @click="addproduct">+</button>
                    </div>
                    <div class="form-group table-responsive">
                        <table class="table table-bordered">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Codigo</th>
                                    <th>Descripción</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="producto of productos" :key="producto._id">
                                    <td>{{producto._id}}</td>
                                    <td>{{producto.descripcion}}</td>
                                    <td>{{producto.cantidad}}</td>
                                    <td>{{producto.valor}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "factura",
  data() {
    return{
      factura:{},
      client:{},
      productos:[],
      product:{},
      cc: '',
      existe: '',
      nombre: '',
      n_factura:'',
      buscar: '',
      can:'',
      val: ''
    }
  },
  mounted(){
    
  },
  methods:{
    registersale(){
      console.log('Funciona');
    },
    getclientId(){

      const id=parseInt(this.cc);
      axios
        .get('http://localhost:3000/api/user/'+id)
        .then((data) =>{
          this.existe = data.data.success;
          if(this.existe === false){
            alert('Se debe registrar cliente');
            this.client._cel=this.cc;
            this.cc='';
          }else{
            this.nombre = data.data.nombre +' '+ data.data.apellido;
            this.cc = data.data._cel;
          }
        })
        .catch((err) => {
          console.log(err)
        });
    },
    createClient(){
      this.client._cel=parseInt(this.client._cel);
      this.nombre= ' '; 
      axios
        .post('http://localhost:3000/api/user/',this.client)
        .then(data=>{
          console.log(data.data);
          this.existe = ""
          this.client={}
        })
        .catch(err=>console.log(err));     
    },
    addFactura(){
      //factura
      this.client._cel=parseInt(this.client._cel);
      // detalle factura
      this.productos._id=parseInt(this.product._id);
      this.productos.cantidad=parseInt(this.productos.cantidad);
      this.productos.valor=parseInt( this.productos.valor);
      console.log(`cc: ${this.client._cel}, 
                  codigo: ${ this.productos._id}, 
                  cantidad: ${this.productos.cantidad},
                  valor: ${this.productos.valor}
      `);

    },

    getProductId(){
      if(this.buscar === '' || this.buscar === 'undefined'){
        alert('se debe colocar el codido de producto');
      }else{
        this.buscar= parseInt(this.buscar)
        axios
        .get('http://localhost:3000/api/product/' + this.buscar)
        .then(data =>{
          this.product=data.data;
          this.buscar = '';
        })
        .catch(err => console.log(err));

      }
    },

    addproduct(){
      
      if(this.buscar === '' || this.product.descripcion === ''){
        alert('se debe realizar busqueda primero')
      }else{

      let datos = {
        _id:this.product._id,
        descripcion:this.product.descripcion,
        valor: this.val,
        cantidad: this.can
      };
      this.productos.push(datos);
      this.cc=''  
      this.can= '';
      this.val='';
      }
    }
  }
};
</script>