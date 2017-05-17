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
  <script>
  // This is tag scripting, nothing is published on JS scope.
      this.mydata = {
        a : 3,
        b : 5,
        c : 8
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

  </script>
</my-sum>
