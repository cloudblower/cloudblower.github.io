document.addEventListener("DOMContentLoaded", function () {
    var _0x3457x1 = document.querySelector("\.menu");
    var _0x3457x2 = "no";
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 65 && _0x3457x2 == "no") {
            _0x3457x1.classList.add("menuMore");
            _0x3457x2 = "yes"
        } else {
            if (_0x3457x2 = "yes" && window.pageYOffset <= 65) {
                _0x3457x1.classList.remove("menuMore");
                _0x3457x2 = "no"
            }
        }
    });
    var _0x3457x3 = document.querySelector("\.name p"),
        _0x3457x4 = document.querySelector("\.name \.s");
    _0x3457x3.addEventListener("mouseenter", function () {
        _0x3457x4.style.transform = "scaleX\(1\)";
        _0x3457x4.style.color = "mediumseagreen"
    });
    _0x3457x3.addEventListener("mouseleave", function () {
        _0x3457x4.style.transform = "scaleX\(0\)"
    });
    var _0x3457x5 = document.querySelector("\.license a");
    _0x3457x5.innerHTML = "Powered By Cloudblower - Comingsoon\.com"
}, false)