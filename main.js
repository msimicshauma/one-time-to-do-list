document.addEventListener('DOMContentLoaded', () => {
    //DELETE ITEMS
    const noteList = document.querySelector('#notes');

    noteList.addEventListener('click', e => {
        if(e.target.className === 'delete') {
            const li = e.target.parentElement;
            noteList.removeChild(li);
        }
    });

    //ADD ITEMS
    const forms = document.forms;
    const addNote = forms['add-note'];

    addNote.addEventListener('submit', e => {
        //PREVENT SUBMIT (REFRESH) AND GET THE VALUE
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
    
});