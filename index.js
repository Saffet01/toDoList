const textInput = document.getElementById("textInput");
const listToDo = document.getElementById("listToDo");
const buttonInput = document.getElementById("buttonInput");

buttonInput.addEventListener("click", function(){
    if(textInput.value == ""){
        alert("Please provide valid input.");
    }
    else{
        let li = document.createElement("li");
        let checkbox = document.createElement("input");

        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "checkbox");

        li.appendChild(checkbox);

        let span = document.createElement("span");
        span.setAttribute("class", "listItemText");
        li.appendChild(span);
        
        span.innerHTML = textInput.value;
        listToDo.appendChild(li);
    }
    
});