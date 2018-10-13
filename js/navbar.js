window.onscroll = function() {
    scrolling();
};

var sticky = navbar.offsetTop;

function scrolling() {
    if (window.pageYOffset >= sticky) {
        $("#navbar").addClass("sticky");
        $("#socialMedia").removeClass("hidden").addClass("show");
        $("#body").removeClass("full");
    } else {
        $("#navbar").removeClass("sticky");
        $("#socialMedia").removeClass("show").addClass("hidden");
        $("#body").addClass("full");
    }
}
