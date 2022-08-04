function view(num){
    document.getElementById("result").value+=num;
}

function compute(){
    let x= document.getElementById("result").value;
    document.getElementById("result").value = eval(x);
}

function deLete(){ 
    let s= document.getElementById("result").value;
    s= s.substr(0, s.length -1);
    document.getElementById("result").value= s;
}

function Clear(){
    document.getElementById("result").value= "";
}