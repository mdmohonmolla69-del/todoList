const textBox = document.getElementById('noteBox');
const addbtn = document.getElementById('btnS');
const myNote = document.querySelector('.myNote');
const btnDl = document.querySelector('.btnDl');
const allNotesd = document.querySelector('.noteAll');



addbtn.addEventListener('click', function () {
    if (textBox.value.trim() === '') {
        alert('Plese Write Somthing');
    } else {
        const task = document.createElement('p');
        task.classList.add('myNote');
        const btnD = document.createElement('button');
        btnD.innerText = 'D';
        btnD.classList.add('btnDl');
        task.textContent = textBox.value;
        allNotesd.appendChild(task);
        task.appendChild(btnD);
        btnD.addEventListener('click', (de) => {
            task.remove()
            saveData();
        });
        saveData();
    }
    textBox.value = '';
})

function saveData() {
    localStorage.setItem('allTaskHtml', allNotesd.innerHTML);
}

function showData() {
    const savedHtml = localStorage.getItem('allTaskHtml')
    if (savedHtml) {
        allNotesd.innerHTML = savedHtml;
        reAtDeLi();
    }
}

function reAtDeLi() {
    const allDeleteBtns = document.querySelectorAll('.btnDl')
    allDeleteBtns.forEach(btnD => {
        btnD.addEventListener('click', () => {
            btnD.parentElement.remove();
            saveData();
        })
    })
}

showData();
