(function () {

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top > 0 &&
            rect.top + 150 < window.innerHeight 
        );
    }

    function eventHendler () {
        var elems = document.getElementsByClassName("invis");
        for(var i = 0; i < elems.length; i++) {
            var el = elems.item(i);
            if (isInViewport(el)) {
                if(el.classList.contains("scholarship__img")){
                    el.classList.add("anim-img");
                } else {
                    el.classList.add("anim");
                }
                el.classList.remove("invis");
            }
        };
    }

    // var nav = document.getElementsByClassName("nav")[0];
    // nav.addEventListener("click", function (e) {
    //     console.log(e);
    //     e.preventDefault();
    //     var source = e.srcElement;
    //     if (source.classList.contains("nav__link")) {
    //         document.querySelector(source.hash).scrollIntoView({
    //             behavior: "smooth"
    //         });
    //     }
    //     e.stopPropagation();
    // });

    setInterval(eventHendler, 200);

}());