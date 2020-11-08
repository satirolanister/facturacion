/* eslint-disable camelcase */
export default class item {
  constructor(descripcion, existencia, precio_u, id_prov, categoria) {
    this.descripcion = descripcion;
    this.existencia = existencia;
    this.precio_u = precio_u;
    this.id_prov = id_prov;
    this.categoria = categoria;
  }
}
