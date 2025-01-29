addButton.addEventListener('click', ()=>{
    const input = document.getElementById('input')
    const addButton = document.getElementById('addButton')

    if(input.value ===''){
        alert('please input a Task')
        return;
    }

    const taskList = document.querySelector('ul')

    // creating a new task 
    const li = document.createElement('li')
    li.innerHTML =
    `
    <span>${input.value}</span>
    <button id="deleteButton">X</button>
    
    ` 
    taskList.appendChild(li)

// Marking a Task as done
    const completed = li.querySelector('span')
    completed.addEventListener('click', ()=>{
        completed.classList.toggle('completed')
    })

// deleting a task from the list
    const deleteButton = li.querySelector('#deleteButton')

    deleteButton.addEventListener('click', ()=>{
        taskList.removeChild(li)
    })

    input.value = ''
    
})
