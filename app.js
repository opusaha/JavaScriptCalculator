var display= document.getElementById("calc-operation")
var button = Array.from(document.querySelectorAll(".button"));
let displayResult = document.getElementById("calc-typed")
button.map(button =>{
    button.addEventListener("click", (e)=>{
        switch (e.target.innerText) {
            case "C":
                display.innerText ="";
                displayResult.innerText = "";
                break;
            case "del":
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);  
                }
                break;
            case "OFF":
                displayResult.innerText = "ShutDown";
                break
            case "=":
                try {
                    displayResult.innerText = eval(display.innerText);
                } catch {
                    displayResult.innerText = "Error!"
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }   
    })
})