
var text;
var textvalue;



function Save(){
    text = document.getElementById("text");
    textvalue = text.value;
}

const w = {
    textvalue: textvalue
}

export { w };