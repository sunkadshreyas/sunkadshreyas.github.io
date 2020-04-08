
function openPage(event,Page){
    var i,contents,links;
    contents = document.getElementsByClassName("tabcontent");
    for(i=0;i<contents.length;i++){
        contents[i].style.display = "none";
    }
    links = document.getElementsByClassName("tablinks");
    for(i=0;i<links.length;i++){
        links[i].className = links[i].className.replace("active","");
    }
    document.getElementById(Page).style.display = "block";
    event.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();