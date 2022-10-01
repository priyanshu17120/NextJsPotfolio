let haam = document.getElementById('ham');
let aaa1 = document.getElementById('aaa1');
let aaa2 = document.getElementById('aaa2');
let closebutton = document.getElementById('closebutton');
const closenav = () => {
    aaa1.classList.remove('lg:hidden');
    aaa1.classList.remove('opacity-100');
    aaa1.classList.remove('pointer-events-auto');
    aaa2.classList.add('hidden')
    console.log('aaaafrfr');
}
haam.addEventListener('click', () => {
    aaa1.classList.add('lg:hidden');
    aaa1.classList.add('opacity-100');
    aaa1.classList.add('pointer-events-auto');
    aaa2.classList.remove('hidden')
    console.log('aa');
})
closebutton.addEventListener('click', () => {
    closenav();
})