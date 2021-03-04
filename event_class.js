// ____________________________________________________________________________________________________________
//     - Создайте меню, которое раскрывается/сворачивается при клике
let btn = document.getElementById('button')
btn.onclick = function() {
    let elements = document.getElementById('element')
    if (elements.style.display === 'none') {
        elements.style.display = 'block'
    } else {
        elements.style.display = 'none'
    }

}


// }
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// let enter=getElementById
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// btn.onclick = function() {
//     for (const li of elements) {

//         if (li.style.display = 'none') {
//             li.style.display = 'block'
//         } if (li.style.display = 'block') {
//             li.style.display = 'none'
//         }

//     }
// }