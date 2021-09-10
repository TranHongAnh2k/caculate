function forclear(){
    document.getElementById("output").innerHTML="0";
}

function removeZero() {
    let value = document.getElementById("output").innerHTML;
    if (value == "0") {
         value = "";
         document.getElementById("output").innerHTML = value;
    }
}

function perc(){
    let value = document.getElementById("output").innerHTML;
    value=value%100;
    document.getElementById("output").innerHTML=value;
}

function fordisplay(value){
    removeZero();
    document.getElementById("output").innerHTML+=value
}

function solve(){
    removeZero();
    let value = document.getElementById("output").innerHTML
    let cal = eval(value);
    document.getElementById("output").innerHTML=cal;
}

function clearOne(){
    let value = document.getElementById("output").innerHTML;
    let old = value.substr(0,value.length-1);
    if (old.length ===0){
        document.getElementById("output").innerHTML="0";
    }
    else{
        
        document.getElementById("output").innerHTML=old;
    }    
    
}
