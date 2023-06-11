 window.addEventListener('load', ()=>{
  const form = document.getElementById('new-task-form');
  const input = document.getElementById('input-task');
  const list_el = document.getElementById('tasks');      

  form.addEventListener('submit', ( e) =>{
    e.preventDefault()
        const task   = input.value
          if(!task){
            alert("Please Enter your Task");
            return;
        }  
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');  
        task_content_el.classList.add('content');
        task_content_el.innerHTML = task;

        task_el.appendChild(task_content_el);
        list_el.appendChild(task_el);



  })

 })