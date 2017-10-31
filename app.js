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

function lookup(lookAll){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4){
            if (lookAll === true){
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(this.responseText, "text/xml");
                
                var info = "<h1>Result</h1><br>";
                var result = document.createElement("div");
                var items = document.createElement("ol");
                
                result.appendChild(items);
                
                for(var defined of xmlDoc.getElementsByTagName("definition")){
                    
                    var item = document.createElement("h3");
                    item.innerHTML = defined.getAttribute("name");
                    
                    var item_data = document.createElement("p");
                    var author = document.createElement("p");
                    
                    author.innerHTML = "- " + defined.getAttribute("author");
                    item_data.innerHTML = defined.innerHTML;
                    
                    var item_listed = document.createElement("li");
                    item_listed.appendChild(item);
                    item_listed.appendChild(item_data);
                    item_listed.appendChild(author);
                    items.appendChild(item_listed);
                }
                
                document.getElementById("result").innerHTML = info + result.innerHTML;
                
                
                
                
            }else{
                document.getElementById("result").innerHTML= "<h1>Result</h1><br>" + this.responseText;
            }
        }
    }
    
    xhttp.open("GET", "request.php?q=" + (lookAll === true?"&all=true":document.forms["browse"]["q"].value), true);
    xhttp.send();
    
    return false;
}
