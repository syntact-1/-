function calculateArea(){
    let len1 = parseFloat(document.getElementById("length").value);
    let len2 = parseFloat(document.getElementById("length2").value);
    let wid1 = parseFloat(document.getElementById("width").value);
    let wid2 = parseFloat(document.getElementById("width2").value);
    if(wid1< 1||wid2 < 1||len1 < 1||len2 < 1){
        alert("please enter the correct value");
        return;
    }
    let len = (len2 +len1)/2
    let wid = (wid2 + wid1) /2
    let space = len * wid;
    let faddan = space * 0.000247105 
    document.getElementById("result").innerHTML="المساحة "+ faddan.toFixed(2)+"فدان"

}