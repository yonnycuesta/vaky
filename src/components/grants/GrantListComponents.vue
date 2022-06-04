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
            <h6 class="text-white text-capitalize ps-3">Donaciones |Listado</h6>
          </div>
        </div>
        <div class="card-body px-0 pb-2">
          <div class="table-responsive p-0">
            <table class="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">Post Name</th>
                  <th scope="col">Name</th>
                  <th scope="col">Dirección</th>
                  <th scope="col">Teléfono</th>
                  <th scope="col">Monto donado</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="grant in datosGrant.data" :key="grant.id">
                  <td scope="row">
                      {{ grant.title }}
                  </td>
                  <td>
                        {{ grant.name }}
                  </td>
                  <td scope="row">
                        {{ grant.address }}
                  </td>
                    <td scope="row">
                        {{ grant.phone }}
                    </td>
                  <td scope="row">
                        {{ grant.value_grant }}
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
  name: 'GrantListComponents',
  props: ['datosGrant']
}
</script>
