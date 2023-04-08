var form = document.querySelector('#addForm')
var li = document.getElementById('items')
//add eventListner
form.addEventListener('submit',addList)
//remove eventListner
li.addEventListener('click',removeList)
// filter eventListner
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

// create button 
var btn = document.createElement('button')
btn.className="btn btn-danger btn-sm float-right delete"
btn.append(document.createTextNode('Delete'))
list.append(btn)
// done with button 

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
}

