//console.log("hello");
//alert("I am alert box!");

//function ab () {
 //   document.getElementById("btn").style.color = "magenta" ;
//}

function ddd () {
    var x = document.getElementsByName("txt")[0];
    console.log(x.value);
    var y = document.getElementsByClassName("ddd")[0];
    var z = document.getElementById("btn");
  
    setTimeout(function(){
        y.innerHTML = x.value;
        z.innerHTML = x.value;
    }, 1000);
}
