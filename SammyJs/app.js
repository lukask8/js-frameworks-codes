// Global variables to test scopes
var global_a = 30;
var global_b = 20;
var global_c = 50;
var global_msg = "Hello from global scope!";

(function() {
    // Using "body" as target for full SPA models
    var app = Sammy('#main');
    $(document).ready(function() {

      app.get('#/', function(context) {
        $('#main').text(''); // clear
        $("#main").append("<h2> This is 'home'</h2>")
          console.log("You're in the Main route");
      });

      app.get('#/page-a', function(context) {
          $('#main').load('page-a.html');
          console.log("You're in 'a'");
      });

      app.get('#/page-b', function(context) {
          $('#main').load('page-b.html');
          console.log("You're in 'b'");
      });

      app.get('#/rivetjs', function(context) {
          $('#main').load('./RivetJS/index.html');
          console.log("rivetjs");
      });

      app.get('#/riotjs', function(context) {
          $('#main').load('./RiotJS/index.html');
          console.log("riotjs");
      });

      app.get('#/vue', function(context) {
          $('#main').load('./Vue/index.html');
          console.log("vue");
      });
      app.run('#/');
    });
})();
