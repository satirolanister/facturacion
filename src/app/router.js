import Vue from 'vue';
import Router from 'vue-router'
import factura from './components/views/factura.vue'
import productos from './components/views/productos.vue'


Vue.use(Router);


export default new Router({
    routes:[
        {
            path:'/factura',
            name: 'factura',
            component: factura
        },
        {
            path:'/productos',
            name:'productos',
            component:productos
        }
    ]
})