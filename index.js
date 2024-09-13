const displayResult = document.querySelector(".output input");
const equalBtn = document.querySelector(".equal-btn");

equalBtn.addEventListener("click",function() {
    if(!displayResult.value){
        displayResult.value = "";
    }
    else{
        displayResult.value = eval(displayResult.value.replace("%",'/100'));
    }
}

)

const toggle = document.getElementById("toggle");   
const body = document.querySelector(".container");

toggle.onclick = () => {
    body.classList.toggle("active");
};
