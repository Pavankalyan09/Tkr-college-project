//DOM=> document object model
function init(){
const hamburger=document.querySelector(".hamburger")
const sidebarclosebutton=document.querySelector(".close-button")
const sidebarcontainer=document.querySelector(".sidebar-container")

const opensidebar=()=>{
    sidebarcontainer.classList.add("show-sidebar")
    console.log(sidebarcontainer.classList);
}
const closesidebar=()=>{
    console.log(sidebarcontainer.classList)
    sidebarcontainer.classList.remove("show-sidebar")
    console.log(sidebarcontainer.classList)
}
hamburger.addEventListener("click",opensidebar)
sidebarclosebutton.addEventListener("click",closesidebar)
}
init();



function navRelatedcode(){
const navbarcontainer=document.querySelector(".nav-container");
window.addEventListener("scroll",function(){
    const scrollnumber=window.scrollY;
    const targetnumber = window.innerWidth >=992 ?  70: 50;
    if(scrollnumber>=targetnumber){
        navbarcontainer.classList.add("sticky-nav")
    }
    else{
        navbarcontainer.classList.remove("sticky-nav")
    }

})
}
navRelatedcode()


// const navbarcontainer=document.querySelector(".nav-container");

// const pawan=()=>{
//    const scrollnumber=window.scrollY;
//    const targetnumber= window.innerWidth >= 992? 70 :50;
//    if(scrollnumber>=targetnumber){
//     navbarcontainer.classList.add("sticky-nav")
//    }
//    else{
//     navbarcontainer.classList.remove("sticky-nav")
//    }
// }

// window.addEventListener("scroll",pawan)

