var global_msg_a = 1;

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

      app.run('#/');
    });
})();
