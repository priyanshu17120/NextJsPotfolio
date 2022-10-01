let btn = document.getElementById("aaaaaa");

setTimeout(() => {
    
    console.log(btn[4]);
    window.onscroll = function () { scrollFunction() };
    scrollFunction();
    function scrollFunction() {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    }
}, 1000);

// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log('aa');
// })

// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }


// When the user clicks on the button, scroll to the top of the document
