const input = document.querySelector('#favchap');
const button = document.querySelector('#addbtn');
const list = document.querySelector('#list');



button.addEventListener('click', function(){ 
    if (input.value.trim() !== '');
        const deleteButton = document.createElement('button');
        const listItems = document.createElement('li');

        deleteButton.className = 'removeBtn'
        listItems.textContent = input.value;
        deleteButton.textContent = '❌';

        // deleteButton.onclick = function(){
        //     let li = this.parentElement;
        //     listItems.remove(li)
        // }

        listItems.append(deleteButton);
        list.append(listItems);

deleteButton.addEventListener('click', function(){
    list.removeChild(listItems);
    input.focus();
    input.value = '';


})
});








