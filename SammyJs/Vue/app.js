new Vue({
  el: '#app',
  data: {
    a: global_a,
    b: global_b,
    c: global_c,
    message: 'Hello Vue.js!'
  },
  created: function(){
    // this is a jquery-UI dialog
    $( function() {
      $( "#dialog" ).dialog();
    })
  },
  methods: {
    add: function () {
      this.c = parseInt(this.a) + parseInt(this.b);
    }
  }
})
