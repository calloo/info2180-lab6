// JavaScript File

function notify(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4){
            alert(this.responseText);
        }
    }
    
    xhttp.open("GET", "request.php?q=definition", true);
    xhttp.send();
}