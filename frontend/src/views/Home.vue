<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <SignedInUser />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SignedInUser from '@/components/SignedInUser'

export default {
  name: 'home',
  components: {
    HelloWorld,
    SignedInUser
  }
}
</script>
