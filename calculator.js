function appendToDisplay(value){
    document.getElementById("display").value +=value;

}
function clearDisplay(){
    document.getElementById("display").value = "";
}
function calculator(){
    var displayValue = document.getElementById("display").value;
    var result = eval(displayValue);
    document.getElementById("display").value = result;
}