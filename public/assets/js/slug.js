let btnn = document.getElementsByTagName("button");


setTimeout(() => {
    
    console.log(btnn.slugtotop);
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
            btnn.slugtotop.style.display = "flex";
        } else {
            btnn.slugtotop.style.display = "none";
        }
    }
}, 1000);