const addbtn=document.getElementById("btn-primary-add");
const tasklistContent = document.getElementById('task-list-content');
const todoItemsList = document.getElementById('todo-item-lists');
const input = document.querySelector('#userinput');



function addItem(){
   
    let itemInputData=document.getElementById('itemInput').value; //input value
    let textItem=document.createTextNode(itemInputData);
    let newItem=document.createElement("li");
    newItem.classList.add('container');
    newItem.style.boxshadow="1px 1px 5px 1px gray";

    //delete functionality
    // const img = new Image(40,40);
    // img.src = './images/trash.svg';
    // deleteButton.appendChild(img);
    const deleteButton=document.createElement('button');
    const delImg = new Image(20,20);
    delImg.src = './images/trash.svg';
    deleteButton.appendChild(delImg);
    // deleteButton.innerText='DEL';   
    deleteButton.addEventListener('click', () => {
        alert('Are you sure ? you want to delete the task?')
    todoItemsList.removeChild(newItem);
    todoItemsList.removeChild(deleteButton);
    todoItemsList.removeChild(completeButton);
    todoItemsList.removeChild(editButton);
    });

    //complete task functionality
    const completeButton=document.createElement('button');
    const completelImg = new Image(20,20);
    completelImg.src = './images/check2-square.svg';
    completeButton.appendChild(completelImg);
    
    // completeButton.innerText='Complete';    
    completeButton.addEventListener('click', () => {
        newItem.innerHTML= itemInputData.strike();
    });
    //
    //
    //
    // edit button Functionality
    

    function editItem(event) {
        let initialValue;
        let item = event.target.innerHTML;
        // let itemInput = document.createElement('input');
        let editButton=document.createElement('button');

        const editImg = new Image(20,20);
        editImg.src = './images/pencil.svg';
        editButton.type = 'text';
        editButton.value = item;
        editButton.classList.add('edit');
        initialValue = item;
        // editButton.addEventListener('keypress', saveItem);
        editButton.addEventListener('click', saveItem);
        editButton.parentNode.prepend(itemInput);
        event.target.remove();
        editButton.select();
    }





        const editButton=document.createElement('button');
        const editImg = new Image(20,20);
        editImg.src = './images/pencil.svg';
        editButton.appendChild(editImg);
        // editButton.innerText='Edit';    
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
    // addbtn.addEventListener("click", addItem);

    

}



addbtn.addEventListener("click", addItem);
editItem.addEventListener("click",editItem);
