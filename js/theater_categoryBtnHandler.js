import {init as theaterBtnHandler} from "./theater_btnHandler.js";

const categoryBtns = document.querySelector(".categoryBtns"),
      categoryBtn = categoryBtns.querySelectorAll("button"),
      contentListContainer = document.querySelector(".contentListContainer");

let hash = window.location.hash;

function defaultShow(){
    const hasClass = contentListContainer.classList;
    const hasHash = hash.substring(2);
    
    if(hasHash){
        const activeBtn = categoryBtns.querySelector(`#${hasHash}`);
        
       fetchPage(hasHash);
        categoryBtn.forEach((e)=>e.classList.remove("on"));
        activeBtn.classList.add("on");
        
       
    }else{
        if(categoryBtns.classList.contains("thearterArea")){
            fetchPage("thearterCity1");
        }
    }
    
}

function fetchPage(id){
    const hasClass = contentListContainer.classList;
    fetch(`fetch/${id}`).then(function(response){
        response.text().then(function(text){
            if(categoryBtns.classList.contains("thearterArea")){
                const thearterlistContainner = categoryBtns.parentNode,
                      thearterList = thearterlistContainner.querySelector(".thearterList");
                thearterList.innerHTML = text;
                /*import*/
                theaterBtnHandler(thearterList);
            }
        })
    });
    window.location.hash = `!${id}`
    
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
