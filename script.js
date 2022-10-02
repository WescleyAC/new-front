let menu = document.querySelector("#menuStart")
let column = document.querySelector("#columnId")




function startMenu() {


    if (column.style.left == "-100%") {

           column.style.left = "0"

    }

    else {

        column.style.left = "-100%"
        
    }
 


}