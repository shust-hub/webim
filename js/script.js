function myFunction() {
    var x = document.getElementById("nav");
    var y = document.getElementById("toggle");
    // var headContent = document.getElementsByTagName('header')[0].innerHTML;
    if (x.className === "head-nav") {
        x.className += " responsive";
        toggle.className += " is-active";
        document.getElementsByTagName('header')[0].style.height = '200px';
    } else {
        x.className = "head-nav";
        toggle.className = "nav-opener";
        document.getElementsByTagName('header')[0].style.height = '70px';
    }
}