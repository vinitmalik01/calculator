function appendToDisplay(value){
    document.getElementById("display").value+=value;
}


function clearDisplay(){
    document.getElementById("display").value="";

}
function calculate(){
    try {
        let a=eval(document.getElementById("display").value)
        document.getElementById("display").value=a
    } catch (error) {
        alert("invalid input or function")
    }
}