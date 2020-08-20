import {init as paintCountDate} from "./movies_dateCount.js";
import {init as storeListAnimation} from "./store_listAnimation.js";

const categoryBtns = document.querySelector(".categoryBtns"),
      categoryBtn = categoryBtns.querySelectorAll("button"),
      contentListContainer = document.querySelector(".contentListContainer");

function defaultShow(){
    const hasClass = contentListContainer.classList;
    if(hasClass.contains("eventListContainer")){
        fetchPage("event_special");
    }else if(hasClass.contains("moviesListContainer")){
        fetchPage("show");
    }else if(hasClass.contains("storeListContainer")){
        fetchPage("store_package");
    }
    
}

function fetchPage(id){
    const hasClass = contentListContainer.classList;
    fetch(`fetch/${id}`).then(function(response){
        console.log(response);
        response.text().then(function(text){
            contentListContainer.innerHTML = text;
            /*import*/
            if(id === "release"){paintCountDate();}
            if(hasClass.contains("storeListContainer")){storeListAnimation();}
        })
    });
    
}

function categoryClassHandler(){
    const btnId = this.getAttribute("id");
    
    categoryBtn.forEach((e)=>e.classList.remove("on"));
    this.classList.add("on");
    
    fetchPage(btnId);
}

function init(){
    defaultShow();
    categoryBtn.forEach((e)=>e.addEventListener("click",categoryClassHandler));
}

init();
