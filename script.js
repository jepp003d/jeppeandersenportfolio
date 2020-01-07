window.addEventListener("load", visSkaerm);



//function visSkaerm() {
//
//    document.querySelector("#hund").addEventListener("click", frys);
//
//}
//
//
//function frys() {
//    console.log("frys");
//
//    this.classList.add("frys");
//
//    this.offsetHeight;
//    document.querySelector("#hund").addEventListener("click", flyv);
//
//
//}
//
//function flyv() {
//    console.log("flyv");
//
//    document.querySelector("#hund").removeEventListener("click");
//    document.querySelector("#hund").classList.add("hund");
//}

function visSkaerm() {
    console.log("skaerm");

    document.querySelector("#hund").classList.add("hund");
    document.querySelector("#hund").addEventListener("click", frys);

}



function frys() {
    console.log("frys");
    this.classList.add("frys");
    document.querySelector("#hund").addEventListener("click", flyv);
}

function flyv() {
    console.log("lyv");

    this.classList.remove("frys");
    this.removeEventListener("click", flyv);
    this.addEventListener("click", frys);








}
