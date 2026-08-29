
document.querySelector("#assignments").style.visibility = 'hidden';


document.querySelector("#assignmentsButton").addEventListener('click', () => {
    document.querySelector("#assignments").style.visibility = 'visible';
})


document.querySelector("#hideAssignmentsButton").addEventListener('click', () => {
    document.querySelector("#assignments").style.visibility = 'hidden';
})



document.querySelector("#changeTasks").addEventListener('click', () => {
    firstTask = prompt("What's your first task of the day?")
    document.getElementById("block1").textContent = firstTask;
})
