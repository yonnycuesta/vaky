<template>
<grant-list-components :datosGrant="grants"></grant-list-components>
</template>

<script>
import GrantListComponents from '../../components/grants/GrantListComponents.vue'
import axios from 'axios'

export default {
  name: 'GrantListView',
  components: {
    GrantListComponents
  },
  data () {
    return {
      grants: [],
      url: 'http://localhost:8001/api'
    }
  },
  mounted () {
    this.allGrant()
  },
  methods: {
    allGrant (page = 1) {
      axios.get(this.url + '/Grant?page=' + page).then((response) => {
        this.grants = response.data
        console.log(this.grants)
      })
    }
  }
}
</script>
