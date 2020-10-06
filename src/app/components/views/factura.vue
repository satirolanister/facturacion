<template>
  <div>
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <form>
                <div class="row">
                <div class="col-md-6">   
                <div class="form-group">
                  <div>
                      <label for="">CC / NIT: </label>
                      <input class="col-md-6" type="text" placeholder="CC / NIT ">
                      <button class="btn btn-secondary" >Buscar</button>
                      <button class="btn btn-success col-md-1">+</button>
                  </div>  
                </div>
                <div class="form-group">
                  <div>
                  <label for="">Nombre Cliente:</label>      
                  <input class="col-md-8" type="text" placeholder="Nombre cliente"/>
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
export default {
  name: "factura",
};
</script>