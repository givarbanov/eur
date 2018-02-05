(function () {

    // var elem = document.getElementsByClassName("invis");

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        // var html = document.documentElement;
        
        // console.log(element.className + " : top : " + rect.top);
        // console.log("window.innerHeight: " + window.innerHeight);

        return (
            rect.top > 0 &&
            rect.top + 150 < window.innerHeight //&&
        //   rect.left >= 0 &&
        //   rect.bottom <= (window.innerHeight || html.clientHeight) &&
        //   rect.right <= (window.innerWidth || html.clientWidth)
        );
    }

    function eventHendler () {
        // console.log(event);
        var elem = document.getElementsByClassName("invis");
        for(var i = 0; i < elem.length; i++) {
            var el = elem.item(i);
            if (isInViewport(el)) {
                if(el.classList.contains("scholarship__img")){
                    el.classList.add("animimg");
                } else {
                    el.classList.add("anim");
                }
                el.classList.remove("invis");
            }
        };
    }

    setInterval(eventHendler, 10);

    // window.addEventListener("scroll", eventHendler, false);
    // window.addEventListener("load", eventHendler, false);
    // window.addEventListener('resize', eventHendler, false); 
    
    // document.addEventListener('click', function (event) {
    //     if ( event.target.classList.contains( 'nav__link' ) ) {
    //         setTimeout(eventHendler, 0);
    //     }
    // }, false);

}());