const event = document.querySelector(".event"),
    eventList = event.querySelectorAll("li"),
    store = document.querySelector(".store"),
    storeList = store.querySelectorAll("li");

function showImage() {
    let eventListArray = [],
        storeListArray = [],
        randomNumArray = [];
    
    for(let i=0;i<5;i++){
        const randomNum = Math.floor(Math.random()*51)+1;
        randomNumArray.push(randomNum);
    }
    
    eventList.forEach((e)=>{
        eventListArray.push(e);
        
        const image = e.querySelector("img"),
              indexNum = eventListArray.indexOf(e);
        
        image.setAttribute("src",`src/img/event/e${randomNumArray[indexNum]}.jpg`);
        image.setAttribute("alt",`이벤트 ${randomNumArray[indexNum]}`);
    })
    
    storeList.forEach((e)=>{
        storeListArray.push(e);
        
        const image = e.querySelector("img"),
              indexNum = storeListArray.indexOf(e);
        
        image.setAttribute("src",`src/img/store/s${randomNumArray[indexNum]}.jpg`);
        image.setAttribute("alt",`스토어 ${randomNumArray[indexNum]}`);
    })

}

function init() {
    showImage();
    setInterval(showImage, 3500);
}

init();
