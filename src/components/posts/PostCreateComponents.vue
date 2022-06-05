<template>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-success shadow-primary border-radius-lg py-3 pe-1">
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0" v-if="editarEvent === 0">CREAR PUBLICACIÓN</h4>
                    <h4 class="text-white font-weight-bolder text-center mt-2 mb-0" v-else>EDITAR PUBLICACIÓN</h4>
                </div>
              </div>
              <div class="card-body">
                <form role="form" class="text-start">
              <div class="row">
                      <div class="col-md-4"><div class="mb-3">
                      <label for="title">Title</label>
                     <div class="input-group input-group-outline my-3">
                   <input
                    type="text"
                    class="form-control"
                    v-model="title"
                    placeholder="Titulo"
                  />
                  </div>
                  </div>
                  </div>
                  <div class="col-md-4">
 <div class="mb-3">
                        <label for="imagen">Url Imagen</label>
                      <div class="input-group input-group-outline my-3">
                     <input
                    type="text"
                    class="form-control"
                    id="imagen"
                    v-model="imagen"
                    placeholder="Ingrese la url de la imagen"
                  />
                  </div>
                 </div>
                  </div>
                  <div class="col-md-4">
                      <div class="mb-3">
                     <label for="value_required">Valor requerido</label>
                      <div class="input-group input-group-outline my-3">
                    <input
                    type="number"
                    class="form-control"
                    id="value_required"
                    v-model="value_required"
                    placeholder="Valor requerido"
                  />
                      </div>
                 </div>
                  </div>
                      </div>
                      <div class="row">
                 <div class="mb-3">
                     <label for="description">Descripcion</label>
                        <div class="input-group input-group-outline my-3">
                             <textarea
                    class="form-control"
                    id="description"
                    v-model="description"
                    rows="6"
                  ></textarea>
                        </div>
                 </div>
                      </div>
                  <div class="mb-3">
                    <button class="btn btn-block btn-success" v-if="editarEvent === 0" @click="saveData()" type="submit">Guardar</button>
                    <button class="btn btn-block btn-secondary" v-else @click="updateData()">Actualizar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
</template>

<script>

export default {
  name: 'PostCreateComponents',
  props: ['datosEdit', 'editarEvent'],
  data () {
    return {
      title: '',
      imagen: '',
      value_required: '',
      description: ''
    }
  },
  mounted () {
    console.log(this.datosEdit)
  },
  methods: {
    saveData () {
      this.$emit('saveData',
        this.title,
        this.imagen,
        this.value_required,
        this.description
      )
    },
    updateData () {
      this.$emit('updateData',
        this.title,
        this.imagen,
        this.value_required,
        this.description
      )
    }
  }
}
</script>
