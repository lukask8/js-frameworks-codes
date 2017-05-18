new Vue({
  el: '#app',
  data: {
    a: 3,
    b: 6,
    c: 9,
    message: 'Hello Vue.js!'
  },
  methods: {
    add: function () {
      this.c = parseInt(this.a) + parseInt(this.b)
    }
  }
})
