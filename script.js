function cancelOkFunction() {
    var resultText;
    var messageBox = prompt("Hey! What's your name:", "Akshaya Prakash");
    if(messageBox == null || messageBox == "") {
        resultText ="You just clicked 'cancel'";
    } else {
        resultText = "You just clicked 'yes' and your name is " + messageBox + "!!"; 
    }
    document.getElementById("resultTextFinal").innerHTML = resultText;
}