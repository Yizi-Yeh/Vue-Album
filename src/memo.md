<template lang="pug">
  div#app
    b-navbar(toggleable='lg' type='dark' variant='info')
      b-container
        b-navbar-brand(href='#') 線上相簿
        b-navbar-toggle(target='nav-collapse')
        b-collapse#nav-collapse(is-nav)
          b-navbar-nav.ml-auto
          <!-- 若長度為0(代表沒登入) 顯示登入 -->
            b-nav-item(v-if="user.id.length === 0" href='#') 登入
            b-nav-item(v-if="user.id.length === 0" href='#') 註冊
            <!-- >0代表登入則顯示相簿&登出 -->
            b-nav-item(v-if="user.id.length > 0" href='#') 我的相簿
            b-nav-item(v-if="user.id.length > 0" href='#') 登出
</template>

<script>
export default {
  name: 'App',
  computed: {
    user () {
      // 將狀態丟入computed管理
      return this.$store.state.user
    }
  }
}
</script>

---
