/**
* Bind var data.a and data.b to make "a+b" dynamically
*/

// Variables settings and functions
var mydata = {
    a:3,
    b:5,
    c:8,
    refresh : function(){ mydata.c =  parseInt(mydata.a) + parseInt(mydata.b);},
  };

// Two way binding inside "changeme" passing "var data" to HTML context
rivets.bind(document.getElementById('changeme') , {data: mydata} );
