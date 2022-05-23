const addbtn=document.getElementById("btn-primary-add");
const tasklistContent = document.getElementById('task-list-content');
const todoItemsList = document.getElementById('todo-item-lists');



function addItem(){
   
    let itemInputData=document.getElementById('itemInput').value; //input value
    let textItem=document.createTextNode(itemInputData);
    let newItem=document.createElement("li");
    newItem.classList.add('container');
    newItem.style.boxshadow="1px 1px 5px 1px gray";

    //delete functionality
    const deleteButton=document.createElement('button');
    deleteButton.innerText='DEL';   
    deleteButton.addEventListener('click', () => {
        alert('Are you sure ? you want to delete the task?')
    todoItemsList.removeChild(newItem);
    todoItemsList.removeChild(deleteButton);
    todoItemsList.removeChild(completeButton);
    todoItemsList.removeChild(editButton);
    });

    //complete task functionality
    const completeButton=document.createElement('button');
    completeButton.innerText='Complete';    
    completeButton.addEventListener('click', () => {
        newItem.innerHTML= itemInputData.strike();
    });

    // edit button Functionality
    const editButton=document.createElement('button');
    editButton.innerText='Edit';    
    editButton.addEventListener('click', () => {
        todoItemsList.classList.add('done');
    });
    //Add value in a list
    console.log("Entered value in list is--"+itemInputData);
    if (itemInputData ===''){
        alert('please add item ...');
        return;
    }else{
        newItem.appendChild(textItem);
        newItem.appendChild(completeButton);
        newItem.appendChild(editButton);
        newItem.appendChild(deleteButton);
        document.getElementById("todo-item-lists").appendChild(newItem);    
    
    }

}

addbtn.addEventListener("click", addItem);
