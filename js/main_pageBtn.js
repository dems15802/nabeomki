const pageBtn = document.querySelector(".pageBtn"),
      prevBtn = pageBtn.querySelector(".prevBtn"),
      nextBtn = pageBtn.querySelector(".nextBtn");

    let i = 0;

function pageMove(e){
    const sliderWrap = document.querySelector(".slider_wrap"),
          movieList = sliderWrap.querySelectorAll("li"),
          hasClass = this.classList;
    
    
    e.preventDefault();
    if(hasClass.contains("prevBtn")){
        i--;
        if(i <= 0){i=0}
        /*sliderWrap.insertBefore(movieList[movieList.length-1],movieList[0]);*/
    }else if(hasClass.contains("nextBtn")){
        i++;
        if(i>=5){i=5}
        /*sliderWrap.appendChild(movieList[0]);*/
    }
    sliderWrap.style.transform = `translateX(${-195*i}px)`;
}

function init(){
    prevBtn.addEventListener("click",pageMove);
    nextBtn.addEventListener("click",pageMove);
}

init();