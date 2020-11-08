<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <slot name="body">
              <form>
                <div class="form-group row justify-content-start">
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
                <div class="form-group">
                  <div class="row">
                    <button type="button" class="btn btn-danger btn-block" data-dismiss="modal"
                      @click="form">Cancelar</button>
                    <button type="button" class="mt-1 btn btn-success btn-block"
                      @click.prevent="createClient">Agregar</button>
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