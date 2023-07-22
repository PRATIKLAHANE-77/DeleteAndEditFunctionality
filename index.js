var form = document.getElementById('addForm');
  var itemlist = document.getElementById('items');

  // for deleting the delete button
  itemlist.addEventListener('click', removeitem);

 let list = document.getElementById('items');
 Array.from(list);
  for(let i = 0;i<Array.length;i++) {
     var editbtn = document.createElement('button');
  editbtn.className = 'btn btn-danger btn-sm float-right delete';
  editbtn.style.marginRight = '5px';
  editbtn.appendChild(document.createTextNode('Edit'));
  list[i].appendChild(editbtn);

  }

  

  // form submit event
  form.addEventListener('submit', additem);

  function additem(e) {
    e.preventDefault();

    //get input value
    var newitem = document.getElementById('item').value;

    //craete new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';

    // add text node with input value
li.appendChild(document.createTextNode(newitem));

//create delete button
var button = document.createElement('button');
var editbtn = document.createElement('button');

// add class name in button

button.className = 'btn btn-danger btn-sm float-right delete';
editbtn.className = 'btn btn-danger btn-sm float-right delete';


button.appendChild(document.createTextNode('x'));
editbtn.appendChild(document.createTextNode('Edit'));
editbtn.style.marginRight = '5px';

li.appendChild(button);
li.appendChild(editbtn);

itemlist.appendChild(li);
}
function removeitem(e) {
   console.log(e.target.classList);
  if(e.target.classList.contains('delete')) {
    if(confirm('are you sure')) {
      let li = e.target.parentElement;
      itemlist.removeChild(li);

    }
  }
}