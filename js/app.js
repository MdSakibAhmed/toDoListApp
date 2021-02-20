
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

const displayTask= (target)=>{
    

   
    document.getElementById("ok-btn").addEventListener("click",function(){

        const inputValue = document.querySelector(".task-input").value;
        const DateValue = document.querySelector(".task-date").value;
        // if(target.outerHTML === `<i class="far fa-edit"></i>`){
        //     target.parentNode.firstElementChild.innerHTML =`<i class="fas  fa-check-circle "></i>${target.parentNode.firstElementChild.innerText}` 
    
    
        // }
        // else{
            document.querySelector(".task-content-container").insertAdjacentHTML("beforeend",`<div class="task-content">
             
            <p> <i class="far fa-circle"></i>${inputValue}</p><i class="far fa-edit"></i><i class="fas fa-trash-alt"></i></div>`);
          // inputValue = "";
           document.querySelector(".task-writing-box").style.display="none";
        //}

       
        
    })

}
displayTask();

const updateTask = (e,inputBox)=>{
    document.getElementById("edit-ok-btn").addEventListener("click",function(){
        const inputValue = document.getElementById("edit-task-input").value;
        console.log(inputValue);
e = inputValue;
inputBox.style.display = "none";

    })
}
document.querySelector(".task-content-container").addEventListener("click",function(e){
    console.dir(e.target);
    if(e.target.classList[1] == "fa-edit"){
       
        const DateValue = document.querySelector(".task-date").value;
        console.log(e.target);
        const inputBox = document.querySelector(".edit-task-writing-box");
        console.log(inputBox);
        inputBox.style.display="block";
        console.log(inputBox);
        const text = e.target.parentNode.firstElementChild.innerText;
        console.log(text);
        updateTask(text,inputBox);
       // inputBox.style.display = "none";

        


    }
    else if(e.target.outerHTML === `<i class="far fa-circle"></i>`){
      
            e.target.parentNode.classList.add("task-compleat");
          
                e.target.parentNode.innerHTML = `<i class="fas  fa-check-circle green-check-mark"></i>${e.target.parentNode.innerText}`;
 
    
        }
        else if(e.target.outerHTML === `<i class="fas fa-trash-alt"></i>` ){
            e.target.parentNode.innerHTML ="";
        }
     
   

    // Edit task

 
   



})

