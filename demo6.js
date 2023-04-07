var form = document.querySelector('#addForm')
var li = document.getElementById('items')
 var filter = document.getElementById('filter')

   // create new input for discription of item
   var input=document.createElement('input')
   input.type='text'
   input.id="newItem1" 
   input.className="form-control mr-2"
   //insert before this element
   var bin1 = form.lastElementChild
   //let insert in input element in form
   form.insertBefore(input,bin1)



//add eventListner
form.addEventListener('submit',addList)
//remove eventListner
li.addEventListener('click',removeList)
// filter eventListner
filter.addEventListener('keyup',filterList)
// add list
function addList(e){

    e.preventDefault();

   
    //create listElement
    var list = document.createElement('li')
list.className='list-group-item'
 // get input fron inputbox        
var val = form.querySelector('#item').value
//get details of item
var dval = document.getElementById('newItem1').value
// add data to local storage
localStorage.setItem(val,dval);
console.log(localStorage.getItem(val));

// append input to list
var newString=val+" "+dval
list.append(document.createTextNode(newString))

// create button 
var btn = document.createElement('button')
btn.className="btn btn-danger btn-sm float-right delete"
btn.append(document.createTextNode('x'))
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
// or // li.removeChild(e.target.parentElement)
    }
}
}

// filter list
function filterList(e) {

    var filterText=e.target.value.toLowerCase()
    
    var htmlArray = document.getElementsByTagName('li')
    
Array.from(htmlArray).forEach(function(item){
    var itemList = item.firstChild.textContent;
    console.log(itemList)
    if(itemList.toLowerCase().indexOf(filterText)!= -1){
        item.style.display = 'block'
    }
        else {
        item.style.display='none'
    }
})
    
}
