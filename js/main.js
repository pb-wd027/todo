function addItem(){

    //alert('please add item');
    let item=document.getElementById('itemInput').value; //input value
    let textItem=document.createTextNode(item);//
    let newItem=document.createElement("li");
     newItem.appendChild(textItem);
     document.getElementById("todoListitem").appendChild(newItem);

}
document.getElementById("btn-primary-add").addEventListener("click", addItem);
