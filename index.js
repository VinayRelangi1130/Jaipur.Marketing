let a = document.getElementById("firstpage") ;
let b = document.getElementById("secondpage") ;
let c = document.getElementById("btn") ;

c.addEventListener("click" , () => {
    b.style.display = "block" 
    a.style.display = "none"
} )
