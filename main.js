taskNumber = 2 //default!


document.querySelector("#assignments").style.visibility = 'hidden';



document.querySelector("#assignmentsButton").addEventListener('click', () => {
    document.querySelector("#assignments").style.visibility = 'visible';
})


document.querySelector("#hideAssignmentsButton").addEventListener('click', () => {
    document.querySelector("#assignments").style.visibility = 'hidden';
})


document.querySelector("#changeTask1").addEventListener('click', () => {
    firstTask = prompt("What's your first task of the day?")
    document.getElementById("block1").textContent = firstTask;
})

document.querySelector("#changeTask2").addEventListener('click', () => {
    firstTask = prompt("What's your second task of the day?")
    document.getElementById("block2").textContent = firstTask;
})

document.querySelector("#addTask").addEventListener('click', () => {
    taskNumber = taskNumber + 1;
    defaultText = prompt("What's the task about?");
    const div = document.createElement('div');
    div.classList.add('block');
    const h = document.createElement('h2');
    h.classList = "Block" + taskNumber;
    const p = document.createElement('p');
    p.classList = defaultText;
    const button = document.createElement('button');
    button.classList.add('button');
    button.classList.contains = "Change Task";
})