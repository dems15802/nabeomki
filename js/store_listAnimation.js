const storeListContainer = document.querySelector(".storeListContainer");

function init(){
    const storeList = storeListContainer.querySelectorAll("li");
    
    for(let i=0;i<storeList.length;i++){
        storeList[i].style.animationDelay = `${i*0.3}s`;
    }
}

export {init};

//init();