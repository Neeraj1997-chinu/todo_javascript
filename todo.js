var task;
let n=0;
function data(){
    
    var form=document.getElementById('add_task');
    task=form.value;
    // console.log(task);
    var li = document.createElement("li");
    var node = document.createTextNode(task);
    li.appendChild(node);
    var id= document.createAttribute('id');
    id.value="task"+n;
    li.setAttributeNode(id);
    var button = document.createElement('button');
    var button_text = document.createTextNode('remove');
    button.appendChild(button_text);
    var button_attribute = document.createAttribute('onclick');
    button_attribute.value = ` document.getElementById( 'task${n}').remove() `;
    button.setAttributeNode(button_attribute);
    
    li.appendChild(button);
    
    
    console.log(li);
    var tasklist= document.getElementById('task_list').appendChild(li);
    n++;
}





