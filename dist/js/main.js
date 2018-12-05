//MONDAY-FUNCTIONS

var formMonday = document.getElementById('addFormMonday');
var itemListMonday = document.getElementById('items-monday');
formMonday.addEventListener('submit', addItemMonday);
itemListMonday.addEventListener('click', removeItemMonday);

function addItemMonday(e) {
    e.preventDefault();
    var newItemMonday = document.getElementById('item-monday').value;
    var liMonday = document.createElement('li');
    liMonday.className = 'list-item-monday';
    liMonday.appendChild(document.createTextNode(newItemMonday));
    var deleteBtnMonday = document.createElement('i');
    deleteBtnMonday.className = 'fas fa-trash-alt delete-monday delete';
    deleteBtnMonday.appendChild(document.createTextNode(''));
    liMonday.appendChild(deleteBtnMonday);
    itemListMonday.appendChild(liMonday);
}

function removeItemMonday(e) {
    if (e.target.classList.contains('delete')) {
        var liMonday = e.target.parentElement;
        itemListMonday.removeChild(liMonday);
    }
}

// //TUESDAY FUNCTIONS
var formTuesday = document.getElementById('addFormTuesday');
var itemListTuesday = document.getElementById('items-tuesday');
formTuesday.addEventListener('submit', addItemTuesday);
itemListTuesday.addEventListener('click', removeItemTuesday);

function addItemTuesday(e) {
    e.preventDefault();
    var newItemTuesday = document.getElementById('item-tuesday').value;
    var liTuesday = document.createElement('li');
    liTuesday.className = 'list-item-tuesday';
    liTuesday.appendChild(document.createTextNode(newItemTuesday));
    var deleteBtnTuesday = document.createElement('i');
    deleteBtnTuesday.className = 'fas fa-trash-alt delete-tuesday delete';
    deleteBtnTuesday.appendChild(document.createTextNode(''));
    liTuesday.appendChild(deleteBtnTuesday);
    itemListTuesday.appendChild(liTuesday);
}

function removeItemTuesday(e) {
    if (e.target.classList.contains('delete')) {
        var liTuesday = e.target.parentElement;
        itemListTuesday.removeChild(liTuesday);
    }
}

// //WEDNESDAY FUNCTIONS
var formWednesday = document.getElementById('addFormWednesday');
var itemListWednesday = document.getElementById('items-wednesday');
formWednesday.addEventListener('submit', addItemWednesday);
itemListWednesday.addEventListener('click', removeItemWednesday);

function addItemWednesday(e) {
    e.preventDefault();
    var newItemWednesday = document.getElementById('item-wednesday').value;
    var liWednesday = document.createElement('li');
    liWednesday.className = 'list-item-wednesday';
    liWednesday.appendChild(document.createTextNode(newItemWednesday));
    var deleteBtnWednesday = document.createElement('i');
    deleteBtnWednesday.className = 'fas fa-trash-alt delete-wednesday delete';
    deleteBtnWednesday.appendChild(document.createTextNode(''));
    liWednesday.appendChild(deleteBtnWednesday);
    itemListWednesday.appendChild(liWednesday);
}

function removeItemWednesday(e) {
    if (e.target.classList.contains('delete')) {
        var liWednesday = e.target.parentElement;
        itemListWednesday.removeChild(liWednesday);
    }
}

// //Thursday Functions
var formThursday = document.getElementById('addFormThursday');
var itemListThursday = document.getElementById('items-thursday');
formThursday.addEventListener('submit', addItemThursday);
itemListThursday.addEventListener('click', removeItemThursday);

function addItemThursday(e) {
    e.preventDefault();
    var newItemThursday = document.getElementById('item-thursday').value;
    var liThursday = document.createElement('li');
    liThursday.className = 'list-item-thursday';
    liThursday.appendChild(document.createTextNode(newItemThursday));
    var deleteBtnThursday = document.createElement('i');
    deleteBtnThursday.className = 'fas fa-trash-alt delete-thursday delete';
    deleteBtnThursday.appendChild(document.createTextNode(''));
    liThursday.appendChild(deleteBtnThursday);
    itemListThursday.appendChild(liThursday);
}

