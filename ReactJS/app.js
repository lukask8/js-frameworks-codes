/**
* This JSX script must be used with:
*   <script type="text/babel" src="app.js"></script>
*
* Or use a Babel CLI to translate JSX to JS
*
* Bind var data.a and data.b to make a+b dynamically and automagically
*/

var data = {
  a: 3,
  b: 4,
  c: 7
}

var myTitle = "Hello react";

var Test = React.createClass({
     handleChange_a: function(event){
         this.setState({a: event.target.value});
         data.a = event.target.value;
         this.add();
     },
     handleChange_b: function(event){
         this.setState({b: event.target.value});
         data.b = event.target.value;
         this.add();
     },
     add: function(event){
         data.c = parseInt(data.a) + parseInt(data.b);
     },
     render: function(){
        var a = data.a;
        var b = data.b;
        var c = data.c;
        return(
          <p>
          <h1>{myTitle}</h1>
            Var a:
            <input type="text" value={a} onChange={this.handleChange_a}/>
            <br/>
            Var b:
            <input type="text" value={b} onChange={this.handleChange_b}/>
            <br/>
            Var c = a + b : {c}
            <br/>
            Total {a} + {b} (calculated): {parseInt(a)+parseInt(b)}
          </p>
        );
     }
});

ReactDOM.render(<Test />,document.getElementById('changeme'));
