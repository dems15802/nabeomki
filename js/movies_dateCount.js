const moviesListContainer = document.querySelector(".moviesListContainer");

function showDayCount(element,yy,mm,dd){
    const nowDate = new Date(),
          dDate = new Date(yy,mm-1,dd),
          countDate = Math.floor((dDate-nowDate)/(1000*60*60*24)),
          dayCount = element.nextSibling;
    
    if(countDate > 0){
        const li = element.closest("li"),
              movieBtns = li.querySelector(".movieBtns"),
              ticketingBtn = movieBtns.firstElementChild;
        
        dayCount.innerText = `D-${countDate}`;
        ticketingBtn.style.display = "none";
    }else{
        const li = element.closest("li");/*,
              ul = li.parentNode;*/
        
        dayCount.innerText = `D-Day`;
        moviesListContainer.removeChild(li);
    }
}

function init(){
    const openingDate = moviesListContainer.querySelectorAll(".openingDate");
    
    openingDate.forEach((e)=>{
        const dayText = e.innerText.substring(0,10),
              dateArray = dayText.split("."),
              YY = dateArray[0],
              MM = dateArray[1],
              DD = dateArray[2];
        
        showDayCount(e,YY,MM,DD);
    })
}

export {init};

//init();
