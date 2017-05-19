new Vue({
  el: '#app',
  data: {
    a: global_a,
    b: global_b,
    c: global_c,
    message: 'Hello Vue.js!'
  },
  methods: {
    add: function () {
      this.c = parseInt(this.a) + parseInt(this.b)
    }
  }
})
