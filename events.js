// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let button = document.getElementById('target')
let text = document.getElementById('text')
button.onclick = function() {
    text.style.display = 'none'
}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let hide = document.querySelector('#hide')
hide.onclick = function() {
    hide.style.display = 'none'
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let ageEnter = document.getElementById('age')
let pres = document.getElementById('pres')
pres.onclick = function() {
        if (ageEnter.value < 18) {
            alert('bye')
        }
    }
    // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
let coments = [{ title: 'lorem', body: 'lorem ipsum dolo sit ameti' },
        { title: 'Hello', body: ' consectetur adipisicing elit.' },
        { title: 'how are you', body: ' Laboriosam, maxime deserunt? ' },
        { title: 'what is your name', body: 'Perferendis vitae culpa' },
        { title: 'where are you from', body: 'minima quisquam esse' },
        { title: 'coment', body: 'laboriosam repellendus eaque ut' },
        { title: 'no coment', body: 'dolorum ex voluptates voluptatum error voluptatem ' }
    ]
    // Вывести список комментариев в документ, каждый в своем блоке.Добавьте каждому комментарию по кнопке для сворачивания его body.
for (const coment of coments) {
    let div = document.createElement('div')
    div.id = 'title'
    div.innerHTML = coment.title
    let divbody = document.createElement('div')
    divbody.id = 'body'
    divbody.innerHTML = coment.body
    document.body.appendChild(div)
    document.body.appendChild(divbody)
    let btn = document.createElement('button')
    div.appendChild(btn)
    btn.innerHTML = 'hide'
    btn.onclick = function() {
        divbody.innerHTML = ''
    }

}

// ***- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
let word = document.getElementById('word')
let enter = document.getElementById('enter')


let badWords = ['shit', 'son of bitch', 'arsehole', 'bullshit', 'bastard', 'whore', 'slat']

// console.log(wordElement);
enter.onclick = function() {

    for (const iter of badWords) {
        if (iter == word.value) {
            alert('dont say that')
        }
    }

}




// let xxx = prompt('')
// console.log(xxx);

// let nameArr = ['vika', 'oleg', 'sasha']
// for (const iter of nameArr) {
//     if (xxx == iter) {
//         alert('hi')
//     }
// }