<template>
  <body class="g-sidenav-show bg-gray-200">
    <Sidebar-Item></Sidebar-Item>
    <main
      class="
        main-content
        border-radius-lg
      "
    >
      <!-- Navbar -->
     <Header-Item></Header-Item>
      <!-- End Navbar -->
      <div class="container-fluid py-4">
        <router-view></router-view>
        <Footer-Item></Footer-Item>
      </div>
    </main>
  </body>
</template>

<script>
import SidebarItem from '../../components/layouts/SidebarItem.vue'
import FooterItem from '../../components/layouts/FooterItem.vue'
import HeaderItem from '../../components/layouts/HeaderItem.vue'

export default {
  components: {
    SidebarItem,
    FooterItem,
    HeaderItem
  }
}
</script>
<style>
.icon-lg {
  padding: 30px 45px 30px 20px;
}
body{
  height: 100vh;
}
main{
  height: 100vh;
}
</style>
