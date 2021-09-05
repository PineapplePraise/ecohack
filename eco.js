info = document.getElementById('info')
var sty = info.style
sty.visibility = "hidden"

function infoClick(){
    if (sty.visibility == "hidden") {
        sty.visibility = "visible"
    } else {
        sty.visibility = "hidden"
    }
}



