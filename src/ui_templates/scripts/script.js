var logo_white = "/resources/sole.svg";
var logo_dark = "/resources/sole.svg";

var burger_white = "/resources/burger_grey.svg"
var burger_dark = "/resources/burger_grey.svg"


class StyleManager {
    constructor() {
        this.transparentNav = true;
        this.state = new LightState();
    }

    setState(styleState){
        this.state = styleState;
    }

    setTransparency(transparency) {
        this.transparentNav = transparency;
        this.setStyle();
    }

    hideMenu() {
        $(".menu").hide(300);
    }

    toggleMenu() {
        $(".menu").toggle(300);
        this.styleScrolling();
    }

    resizeMenu() {
        if (window.matchMedia('(max-width: 786px)').matches) {
            $(".burger-menu").show();
            $(".menu").hide();
        } else {
            $(".burger-menu").hide()
            $(".menu").show();
        }
        this.setStyle();
    }

    setStyle() {
        if ($(window).scrollTop() <= 155 && this.transparentNav) {
            this.styleTop();
        }
        else if (!this.scrolling){
            this.styleScrolling();
        }
    }

    styleTop() {
        if ((window.matchMedia('(max-width: 786px)').matches)) {
            if ($(".menu").is(":visible")) {
                return;
            } else {
                $(".logo-text").css('opacity', '0');
            }
        }
        $('nav').removeClass('black');
        $("#logo-img").attr("src", this.state.logoTop);
        $("#burger-button").attr("src", this.state.burgerTop);
        $(".headerTitle").css('opacity', 1);
        this.scrolling=false;
    }

    styleScrolling() {
        $('nav').addClass('black');
        $("#logo-img").attr("src", this.state.logoScrolling);
        $("#burger-button").attr("src", this.state.burgerScrolling);
        $(".logo-text").css('opacity', '1');
        $(".headerTitle").css('opacity', 0);
        this.scrolling=true;
    }
}

class DarkState {
    constructor() {
        this.logoTop = logo_white;
        this.burgerTop = burger_white;
        this.logoScrolling = logo_white;
        this.burgerScrolling = burger_white;
    }
}

class LightState {
    constructor() {
        this.logoTop = logo_white;
        this.burgerTop = burger_white;
        this.logoScrolling = logo_dark;
        this.burgerScrolling = burger_dark;
    }
}

class AboutState {
    constructor() {
        this.logoTop = logo_dark;
        this.burgerTop = burger_dark;
        this.logoScrolling = logo_dark;
        this.burgerScrolling = burger_dark;
    }
}


var styleManager = new StyleManager();

$(document).ready(function () {
    $("#burger-button").on("click", function () {
        styleManager.toggleMenu();
    });
    styleManager.resizeMenu();
    styleManager.setStyle();
});



$(window).resize(function () {
    styleManager.resizeMenu();
});

$(window).on("scroll", function () {
    styleManager.setStyle();
});

$(function () {
    var $win = $(window);
    var $box = $(".navbar");

    $win.on("click.Bst", function (event) {
        if (
            $box.has(event.target).length == 0
            &&
            !$box.is(event.target)
        ) {
            if ((window.matchMedia('(max-width: 786px)').matches)) {
                styleManager.hideMenu();
            }
        }
    });

});


