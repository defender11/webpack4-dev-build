<template>
  <section id="main2">
    <div class="wrapper_example--second">
      <div class="container">
        <h1>webpack message: {{ message }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        message: null
      }
    },
    name: "Example",
    created() {
      this.message = this.$store.getters.getMessage;
    }
  }
</script>

<style lang="scss" scoped>
h1 {
  color: red ;
}
</style>
