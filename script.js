  
  
  
  
function openPage(event,tab){
    var i;
    var x = document.getElementsByClassName("tabcontent")
    for(i=0;i<x.length;i++){
      x[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";
    links = document.getElementsByClassName("item");
    for(i=0;i<links.length;i++){
        links[i].className = links[i].className.replace("active","");
    }
    event.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click()