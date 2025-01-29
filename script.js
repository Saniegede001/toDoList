addButton.addEventListener('click', (e)=>{
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

// deleting a task from the list
    const deleteButton = li.querySelector('#deleteButton')

    deleteButton.addEventListener('click', (e)=>{
        taskList.removeChild(li)
    })

    input.value = ''
    
})










// const li = document.createElement('p')

// li.id = 'mySani'
// li.textContent = 'hey'

// const container = document.getElementById('container')
// container.appendChild(li)