


function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        var taskList = document.getElementById('taskList');
        var listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

function updateTime() {
    var currentTime = new Date();
    var date=currentTime.getDate();
    var month=currentTime.getMonth();
    var year=currentTime.getFullYear();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var timeString =date+"-"+month+"-"+year+"   "+ hours + ':' + minutes + ':' + seconds;
    
    var timeContainer = document.getElementById('timeContainer');
    timeContainer.textContent = 'Date &  Time: ' + timeString;
}

updateTime();
setInterval(updateTime, 1000); // Update time every second
