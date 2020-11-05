<template>
  <div class="modal fade in modal-active">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <slot>
            <form @submit.prevent="createClient">
              <div class="row">
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="form-group">
                        <div>
                          <input required type="number" v-model="cel" placeholder="Cedula" />
                        </div>
                        <div>
                          <input required type="text" v-model="client.nombre" placeholder="Nombre" />
                        </div>
                        <div>
                          <input required type="text" v-model="client.apellido" placeholder="Apellido" />
                        </div>
                        <div>
                          <input required type="date" v-model="client.f_nacimiento" placeholder="Fecha de nacimiento" />
                        </div>
                        <div>
                          <input required type="text" v-model="client.direccion" placeholder="dirección" />
                        </div>
                        <div>
                          <input required type="number" v-model="client.telefono" placeholder="telefono" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="form">Close</button>
                <button type="button" class="btn btn-primary">Agregar</button>
              </div>
            </form>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "modal",
    props: [
      'cel'
    ],
    data() {
      return {
        client: {},
        existe: ''
      }
    },
    methods: {
      createClient() {
        this.client._cel = parseInt(this.cel);
        this.client.telefono = parseInt(this.client.telefono);
        this.client.Role = 1;

        axios
          .post('http://localhost:3000/api/user/', this.client)
          .then(data => {
            this.client = ''
            alert('cliente creado');
          })
          .catch(err => console.log(err));
        this.form();
      },
      form() {
        this.existe = '';
        this.$emit('cancelar', this.existe);
      }
    }
  };
</script>
