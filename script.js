let h4 = document.querySelector("h4");

let task_div = document.querySelector("#task_div");

let submitTask = document.querySelector("#submitTask");
//h4.appendChild(span);

submitTask.addEventListener("click",function(){
    let input = document.querySelector("#add");
    let span = document.createElement("span");
    // console.log(task.value);
    
    if(input.value !== ""){
        task_div.append(span);
        span.innerHTML = input.value;
        input.value = "";        
    }
    else{
        alert("Please write task first");
    }

    span.addEventListener("click", function () {
        span.remove();
    });

});

