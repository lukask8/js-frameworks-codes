/**
* Bind var data.a and data.b to make "a+b" dynamically
*/

// Variables settings and functions
var mydata = {
    a:global_a,
    b:global_b,
    c:global_c,
    refresh : function(){ mydata.c =  parseInt(mydata.a) + parseInt(mydata.b);},
  };

var myTitle = "Hello rivetjs";

// Two way binding inside "changeme" passing "var data" to HTML context
rivets.bind(document.getElementById('changeme') , {data: mydata, myTitle : myTitle} );
