let btn = document.getElementsByTagName("button");


setTimeout(() => {
    
    console.log(btn.blogtotop);
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            btn.blogtotop.style.display = "flex";
        } else {
            btn.blogtotop.style.display = "none";
        }
    }
}, 100);