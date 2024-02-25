let a = document.getElementById("firstpage") ;
let b = document.getElementById("secondpage") ;

a.addEventListener("click" , () => {
    b.style.display = "block" 
    a.style.display = "none"
} )