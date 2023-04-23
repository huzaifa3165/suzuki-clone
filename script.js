
const change_1 = () => {
    const left = document.querySelector('.leftText')
    const right = document.querySelector('.rightText')
    const dots = document.getElementsByClassName('dot')
    let i=1
    Array.from(dots).forEach(element => {
        element.classList.remove('active')
        if(i==1){
            element.classList.add('active')
        }
        i++
    });
    left.innerHTML = `<div class="up">Engine</div>
    <div class="down">599 cc</div>`
    right.innerHTML = `<div class="up">Max Speed</div>
    <div class="down">280 Kmph</div>`

}
const change_2 = () => {
    const left = document.querySelector('.leftText')
    const right = document.querySelector('.rightText')
    const dots = document.getElementsByClassName('dot')
    let i=1
    Array.from(dots).forEach(element => {
        element.classList.remove('active')
        if(i==2){
            element.classList.add('active')
        }
        i++
    });
    left.innerHTML = `<div class="up">Mileage</div>
    <div class="down">14 Kmpl</div>`
    right.innerHTML = `<div class="up">0-100 Kmph</div>
    <div class="down">4 Seconds</div>`

}
const change_3 = () => {
    const left = document.querySelector('.leftText')
    const right = document.querySelector('.rightText')
    const dots = document.getElementsByClassName('dot')
    let i=1
    Array.from(dots).forEach(element => {
        element.classList.remove('active')
        if(i==3){
            element.classList.add('active')
        }
        i++
    });
    left.innerHTML = `<div class="up">Wheels</div>
    <div class="down">17-Inch Alloy</div>`
    right.innerHTML = `<div class="up">Tyre Type</div>
    <div class="down">Tubeless</div>`

}