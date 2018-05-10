function take(btn) {
    if(btn == "=") {
        document.getElementById("screen").value = eval(document.getElementById("screen").value);
        }
    else if(btn == "c") {
        document.getElementById("screen").value = "";
    }
    else {
        document.getElementById("screen").value += btn;
    }
}