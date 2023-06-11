const addbtn = document.querySelector('#addBtn');
const main = document.querySelector('#main')
// 
addbtn.addEventListener('click', function(){
  addNote();
})

const saveNote = () => {
  const notes = document.querySelectorAll('.note textarea');
  const data  = [];
  console.log(notes);
  notes.forEach((note) => {
    data.push(note.value);
  
  });
  
if (data.length === 0) {
  localStorage.removeItem('note')
}
else{
  localStorage.setItem('note', JSON.stringify(data));
}

  
  
  }
  
const addNote = (text = "")=>{
const note = document.createElement('div');
note.classList.add('note');
note.innerHTML = `
<div class="toolBar">
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
    </div>
    <textarea name="" class="txt" style="width: 399px; height: 354px; resize: none;" >${text}</textarea>
`
note.querySelector('.trash').addEventListener('click', function(){
note.remove();
saveNote();
}) 
note.querySelector('.save').addEventListener('click', function(){
saveNote();
    }) 
    note.querySelector('textarea').addEventListener('focusout', function(){
      saveNote();
  
  })
      main.appendChild(note);
      saveNote();
    }



    


( function(){

  const lnotes = JSON.parse(localStorage.getItem('note'));
  if(lnotes === null){
    addNote();
  }
else{
  lnotes.forEach((lnotes) =>{
    addNote(lnotes);
  })

  }




})()



