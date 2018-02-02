(function () {

    var elem = document.getElementsByClassName("asd");

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        // var html = document.documentElement;
        
        return (
          rect.top + 200 < window.innerHeight //&&
        //   rect.left >= 0 &&
        //   rect.bottom <= (window.innerHeight || html.clientHeight) &&
        //   rect.right <= (window.innerWidth || html.clientWidth)
        );
    }

    window.addEventListener("scroll", function (e) {
        [].forEach.call(elem, function(el) {
            if (isInViewport(el)) {
                el.classList.add("anim");
            }
        });
    });

}());