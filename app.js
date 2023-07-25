let check_box=document.querySelector('.check-mark')
let tick=document.querySelector('.tick')
check_box.addEventListener('click', function () {
    tick.classList.toggle('tick');
})
console.log(tick);
