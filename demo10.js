var form = document.querySelector('#addForm')
var li = document.getElementById('items')
//add eventListner
form.addEventListener('submit',addList)
//remove eventListner
li.addEventListener('click',removeList)


// add list
function addList(e){

    e.preventDefault();

   
    //create listElement
    var list = document.createElement('li')
list.className='list-group-item'
 // get input fron inputbox        
 var val = form.querySelector('#name').value
 //get mobile no.
 var mval = document.getElementById('number').value
 //get email
 var eval = document.getElementById('email').value

list.id=eval
var arr=[val,mval,eval];
// add data to local storage
localStorage.setItem(eval,arr);
console.log(localStorage.getItem(val));

// append input to list
var newString=arr
list.append(document.createTextNode(newString))


// create edit button
var ebtn = document.createElement('button')
ebtn.className='btn btn-primary btn-sm float-right edit'
ebtn.append(document.createTextNode('Edit'))
list.append(ebtn)
// create delete button 
var btn = document.createElement('button')
btn.className="btn btn-danger btn-sm float-right delete"
btn.append(document.createTextNode('Delete'))
list.append(btn)
//done with button


 li.appendChild(list)
 // done with list 
}

// remove item
function removeList(e) {
    
if(e.target.classList.contains('delete')){
    if(confirm('are you sure?')){
e.target.parentElement.remove()
localStorage.removeItem(e.target.parentElement.id)

//localStorage.removeItem()
// or // li.removeChild(e.target.parentElement)
    }
}
else if(e.target.classList.contains('edit')){
var arr=localStorage.getItem(e.target.parentElement.id)
localStorage.removeItem(e.target.parentElement.id)
    e.target.parentElement.remove()
var arr1 = arr.split(',')

 // get input fron inputbox        
 var val = form.querySelector('#name')
 val.value=arr1[0];
 //get mobile no.
 var mval = document.getElementById('number')
 mval.value=arr1[1];
 //get email
 var eval = document.getElementById('email')
 eval.value=arr1[2]

console.log(arr1)


}
}

