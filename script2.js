function calculateArea(){
    let length =  parseFloat(document.getElementById("length").value)
    let width = parseFloat(document.getElementById("width").value)
    if(isNaN(length)|| isNaN(width)){
        alert("please enter the correct value ");
        return;
    }
    if(length < 1 ||width < 1 ){
        alert("please enter the correct value");
        return;
    }
    let space = length * width;
    let faddan = space * .0023
    document.getElementById("result").innerHTML="المساحة "+ faddan.toFixed(2)+"فدان"
}