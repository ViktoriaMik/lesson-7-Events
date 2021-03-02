// let btn = document.getElementById('target')
// btn.onclick = function() {
//     console.log('click');
// }
// let inputs = document.getElementsByTagName('input');

// // function getClick() {
// //     console.log('push');
// //     let name = inputs[0].value;
// //     let age = inputs[1].value;
// //     let user = {
// //             name: name,
// //             age: age
// //         } // те ж саме {name,age}
// //     console.log(user);
// //     let area = document.getElementsByTagName('textarea')[0].value;
// //     let users = { name, age, msg: area }
// //     console.log(users);
// // }
// // let target = document.querySelector('#target');
// // target.addEventListener('click', () => console.log('hello'));

// // for (const input of inputs) {
// //     input.addEventListener('mouseover', () => {
// //         input.style.background = 'silver'
// //     })
// //     input.addEventListener('mouseleave', () => {
// //         input.style.background = 'tomato'
// //     })

// // }

// let box = document.getElementById('box')
// box.addEventListener('mousemove', (e) => {
//     // console.log(e.x, e.y);
//     box.style.background = `rgb(${e.x},${e.y},${e.x})`

// })

// // let clientMap = [];
// // document.onclick = function(e) {
// //     clientMap.push({ coords: { x: e.x, y: e.y }, target: e.target })

// // }
// // document.ondblclick = function() {
// //     console.log(clientMap);
// // };

// // let boxComputedStyle = getComputedStyle(box)
// // console.log(boxComputedStyle);
// // console.log(boxComputedStyle.height);

// // let box = document.getElementById('box')
// // box.onclick = function(e) {
// //     let height = +getComputedStyle(box).height.replaceAll('px', '')
// //     console.log(height);
// //     box.style.height = height / 2 + 'px';
// //     box
// //         .style.transition = '300ms'


// // }


// inputs[0].oninput = function() {
//     // console.log(this.value);
//     box.innerHTML = this.value

// }



let numberArr = [1, 2, 3, 4, 5, 6, 7]
let red = numberArr.reduce((acun, curret) => acun + curret)
console.log(red);