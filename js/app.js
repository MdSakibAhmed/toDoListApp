
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
const dayNames =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]
const date = new Date();

document.getElementById("current-date").innerText = `${dayNames[date.getDay()]} ${monthNames[date.getMonth()]} ${date.getDate()}`

const displayInputBox = ()=>{
    const element = document.getElementById("add-task");
    element.addEventListener("click",function(){
        document.querySelector(".task-input").value ="";
        document.querySelector(".task-writing-box").style.display="block";
        
    })
}
displayInputBox();


// Display task
const displayTask= ()=>{
   
    document.getElementById("ok-btn").addEventListener("click",function(){

        const inputValue = document.querySelector(".task-input").value;
        const DateValue = document.querySelector(".task-date").value;
    
       
            document.querySelector(".task-content-container").insertAdjacentHTML("beforeend",`<div class="task-content">
             
            <p> <i class="far fa-circle"></i>${inputValue}</p><i class="far fa-edit"></i><i class="fas fa-trash-alt"></i></div>`);
         
           document.querySelector(".task-writing-box").style.display="none"; 
        
    })

}
displayTask();



const updateTask = (task,inputBox)=>{
    document.getElementById("edit-ok-btn").addEventListener("click",function(){
        const inputValue = document.getElementById("edit-task-input");
        console.log(inputValue);
       
        task.innerHTML = `<i class="far fa-circle"></i>${inputValue.value}`;
         console.log(task); 
inputBox.style.display = "none";

    })
}


// compleat tas and edit and delete
document.querySelector(".task-content-container").addEventListener("click",function(e){
    //console.dir(e.target);
    if(e.target.classList[1] == "fa-edit"){
        const inputValue = document.getElementById("edit-task-input");
       
        const DateValue = document.querySelector(".task-date").value;
        console.log(e.target);
        const inputBox = document.querySelector(".edit-task-writing-box");
        console.log(inputBox);
        inputBox.style.display="block";
        inputValue.value = e.target.parentNode.firstElementChild.innerText;


        console.log(inputBox);
        const text = e.target.parentNode.firstElementChild;
        console.log(text);
        updateTask(text,inputBox);

    }
    else if(e.target.classList[1]=== `fa-circle` ){
      
            e.target.parentNode.classList.add("task-compleat");
            console.dir(e.target.parentNode.parentNode);
            e.target.parentNode.parentNode.childNodes[2].classList.remove("fa-edit");
        
                e.target.parentNode.innerHTML = `<i class="fas green-check-mark fa-check-circle"></i>${e.target.parentNode.innerText}`;
        }
        else if(e.target.classList[2] === `fa-check-circle`){
            e.target.parentNode.classList.remove("task-compleat")
            e.target.parentNode.parentNode.childNodes[2].classList.add("fa-edit");

            e.target.parentNode.innerHTML = `<i class="far fa-circle "></i>${e.target.parentNode.innerText}`

        }
        else if(e.target.outerHTML === `<i class="fas fa-trash-alt"></i>` ){
            e.target.parentNode.innerHTML ="";
        }

})

// cancel button
const buttons =document.getElementsByClassName("cancel");
const newArray = Array.from(buttons);
newArray.forEach(button =>{
    button.addEventListener("click",function(e){
        e.target.parentNode.parentNode.innerHTML ="";

    })
})
