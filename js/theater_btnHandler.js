import {paintMap} from "./thearterMap.js";

function btnClassHandler(){
    const btnContainer = this.closest(".thearterList"),
          btnList = btnContainer.querySelectorAll("button"),
          btnText = this.innerText;
    
    btnList.forEach((e)=>e.classList.remove("on"));
    this.classList.add("on");
    paintMap(btnText);
}

function init(Container){
    const btnList = Container.querySelectorAll("button"),
          defaultBtnText = Container.querySelector(".on").innerText;
    paintMap(defaultBtnText);
    btnList.forEach((e)=>e.addEventListener("click",btnClassHandler))
    
}

export {init};