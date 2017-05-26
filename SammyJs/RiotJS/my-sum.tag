<my-sum>
  <h1>{title}</h1>
  <div>
    Var a:
    <input value={mydata.a} oninput={handleChange_a}/>
    <br/>
    Var b:
    <input value={mydata.b} oninput={handleChange_b}/>
    <br/>
    Var c = a + b : {mydata.c}
    <br/>
    Total {mydata.a} + {mydata.b} (calculated) : <i> {parseInt(mydata.a)+parseInt(mydata.b)} </i>
  </div>

  <div id="dialog" title="JQuery-ui dialog from Riot!">
    <p>This is the default dialog created iniside RiotJS tag. The dialog window can moved, resized and closed with the 'x' icon.</p>
  </div>

  <script>
  // This is tag scripting, nothing is published on JS scope.
      this.mydata = {
        a : global_a,
        b : global_b,
        c : global_c
      }

      handleChange_a(e) {
        this.mydata.a = e.target.value
        this.add()
      }

      handleChange_b(e) {
        this.mydata.b = e.target.value
        this.add()
      }

      add(){
         this.mydata.c = parseInt(this.mydata.a) + parseInt(this.mydata.b);
      }

      // this is a jquery-UI dialog
      $( function() {
        $( "#dialog" ).dialog();
      })

  </script>
</my-sum>