function removeItemThursday(e) {
    if (e.target.classList.contains('delete')) {
        var liThursday = e.target.parentElement;
        itemListThursday.removeChild(liThursday);
    }
}

// //Friday Functions
var formFriday = document.getElementById('addFormFriday');
var itemListFriday = document.getElementById('items-friday');
formFriday.addEventListener('submit', addItemFriday);
itemListFriday.addEventListener('click', removeItemFriday);

function addItemFriday(e) {
    e.preventDefault();
    var newItemFriday = document.getElementById('item-friday').value;
    var liFriday = document.createElement('li');
    liFriday.className = 'list-item-friday';
    liFriday.appendChild(document.createTextNode(newItemFriday));
    var deleteBtnFriday = document.createElement('i');
    deleteBtnFriday.className = 'fas fa-trash-alt delete-friday delete';
    deleteBtnFriday.appendChild(document.createTextNode(''));
    liFriday.appendChild(deleteBtnFriday);
    itemListFriday.appendChild(liFriday);
}

function removeItemFriday(e) {
    if (e.target.classList.contains('delete')) {
        var liFriday = e.target.parentElement;
        itemListFriday.removeChild(liFriday);
    }
}

//Saturday Functions
var formSaturday = document.getElementById('addFormSaturday');
var itemListSaturday = document.getElementById('items-saturday');
formSaturday.addEventListener('submit', addItemSaturday);
itemListSaturday.addEventListener('click', removeItemSaturday);

function addItemSaturday(e) {
    e.preventDefault();
    var newItemSaturday = document.getElementById('item-saturday').value;
    var liSaturday = document.createElement('li');
    liSaturday.className = 'list-item-saturday';
    liSaturday.appendChild(document.createTextNode(newItemSaturday));
    var deleteBtnSaturday = document.createElement('i');
    deleteBtnSaturday.className = 'fas fa-trash-alt delete-saturday delete';
    deleteBtnSaturday.appendChild(document.createTextNode(''));
    liSaturday.appendChild(deleteBtnSaturday);
    itemListSaturday.appendChild(liSaturday);
}

function removeItemSaturday(e) {
    if (e.target.classList.contains('delete')) {

        var liSaturday = e.target.parentElement;
        itemListSaturday.removeChild(liSaturday);
    }
}


//Sunday Functions
var formSunday = document.getElementById('addFormSunday');
var itemListSunday = document.getElementById('items-sunday');
formSunday.addEventListener('submit', addItemSunday);
itemListSunday.addEventListener('click', removeItemSunday);

function addItemSunday(e) {
    e.preventDefault();
    var newItemSunday = document.getElementById('item-sunday').value;
    var liSunday = document.createElement('li');
    liSunday.className = 'list-item-sunday';
    liSunday.appendChild(document.createTextNode(newItemSunday));
    var deleteBtnSunday = document.createElement('button');
    deleteBtnSunday.className = 'fas fa-trash-alt delete-sunday delete';
    deleteBtnSunday.appendChild(document.createTextNode(''));
    liSunday.appendChild(deleteBtnSunday);
    itemListSunday.appendChild(liSunday);
}

function removeItemSunday(e) {
    if (e.target.classList.contains('delete')) {
        var liSunday = e.target.parentElement;
        itemListSunday.removeChild(liSunday);
    }
}


































//  Filter Items
//  function filterItems(e) {
//       convert text to lowercase
//      var text = e.target.value.toLowerCase();
//     // Get lis
//     var items = itemList.getElementsByTagName('li');
//     // Convert to an array
//     Array.from(items).forEach(function (item) {
//         var itemName = item.firstChild.textContent;
//         if (itemName.toLowerCase().indexOf(text) != -1) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }