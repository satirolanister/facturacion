<template>
  <div>
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="">
                <div class="row">
                <div class="col-md-6">   
                <div class="form-group">
                  <div>
                      <label for="">CC / NIT: </label>
                      <input class="col-md-7" type="number" placeholder="CC / NIT " v-model="cc" >
                      <button class="btn btn-secondary" @click="getclientId" >Buscar</button>
                      <template v-if="existe === false">
                        <form @submit.prevent="createClient">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="card">
                                <div class="card-body">
                                  <div class="form-group">
                                  <input type="number" v-model="client._cel" placeholder="Cedula">
                                  <input type="text" v-model="client.nombre" placeholder="Nombre">
                                  <input type="text" v-model="client.apellido" placeholder="Apellido">
                                  <input type="date" v-model="client.f_nacimiento" placeholder="Fecha de nacimiento">
                                  <button class="btn btn-success btn-block">Agregar</button>
                                  <button class="btn btn-success btn-block" @click='existe=` `'>Cancelar</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </template>
                  </div>  
                </div>
                <div class="form-group">
                  <div>
                  <label for="">Nombre Cliente:</label>      
                  <input class="col-md-8" type="text" placeholder="Nombre cliente" v-model="nombre"/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="">Vendedor:</label>  
                  <input class="col-md-9" type="text" placeholder="Vendedor"/>
                </div>
                </div>
                <div class="col-md-6">
                    
                    <div class="form-group"> 
                    <label for="">N. Factura:</label>
                    <input class="col-md-9" type="text" placeholder="consecutivo">
                    </div>
                    <div class="form-group">
                        <label for="">Metodo de pago:</label>
                        <select class="col-md-8">
                            <option value="1">Efectivo</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="">Fecha:</label>
                        <input class="col-md-6" type="date">
                    </div>
                    
                </div>
                </div>
                <hr>
                <div>
                    <div class="form-group">
                    <label for="">Codigo Producto:</label>
                    <input type="text" placeholder="Codigo de producto">
                    <button class="btn btn-secondary" >Buscar</button>
                    <label for="">Descripción:</label>
                    <input type="text" placeholder="Descripcion">
                    <label for="">Cantidad</label>
                    <input type="number" placeholder="Cantidad">
                    <button class="btn btn-primary">+</button>
                    </div>
                    <div class="form-group table-responsive">
                        <table class="table table-bordered">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Codigo</th>
                                    <th>Descripción</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th>opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="text" disabled></td>
                                    <td><input type="text" disabled></td>
                                    <td><input type="text"></td>
                                    <td><input type="text" disabled></td>
                                    <td>
                                    <div>
                                        <button class="btn btn-danger">-</button>
                                        <button class="btn btn-success">+</button>
                                    </div>
                                    </td>
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
      lista:{},
      client:{},
      producto:{},
      cc: '',
      existe: '',
      nombre:''
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
      axios
        .post('http://localhost:3000/api/user/',this.client)
        .then(data=>{
          console.log(data.data);
          this.existe = ""
          this.client={}
        })
        .catch(err=>console.log(err));     
    }
  }
};
</script>