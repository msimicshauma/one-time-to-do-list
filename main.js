document.addEventListener('DOMContentLoaded', () => {
    
    const noteList = document.querySelector('#notes');

    /*-----------------------ADD SAVED TASKS FROM STORAGE-----------------------*/
    for(let i = 0; i < localStorage.length; i++)
        addItem(localStorage.getItem(localStorage.key(i)));
    /*--------------------------------------------------------------------------*/
    
    //DELETE ITEMS
    noteList.addEventListener('click', e => {
        if(e.target.className === 'delete') {
            const li = e.target.parentElement;
            
            /*GETS THE TEXT OF TASK FOR DELETION AND REMOVES AN ITEM FROM LOCAL STORAGE*/
            const textValue = li.firstChild.textContent;
            for(let i = 0; i < localStorage.length; i++)
                if(textValue === localStorage.getItem(localStorage.key(i)))
                    localStorage.removeItem(localStorage.key(i));
            /*--------------------------------------------------------------------------*/
            
            noteList.removeChild(li);
        }
    });

    //ADD ITEMS
    const forms = document.forms;
    const addNote = forms['add-note'];
    
    let counter = localStorage.length; //USED FOR ADDING TO LOCAL STORAGE
    
    addNote.addEventListener('submit', e => {
        //PREVENT SUBMIT (REFRESH) AND GET THE INPUT VALUE
        e.preventDefault();
        const inputText = addNote.querySelector('input[type="text"]').value;
        
        if(inputText !== '') {

            //CREATE HTML ELEMENTS
            const li = document.createElement('li');
            const note = document.createElement('span');
            const deleteBtn = document.createElement('span');

            //ASSIGN VALUES TO HTML ELEMENTS
            note.textContent = inputText;
            deleteBtn.textContent = 'x';
            
            /*--------------------------------------------------------------------------*/
            //ADD TO LOCAL STORAGE
            localStorage.setItem("task" + counter++, inputText);
            /*--------------------------------------------------------------------------*/
            
            //ADD CLASSES
            note.classList.add('note-text');
            deleteBtn.classList.add('delete');
            li.classList.add('note');

            //APPEND DELETE BUTTON AND TEXT TO 'li'
            li.appendChild(note);
            li.appendChild(deleteBtn);
            noteList.appendChild(li);

            //RESET PLACEHOLDER AFTER SUBMIT
            addNote.querySelector('input[type="text"]').value = '';
        }
    });   
    
    //ADD SAVED TASKS
    function addItem(inputText) {
            //CREATE HTML ELEMENTS
            const li = document.createElement('li');
            const note = document.createElement('span');
            const deleteBtn = document.createElement('span');

            //ASSIGN VALUES TO HTML ELEMENTS
            note.textContent = inputText;
            deleteBtn.textContent = 'x';
        
            //ADD CLASSES
            note.classList.add('note-text');
            deleteBtn.classList.add('delete');
            li.classList.add('note');

            //APPEND DELETE BUTTON AND TEXT TO 'li'
            li.appendChild(note);
            li.appendChild(deleteBtn);
            noteList.appendChild(li);
    }
});