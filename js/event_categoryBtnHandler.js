const categoryBtns = document.querySelector(".categoryBtns"),
      categoryBtn = categoryBtns.querySelectorAll("button"),
      contentListContainer = document.querySelector(".contentListContainer");

function defaultShow(){
    const hasClass = contentListContainer.classList;
    if(hasClass.contains("eventListContainer")){
        fetchPage("event_special");
    }else if(hasClass.contains("moviesListContainer")){
        fetchPage("show");
    }
    
}

function fetchPage(id){
    fetch(id).then(function(response){
        response.text().then(function(text){
            contentListContainer.innerHTML = text;
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
