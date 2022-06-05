<template>
  <div>
    <post-create-components :datosEdit="posts_edit" @saveData="savePost" ref="PostCreateComponents" @updateData="updateData" :editarEvent="editar"></post-create-components>
    <br>
      <post-list-components :datos="posts" @deletePost="deletePos($event)" @editPost="editPost($event)"></post-list-components>
  </div>
</template>
<script>
import PostListComponents from '../../components/posts/PostListComponents.vue'
import PostCreateComponents from '../../components/posts/PostCreateComponents.vue'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from 'axios'

export default {
  name: 'PostCreateView',
  components: {
    PostListComponents,
    PostCreateComponents
  },
  data () {
    return {
      posts: [],
      posts_edit: [],
      postId: 0,
      editar: 0,
      url: 'http://localhost:8000/api'
    }
  },

  mounted () {
    this.allPost()
  },
  methods: {
    allPost () {
      axios.get(this.url + '/posts').then((response) => {
        this.posts = response.data
        console.log(this.posts)
      })
    },
    deletePos (id) {
      axios.delete(this.url + '/posts/' + id).then((response) => {
        this.allPost()
        Swal.fire({
          title: 'Eliminado!',
          text: 'El post ha sido eliminado.',
          type: 'success',
          confirmButtonText: 'Ok'
        })
      })
        .catch((error) => {
          console.log(error)
          Swal.fire({
            title: 'Error!',
            text: 'El post no ha sido eliminado.',
            type: 'error',
            confirmButtonText: 'Ok'
          })
        })
    },
    resetInputs () {
      this.$refs.PostCreateComponents.title = ''
      this.$refs.PostCreateComponents.imagen = ''
      this.$refs.PostCreateComponents.value_required = ''
      this.$refs.PostCreateComponents.description = ''
    },
    editPost (id) {
      axios
        .get(this.url + '/posts/' + id)
        .then((response) => {
          this.posts_edit = response.data
          // Renderizar el componente PostCreateComponents
          this.$refs.PostCreateComponents.title = this.posts_edit.title
          this.$refs.PostCreateComponents.imagen = this.posts_edit.imagen
          this.$refs.PostCreateComponents.value_required = this.posts_edit.value_required
          this.$refs.PostCreateComponents.description = this.posts_edit.description
          this.postId = id
          this.editar = 1
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    updateData (a, b, c, d) {
      axios
        .post(this.url + '/posts/' + this.postId, {
          title: a,
          imagen: b,
          value_required: c,
          description: d
        })
        .then((response) => {
          // Reset the form
          this.resetInputs()
          this.allPost()
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se actualizo la publicaciòn con exito',
            showConfirmButton: false,
            timer: 1500
          })
          this.editar = 0
        })
        .catch(function (error) {
          console.log(error)
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'no es posible actualizar la publicaciòn',
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    savePost (a, b, c, d) {
      axios
        .post(this.url + '/posts', {
          title: a,
          imagen: b,
          value_required: c,
          description: d
        })
        .then((response) => {
          this.allPost()
          this.resetInputs()
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Datos guardados èxitosamente!',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(function (error) {
          console.log(error)
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No es posible guardar los datos',
            showConfirmButton: false,
            timer: 1500
          })
        })
    }
  }
}
</script>
