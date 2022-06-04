<template>
  <div class="row">
    <div class="col-12">
      <div class="card my-4">
        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
          <div
            class="
              bg-gradient-primary
              shadow-primary
              border-radius-lg
              pt-4
              pb-3
            "
          >
            <h6 class="text-white text-capitalize ps-3">Publicaciones |Listado</h6>
          </div>
        </div>
        <div class="card-body px-0 pb-2">
          <div class="table-responsive p-0">
            <table class="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">Titulo</th>
                  <th scope="col">Imagen</th>
                  <th scope="col">Cantidad solicitada</th>
                  <th scope="col">Cantidad donada</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="d in datos.data" :key="d.id">
                  <td scope="row">{{ d.title }}</td>
                  <td>
                    <img :src="d.imagen" alt="" class="" height="100" width="130" />
                  </td>
                  <td scope="row">{{ d.value_required }}</td>
                  <td scope="row">{{ d.value_grant }}</td>
                  <td scope="row">{{ d.description }}</td>
                  <td>
                    <button
                      class="btn btn-primary" @click="editPost(d.id)"
                    >
                      Editar
                    </button>
                    <button class="btn btn-danger" @click="deletePost(d.id)">
                      Eliminar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
         <div class="card-footer">
            </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PostListComponents',
  props: ['datos'],

  methods: {
    deletePost (id) {
      this.$emit('deletePost', id)
    },
    editPost (id) {
      this.$emit('editPost', id)
    }
  }
}
</script>
