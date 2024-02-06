var i = 0;

document.addEventListener('DOMContentLoaded', function () {
    var datePicker = document.getElementById('datePicker');
    // got to know that the date fecthed is not in the normal format and does not have splits
    var currentDate = new Date().toISOString().slice(0, 10);
    // Yup the upper fn is take from https://stackoverflow.com/questions/1531093/get-current-date-in-yyyy-mm-dd-
    datePicker.setAttribute('min', currentDate);
});
//Hard stuff all done by me is here
document.getElementById('forms').addEventListener('submit', function (event) {
    event.preventDefault();
    var mainText = document.getElementById('main-text').value;
    var date = document.getElementById('datePicker').value;

    if (mainText === '') {
        alert('You have to enter something');
    } else {
        var uli1 = document.getElementById('uli1');
        var li = document.createElement('li');
        i++;
        li.id = 'p' + i;
        uli1.appendChild(li);
        var doc = document.getElementById(`p${i}`);

        var divs = document.createElement('div');
        divs.style.display = 'flex';
        divs.style.gap = "10px";

        var int = document.createElement('input');
        int.className = "Siri";
        int.id = 'doom' + i;
        int.type = 'checkbox';

        var newdiv = document.createElement('div');
        var text = document.createElement('p');
        text.className = "Siri1";
        text.innerHTML = mainText;
        document.getElementById('main-text').value = '';
        newdiv.className = 'stars';
        var button = document.createElement('button');
        newdiv.style.width = '50vw';
        button.innerHTML = '&#10006';
        button.style.position = 'relative';
        button.style.alignSelf = 'flex-end';
        button.className = "Button";

        var ebutton = document.createElement('button');
        ebutton.innerHTML = 'Edit';
        ebutton.className = "edit-button";
        ebutton.id = 'b' + i;
        ebutton.style.position = 'relative';
        ebutton.style.alignSelf = 'flex-end';
        doc.appendChild(divs);
        divs.appendChild(int);
        divs.appendChild(newdiv);
        newdiv.appendChild(text);
        divs.appendChild(ebutton)
        divs.appendChild(button);
        if (date === '') {
            var duedate = document.createElement('p');
            duedate.className = "duedate";
            duedate.innerHTML = 'No Due Date Selected';
            duedate.style.fontSize = '20px';
            li.appendChild(duedate);
        } else {
            var duedate = document.createElement('p');
            duedate.innerHTML = 'Due date: ' + ' ' + date;
            duedate.className = "duedate";
            duedate.style.fontSize = '20px';
            li.appendChild(duedate);
        }
        
        saveData();
    }
});

document.getElementById('uli1').addEventListener('click', function (event) {
    var target = event.target;

    if (target.type === 'checkbox') {
        handleButtonClick(target);
        saveData();
    }
    if (target.className === 'edit-button') {
        var li = target.closest('li');
        var text = li.querySelector('.Siri1');
        var date = li.querySelector('.duedate');
        var cdate ='';
        var newText = prompt('Edit task:', text.innerHTML);
        var newDate = prompt('Edit Date:', cdate.innerHTML);
    
        if (newText !== null) {
            text.innerHTML = newText;
    
            if (newDate !== null) {
                date.innerHTML = 'Due Date:' + ' ' + newDate;
            }
    
            saveData();
        }
    }
    
    if (target.className === 'Button') {
        var li = target.closest('li');
        var uli1 = document.getElementById('uli1');
        var date = li.querySelector('.duedate');
        uli1.removeChild(li);

        if (date) {
            uli1.removeChild(date);
        }

        saveData();
    }
});

function handleButtonClick(checkbox) {
    var texty = checkbox.nextElementSibling;
    texty.style.textDecoration = checkbox.checked ? "line-through" : "none";
    saveData();
}
// learned from Chat-Gpt for how to work with local storage in JS
function saveData() {
    var tasks = [];
    var uli1 = document.getElementById('uli1');
    var listItems = uli1.querySelectorAll('li');

    listItems.forEach(function (li) {
        var taskText = li.querySelector('.Siri1').innerHTML;
        var isChecked = li.querySelector('.Siri').checked;
        var dateElement = li.querySelector('.duedate');
        var date = dateElement ? dateElement.innerHTML : '';

        tasks.push({ text: taskText, checked: isChecked, date: date });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadData() {
    var uli1 = document.getElementById('uli1');
    var savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
        var tasks = JSON.parse(savedTasks);
        tasks.forEach(function (task) {
            var li = document.createElement('li');
            var divs = document.createElement('div');
            divs.style.display = 'flex';
            divs.style.gap = "10px";
            uli1.appendChild(li);
            li.appendChild(divs);

            var int = document.createElement('input');
            int.className = "Siri";
            int.type = 'checkbox';
            int.checked = task.checked;

            var newdiv = document.createElement('div');
            var text = document.createElement('p');
            text.className = "Siri1";
            text.innerHTML = task.text;

            newdiv.className = 'stars';
            var button = document.createElement('button');
            newdiv.style.width = '50vw';
            button.innerHTML = '&#10006';
            button.style.position = 'relative';
            button.style.alignSelf = 'flex-end';
            button.className = "Button";

            var ebutton = document.createElement('button');
            ebutton.innerHTML = 'Edit';
            ebutton.className = "edit-button";
            ebutton.style.position = 'relative';
            ebutton.style.alignSelf = 'flex-end';

            divs.appendChild(int);
            divs.appendChild(newdiv);
            newdiv.appendChild(text);
            divs.appendChild(ebutton)
            divs.appendChild(button);

            if (task.date === '') {
                var duedate = document.createElement('p');
                duedate.className = "duedate";
                duedate.innerHTML = 'No Due Date Selected';
                duedate.style.fontSize = '20px';
                li.appendChild(duedate);
            } else {
                var duedate = document.createElement('p');
                duedate.innerHTML = task.date;
                duedate.className = "duedate";
                duedate.style.fontSize = '20px';
                li.appendChild(duedate);
            }

            int.addEventListener('change', function () {
                handleButtonClick(int);
                saveData();
            });

            button.addEventListener('click', function () {
                uli1.removeChild(li);
                saveData();
            });

            text.style.textDecoration = int.checked ? "line-through" : "none";
        });
    }
}

loadData();
