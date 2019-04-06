(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sb-navbar .navbar-brand img {\n    height: 3.5em;\n    margin-right: 1em;\n}\n\n.nav-item {\n    margin: 0.2em 1em;\n}\n\n.navbar-light .navbar-toggler {\n    color: rgba(0, 0, 0, .5);\n    border-color: rgba(0, 0, 0, 0);\n}\n\n.sb-navbar .navbar-toggler {\n    color: #212529;\n    border: 0;\n    padding: 1rem;\n}\n\n.homeLogo{\n    height: 25em;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nhtml, button, input, select, textarea {\n\tcolor: #222;\n}\n\nbody {\n\tfont-size: 1.2em;\n\tline-height: 1.4;\n}\n\n/*\n * Remove text-shadow in selection highlight: h5bp.com/i\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n background: #f2c2c9;\n color: #a4003a;\n text-shadow: none;\n}\n\n::selection {\n\tbackground: #16a085;\n\tcolor: #a4003a;\n\ttext-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n\tdisplay: block;\n\theight: 1px;\n\tborder: 0;\n\tmargin: 3em 0;\n\tpadding: 0;\n\tbackground-image: -o-linear-gradient(left, #fff, #ccc, #fff);\n\twidth: 50%;\n\tleft: 25%;\n\tposition: relative;\n\tborder: none;\n}\n\nimg {\n\tvertical-align: middle;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n\tresize: vertical;\n}\n\n/* ==========================================================================\n   General styles\n   ========================================================================== */\n\nhtml, body {\n\theight: 100%;\n}\n\nbody {\n\tfont-family: \"Lato\";\n\tfont-weight: 300;\n\tfont-size: 18px;\n\tcolor: #555;\n\t-webkit-font-smoothing: antialiased;\n\t-webkit-overflow-scrolling: touch;\n}\n\n.col-md-4 {\n\tpadding-bottom: 20px;\n}\n\n.row {\n\tmargin-right: 0px;\n\tmargin-left: -15px;\n}\n\n.modal-header {\n\tbackground: #ffc107;\n}\n\n.modal-header .close {\n\tcolor: #fff;\n}\n\n.modal-header h4 {\n\tcolor: white;\n\tfont-weight: 700;\n\tletter-spacing: 1px;\n}\n\n.modal-footer {\n\tbackground: #2b2b2b;\n}\n\n.navbar-default {\n\tborder-color: transparent;\n\tbackground-color: #dadada;\n}\n\n.navbar-inverse {\n\tbackground-color: #fff;\n\t/* border-color: #fff; */\n\tborder: none;\n}\n\n.navbar-inverse .navbar-nav > li > a {\n\tcolor: #000;\n}\n\n.navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\n    color: #555;\n    background-color: transparent;\n}\n\n.navbar-inverse .navbar-brand {\n\tfont-weight: 500;\n\tfont-size: 20px;\n\tcolor: #707070;\n}\n\n.navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-brand:focus {\n    color: #000;\n    background-color: transparent;\n}\n\n.navbar-toggle {\n\tborder-color: transparent;\n\tborder: 0px solid transparent;\n}\n\n.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n\tbackground-color: #16a085;\n\tcolor: white;\n}\n\n.navbar-inverse .navbar-toggle .icon-bar {\n    background-color: #707070;\n}\n\n.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {\n    color: #fff;\n    background-color: #ffc107;\n}\n\na img {\n\tbackground: white;\n}\n\n.odd a img {\n\tbackground: #f5f5f5;\n}\n\n/* Titles */\n\nh1, h2, h3, h4, h5, h6 {\n\tfont-family: \"Raleway\";\n\tfont-weight: 200;\n\tcolor: #333;\n}\n\nh2 {\n\tfont-size: 36px;\n\tcolor: #777;\n}\n\nh3 {\n\tfont-size: 26px;\n}\n\n/* Paragraph & Typographic */\n\np {\n\tline-height: 28px;\n\tmargin-bottom: 20px;\n}\n\np.large {\n\tfont-size: 20px;\n\tmargin-bottom: 50px;\n}\n\n.centered {\n\ttext-align: center;\n}\n\n.justified {\n\ttext-align: justify;\n}\n\nstrong {\n\tfont-weight: 700;\n}\n\nem {\n\tfont-weight: 300;\n}\n\npre {\n\tbackground: #ebebeb;\n\tborder: none;\n\tfont-family: \"Monaco\";\n\tfont-size: 16px;\n\tcolor: #666;\n\tpadding: 20px;\n\tline-height: 28px;\n}\n\nsmall {\n\tfont-size: 12px;\n}\n\nblockquote, blockquote p {\n\tline-height: 28px;\n\tcolor: #999;\n\tfont-weight: 300;\n\tfont-style: italic;\n}\n\nblockquote {\n\tposition: relative;\n\tmargin: 0 0 40px -30px;\n\tpadding-left: 30px;\n\tborder-left: 5px solid #3498db;\n}\n\nblockquote cite {\n\tposition: absolute;\n\tbottom: -25px;\n\tright: 0;\n\tfont-size: 12px;\n\tfont-style: italic;\n\tcolor: #333;\n\tfont-weight: 300;\n}\n\nblockquote cite:before {\n\tcontent: \"-- \"\n}\n\n/* Images */\n\n.overflow-image {\n\tmargin-top: -65px;\n}\n\n/* Links */\n\na {\n\tcolor: #ffc107;\n\tword-wrap: break-word;\n\ttransition: color 0.1s ease-in, background 0.1s ease-in;\n}\n\na:hover, a:focus {\n\tcolor: #c0392b;\n\ttext-decoration: none;\n\toutline: 0;\n}\n\na:before, a:after {\n\ttransition: color 0.1s ease-in, background 0.1s ease-in;\n}\n\n.sections:nth-child(odd) {\n\tbackground: #f5f5f5;\n}\n\n/* ==========================================================================\n   Wrap Sections\n   ========================================================================== */\n\n#headerwrap {\n\tmargin-top: -50px;\n\tpadding-top: 120px;\n\ttext-align: center;\n\tbackground-attachment: relative;\n\tbackground-position: center center;\n\tmin-height: 650px;\n\twidth: 100%;\n\tbackground-size: 100%;\n\tbackground-size: cover;\n\tpadding-bottom: 100px;\n}\n\n#headerwrap h1 {\n\tcolor: #ffffff;\n\tfont-size: 50px;\n\tfont-weight: 400;\n\ttext-align: center;\n\tletter-spacing: 3px;\n}\n\n#headerwrap p {\n\tcolor: #fff;\n\tfont-size: 22px;\n\tfont-weight: 300;\n\ttext-align: center;\n\tletter-spacing: 1px;\n}\n\n#headerwrap .icon {\n\tcolor: #ffffff;\n\tmargin-top: 90px;\n\tpadding-bottom: 30px;\n\tletter-spacing: 8px;\n\tfont-size: 100px;\n\tfont-weight: bold;\n\ttext-shadow: 0px 20px 7px #3da8ae;\n}\n\n#headerwrap .btn {\n\tfont-weight: 500;\n\tfont-size: 20px;\n\tmargin: 50px 0;\n\tbackground-color: #fff;\n\tcolor: #707070;\n\tborder: 0;\n}\n\n#headerwrap .btn:hover, #headerwrap .btn:focus {\n\tbackground-color: #ffc107;\n\tcolor: #fff;\n\toutline: 0px;\n}\n\n#home {\n    background: #fff;\n    padding: 60px 0;\n}\n\n#about {\n\tpadding: 60px 0;\n}\n\n#about img {\n\tmargin-top: 65px;\n}\n\n#services {\n\tpadding: 60px 0;\n\ttext-align: center;\n}\n\n#involved {\n\tpadding: 60px 0;\n}\n\n#inrupt {\n\tpadding: 60px 0;\n}\n\n#happening {\n\tpadding: 60px 0;\n}\n\n#alums {\n\tpadding: 60px 0;\n}\n\n#sponsors {\n\tpadding: 60px 0;\n}\n\n.highlight {\n\tfont-weight: bold;\n}\n\n#services .fa {\n\tcolor: #ffbf00;\n}\n\n#services p {\n\ttext-align: center;\n}\n\n#team {\n\tpadding: 60px 0;\n}\n\n#team H4 {\n\tpadding-top: 10px;\n}\n\n#team p.large {\n\tmargin-top: 60px;\n\tmargin-bottom: 40px;\n}\n\n#team .fa {\n\twidth: 30px;\n\theight: 30px;\n\tmargin: 0 3px;\n\tborder-radius: 100%;\n\tfont-size: 15px;\n\tline-height: 30px;\n\toutline: 0;\n\tbackground-color: #e3e3e3;\n\ttransition: all .3s;\n}\n\n#team .fa:hover {\n\tbackground-color: #ffc107;\n\tcolor: #fff;\n}\n\n#showcase {\n\tpadding: 60px 0;\n}\n\n#showcase .btn-default {\n\tborder: 0;\n}\n\n#sponsors {\n\tbackground: #fff;\n}\n\n#contact {\n\tbackground: #fff;\n\tpadding: 60px 0;\n\ttext-align: center;\n}\n\n#contact .form {\n\tpadding: 30px 0;\n}\n\n#contact .fa {\n\tmargin-bottom: 10px;\n}\n\n#contact .btn {\n\tfont-weight: 500;\n\tfont-size: 18px;\n\tmargin-top: 50px;\n\tbackground-color: #ffbf00;\n\tcolor: #fff;\n\tborder: 0;\n}\n\n#contact .btn:hover, #contact .btn:focus {\n\tbackground-color: #e9af03;\n\toutline: 0px;\n}\n\n#greywrap {\n\tbackground: #f5f5f5;\n\tmargin-top: 0px;\n\tpadding: 50px 0;\n\tborder-bottom: 1px solid #eee;\n\ttext-align: center;\n}\n\n#greywrap .btn {\n\tfont-family: \"Raleway\";\n\tfont-weight: 300;\n\tfont-size: 20px;\n\tmargin: 0 25px;\n\tbackground-color: #fff;\n\tborder-color: #e2e2e2;\n\tcolor: #888;\n\tborder-bottom: 0;\n\tletter-spacing: 1px;\n}\n\n#greywrap .btn:hover, #greywrap .btn:focus {\n\tmargin: 0 25px;\n\tbackground-color: #fff;\n\tborder-color: #a5cdd5;\n\tborder-bottom: 0;\n\toutline: 0px;\n\tcolor: #a5cdd5;\n}\n\n#greywrap h2 {\n\tfont-size: 30px;\n}\n\n#greywrap .callout {\n\tmargin-bottom: 20px;\n}\n\n#greywrap p {\n\tfont-size: 30px;\n}\n\n#greywrap .fa {\n\tfont-size: 18px;\n\tmargin-right: 4px;\n}\n\n#footerwrap {\n\tbackground: #2b2b2b;\n\tpadding: 25px 0 15px 0;\n\tborder-bottom: 1px solid #ddd;\n\ttext-align: center;\n}\n\n#footerwrap span.copyright {\n\tline-height: 40px;\n\tcolor: #fff;\n\tfont-weight: 400;\n}\n\n#footerwrap span.copyright a {\n\tcolor: #888;\n\tborder-bottom: 1px dotted;\n}\n\n#footerwrap span.copyright a:hover {\n\tcolor: #ffbf00;\n\ttext-decoration: none;\n}\n\n#footerwrap h4 {\n\tcolor: white;\n}\n\n.icon-color {\n\tcolor: #ffc107;\n}\n\nul.social-buttons {\n\tmargin: 0;\n}\n\nul.social-buttons li a {\n\tfont-size: 24px;\n\toutline: 0;\n\tcolor: #999;\n}\n\nul.social-buttons li a:hover, ul.social-buttons li a:focus, ul.social-buttons li a:active {\n\tcolor: #ffbf00;\n}\n\n/* ==========================================================================\n   Box Sections\n   ========================================================================== */\n\n.white h1 {\n\tcolor: #999;\n}\n\n.white p {\n\tpadding-top: 25px;\n}\n\n/* ==========================================================================\n   Image Mask\n   ========================================================================== */\n\n.grid figure {\n\tmargin: 0;\n\tposition: relative;\n\tborder: 1px solid #eee;\n}\n\n.grid figure img {\n\twidth: 100%;\n\tdisplay: block;\n\tposition: relative;\n}\n\n.grid figcaption {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tpadding: 20px;\n\tcolor: #fff;\n\tbackground-color: #ffc107;\n}\n\n.grid figcaption h5 {\n\tmargin: 0;\n\tpadding-top: 0px;\n\tpadding-left: 20px;\n\tpadding-bottom: 5px;\n\tcolor: #fff;\n\tfont-weight: 700;\n\ttext-align: left;\n\tletter-spacing: 1px;\n}\n\n.grid figcaption a {\n\ttext-align: left;\n\tpadding: 5px 10px;\n\tmargin-left: 20px;\n\tdisplay: inline-block;\n\tbackground: #2f2f2f;\n\tcolor: #fff;\n\tfont-size: 13px;\n}\n\n/* Caption Style */\n\n.mask figure {\n\toverflow: hidden;\n}\n\n.mask figure img {\n\ttransition: -webkit-transform 0.4s;\n\ttransition: transform 0.4s;\n\ttransition: transform 0.4s, -webkit-transform 0.4s;\n}\n\n.no-touch .mask figure:hover img, .mask figure.cs-hover img {\n\t-webkit-transform: translateY(-30px);\n\ttransform: translateY(-30px);\n}\n\n.mask figcaption {\n\theight: 50px;\n\twidth: 100%;\n\ttop: auto;\n\tbottom: 0;\n\topacity: 0;\n\t-webkit-transform: translateY(100%);\n\ttransform: translateY(100%);\n\ttransition: opacity 0.1s 0.3s, -webkit-transform 0.4s;\n\ttransition: transform 0.4s, opacity 0.1s 0.3s;\n\ttransition: transform 0.4s, opacity 0.1s 0.3s, -webkit-transform 0.4s;\n}\n\n.no-touch .mask figure:hover figcaption, .mask figure.cs-hover figcaption {\n\topacity: 1;\n\t-webkit-transform: translateY(0px);\n\ttransform: translateY(0px);\n\ttransition: opacity 0.1s, -webkit-transform 0.4s;\n\ttransition: transform 0.4s, opacity 0.1s;\n\ttransition: transform 0.4s, opacity 0.1s, -webkit-transform 0.4s;\n}\n\n.mask figcaption a {\n\tposition: absolute;\n\ttop: 10px;\n\tbottom: 10px;\n\tright: 30px;\n}\n\n/* OTHER */\n\n.small-logo {\n\twidth: 32px;\n\tbackground: inherit;\n\tpadding-right: 5px;\n}\n\n.large-logo {\n\twidth: 250px;\n\tbackground: inherit;\n}\n\n.block-lowpoly {\n    background: url(/img/lowpolygons.png) repeat;\n\theight: 100vh;\n\tmargin-top: -60px;\n\tpadding-top: 100px;\n}\n\n.block-texture {\n    position: relative;\n    border-bottom: 0 solid rgba(230, 236, 255, 0.03);\n}\n\n.intro-primary-gradient {\n    background-image: linear-gradient(125deg, #4840e5, #38bcf9);\n    background-color: #407eef;\n}\n\n.top20 {\n\tmargin-top: 20px;\n}\n\n.bottom20 {\n\tmargin-bottom: 20px;\n}\n\n.offers {\n\theight: 7em;\n}\n\n.documentation {\n\tmargin-bottom: 2em;\n}\n\n.navbar {\n\tbox-shadow: 0px 0px 16px rgba(54, 54, 54, 0.185);\n}\n\n/* ==========================================================================\n   MEDIA QUERIES\n   ========================================================================== */\n\n@media screen and (max-width:1050px), screen and (max-device-width:1050px) {\nbody .header {\n\tbackground-attachment: scroll;\n}\n}\n\n/*ipad portrait*/\n\n@media only screen and (min-device-width:768px) and (max-device-width : 1024px) and (orientation : portrait) {\n.header {\n\tbackground-attachment: scroll;\n}\n}\n\n@media screen and (max-width:769px) {\n#headerwrap h1 {\n\tfont-size: 80px;\n}\n#headerwrap p {\n\tfont-size: 30px;\n\tline-height: 38px;\n}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7QUFFQTs7OztFQUlFOztBQUVGO0NBQ0MsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGlCQUFpQjtBQUNsQjs7QUFDQTs7RUFFRTs7QUFFRjtDQUNDLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsU0FBUztDQUNULGFBQWE7Q0FDYixVQUFVO0NBSVYsNERBQTREO0NBQzVELFVBQVU7Q0FDVixTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFDQTs7RUFFRTs7QUFFRjtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTs7K0VBRStFOztBQUUvRTtDQUNDLFlBQVk7QUFDYjs7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLFdBQVc7Q0FDWCxtQ0FBbUM7Q0FDbkMsaUNBQWlDO0FBQ2xDOztBQUNBO0NBQ0Msb0JBQW9CO0FBQ3JCOztBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLFdBQVc7QUFDWjs7QUFDQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHlCQUF5QjtBQUMxQjs7QUFDQTtDQUNDLHNCQUFzQjtDQUN0Qix3QkFBd0I7Q0FDeEIsWUFBWTtBQUNiOztBQUNBO0NBQ0MsV0FBVztBQUNaOztBQUNBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtBQUNqQzs7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsY0FBYztBQUNmOztBQUNBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtBQUNqQzs7QUFDQTtDQUNDLHlCQUF5QjtDQUN6Qiw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFDQSxXQUFXOztBQUNYO0NBQ0Msc0JBQXNCO0NBQ3RCLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsV0FBVztBQUNaOztBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7QUFDQSw0QkFBNEI7O0FBQzVCO0NBQ0MsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsV0FBVztDQUNYLGFBQWE7Q0FDYixpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsOEJBQThCO0FBQy9COztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixRQUFRO0NBQ1IsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsZ0JBQWdCO0FBQ2pCOztBQUNBO0NBQ0M7QUFDRDs7QUFDQSxXQUFXOztBQUNYO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUNBLFVBQVU7O0FBQ1Y7Q0FDQyxjQUFjO0NBQ2QscUJBQXFCO0NBS3JCLHVEQUF1RDtBQUN4RDs7QUFDQTtDQUNDLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsVUFBVTtBQUNYOztBQUNBO0NBS0MsdURBQXVEO0FBQ3hEOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBOzsrRUFFK0U7O0FBRS9FO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsK0JBQStCO0NBQy9CLGtDQUFrQztDQUNsQyxpQkFBaUI7Q0FDakIsV0FBVztDQUlYLHFCQUFxQjtDQUlyQixzQkFBc0I7Q0FDdEIscUJBQXFCO0FBQ3RCOztBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixpQ0FBaUM7QUFDbEM7O0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIsY0FBYztDQUNkLFNBQVM7QUFDVjs7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUNBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUNBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixVQUFVO0NBQ1YseUJBQXlCO0NBR3pCLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsU0FBUztBQUNWOztBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLFdBQVc7Q0FDWCxTQUFTO0FBQ1Y7O0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiOztBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixlQUFlO0NBQ2YsNkJBQTZCO0NBQzdCLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLHNCQUFzQjtDQUN0QixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLDZCQUE2QjtDQUM3QixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCx5QkFBeUI7QUFDMUI7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QscUJBQXFCO0FBQ3RCOztBQUNBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsU0FBUztBQUNWOztBQUNBO0NBQ0MsZUFBZTtDQUNmLFVBQVU7Q0FDVixXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0FBQ0E7OytFQUUrRTs7QUFFL0U7Q0FDQyxXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7OytFQUUrRTs7QUFFL0U7Q0FDQyxTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLHNCQUFzQjtBQUN2Qjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2Qsa0JBQWtCO0FBQ25COztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixPQUFPO0NBQ1AsYUFBYTtDQUNiLFdBQVc7Q0FDWCx5QkFBeUI7QUFDMUI7O0FBQ0E7Q0FDQyxTQUFTO0NBQ1QsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsZUFBZTtBQUNoQjs7QUFDQSxrQkFBa0I7O0FBQ2xCO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUNBO0NBR0Msa0NBQTBCO0NBQTFCLDBCQUEwQjtDQUExQixrREFBMEI7QUFDM0I7O0FBQ0E7Q0FDQyxvQ0FBb0M7Q0FHcEMsNEJBQTRCO0FBQzdCOztBQUNBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxTQUFTO0NBQ1QsU0FBUztDQUNULFVBQVU7Q0FDVixtQ0FBbUM7Q0FHbkMsMkJBQTJCO0NBRzNCLHFEQUE2QztDQUE3Qyw2Q0FBNkM7Q0FBN0MscUVBQTZDO0FBQzlDOztBQUNBO0NBQ0MsVUFBVTtDQUNWLGtDQUFrQztDQUdsQywwQkFBMEI7Q0FHMUIsZ0RBQXdDO0NBQXhDLHdDQUF3QztDQUF4QyxnRUFBd0M7QUFDekM7O0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBR0EsVUFBVTs7QUFFVjtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtDQUNaLG1CQUFtQjtBQUNwQjs7QUFFQTtJQUNJLDRDQUE0QztDQUMvQyxhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFFSSwyREFBMkQ7SUFDM0QseUJBQXlCO0FBQzdCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZ0RBQWdEO0FBQ2pEOztBQUVBOzsrRUFFK0U7O0FBRy9FO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTs7QUFFQSxnQkFBZ0I7O0FBQ2hCO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYi1uYXZiYXIgLm5hdmJhci1icmFuZCBpbWcge1xuICAgIGhlaWdodDogMy41ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi5uYXYtaXRlbSB7XG4gICAgbWFyZ2luOiAwLjJlbSAxZW07XG59XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4uc2ItbmF2YmFyIC5uYXZiYXItdG9nZ2xlciB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5ob21lTG9nb3tcbiAgICBoZWlnaHQ6IDI1ZW07XG59XG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5odG1sLCBidXR0b24sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcblx0Y29sb3I6ICMyMjI7XG59XG5ib2R5IHtcblx0Zm9udC1zaXplOiAxLjJlbTtcblx0bGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLypcbiAqIFJlbW92ZSB0ZXh0LXNoYWRvdyBpbiBzZWxlY3Rpb24gaGlnaGxpZ2h0OiBoNWJwLmNvbS9pXG4gKiBUaGVzZSBzZWxlY3Rpb24gcnVsZSBzZXRzIGhhdmUgdG8gYmUgc2VwYXJhdGUuXG4gKiBDdXN0b21pemUgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggeW91ciBkZXNpZ24uXG4gKi9cblxuOjotbW96LXNlbGVjdGlvbiB7XG4gYmFja2dyb3VuZDogI2YyYzJjOTtcbiBjb2xvcjogI2E0MDAzYTtcbiB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cbjo6c2VsZWN0aW9uIHtcblx0YmFja2dyb3VuZDogIzE2YTA4NTtcblx0Y29sb3I6ICNhNDAwM2E7XG5cdHRleHQtc2hhZG93OiBub25lO1xufVxuLypcbiAqIEEgYmV0dGVyIGxvb2tpbmcgZGVmYXVsdCBob3Jpem9udGFsIHJ1bGVcbiAqL1xuXG5ociB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRoZWlnaHQ6IDFweDtcblx0Ym9yZGVyOiAwO1xuXHRtYXJnaW46IDNlbSAwO1xuXHRwYWRkaW5nOiAwO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmLCAjY2NjLCAjZmZmKTtcblx0YmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZiwgI2NjYywgI2ZmZik7XG5cdGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZiwgI2NjYywgI2ZmZik7XG5cdGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmLCAjY2NjLCAjZmZmKTtcblx0d2lkdGg6IDUwJTtcblx0bGVmdDogMjUlO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJvcmRlcjogbm9uZTtcbn1cblxuaW1nIHtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi8qXG4gKiBBbGxvdyBvbmx5IHZlcnRpY2FsIHJlc2l6aW5nIG9mIHRleHRhcmVhcy5cbiAqL1xuXG50ZXh0YXJlYSB7XG5cdHJlc2l6ZTogdmVydGljYWw7XG59XG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgR2VuZXJhbCBzdHlsZXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbmh0bWwsIGJvZHkge1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5ib2R5IHtcblx0Zm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGNvbG9yOiAjNTU1O1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuLmNvbC1tZC00IHtcblx0cGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ucm93IHtcblx0bWFyZ2luLXJpZ2h0OiAwcHg7XG5cdG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cbi5tb2RhbC1oZWFkZXIge1xuXHRiYWNrZ3JvdW5kOiAjZmZjMTA3O1xufVxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuXHRjb2xvcjogI2ZmZjtcbn1cbi5tb2RhbC1oZWFkZXIgaDQge1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4ubW9kYWwtZm9vdGVyIHtcblx0YmFja2dyb3VuZDogIzJiMmIyYjtcbn1cbi5uYXZiYXItZGVmYXVsdCB7XG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XG59XG4ubmF2YmFyLWludmVyc2Uge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHQvKiBib3JkZXItY29sb3I6ICNmZmY7ICovXG5cdGJvcmRlcjogbm9uZTtcbn1cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IGxpID4gYSB7XG5cdGNvbG9yOiAjMDAwO1xufVxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgPiBhOmhvdmVyLCAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSA+IGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItYnJhbmQge1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRmb250LXNpemU6IDIwcHg7XG5cdGNvbG9yOiAjNzA3MDcwO1xufVxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItYnJhbmQ6aG92ZXIsIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLWJyYW5kOmZvY3VzIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5uYXZiYXItdG9nZ2xlIHtcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0Ym9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaSA+IGE6aG92ZXIsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYTpmb2N1cyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxNmEwODU7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XG59XG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYSwgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6aG92ZXIsIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xufVxuYSBpbWcge1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5vZGQgYSBpbWcge1xuXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuLyogVGl0bGVzICovXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcblx0Zm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuXHRmb250LXdlaWdodDogMjAwO1xuXHRjb2xvcjogIzMzMztcbn1cbmgyIHtcblx0Zm9udC1zaXplOiAzNnB4O1xuXHRjb2xvcjogIzc3Nztcbn1cbmgzIHtcblx0Zm9udC1zaXplOiAyNnB4O1xufVxuLyogUGFyYWdyYXBoICYgVHlwb2dyYXBoaWMgKi9cbnAge1xuXHRsaW5lLWhlaWdodDogMjhweDtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbnAubGFyZ2Uge1xuXHRmb250LXNpemU6IDIwcHg7XG5cdG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uY2VudGVyZWQge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uanVzdGlmaWVkIHtcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbnN0cm9uZyB7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5lbSB7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5wcmUge1xuXHRiYWNrZ3JvdW5kOiAjZWJlYmViO1xuXHRib3JkZXI6IG5vbmU7XG5cdGZvbnQtZmFtaWx5OiBcIk1vbmFjb1wiO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGNvbG9yOiAjNjY2O1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRsaW5lLWhlaWdodDogMjhweDtcbn1cbnNtYWxsIHtcblx0Zm9udC1zaXplOiAxMnB4O1xufVxuYmxvY2txdW90ZSwgYmxvY2txdW90ZSBwIHtcblx0bGluZS1oZWlnaHQ6IDI4cHg7XG5cdGNvbG9yOiAjOTk5O1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG59XG5ibG9ja3F1b3RlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRtYXJnaW46IDAgMCA0MHB4IC0zMHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDMwcHg7XG5cdGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzM0OThkYjtcbn1cbmJsb2NrcXVvdGUgY2l0ZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAtMjVweDtcblx0cmlnaHQ6IDA7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRjb2xvcjogIzMzMztcblx0Zm9udC13ZWlnaHQ6IDMwMDtcbn1cbmJsb2NrcXVvdGUgY2l0ZTpiZWZvcmUge1xuXHRjb250ZW50OiBcIi0tIFwiXG59XG4vKiBJbWFnZXMgKi9cbi5vdmVyZmxvdy1pbWFnZSB7XG5cdG1hcmdpbi10b3A6IC02NXB4O1xufVxuLyogTGlua3MgKi9cbmEge1xuXHRjb2xvcjogI2ZmYzEwNztcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMXMgZWFzZS1pbiwgYmFja2dyb3VuZCAwLjFzIGVhc2UtaW47XG5cdC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLWluLCBiYWNrZ3JvdW5kIDAuMXMgZWFzZS1pbjtcblx0LW1zLXRyYW5zaXRpb246IGNvbG9yIDAuMXMgZWFzZS1pbiwgYmFja2dyb3VuZCAwLjFzIGVhc2UtaW47XG5cdC1vLXRyYW5zaXRpb246IGNvbG9yIDAuMXMgZWFzZS1pbiwgYmFja2dyb3VuZCAwLjFzIGVhc2UtaW47XG5cdHRyYW5zaXRpb246IGNvbG9yIDAuMXMgZWFzZS1pbiwgYmFja2dyb3VuZCAwLjFzIGVhc2UtaW47XG59XG5hOmhvdmVyLCBhOmZvY3VzIHtcblx0Y29sb3I6ICNjMDM5MmI7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0b3V0bGluZTogMDtcbn1cbmE6YmVmb3JlLCBhOmFmdGVyIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjFzIGVhc2UtaW4sIGJhY2tncm91bmQgMC4xcyBlYXNlLWluO1xuXHQtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuMXMgZWFzZS1pbiwgYmFja2dyb3VuZCAwLjFzIGVhc2UtaW47XG5cdC1tcy10cmFuc2l0aW9uOiBjb2xvciAwLjFzIGVhc2UtaW4sIGJhY2tncm91bmQgMC4xcyBlYXNlLWluO1xuXHQtby10cmFuc2l0aW9uOiBjb2xvciAwLjFzIGVhc2UtaW4sIGJhY2tncm91bmQgMC4xcyBlYXNlLWluO1xuXHR0cmFuc2l0aW9uOiBjb2xvciAwLjFzIGVhc2UtaW4sIGJhY2tncm91bmQgMC4xcyBlYXNlLWluO1xufVxuXG4uc2VjdGlvbnM6bnRoLWNoaWxkKG9kZCkge1xuXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgV3JhcCBTZWN0aW9uc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuI2hlYWRlcndyYXAge1xuXHRtYXJnaW4tdG9wOiAtNTBweDtcblx0cGFkZGluZy10b3A6IDEyMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogcmVsYXRpdmU7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG5cdG1pbi1oZWlnaHQ6IDY1MHB4O1xuXHR3aWR0aDogMTAwJTtcblx0LXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG5cdC1tb3otYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuXHQtby1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJTtcblx0LXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHQtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cbiNoZWFkZXJ3cmFwIGgxIHtcblx0Y29sb3I6ICNmZmZmZmY7XG5cdGZvbnQtc2l6ZTogNTBweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuI2hlYWRlcndyYXAgcCB7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXNpemU6IDIycHg7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbiNoZWFkZXJ3cmFwIC5pY29uIHtcblx0Y29sb3I6ICNmZmZmZmY7XG5cdG1hcmdpbi10b3A6IDkwcHg7XG5cdHBhZGRpbmctYm90dG9tOiAzMHB4O1xuXHRsZXR0ZXItc3BhY2luZzogOHB4O1xuXHRmb250LXNpemU6IDEwMHB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0dGV4dC1zaGFkb3c6IDBweCAyMHB4IDdweCAjM2RhOGFlO1xufVxuI2hlYWRlcndyYXAgLmJ0biB7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0bWFyZ2luOiA1MHB4IDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGNvbG9yOiAjNzA3MDcwO1xuXHRib3JkZXI6IDA7XG59XG4jaGVhZGVyd3JhcCAuYnRuOmhvdmVyLCAjaGVhZGVyd3JhcCAuYnRuOmZvY3VzIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcblx0Y29sb3I6ICNmZmY7XG5cdG91dGxpbmU6IDBweDtcbn1cbiNob21lIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDYwcHggMDtcbn1cbiNhYm91dCB7XG5cdHBhZGRpbmc6IDYwcHggMDtcbn1cbiNhYm91dCBpbWcge1xuXHRtYXJnaW4tdG9wOiA2NXB4O1xufVxuI3NlcnZpY2VzIHtcblx0cGFkZGluZzogNjBweCAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNpbnZvbHZlZCB7XG5cdHBhZGRpbmc6IDYwcHggMDtcbn1cblxuI2lucnVwdCB7XG5cdHBhZGRpbmc6IDYwcHggMDtcbn1cblxuI2hhcHBlbmluZyB7XG5cdHBhZGRpbmc6IDYwcHggMDtcbn1cblxuI2FsdW1zIHtcblx0cGFkZGluZzogNjBweCAwO1xufVxuXG4jc3BvbnNvcnMge1xuXHRwYWRkaW5nOiA2MHB4IDA7XG59XG5cbi5oaWdobGlnaHQge1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3NlcnZpY2VzIC5mYSB7XG5cdGNvbG9yOiAjZmZiZjAwO1xufVxuI3NlcnZpY2VzIHAge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jdGVhbSB7XG5cdHBhZGRpbmc6IDYwcHggMDtcbn1cbiN0ZWFtIEg0IHtcblx0cGFkZGluZy10b3A6IDEwcHg7XG59XG4jdGVhbSBwLmxhcmdlIHtcblx0bWFyZ2luLXRvcDogNjBweDtcblx0bWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbiN0ZWFtIC5mYSB7XG5cdHdpZHRoOiAzMHB4O1xuXHRoZWlnaHQ6IDMwcHg7XG5cdG1hcmdpbjogMCAzcHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdG91dGxpbmU6IDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgLjNzO1xuXHR0cmFuc2l0aW9uOiBhbGwgLjNzO1xufVxuI3RlYW0gLmZhOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcblx0Y29sb3I6ICNmZmY7XG59XG4jc2hvd2Nhc2Uge1xuXHRwYWRkaW5nOiA2MHB4IDA7XG59XG4jc2hvd2Nhc2UgLmJ0bi1kZWZhdWx0IHtcblx0Ym9yZGVyOiAwO1xufVxuI3Nwb25zb3JzIHtcblx0YmFja2dyb3VuZDogI2ZmZjtcbn1cbiNjb250YWN0IHtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0cGFkZGluZzogNjBweCAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jY29udGFjdCAuZm9ybSB7XG5cdHBhZGRpbmc6IDMwcHggMDtcbn1cbiNjb250YWN0IC5mYSB7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4jY29udGFjdCAuYnRuIHtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRtYXJnaW4tdG9wOiA1MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZjAwO1xuXHRjb2xvcjogI2ZmZjtcblx0Ym9yZGVyOiAwO1xufVxuI2NvbnRhY3QgLmJ0bjpob3ZlciwgI2NvbnRhY3QgLmJ0bjpmb2N1cyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlOWFmMDM7XG5cdG91dGxpbmU6IDBweDtcbn1cbiNncmV5d3JhcCB7XG5cdGJhY2tncm91bmQ6ICNmNWY1ZjU7XG5cdG1hcmdpbi10b3A6IDBweDtcblx0cGFkZGluZzogNTBweCAwO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2dyZXl3cmFwIC5idG4ge1xuXHRmb250LWZhbWlseTogXCJSYWxld2F5XCI7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0bWFyZ2luOiAwIDI1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlci1jb2xvcjogI2UyZTJlMjtcblx0Y29sb3I6ICM4ODg7XG5cdGJvcmRlci1ib3R0b206IDA7XG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4jZ3JleXdyYXAgLmJ0bjpob3ZlciwgI2dyZXl3cmFwIC5idG46Zm9jdXMge1xuXHRtYXJnaW46IDAgMjVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0Ym9yZGVyLWNvbG9yOiAjYTVjZGQ1O1xuXHRib3JkZXItYm90dG9tOiAwO1xuXHRvdXRsaW5lOiAwcHg7XG5cdGNvbG9yOiAjYTVjZGQ1O1xufVxuI2dyZXl3cmFwIGgyIHtcblx0Zm9udC1zaXplOiAzMHB4O1xufVxuI2dyZXl3cmFwIC5jYWxsb3V0IHtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiNncmV5d3JhcCBwIHtcblx0Zm9udC1zaXplOiAzMHB4O1xufVxuI2dyZXl3cmFwIC5mYSB7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bWFyZ2luLXJpZ2h0OiA0cHg7XG59XG4jZm9vdGVyd3JhcCB7XG5cdGJhY2tncm91bmQ6ICMyYjJiMmI7XG5cdHBhZGRpbmc6IDI1cHggMCAxNXB4IDA7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jZm9vdGVyd3JhcCBzcGFuLmNvcHlyaWdodCB7XG5cdGxpbmUtaGVpZ2h0OiA0MHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn1cbiNmb290ZXJ3cmFwIHNwYW4uY29weXJpZ2h0IGEge1xuXHRjb2xvcjogIzg4ODtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcbn1cbiNmb290ZXJ3cmFwIHNwYW4uY29weXJpZ2h0IGE6aG92ZXIge1xuXHRjb2xvcjogI2ZmYmYwMDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI2Zvb3RlcndyYXAgaDQge1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbi5pY29uLWNvbG9yIHtcblx0Y29sb3I6ICNmZmMxMDc7XG59XG5cbnVsLnNvY2lhbC1idXR0b25zIHtcblx0bWFyZ2luOiAwO1xufVxudWwuc29jaWFsLWJ1dHRvbnMgbGkgYSB7XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0b3V0bGluZTogMDtcblx0Y29sb3I6ICM5OTk7XG59XG51bC5zb2NpYWwtYnV0dG9ucyBsaSBhOmhvdmVyLCB1bC5zb2NpYWwtYnV0dG9ucyBsaSBhOmZvY3VzLCB1bC5zb2NpYWwtYnV0dG9ucyBsaSBhOmFjdGl2ZSB7XG5cdGNvbG9yOiAjZmZiZjAwO1xufVxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEJveCBTZWN0aW9uc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLndoaXRlIGgxIHtcblx0Y29sb3I6ICM5OTk7XG59XG4ud2hpdGUgcCB7XG5cdHBhZGRpbmctdG9wOiAyNXB4O1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgSW1hZ2UgTWFza1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmdyaWQgZmlndXJlIHtcblx0bWFyZ2luOiAwO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59XG4uZ3JpZCBmaWd1cmUgaW1nIHtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ3JpZCBmaWdjYXB0aW9uIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHBhZGRpbmc6IDIwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xufVxuLmdyaWQgZmlnY2FwdGlvbiBoNSB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZy10b3A6IDBweDtcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xuXHRjb2xvcjogI2ZmZjtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5ncmlkIGZpZ2NhcHRpb24gYSB7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdHBhZGRpbmc6IDVweCAxMHB4O1xuXHRtYXJnaW4tbGVmdDogMjBweDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRiYWNrZ3JvdW5kOiAjMmYyZjJmO1xuXHRjb2xvcjogI2ZmZjtcblx0Zm9udC1zaXplOiAxM3B4O1xufVxuLyogQ2FwdGlvbiBTdHlsZSAqL1xuLm1hc2sgZmlndXJlIHtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYXNrIGZpZ3VyZSBpbWcge1xuXHQtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNHM7XG5cdC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC40cztcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XG59XG4ubm8tdG91Y2ggLm1hc2sgZmlndXJlOmhvdmVyIGltZywgLm1hc2sgZmlndXJlLmNzLWhvdmVyIGltZyB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcblx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbn1cbi5tYXNrIGZpZ2NhcHRpb24ge1xuXHRoZWlnaHQ6IDUwcHg7XG5cdHdpZHRoOiAxMDAlO1xuXHR0b3A6IGF1dG87XG5cdGJvdHRvbTogMDtcblx0b3BhY2l0eTogMDtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG5cdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC40cywgb3BhY2l0eSAwLjFzIDAuM3M7XG5cdC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC40cywgb3BhY2l0eSAwLjFzIDAuM3M7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzLCBvcGFjaXR5IDAuMXMgMC4zcztcbn1cbi5uby10b3VjaCAubWFzayBmaWd1cmU6aG92ZXIgZmlnY2FwdGlvbiwgLm1hc2sgZmlndXJlLmNzLWhvdmVyIGZpZ2NhcHRpb24ge1xuXHRvcGFjaXR5OiAxO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuXHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNHMsIG9wYWNpdHkgMC4xcztcblx0LW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjRzLCBvcGFjaXR5IDAuMXM7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzLCBvcGFjaXR5IDAuMXM7XG59XG4ubWFzayBmaWdjYXB0aW9uIGEge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMTBweDtcblx0Ym90dG9tOiAxMHB4O1xuXHRyaWdodDogMzBweDtcbn1cblxuXG4vKiBPVEhFUiAqL1xuXG4uc21hbGwtbG9nbyB7XG5cdHdpZHRoOiAzMnB4O1xuXHRiYWNrZ3JvdW5kOiBpbmhlcml0O1xuXHRwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5sYXJnZS1sb2dvIHtcblx0d2lkdGg6IDI1MHB4O1xuXHRiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4uYmxvY2stbG93cG9seSB7XG4gICAgYmFja2dyb3VuZDogdXJsKC9pbWcvbG93cG9seWdvbnMucG5nKSByZXBlYXQ7XG5cdGhlaWdodDogMTAwdmg7XG5cdG1hcmdpbi10b3A6IC02MHB4O1xuXHRwYWRkaW5nLXRvcDogMTAwcHg7XG59XG4uYmxvY2stdGV4dHVyZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1ib3R0b206IDAgc29saWQgcmdiYSgyMzAsIDIzNiwgMjU1LCAwLjAzKTtcbn1cblxuLmludHJvLXByaW1hcnktZ3JhZGllbnQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC0zNWRlZywgIzQ4NDBlNSwgIzM4YmNmOSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyNWRlZywgIzQ4NDBlNSwgIzM4YmNmOSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwN2VlZjtcbn1cblxuLnRvcDIwIHtcblx0bWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJvdHRvbTIwIHtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm9mZmVycyB7XG5cdGhlaWdodDogN2VtO1xufVxuXG4uZG9jdW1lbnRhdGlvbiB7XG5cdG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuLm5hdmJhciB7XG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTZweCByZ2JhKDU0LCA1NCwgNTQsIDAuMTg1KTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIE1FRElBIFFVRVJJRVNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDUwcHgpLCBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOjEwNTBweCkge1xuYm9keSAuaGVhZGVyIHtcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG59XG59XG5cbi8qaXBhZCBwb3J0cmFpdCovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOjc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuLmhlYWRlciB7XG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xufVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OXB4KSB7XG4jaGVhZGVyd3JhcCBoMSB7XG5cdGZvbnQtc2l6ZTogODBweDtcbn1cbiNoZWFkZXJ3cmFwIHAge1xuXHRmb250LXNpemU6IDMwcHg7XG5cdGxpbmUtaGVpZ2h0OiAzOHB4O1xufVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<h1><br>Project made by</h1>\n<br>\n<ul>\n    <li>Emilio Cortina</li>\n    <li>Pablo Fernandez</li>\n    <li>Javi Garcia Bermudez</li>\n    <li>Astrid Gamoneda</li>\n    <li>Ana Junquera</li>\n    <li>Nuria San Emeterio</li>\n    \n</ul> "

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<section>\n  <router-outlet></router-outlet>\n</section> "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-popup/login-popup.component */ "./src/app/login-popup/login-popup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.guard.service */ "./src/app/services/auth.guard.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _useritem_useritem_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./useritem/useritem.component */ "./src/app/useritem/useritem.component.ts");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./userlist/userlist.component */ "./src/app/userlist/userlist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// Services










var routes = [
    {
        path: 'chat',
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    },
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'login-popup',
        component: _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_6__["LoginPopupComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
    },
    {
        path: 'card',
        component: _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_6__["LoginPopupComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__["NavComponent"], _useritem_useritem_component__WEBPACK_IMPORTED_MODULE_18__["UseritemComponent"], _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_19__["UserlistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"] //required for toastr
            ],
            providers: [_services_solid_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-container {\n  font-family: 'Roboto', sans-serif;\n}\n\n.profile-container h1 {\n  font-size: 24px;\n  color: #89969F;\n  font-weight: bold;\n  line-height: 32px;\n  letter-spacing: 1.2px;\n  text-align: center;\n  margin-top: 82px;\n  font-family: Circular;\n}\n\n.profile-fields-container {\n  max-width: 740px;\n  min-height: 500px;\n  margin: 0 auto;\n  border: 1px solid #ccc;\n  box-shadow: #ccc 1px 1px 4px;\n  position: relative;\n}\n\n.profile-fields-container .profile-image-container {\n  height: 200px;\n  width: 100%;\n  background-size: cover !important;\n  background: url('/assets/images/Solid_Pattern.png');\n}\n\n.profile-fields-container .profile-image-container img {\n  height: 128px;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right:auto;\n  position: relative;\n  top:40px;\n  display: block;\n}\n\n.form-group *{\n  margin: 0 2em;\n}\n\n.profile-fields-container i {\n  font-size: 14px;\n  color: #89969F;\n  padding-left: 26px;\n  padding-right: 10px;\n  margin-top: 24px;\n}\n\n.profile-fields-container input[type=text].field-text {\n  height: 12px;\n  width: 280px;\n  border: 1px solid #89969F;\n  border-radius: 4px;\n  padding: 10px;\n}\n\n.profile-fields-container input[type=text].field-text::-webkit-input-placeholder {\n  color: rgba(102,102,102,0.2);\n}\n\n.profile-fields-container input[type=text].field-text:-ms-input-placeholder {\n  color: rgba(102,102,102,0.2);\n}\n\n.profile-fields-container input[type=text].field-text::-ms-input-placeholder {\n  color: rgba(102,102,102,0.2);\n}\n\n.profile-fields-container input[type=text].field-text::placeholder {\n  color: rgba(102,102,102,0.2);\n}\n\n.profile-save-button-container {\n  display: flex;\n  align-items: center;\n  margin-bottom: 2em;\n  height: 100px;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.profile-save-button {\n  background-color: #ffc107;\n  margin-left: auto;\n  margin-right: auto;\n  width: 280px;\n}\n\n.profile-save-button:disabled {\n  background-color: #F0EEEB;\n  border-color: #F0EEEB;\n  cursor: not-allowed;\n}\n\n.topnav {\n  position:absolute;\n  top:0;\n  left:0;\n  width: 100%;\n  background-color: #ffc107;\n  height: 50px;\n  color: #fff;\n}\n\n.topnav .logo {\n  display: inline-block;\n  font-family: 'Roboto Slab', serif;\n  font-size: 24px;\n  font-weight: bold;\n  text-transform: uppercase;\n  line-height: 32px;\n  padding-right: 80px;\n  position: relative;\n  top: -8px;\n  left: 28px;\n}\n\n.topnav .menu-item {\n  display: inline-block;\n  font-size: 10px;\n  line-height: 13px;\n  width: 100px;\n  height: 100%;\n  text-align: center;\n}\n\n.topnav .menu-item i {\n  font-size: 24px;\n  margin-top:8px;\n  margin-bottom: 2px;\n}\n\n.topnav .menu-item a {\n  font-size: 24px;\n  margin-top:8px;\n  margin-bottom: 2px;\n}\n\n.topnav .profile-menu {\n  float: right;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  background-color: rgba(0,0,0,0.25);\n}\n\n.topnav .profile-menu img {\n  display: block;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin-top:10px;\n  cursor: pointer;\n}\n\n.loading-image {\n  text-align: center;\n  margin-top: 50px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixjQUFjO0FBQ2hCOztBQUdBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRkE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRkE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRkE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLEtBQUs7RUFDTCxNQUFNO0VBQ04sV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1jb250YWluZXIge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbi5wcm9maWxlLWNvbnRhaW5lciBoMSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM4OTk2OUY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDgycHg7XG4gIGZvbnQtZmFtaWx5OiBDaXJjdWxhcjtcbn1cblxuLnByb2ZpbGUtZmllbGRzLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNzQwcHg7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm94LXNoYWRvdzogI2NjYyAxcHggMXB4IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZmlsZS1maWVsZHMtY29udGFpbmVyIC5wcm9maWxlLWltYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvU29saWRfUGF0dGVybi5wbmcnKTtcbn1cblxuLnByb2ZpbGUtZmllbGRzLWNvbnRhaW5lciAucHJvZmlsZS1pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOjQwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi5mb3JtLWdyb3VwICp7XG4gIG1hcmdpbjogMCAyZW07XG59XG5cbi5wcm9maWxlLWZpZWxkcy1jb250YWluZXIgaSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4OTk2OUY7XG4gIHBhZGRpbmctbGVmdDogMjZweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLnByb2ZpbGUtZmllbGRzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdLmZpZWxkLXRleHQge1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAyODBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg5OTY5RjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucHJvZmlsZS1maWVsZHMtY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0uZmllbGQtdGV4dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgxMDIsMTAyLDEwMiwwLjIpO1xufVxuXG4ucHJvZmlsZS1zYXZlLWJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIGhlaWdodDogMTAwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5wcm9maWxlLXNhdmUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDI4MHB4O1xufVxuXG4ucHJvZmlsZS1zYXZlLWJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEVFRUI7XG4gIGJvcmRlci1jb2xvcjogI0YwRUVFQjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnRvcG5hdiB7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MDtcbiAgbGVmdDowO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbiAgaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRvcG5hdiAubG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgcGFkZGluZy1yaWdodDogODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC04cHg7XG4gIGxlZnQ6IDI4cHg7XG59XG5cbi50b3BuYXYgLm1lbnUtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvcG5hdiAubWVudS1pdGVtIGkge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi10b3A6OHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59IFxuXG4udG9wbmF2IC5tZW51LWl0ZW0gYSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLXRvcDo4cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLnRvcG5hdiAucHJvZmlsZS1tZW51IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yNSk7XG59XG5cbi50b3BuYXYgLnByb2ZpbGUtbWVudSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDoxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2FkaW5nLWltYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-container\">\n  <!-- EXAMPLE TOP NAV -->\n  \n  <h1>Profile</h1>\n\n  <!-- LOADING IMAGE -->\n  <div class=\"loading-image\" *ngIf=\"loadingProfile\">\n    <i class=\"fas fa-circle-notch fa-4x fa-spin\"></i>\n  </div>\n\n  <!-- MAIN PROFILE -->\n  <div class=\"profile-fields-container\" *ngIf=\"!loadingProfile\">\n    <div class=\"profile-image-container\">\n      <img [src]=\"profileImage\" />\n    </div>\n    <form style=\"padding-top: 26px;\" #f=\"ngForm\" (submit)=\"onSubmit()\">\n      <div class=\"fields pure-g\">\n        <!-- NAME -->\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\n          <i class=\"fas fa-user\"></i> <input type=\"text\" class=\"field-text form-control\" name=\"fn\" placeholder=\"NAME\" [(ngModel)]=\"profile.fn\" />\n        </div>\n\n        <!-- PHONE -->\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\n          <i class=\"fas fa-phone\"></i><input type=\"text\" class=\"field-text form-control\" name=\"phone\" placeholder=\"PHONE\" [(ngModel)]=\"profile.phone\" />\n        </div>\n      </div>\n\n      <div class=\"fields pure-g\">\n        <!-- ROLE -->\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\n          <i class=\"fas fa-user-astronaut\"></i> <input type=\"text\" class=\"field-text form-control\" name=\"role\" placeholder=\"ROLE\" [(ngModel)]=\"profile.role\" />\n        </div>\n\n        <!-- EMAIL -->\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\n          <i class=\"fas fa-envelope\"></i><input type=\"text\" class=\"field-text form-control\" name=\"email\" placeholder=\"EMAIL\" [(ngModel)]=\"profile.email\" />\n        </div>\n      </div>\n\n      <div class=\"fields pure-g\">\n        <!-- ORGANIZATION -->\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\n          <i class=\"fas fa-building\"></i> <input type=\"text\" class=\"field-text form-control\" name=\"company\" placeholder=\"ORGANIZATION\" [(ngModel)]=\"profile.company\" />\n        </div>\n\n        <!-- ADDRESS -->\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\n          <i class=\"fas fa-map-marker-alt\" style=\"width: 12px; margin-left: 2px;\"></i><input type=\"text\" class=\"field-text form-control\" name=\"address\" placeholder=\"ADDRESS\" [(ngModel)]=\"profile.address.street\" />\n        </div>\n      </div>\n\n      <div class=\"profile-save-button-container\">\n        <button type=\"submit\" class=\"wide-button profile-save-button\" [disabled]=\"!cardForm || cardForm.pristine\">Save</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_rdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rdf.service */ "./src/app/services/rdf.service.ts");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CardComponent = /** @class */ (function () {
    function CardComponent(rdf, route, auth) {
        this.rdf = rdf;
        this.route = route;
        this.auth = auth;
    }
    CardComponent.prototype.ngOnInit = function () {
        this.loadingProfile = true;
        this.loadProfile();
        // Clear cached profile data
        // TODO: Remove this code and find a better way to get the old data
        localStorage.removeItem('oldProfileData');
    };
    // Loads the profile from the rdf service and handles the response
    CardComponent.prototype.loadProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var profile, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.loadingProfile = true;
                        return [4 /*yield*/, this.rdf.getProfile()];
                    case 1:
                        profile = _a.sent();
                        if (profile) {
                            this.profile = profile;
                            this.auth.saveOldUserData(profile);
                        }
                        this.loadingProfile = false;
                        this.setupProfileData();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log("Error: " + error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Submits the form, and saves the profile data using the auth/rdf service
    CardComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.cardForm.invalid) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rdf.updateProfile(this.cardForm)];
                    case 2:
                        _a.sent();
                        localStorage.setItem('oldProfileData', JSON.stringify(this.profile));
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log("Error: " + err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Format data coming back from server. Intended purpose is to replace profile image with default if it's missing
    // and potentially format the address if we need to reformat it for this UI
    CardComponent.prototype.setupProfileData = function () {
        if (this.profile) {
            this.profileImage = this.profile.image ? this.profile.image : '/assets/images/profile.png';
        }
        else {
            this.profileImage = '/assets/images/profile.png';
        }
    };
    // Example of logout functionality. Normally wouldn't be triggered by clicking the profile picture.
    CardComponent.prototype.logout = function () {
        this.auth.solidSignOut();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], CardComponent.prototype, "cardForm", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [_services_rdf_service__WEBPACK_IMPORTED_MODULE_3__["RdfService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nhtml {\n    overflow-y: hidden;\n    overflow-x: hidden;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.bodyWrapper {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    align-items: center;\n    margin: 3em 2em 0;\n}\n\nh3 {\n    font-family: \"Circular\";\n    margin: 0;\n}\n\n.deleteConversation {\n    margin: 0px 0px 0px 3em;\n    padding: 0.5em 1em;\n}\n\n.recentChatsWrapper{\n    background-color: white;\n    border-radius: 5px;\n    box-shadow: 0px 0px 16px rgba(54, 54, 54, 0.185);\n    margin-right: 2em;\n}\n\n.recentChatsWrapper h3{\n    margin: 1em 2em 1em;\n    text-align: center;\n}\n\n.recentChats {\n    padding: 0 2em 2em;\n    width: 60vw;\n    height: 80vh;\n    max-width: 32em;\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n\n.chatCard {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex-wrap: nowrap;\n    margin: 2.5em 0;\n}\n\n.chatName {\n    font-family: \"Circular\";\n}\n\n.chatImage {\n    margin-right: 1em;\n}\n\n.chatImage img {\n    height: 3em;\n    width: 3em;\n}\n\n.currentChat {\n    background-color: white;\n    border-radius: 5px;\n    box-shadow: 0px 0px 16px rgba(54, 54, 54, 0.185);\n    padding: 2em;\n    height: 80vh;\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 60vw;\n    max-width: 50em;\n}\n\n.currentChatHeader{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding-bottom: 2em;\n    height: auto;\n}\n\n.currentChatHeader img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 3em;\n    width: 3em;\n    border-radius: 50%;\n    box-shadow: 0px 0px 6px rgba(54, 54, 54, 0.185);\n    margin-right: 2em;\n}\n\n.currentChatContent {\n    flex-grow: 1;\n    padding: 1em;\n    overflow-y: scroll;\n    display: flex;\n    flex-direction: column;\n}\n\n.message {\n    width: 16em;\n    border: 1px solid rgb(233, 233, 233);\n    box-shadow: 0px 0px 6px rgba(83, 83, 83, 0.13);\n    border-radius: 10px;\n    padding: 0.5em 1em;\n    margin-bottom: 1.5em;\n}\n\n.messageContent {\n    margin-bottom: 0.5em;\n}\n\n.messageTime {\n    text-align: end;\n}\n\n.received {\n\n}\n\n.sent {\n    align-self: flex-end;\n    background-color: #FDC02F;\n    color: white;\n}\n\n.currentChatInput{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin: 2em 3em 0;\n}\n\n#inputMessage {\n    height: 2em;\n    border: 1px solid rgb(233, 233, 233);\n    box-shadow: 0px 0px 6px rgba(54, 54, 54, 0.185);\n    border-radius: 9999px;\n    flex-grow: 1;\n    margin-right: 2em;\n}\n\n#submitMessage {\n    border: none;\n    height:  2em;\n    width: 2em;\n    border-radius: 50%;\n    box-shadow: 0px 0px 6px rgba(54, 54, 54, 0.185);\n    background-color: #FDC02F;\n    color: white;\n    font-weight: bolder;\n}\n\n#friendSelector{\n    width: 100px;\n}\n\n/* @media(max-width: 800px) {\n    html {\n        overflow-y: scroll;\n    }\n\n    .bodyWrapper {\n        flex-direction: column;\n        margin: 5em 2em;\n    }\n\n    .recentChats {\n        padding: 0 2em 2em;\n        height: 7em;\n        overflow-x: scroll;\n        overflow-y: scroll;\n        display: flex;\n        flex-direction: row;\n    }\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdEQUFnRDtJQUNoRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdEQUFnRDtJQUNoRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiwrQ0FBK0M7SUFDL0MsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsOENBQThDO0lBQzlDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsK0NBQStDO0lBQy9DLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRyIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5odG1sIHtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uYm9keVdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogM2VtIDJlbSAwO1xufVxuXG5oMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2lyY3VsYXJcIjtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5kZWxldGVDb252ZXJzYXRpb24ge1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggM2VtO1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbn1cblxuLnJlY2VudENoYXRzV3JhcHBlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNnB4IHJnYmEoNTQsIDU0LCA1NCwgMC4xODUpO1xuICAgIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG4ucmVjZW50Q2hhdHNXcmFwcGVyIGgze1xuICAgIG1hcmdpbjogMWVtIDJlbSAxZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVjZW50Q2hhdHMge1xuICAgIHBhZGRpbmc6IDAgMmVtIDJlbTtcbiAgICB3aWR0aDogNjB2dztcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgbWF4LXdpZHRoOiAzMmVtO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5jaGF0Q2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgbWFyZ2luOiAyLjVlbSAwO1xufVxuXG4uY2hhdE5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNpcmN1bGFyXCI7XG59XG5cbi5jaGF0SW1hZ2Uge1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG4uY2hhdEltYWdlIGltZyB7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgd2lkdGg6IDNlbTtcbn1cblxuLmN1cnJlbnRDaGF0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNnB4IHJnYmEoNTQsIDU0LCA1NCwgMC4xODUpO1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDYwdnc7XG4gICAgbWF4LXdpZHRoOiA1MGVtO1xufVxuLmN1cnJlbnRDaGF0SGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY3VycmVudENoYXRIZWFkZXIgaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICB3aWR0aDogM2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDU0LCA1NCwgNTQsIDAuMTg1KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcbn1cblxuLmN1cnJlbnRDaGF0Q29udGVudCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubWVzc2FnZSB7XG4gICAgd2lkdGg6IDE2ZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMywgMjMzLCAyMzMpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoODMsIDgzLCA4MywgMC4xMyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG59XG5cbi5tZXNzYWdlQ29udGVudCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbi5tZXNzYWdlVGltZSB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4ucmVjZWl2ZWQge1xuXG59XG5cbi5zZW50IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRDMDJGO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4uY3VycmVudENoYXRJbnB1dHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDJlbSAzZW0gMDtcbn1cblxuI2lucHV0TWVzc2FnZSB7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMywgMjMzLCAyMzMpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoNTQsIDU0LCA1NCwgMC4xODUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XG59XG5cbiNzdWJtaXRNZXNzYWdlIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiAgMmVtO1xuICAgIHdpZHRoOiAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoNTQsIDU0LCA1NCwgMC4xODUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGREMwMkY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbiNmcmllbmRTZWxlY3RvcntcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi8qIEBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgaHRtbCB7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB9XG5cbiAgICAuYm9keVdyYXBwZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW46IDVlbSAyZW07XG4gICAgfVxuXG4gICAgLnJlY2VudENoYXRzIHtcbiAgICAgICAgcGFkZGluZzogMCAyZW0gMmVtO1xuICAgICAgICBoZWlnaHQ6IDdlbTtcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxufSAqL1xuIl19 */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bodyWrapper \">\n    <div class=\"row\">\n    <div class=\"userListWrapper col-md-6 \">\n    <div class=\"recentChatsWrapper\">\n          <app-userlist></app-userlist>\n  </div> \n  </div>\n  <div class=\"currentChat col-md-6 text-right\">     \n    <div class=\"currentChatHeader\">\n      <div class=\"currentChatImageWrapper\">\n        <img src=\"../../assets/images/portraits/emilio.svg\" alt=\"\" class=\"currentChatImage\">\n      </div>\n      <div class=\"currentChatHeaderTitle\">\n        <h3>{{friend}}</h3>\n      </div>\n    </div>\n    \n    <div class=\"currentChatContent\">\n\n      <div class=\"message sent\" *ngFor=\"let mess of displayedMessages\">\n        <div class=\"messageContent\" name=\"message dummy\">\n          {{mess.content}}    \n        </div>\n        <div class=\"messageTime\">{{mess.date}}</div>\n      </div>\n\n\n    </div>\n\n    <form action=\"\" class=\"currentChatInput\" #f=\"ngForm\" (submit)=\"onSubmit()\">\n      <input type=\"text\" id=\"inputMessage\" name=\"message\" [(ngModel)]=\"message\" />\n      <input type=\"submit\" value=\"↩︎\" id=\"submitMessage\" />\n    </form>\n  </div>\n\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_rdf_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/rdf.service */ "./src/app/services/rdf.service.ts");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
/* harmony import */ var _services_file_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/file-manager.service */ "./src/app/services/file-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ChatComponent = /** @class */ (function () {
    function ChatComponent(rdf, auth, fileManager) {
        this.rdf = rdf;
        this.auth = auth;
        this.fileManager = fileManager;
        this.displayedMessages = [];
        this.messageContent = '';
        this.messageReceived = '';
        this.friend = 'javi';
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.loadingProfile = true;
        this.loadProfile();
        this.getLastMessage();
        this.getMessageReceived();
        this.loadMessages();
    };
    ChatComponent.prototype.loadProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var profile, friends, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this.loadingProfile = true;
                        return [4 /*yield*/, this.rdf.getProfile()];
                    case 1:
                        profile = _a.sent();
                        if (profile) {
                            this.profile = profile;
                            this.auth.saveOldUserData(profile);
                            this.messageContent = this.rdf.getMessage();
                        }
                        this.rdf.getFriends().then(function (friends) { return friends.forEach(function (element) {
                            console.log(element);
                            console.log("elemento");
                        }); });
                        return [4 /*yield*/, this.rdf.getFriends()];
                    case 2:
                        friends = _a.sent();
                        console.log("a");
                        console.log(friends);
                        console.log("b");
                        console.log(friends.length);
                        this.loadingProfile = false;
                        if (sessionStorage.getItem('friend') != null) {
                            this.friend = sessionStorage.getItem('friend');
                        }
                        else {
                            this.friend = 'javi';
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log("Error: " + error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ChatComponent.prototype.getLastMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileManager.retrieveLastMessage()];
                    case 1:
                        res = _a.sent();
                        this.messageContent = res;
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatComponent.prototype.getMessageReceived = function () {
        return __awaiter(this, void 0, void 0, function () {
            var f, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (sessionStorage.getItem('friend') != null)
                            f = sessionStorage.getItem('friend');
                        else
                            f = 'javi';
                        return [4 /*yield*/, this.fileManager.retrieveLastMessageReceived(f)];
                    case 1:
                        res = _a.sent();
                        this.messageReceived = res;
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message;
            return __generator(this, function (_a) {
                message = document.getElementById('inputMessage').value;
                this.fileManager.saveSomethingInThePOD(message, this.friend, this.displayedMessages);
                return [2 /*return*/];
            });
        });
    };
    ChatComponent.prototype.changeFriend = function () {
        var newFriend = prompt('To which friend do you want to talk to?');
        sessionStorage.setItem('friend', newFriend);
        //window.location.reload();
    };
    ChatComponent.prototype.loadMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rdf.getMessages(this.displayedMessages)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ChatComponent.prototype, "chatForm", void 0);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_rdf_service__WEBPACK_IMPORTED_MODULE_2__["RdfService"], _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_file_manager_service__WEBPACK_IMPORTED_MODULE_4__["FileManagerService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-container {\n    font-family: 'Roboto', sans-serif;\n}\n\n.profile-container h1 {\n    font-size: 24px;\n    color: #ffc107;\n    font-weight: bold;\n    line-height: 32px;\n    letter-spacing: 1.2px;\n    text-align: center;\n    margin-top: 82px;\n    text-transform: uppercase;\n}\n\n.profile-fields-container {\n    max-width: 740px;\n    min-height: 500px;\n    margin: 0 auto;\n    border: 1px solid #ccc;\n    box-shadow: #ccc 1px 1px 4px;\n    position: relative;\n}\n\n.profile-fields-container .profile-image-container {\n    height: 200px;\n    width: 100%;\n    background-size: cover !important;\n    background: url('/assets/images/Solid_Pattern.png');\n}\n\n.profile-fields-container .profile-image-container img {\n    height: 128px;\n    border-radius: 50%;\n    margin-left: auto;\n    margin-right:auto;\n    position: relative;\n    top:40px;\n    display: block;\n}\n\n.profile-fields-container i {\n    font-size: 14px;\n    color: #89969F;\n    padding-left: 26px;\n    padding-right: 10px;\n    margin-top: 24px;\n}\n\n.profile-fields-container input[type=text].field-text {\n    height: 12px;\n    width: 280px;\n    border: 1px solid #89969F;\n    border-radius: 4px;\n    padding: 10px;\n}\n\n.profile-fields-container input[type=text].field-text::-webkit-input-placeholder {\n    color: rgba(102,102,102,0.2);\n}\n\n.profile-fields-container input[type=text].field-text:-ms-input-placeholder {\n    color: rgba(102,102,102,0.2);\n}\n\n.profile-fields-container input[type=text].field-text::-ms-input-placeholder {\n    color: rgba(102,102,102,0.2);\n}\n\n.profile-fields-container input[type=text].field-text::placeholder {\n    color: rgba(102,102,102,0.2);\n}\n\n.profile-save-button-container {\n    display: flex;\n    align-items: center;\n    margin-bottom: auto;\n    height: 100px;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n\n.profile-save-button {\n    background-color: #ffc107;\n    margin-left: auto;\n    margin-right: auto;\n    width: 280px;\n}\n\n.profile-save-button:disabled {\n    background-color: #F0EEEB;\n    border-color: #F0EEEB;\n    cursor: not-allowed;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFGQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFGQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFGQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtY29udGFpbmVyIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbi5wcm9maWxlLWNvbnRhaW5lciBoMSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjZmZjMTA3O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogODJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucHJvZmlsZS1maWVsZHMtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNoYWRvdzogI2NjYyAxcHggMXB4IDRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9maWxlLWZpZWxkcy1jb250YWluZXIgLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL1NvbGlkX1BhdHRlcm4ucG5nJyk7XG59XG5cbi5wcm9maWxlLWZpZWxkcy1jb250YWluZXIgLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgaGVpZ2h0OiAxMjhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDo0MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvZmlsZS1maWVsZHMtY29udGFpbmVyIGkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzg5OTY5RjtcbiAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4ucHJvZmlsZS1maWVsZHMtY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0uZmllbGQtdGV4dCB7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODk5NjlGO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucHJvZmlsZS1maWVsZHMtY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0uZmllbGQtdGV4dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZ2JhKDEwMiwxMDIsMTAyLDAuMik7XG59XG5cbi5wcm9maWxlLXNhdmUtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5wcm9maWxlLXNhdmUtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMjgwcHg7XG59XG5cbi5wcm9maWxlLXNhdmUtYnV0dG9uOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFRUVCO1xuICAgIGJvcmRlci1jb2xvcjogI0YwRUVFQjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\n  <p>Your webId is {{ session.webId }}</p>\n  <ul>\n    <li><a [routerLink]=\"['/card']\">Profile</a></li>\n    <li><a (click)=\"onSignOut()\">Signout</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// import { currentSession } from 'solid-auth-client';
// Services

var Session = /** @class */ (function () {
    function Session() {
    }
    return Session;
}());
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(auth, route) {
        var _this = this;
        this.auth = auth;
        this.route = route;
        this.session = new Session();
        this.loadSession = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        }); };
        this.onSignOut = function () {
            _this.auth.solidSignOut();
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log('hello');
        this.loadSession();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login-popup/login-popup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBvcHVwL2xvZ2luLXBvcHVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login-popup/login-popup.component.html":
/*!********************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-container\">Loading...</div>\n\n\n"

/***/ }),

/***/ "./src/app/login-popup/login-popup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.ts ***!
  \******************************************************/
/*! exports provided: LoginPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPopupComponent", function() { return LoginPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginPopupComponent = /** @class */ (function () {
    function LoginPopupComponent(elementRef) {
        this.elementRef = elementRef;
    }
    LoginPopupComponent.prototype.ngOnInit = function () {
        this.runScript();
    };
    LoginPopupComponent.prototype.runScript = function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = '/assets/js/libs/popup.js';
        this.elementRef.nativeElement.appendChild(s);
        // s.onload = () => this.triggerDuo();
    };
    LoginPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-popup',
            template: __webpack_require__(/*! ./login-popup.component.html */ "./src/app/login-popup/login-popup.component.html"),
            styles: [__webpack_require__(/*! ./login-popup.component.css */ "./src/app/login-popup/login-popup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LoginPopupComponent);
    return LoginPopupComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.login-page {\n  text-align: center;\n  font-family: 'Roboto', sans-serif;\n  color: #666;\n}\n\n.login-page h1 {\n  font-size: 38px;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 50px;\n  letter-spacing: 1.9px;\n  padding-top: 12px;\n  margin-top: 0px;\n}\n\n.login-page h2 {\n  color: #666;\n\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  line-height: 21px;\n  margin-top: 48px;\n}\n\n.login-page .small-link {\n  font-size: 12px;\n  color: #666;\n  letter-spacing: 0.75px;\n  line-height: 16px;\n}\n\n.login-page .registration-link {\n  margin-top: 38px;\n}\n\n.login-page .registration-link p {\n  font-size: 16px;\n  color: #666;\n  letter-spacing: 1px;\n}\n\n.login-page .item-divider {\n  box-sizing:border-box;\n  height: 1px;\n  width: 354px;\n  border-bottom: 1px solid #E0E0E0;\n  position: absolute;\n  bottom:-8px; left:-9px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXOztFQUVYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsV0FBVyxFQUFFLFNBQVM7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubG9naW4tcGFnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmxvZ2luLXBhZ2UgaDEge1xuICBmb250LXNpemU6IDM4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuOXB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4ubG9naW4tcGFnZSBoMiB7XG4gIGNvbG9yOiAjNjY2O1xuXG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIG1hcmdpbi10b3A6IDQ4cHg7XG59XG5cbi5sb2dpbi1wYWdlIC5zbWFsbC1saW5rIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY2NjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5sb2dpbi1wYWdlIC5yZWdpc3RyYXRpb24tbGluayB7XG4gIG1hcmdpbi10b3A6IDM4cHg7XG59XG5cbi5sb2dpbi1wYWdlIC5yZWdpc3RyYXRpb24tbGluayBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzY2NjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmxvZ2luLXBhZ2UgLml0ZW0tZGl2aWRlciB7XG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAzNTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMEUwRTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOi04cHg7IGxlZnQ6LTlweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n\n  <!-- APP LOGO -->\n  <div style=\"margin-top:60px;\">\n    <i class=\"fas fa-user-circle\" style=\"font-size: 64px;\"></i>\n  </div>\n\n  <!-- APP NAME -->\n  <h1>\n    Sole Chat\n  </h1>\n\n  <!-- LOGIN TITLE -->\n  <h2>\n    Login with Solid Identity\n  </h2>\n\n  <!-- PROVIDER SELECTION -->\n  <div style=\"margin-top: 10px;\">\n    <ng-select class=\"login-select\"\n               bindLabel=\"name\"\n               bindValue=\"loginUrl\"\n               placeholder=\"Select ID Provider\"\n               dropdownPosition=\"bottom\"\n               [items]=\"identityProviders\"\n               [(ngModel)]=\"selectedProviderUrl\"\n               style=\"width: 360px; height: 48px; margin-left: auto; margin-right: auto;\">\n\n      <!-- DROPDOWN TEMPLATE -->\n      <ng-template ng-option-tmp let-item=\"item\">\n        <div style=\"height:40px; padding-top:10px; position: relative;\">\n          <img [src]=\"item.image\" style=\"float: left; height: 32px; width: 32px; margin-top:-5px;\" />\n          <span style=\"float: left; margin-left: 10px;\">{{ item.name }}</span>\n          <div style=\"clear: both;\"></div>\n          <div class=\"item-divider\"></div>\n        </div>\n      </ng-template>\n\n    </ng-select>\n    <input type=\"text\"\n           class=\"wide-text\"\n           *ngIf=\"selectedProviderUrl===null\"\n           placeholder=\"Enter WebID\"\n           style=\"margin-top:10px; padding: 12px 10px; width: 340px; height: 16px; display: block; margin-left: auto; margin-right: auto;\"\n           [(ngModel)]=\"customProviderUrl\" />\n    <button class=\"wide-button\" (click)=\"onLogin()\" *ngIf=\"selectedProviderUrl !== undefined || customProviderUrl !== undefined\" [disabled]=\"selectedProviderUrl===null && !customProviderUrl\" style=\"margin-top:10px;\">Go</button>\n  </div>\n\n  <!-- REGISTRATION -->\n  <div class=\"registration-link\">\n    <p style=\"margin: 12px;\">Don't have a Solid Identity?</p>\n    <button class=\"wide-button\" (click)=\"goToRegistration()\">Register</button>\n  </div>\n\n  <!-- HELP -->\n  <div style=\"margin-top: 48px;\">\n    <a href=\"https://solid.mit.edu\" target=\"_blank\" class=\"small-link\">\n      <i class=\"fas fa-info-circle\"></i> What is a Solid Identity?\n    </a>\n  </div>\n\n</div>\n  \n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// Auth Service

var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        /*
        *  Alternate login-popup function for Solid. See service for more details.
        */
        this.onLoginPopup = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.auth.solidLoginPopup();
                return [2 /*return*/];
            });
        }); };
        this.onLogin = function () { return __awaiter(_this, void 0, void 0, function () {
            var idp;
            return __generator(this, function (_a) {
                idp = this.selectedProviderUrl ? this.selectedProviderUrl : this.customProviderUrl;
                if (idp) {
                    try {
                        this.auth.solidLogin(idp);
                    }
                    catch (err) {
                        console.log('An error has occurred logging in: ' + err);
                    }
                }
                return [2 /*return*/];
            });
        }); };
    }
    LoginComponent.prototype.ngOnInit = function () {
        // If we're authenticated, go to profile
        if (localStorage.getItem('solid-auth-client')) {
            this.router.navigateByUrl('/card');
        }
        this.identityProviders = this.auth.getIdentityProviders();
    };
    LoginComponent.prototype.goToRegistration = function () {
        this.router.navigateByUrl('/register');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand{\n  font-family: Circular;\n}\n\n.navbar-brand img {\n  height: 2em;\n  margin-right: 1.2em;\n}\n\n.profile-menu img {\n  height: 2.3em;\n  cursor: pointer;\n}\n\nnav {\n  box-shadow: 0px 0px 8px rgba(75, 75, 75, 0.199);\n}\n\nnav a {\n  color: #333333;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmR7XG4gIGZvbnQtZmFtaWx5OiBDaXJjdWxhcjtcbn1cblxuLm5hdmJhci1icmFuZCBpbWcge1xuICBoZWlnaHQ6IDJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxLjJlbTtcbn1cblxuLnByb2ZpbGUtbWVudSBpbWcge1xuICBoZWlnaHQ6IDIuM2VtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm5hdiB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoNzUsIDc1LCA3NSwgMC4xOTkpO1xufVxuXG5uYXYgYSB7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"#\">\n            <img src=\"/assets/images/sole.svg\" alt=\"\">\n            Sole\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n                aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item active\">\n                    <a class=\"nav-link\" routerLink=\"/\">Home\n                        <span class=\"sr-only\">(current)</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a routerLink=\"/chat\" class=\"nav-link\">Chat</a>\n                </li>\n\n                <li class=\"nav-item\">\n                    <a href=\"https://arquisoft.github.io/dechat_en2b/\" class=\"nav-link\">About</a>\n                </li>\n\n                <li class=\"nav-item\">\n                    <div class=\"profile-menu\" (click)=\"logout()\">\n                        <img [src]=\"profileImage\"/>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.profileImage = '/assets/images/profile.png';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration {\n  text-align: center;\n  font-family: 'Roboto', sans-serif;\n}\n\n.registration .header-bar {\n  margin: 0px;\n  height: 44px;\n  width: calc(100% + 16px);\n  background-color: #3D6DEB;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.registration .header-bar p {\n  text-align: center;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1px;\n  line-height: 15px;\n}\n\n.registration .header-text {\n  margin-top:92px;\n  width: 360px;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 14px;\n  color: #666;\n}\n\n.registration .header-text a {\n  color: #666;\n  font-size: 12px;\n}\n\n.registration .provider-card-container {\n  margin-top: 28px;\n}\n\n.registration .provider-card {\n  height: 140px;\n  width: 320px;\n  border: 1px solid #DAE0E6;\n  border-radius: 2px;\n  background-color: #fff;\n  margin: 10px;\n  display: inline-block;\n  box-shadow: #DAE0E6 1px 1px 6px;\n}\n\n.registration .provider-card .provider-logo {\n  height: 44px;\n  width: 44px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 16px;\n}\n\n.registration .provider-card h2 {\n  color: #656E75;\n  font-size: 18px;\n  margin-top: -2px;\n  letter-spacing: 0.9px;\n  line-height: 24px;\n}\n\n.registration .provider-card p {\n  color: #656E75;\n  font-size: 12px;\n  line-height: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdHJhdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4ucmVnaXN0cmF0aW9uIC5oZWFkZXItYmFyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogNDRweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDE2cHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Q2REVCO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5yZWdpc3RyYXRpb24gLmhlYWRlci1iYXIgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cblxuLnJlZ2lzdHJhdGlvbiAuaGVhZGVyLXRleHQge1xuICBtYXJnaW4tdG9wOjkycHg7XG4gIHdpZHRoOiAzNjBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnJlZ2lzdHJhdGlvbiAuaGVhZGVyLXRleHQgYSB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5yZWdpc3RyYXRpb24gLnByb3ZpZGVyLWNhcmQtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cblxuLnJlZ2lzdHJhdGlvbiAucHJvdmlkZXItY2FyZCB7XG4gIGhlaWdodDogMTQwcHg7XG4gIHdpZHRoOiAzMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RBRTBFNjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNoYWRvdzogI0RBRTBFNiAxcHggMXB4IDZweDtcbn1cblxuLnJlZ2lzdHJhdGlvbiAucHJvdmlkZXItY2FyZCAucHJvdmlkZXItbG9nbyB7XG4gIGhlaWdodDogNDRweDtcbiAgd2lkdGg6IDQ0cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5yZWdpc3RyYXRpb24gLnByb3ZpZGVyLWNhcmQgaDIge1xuICBjb2xvcjogIzY1NkU3NTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC45cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLnJlZ2lzdHJhdGlvbiAucHJvdmlkZXItY2FyZCBwIHtcbiAgY29sb3I6ICM2NTZFNzU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registration\">\n  <!-- Header Bar -->\n  <div class=\"header-bar\">\n    <p>Select Solid Identity Provider</p>\n  </div>\n\n  <!-- Header Text -->\n  <div class=\"header-text\">\n    <p>\n      With a Solid Identity your personal data is stored securely in a POD. You control who has access to it.\n    </p>\n    <a href=\"https://solid.mit.edu\" target=\"_blank\">\n      Learn more about Solid IDs and PODs\n    </a>\n  </div>\n\n  <!-- Provider cards -->\n  <div class=\"provider-card-container\">\n    <div class=\"provider-card\" *ngFor=\"let provider of availableProviders\">\n      <img [src]=\"provider.image\" class=\"provider-logo\">\n      <h2>{{ provider.name }}</h2>\n      <p>{{ provider.desc }}</p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth) {
        this.auth = auth;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.availableProviders = this.auth.getIdentityProviders();
        this.availableProviders = this.availableProviders.filter(function (idp) { return idp.providerLoginUrl !== null; });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_solid_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth.guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solid_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solid.auth.service */ "./src/app/services/solid.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var isLoggedIn = localStorage.getItem('solid-auth-client') ? true : false;
        if (!isLoggedIn) {
            this.router.navigateByUrl('/login');
        }
        return isLoggedIn; /* this.auth.session.pipe(
          take(1),
          map(session => !!session),
          tap(loggedIn => {
            if (!loggedIn) {
              return this.router.navigate(['/']);
            }
          })
        );*/
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/file-manager.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/file-manager.service.ts ***!
  \**************************************************/
/*! exports provided: FileManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileManagerService", function() { return FileManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var solid_file_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! solid-file-client */ "./node_modules/solid-file-client/dist/browser/solid-file-client.bundle.js");
/* harmony import */ var solid_file_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(solid_file_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rdf_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rdf.service */ "./src/app/services/rdf.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var FileManagerService = /** @class */ (function () {
    function FileManagerService(rdf) {
        this.rdf = rdf;
    }
    FileManagerService.prototype.saveSomethingInThePOD = function (message, friend, messages) {
        return __awaiter(this, void 0, void 0, function () {
            var direction;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, solid_file_client__WEBPACK_IMPORTED_MODULE_1__["popupLogin"]().then(function (webId) {
                            console.log('Logged in as ' + webId);
                            direction = webId.split('/profile')[0] + '/public/messages.ttl';
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, solid_file_client__WEBPACK_IMPORTED_MODULE_1__["readFile"](direction).then(function (body) {
                                _this.updateFile(body, direction, message, messages);
                            }, function (err) {
                                if (err.includes('Not Found')) {
                                    _this.createFile(direction, message, friend, messages);
                                }
                                else {
                                    console.log(err);
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileManagerService.prototype.createFile = function (direction, message, friend, messages) {
        return __awaiter(this, void 0, void 0, function () {
            var baseContent, permissions;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generateBaseTurtle(friend)];
                    case 1:
                        baseContent = _a.sent();
                        permissions = direction + '.acl';
                        return [4 /*yield*/, solid_file_client__WEBPACK_IMPORTED_MODULE_1__["createFile"](permissions, '').then(function (fileCreated) {
                                console.log("Created file " + fileCreated + ".");
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, solid_file_client__WEBPACK_IMPORTED_MODULE_1__["createFile"](direction, baseContent).then(function (fileCreated) {
                                console.log("Created file " + fileCreated + ".");
                                _this.rdf.generateBaseChat(friend);
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, solid_file_client__WEBPACK_IMPORTED_MODULE_1__["readFile"](direction).then(function (body) {
                                _this.updateFile(body, direction, message, messages);
                            }, function (err) {
                                console.log(err);
                            })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileManagerService.prototype.updateFile = function (body, direction, message, messages) {
        return __awaiter(this, void 0, void 0, function () {
            var maker, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        maker = direction.split('/public')[0] + '/profile/card#me';
                        return [4 /*yield*/, this.rdf.addMessage(body, message, maker, messages)];
                    case 1:
                        content = _a.sent();
                        return [4 /*yield*/, solid_file_client__WEBPACK_IMPORTED_MODULE_1__["updateFile"](direction, content).then(function (fileUpdated) {
                                console.log("Updated file " + fileUpdated + ".");
                            }, function (err) { return console.log(err); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileManagerService.prototype.retrieveLastMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var direction, lastMessage;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, solid_file_client__WEBPACK_IMPORTED_MODULE_1__["popupLogin"]().then(function (webId) {
                            direction = webId.split('/profile')[0] + '/public/messages.ttl';
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, solid_file_client__WEBPACK_IMPORTED_MODULE_1__["readFile"](direction).then(function (body) {
                                lastMessage = _this.rdf.getLastMessage();
                            }, function (err) {
                                console.log(err);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, lastMessage];
                }
            });
        });
    };
    FileManagerService.prototype.retrieveLastMessageReceived = function (friend) {
        return __awaiter(this, void 0, void 0, function () {
            var direction, lastMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        direction = 'https://' + friend + '.solid.community/public/messages.json';
                        lastMessage = '';
                        return [4 /*yield*/, solid_file_client__WEBPACK_IMPORTED_MODULE_1__["readFile"](direction).then(function (body) {
                                var object = JSON.parse(body);
                                var size = object.messages.length;
                                if (size > 0) {
                                    lastMessage = object.messages[size - 1];
                                }
                            }, function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        //window.location.reload();
                        return [2 /*return*/, lastMessage];
                }
            });
        });
    };
    FileManagerService.prototype.generateBaseTurtle = function (friend) {
        return __awaiter(this, void 0, void 0, function () {
            var id, msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, solid_file_client__WEBPACK_IMPORTED_MODULE_1__["popupLogin"]().then(function (webId) {
                            id = webId;
                        })];
                    case 1:
                        _a.sent();
                        msg = "@prefix : <#>.\n";
                        return [2 /*return*/, msg];
                }
            });
        });
    };
    FileManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_rdf_service__WEBPACK_IMPORTED_MODULE_2__["RdfService"]])
    ], FileManagerService);
    return FileManagerService;
}());



/***/ }),

/***/ "./src/app/services/rdf.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/rdf.service.ts ***!
  \*****************************************/
/*! exports provided: RdfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdfService", function() { return RdfService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


//import * as $rdf from 'rdflib'
var VCARD = $rdf.Namespace('http://www.w3.org/2006/vcard/ns#');
var FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/'); //n0
var CONT = $rdf.Namespace('http://rdfs.org/sioc/ns#'); //n
var TERMS = $rdf.Namespace('http://purl.org/dc/terms/'); //terms
var MEE = $rdf.Namespace("http://www.w3.org/ns/pim/meeting#"); //mee
var ACL = $rdf.Namespace("http://www.w3.org/ns/auth/acl#"); //acl
var N1 = $rdf.Namespace("http://purl.org/dc/elements/1.1/"); //n1
var FLOW = $rdf.Namespace("http://www.w3.org/2005/01/wf/flow#"); //flow
var XML = $rdf.Namespace("http://www.w3.org/2001/XMLSchema#");
/**
 * A service layer for RDF data manipulation using rdflib.js
 * @see https://solid.inrupt.com/docs/manipulating-ld-with-rdflib
 */
var RdfService = /** @class */ (function () {
    function RdfService(toastr) {
        var _this = this;
        this.toastr = toastr;
        this.store = $rdf.graph();
        /**
         * A helper object that connects to the web, loads data, and saves it back. More powerful than using a simple
         * store object.
         * When you have a fetcher, then you also can ask the query engine to go fetch new linked data automatically
         * as your query makes its way across the web.
         * @see http://linkeddata.github.io/rdflib.js/doc/Fetcher.html
         */
        this.fetcher = $rdf.Fetcher;
        /**
         * The UpdateManager allows you to send small changes to the server to “patch” the data as your user changes data in
         * real time. It also allows you to subscribe to changes other people make to the same file, keeping track of
         * upstream and downstream changes, and signaling any conflict between them.
         * @see http://linkeddata.github.io/rdflib.js/doc/UpdateManager.html
         */
        this.updateManager = $rdf.UpdateManager;
        this.getWebID = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.session.webId];
            });
        }); };
        /**
         * Fetches the session from Solid, and store results in localStorage
         */
        this.getSession = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, solid.auth.currentSession(localStorage)];
                    case 1:
                        _a.session = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Gets a node that matches the specified pattern using the VCARD onthology
         *
         * any() can take a subject and a predicate to find Any one person identified by the webId
         * that matches against the node/predicated
         *
         * @param {string} node VCARD predicate to apply to the $rdf.any()
         * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
         * @return {string} The value of the fetched node or an emtpty string
         * @see https://github.com/solid/solid-tutorial-rdflib.js
         */
        this.getValueFromVcard = function (node, webId) {
            return _this.getValueFromNamespace(node, VCARD, webId);
        };
        this.getArray = function (node) {
            return _this.getArrayFromNamespace(node, VCARD, _this.session.webId);
        };
        /**
         * Gets a node that matches the specified pattern using the FOAF onthology
         * @param {string} node FOAF predicate to apply to the $rdf.any()
         * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
         * @return {string} The value of the fetched node or an emtpty string
         */
        this.getValueFromFoaf = function (node, webId) {
            return _this.getValueFromNamespace(node, FOAF, webId);
        };
        this.transformDataForm = function (form, me, doc) {
            var insertions = [];
            var deletions = [];
            var fields = Object.keys(form.value);
            var oldProfileData = JSON.parse(localStorage.getItem('oldProfileData')) || {};
            // We need to split out into three code paths here:
            // 1. There is an old value and a new value. This is the update path
            // 2. There is no old value and a new value. This is the insert path
            // 3. There is an old value and no new value. Ths is the delete path
            // These are separate codepaths because the system needs to know what to do in each case
            fields.map(function (field) {
                var predicate = VCARD(_this.getFieldName(field));
                var subject = _this.getUriForField(field, me);
                var why = doc;
                var fieldValue = _this.getFieldValue(form, field);
                var oldFieldValue = _this.getOldFieldValue(field, oldProfileData);
                // if there's no existing home phone number or email address, we need to add one, then add the link for hasTelephone or hasEmail
                if (!oldFieldValue && fieldValue && (field === 'phone' || field === 'email')) {
                    _this.addNewLinkedField(field, insertions, predicate, fieldValue, why, me);
                }
                else {
                    //Add a value to be updated
                    if (oldProfileData[field] && form.value[field] && !form.controls[field].pristine) {
                        deletions.push($rdf.st(subject, predicate, oldFieldValue, why));
                        insertions.push($rdf.st(subject, predicate, fieldValue, why));
                    }
                    //Add a value to be deleted
                    else if (oldProfileData[field] && !form.value[field] && !form.controls[field].pristine) {
                        deletions.push($rdf.st(subject, predicate, oldFieldValue, why));
                    }
                    //Add a value to be inserted
                    else if (!oldProfileData[field] && form.value[field] && !form.controls[field].pristine) {
                        insertions.push($rdf.st(subject, predicate, fieldValue, why));
                    }
                }
            });
            return {
                insertions: insertions,
                deletions: deletions
            };
        };
        this.updateProfile = function (form) { return __awaiter(_this, void 0, void 0, function () {
            var me, doc, data;
            var _this = this;
            return __generator(this, function (_a) {
                me = $rdf.sym(this.session.webId);
                doc = $rdf.NamedNode.fromValue(this.session.webId.split('#')[0]);
                data = this.transformDataForm(form, me, doc);
                //Update existing values
                if (data.insertions.length > 0 || data.deletions.length > 0) {
                    this.updateManager.update(data.deletions, data.insertions, function (response, success, message) {
                        if (success) {
                            _this.toastr.success('Your Solid profile has been successfully updated', 'Success!');
                            form.form.markAsPristine();
                            form.form.markAsTouched();
                        }
                        else {
                            _this.toastr.error('Message: ' + message, 'An error has occurred');
                        }
                    });
                }
                return [2 /*return*/];
            });
        }); };
        this.getAddress = function () {
            var linkedUri = _this.getValueFromVcard('hasAddress');
            if (linkedUri) {
                return {
                    locality: _this.getValueFromVcard('locality', linkedUri),
                    country_name: _this.getValueFromVcard('country-name', linkedUri),
                    region: _this.getValueFromVcard('region', linkedUri),
                    street: _this.getValueFromVcard('street-address', linkedUri),
                };
            }
            return {};
        };
        //Function to get email. This returns only the first email, which is temporary
        this.getEmail = function () {
            var linkedUri = _this.getValueFromVcard('hasEmail');
            if (linkedUri) {
                return _this.getValueFromVcard('value', linkedUri).split('mailto:')[1];
            }
            return '';
        };
        //Function to get phone number. This returns only the first phone number, which is temporary. It also ignores the type.
        this.getPhone = function () {
            var linkedUri = _this.getValueFromVcard('hasTelephone');
            if (linkedUri) {
                return _this.getValueFromVcard('value', linkedUri).split('tel:+')[1];
            }
        };
        this.getMessage = function () {
            var array = _this.getArray('newMessage');
            var linkedUri = array[array.length - 1];
            if (linkedUri) {
                return _this.getValueFromVcard('message', linkedUri);
            }
        };
        this.getProfile = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.session) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getSession()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.fetcher.load(this.session.webId)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, {
                                fn: this.getValueFromVcard('fn'),
                                company: this.getValueFromVcard('organization-name'),
                                phone: this.getPhone(),
                                role: this.getValueFromVcard('role'),
                                image: this.getValueFromVcard('hasPhoto'),
                                address: this.getAddress(),
                                email: this.getEmail(),
                            }];
                    case 4:
                        error_1 = _a.sent();
                        console.log("Error fetching data: " + error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        //Returns a list with the user friends
        this.getFriends = function () { return __awaiter(_this, void 0, void 0, function () {
            var friend_list, friends;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.session) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getSession()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        friend_list = [];
                        try {
                            friends = this.store.each($rdf.sym(this.session.webId), FOAF('knows'));
                            friends.forEach(function (friend) { return __awaiter(_this, void 0, void 0, function () {
                                var fullName;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.fetcher.load(friend)];
                                        case 1:
                                            _a.sent();
                                            fullName = this.store.any(friend, FOAF('name')).value;
                                            friend_list.push({ name: fullName, webId: friend.value });
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        finally {
                            return [2 /*return*/, friend_list];
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        var fetcherOptions = {};
        this.fetcher = new $rdf.Fetcher(this.store, fetcherOptions);
        this.updateManager = new $rdf.UpdateManager(this.store);
        this.getSession();
    }
    RdfService.prototype.generateBaseChat = function (friend) {
        return __awaiter(this, void 0, void 0, function () {
            var friendId, doc, subject, predicate, object, statement, date, contentDate, docACL, subjectACL;
            return __generator(this, function (_a) {
                friendId = "https://" + friend + ".solid.community/profile/card#me";
                doc = $rdf.sym(this.session.webId.split('/profile')[0] + "/public/messages.ttl");
                subject = $rdf.sym(this.session.webId.split('/profile')[0] + "/public/messages.ttl#this");
                predicate = $rdf.sym("https://www.w3.org/1999/02/22-rdf-syntax-ns#type");
                object = $rdf.sym(MEE('Chat'));
                statement = $rdf.st(subject, predicate, object, doc);
                this.store.add(statement);
                //Author
                predicate = $rdf.sym(N1('author'));
                object = $rdf.sym(this.session.webId);
                statement = $rdf.st(subject, predicate, object, doc);
                this.store.add(statement);
                //Created
                predicate = $rdf.sym(N1('created'));
                date = new Date();
                contentDate = $rdf.literal(date.toISOString(), undefined, XML('dateTime'));
                statement = $rdf.st(subject, predicate, contentDate, doc);
                this.store.add(statement);
                //Title
                predicate = $rdf.sym(N1('title'));
                statement = $rdf.st(subject, predicate, "Chat", doc);
                this.store.add(statement);
                docACL = $rdf.sym(this.session.webId.split('/profile')[0] + "/public/messages.ttl.acl");
                subjectACL = $rdf.sym(this.session.webId.split('/profile')[0] + "/public/messages.ttl.acl#authorization");
                //Is an authorization
                predicate = $rdf.sym("https://www.w3.org/1999/02/22-rdf-syntax-ns#type");
                object = $rdf.sym(ACL('Authorization'));
                statement = $rdf.st(subjectACL, predicate, object, docACL);
                this.store.add(statement);
                //Agent
                predicate = $rdf.sym(ACL('agent'));
                object = $rdf.sym(friendId);
                statement = $rdf.st(subjectACL, predicate, object, docACL);
                this.store.add(statement);
                //file
                predicate = $rdf.sym(ACL('accessTo'));
                object = doc;
                statement = $rdf.st(subjectACL, predicate, object, docACL);
                this.store.add(statement);
                //Permissions
                predicate = $rdf.sym(ACL('mode'));
                object = $rdf.sym(ACL('Read'));
                statement = $rdf.st(subjectACL, predicate, object, docACL);
                this.store.add(statement);
                object = $rdf.sym(ACL('Write'));
                statement = $rdf.st(subjectACL, predicate, object, docACL);
                this.store.add(statement);
                object = $rdf.sym(ACL('Control'));
                statement = $rdf.st(subjectACL, predicate, object, docACL);
                this.store.add(statement);
                return [2 /*return*/];
            });
        });
    };
    RdfService.prototype.createMessage = function (message, makerId, messages) {
        return __awaiter(this, void 0, void 0, function () {
            var newId, doc, subject, predicateDate, date, formatted, contentDate, dateSt, predicateMessage, msgSt, predicateMaker, makerSt, makerStatement, subjectFlow, predicateFlow, objectFlow, statementFlow, messageObj;
            return __generator(this, function (_a) {
                newId = 'Msg' + Date.now();
                doc = $rdf.sym(this.session.webId.split('/profile')[0] + "/public/messages.ttl");
                subject = $rdf.sym(this.session.webId.split('/profile')[0] + "/public/messages.ttl#" + newId);
                predicateDate = $rdf.sym(TERMS('created'));
                date = new Date();
                formatted = date.toISOString();
                contentDate = $rdf.literal(formatted, undefined, XML('dateTime'));
                dateSt = $rdf.st(subject, predicateDate, contentDate, doc);
                console.log(dateSt);
                this.store.add(dateSt);
                predicateMessage = $rdf.sym(CONT('content'));
                msgSt = $rdf.st(subject, predicateMessage, message, doc);
                console.log(msgSt);
                this.store.add(msgSt);
                predicateMaker = $rdf.sym(FOAF('maker'));
                makerSt = $rdf.sym(makerId);
                makerStatement = $rdf.st(subject, predicateMaker, makerSt, doc);
                console.log(makerStatement);
                this.store.add(makerStatement);
                subjectFlow = $rdf.sym(this.session.webId.split('/profile')[0] + "/public/messages.ttl#this");
                predicateFlow = $rdf.sym(FLOW('message'));
                objectFlow = $rdf.sym(subject);
                statementFlow = $rdf.st(subjectFlow, predicateFlow, objectFlow, doc);
                console.log(statementFlow);
                this.store.add(statementFlow);
                messageObj = { id: 9, content: message };
                messages.push(messageObj);
                return [2 /*return*/];
            });
        });
    };
    RdfService.prototype.addMessage = function (body, message, maker, messages) {
        return __awaiter(this, void 0, void 0, function () {
            var doc, content;
            return __generator(this, function (_a) {
                doc = $rdf.sym(this.session.webId.split('/profile')[0] + "/public/messages.ttl");
                $rdf.parse(body, this.store, doc.uri, 'text/turtle'); //add it to the store
                this.createMessage(message, maker, messages);
                content = $rdf.serialize(doc, this.store, doc.uri, 'text/turtle');
                return [2 /*return*/, content]; //return it in string format
            });
        });
    };
    RdfService.prototype.getLastMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //let subject = $rdf.sym(this.session.webId.split('/profile')[0] + "/public/messages.ttl#Msg234134");
                console.log(this.store.any(CONT("content")));
                return [2 /*return*/];
            });
        });
    };
    RdfService.prototype.addNewLinkedField = function (field, insertions, predicate, fieldValue, why, me) {
        //Generate a new ID. This id can be anything but needs to be unique.
        var newId = field + ':' + Date.now();
        //Get a new subject, using the new ID
        var newSubject = $rdf.sym(this.session.webId.split('#')[0] + '#' + newId);
        //Set new predicate, based on email or phone fields
        var newPredicate = field === 'phone' ? $rdf.sym(VCARD('hasTelephone')) : $rdf.sym(VCARD('hasEmail'));
        //Add new phone or email to the pod
        insertions.push($rdf.st(newSubject, predicate, fieldValue, why));
        //Set the type (defaults to Home/Personal for now) and insert it into the pod as well
        //Todo: Make this dynamic
        var type = field === 'phone' ? $rdf.literal('Home') : $rdf.literal('Personal');
        insertions.push($rdf.st(newSubject, VCARD('type'), type, why));
        //Add a link in #me to the email/phone number (by id)
        insertions.push($rdf.st(me, newPredicate, newSubject, why));
    };
    RdfService.prototype.addNewLinkedMessage = function (form) {
        var _this = this;
        var insertions = [];
        var deletions = [];
        var me = $rdf.sym(this.session.webId);
        var doc = $rdf.NamedNode.fromValue(this.session.webId.split('#')[0]);
        var field = "message";
        var predicate = VCARD(this.getFieldName(field));
        var fieldValue = this.getFieldValue(form, field);
        var why = doc;
        var newId = field + ':' + Date.now();
        //Get a new subject, using the new ID
        var newSubject = $rdf.sym(this.session.webId.split('#')[0] + '#' + newId);
        //Set new predicate
        var newPredicate = $rdf.sym(VCARD('newMessage'));
        //Add the new message to the pod
        insertions.push($rdf.st(newSubject, predicate, fieldValue, why));
        //Set the type (defaults to Home/Personal for now) and insert it into the pod as well
        //Todo: Make this dynamic
        var type = $rdf.literal('Message');
        insertions.push($rdf.st(newSubject, VCARD('type'), type, why));
        //Add a link in #me to the email/phone number (by id)
        insertions.push($rdf.st(me, newPredicate, newSubject, why));
        //Update existing values
        if (insertions.length > 0 || deletions.length > 0) {
            this.updateManager.update(deletions, insertions, function (response, success, message) {
                if (!success) {
                    _this.toastr.error('Message: ' + message, 'An error has occurred');
                }
            });
        }
        return this.getMessage();
    };
    RdfService.prototype.getUriForField = function (field, me) {
        var uriString;
        var uri;
        switch (field) {
            case 'phone':
                uriString = this.getValueFromVcard('hasTelephone');
                if (uriString) {
                    uri = $rdf.sym(uriString);
                }
                break;
            case 'email':
                uriString = this.getValueFromVcard('hasEmail');
                if (uriString) {
                    uri = $rdf.sym(uriString);
                }
                break;
            default:
                uri = me;
                break;
        }
        return uri;
    };
    /**
     * Extracts the value of a field of a NgForm and converts it to a $rdf.NamedNode
     * @param {NgForm} form
     * @param {string} field The name of the field that is going to be extracted from the form
     * @return {RdfNamedNode}
     */
    RdfService.prototype.getFieldValue = function (form, field) {
        var fieldValue;
        if (!form.value[field]) {
            return;
        }
        switch (field) {
            case 'phone':
                fieldValue = $rdf.sym('tel:+' + form.value[field]);
                break;
            case 'email':
                fieldValue = $rdf.sym('mailto:' + form.value[field]);
                break;
            default:
                fieldValue = form.value[field];
                break;
        }
        return fieldValue;
    };
    RdfService.prototype.getOldFieldValue = function (field, oldProfile) {
        var oldValue;
        if (!oldProfile || !oldProfile[field]) {
            return;
        }
        switch (field) {
            case 'phone':
                oldValue = $rdf.sym('tel:+' + oldProfile[field]);
                break;
            case 'email':
                oldValue = $rdf.sym('mailto:' + oldProfile[field]);
                break;
            default:
                oldValue = oldProfile[field];
                break;
        }
        return oldValue;
    };
    RdfService.prototype.getFieldName = function (field) {
        switch (field) {
            case 'company':
                return 'organization-name';
            case 'phone':
            case 'email':
                return 'value';
            default:
                return field;
        }
    };
    /**
     * Gets any resource that matches the node, using the provided Namespace
     * @param {string} node The name of the predicate to be applied using the provided Namespace
     * @param {$rdf.namespace} namespace The RDF Namespace
     * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
     */
    RdfService.prototype.getValueFromNamespace = function (node, namespace, webId) {
        var store = this.store.any($rdf.sym(webId || this.session.webId), namespace(node));
        if (store) {
            return store.value;
        }
        return '';
    };
    RdfService.prototype.getArrayFromNamespace = function (node, namespace, webId) {
        return this.store.each($rdf.sym(webId || this.session.webId), namespace(node));
    };
    // Add a function as parameter to call it when finished or fixed the asyn.
    RdfService.prototype.getMessages = function (messages) {
        var store = $rdf.graph();
        var timeout = 5000; // 5000 ms timeout
        var fetcher = new $rdf.Fetcher(store, timeout);
        //var url = 'https://emiliocortina.solid.community/public/Amiwis/index.ttl';
        var url = this.session.webId.split('/profile')[0] + "/public/messages.ttl";
        fetcher.nowOrWhenFetched(url, function (ok, body, xhr) {
            if (!ok) {
                console.log('Oops, something happened and couldn\'t fetch data');
            }
            else {
                var subject = $rdf.sym(url + '#this');
                var nameMessage = FLOW('message');
                var messagesNodes = store.each(subject, nameMessage);
                for (var i = 0; i < messagesNodes.length; i++) {
                    var messageNode = messagesNodes[i];
                    var nodeContent = store.any(messageNode, CONT('content'));
                    var contentText = nodeContent.value;
                    var date = store.any(messageNode, TERMS('created')).value;
                    var dateFields = date.split('T');
                    var ymd = dateFields[0];
                    var time = dateFields[1];
                    var timeFormatted = time.split(':');
                    var dateFormatted = timeFormatted[0] + ':' + timeFormatted[1]; // We can also add the year month and day
                    var message = { id: messageNode.value, content: contentText, date: dateFormatted, received: false };
                    messages.push(message);
                }
            }
        });
    };
    RdfService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], RdfService);
    return RdfService;
}());



/***/ }),

/***/ "./src/app/services/solid.auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/solid.auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _rdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rdf.service */ "./src/app/services/rdf.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var AuthService = /** @class */ (function () {
    function AuthService(router, rdf) {
        var _this = this;
        this.router = router;
        this.rdf = rdf;
        this.fechInit = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/sparql-update',
            },
            body: '',
        };
        /*
         * This will check if current session is active to avoid security problems
        */
        this.isSessionActive = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.session = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(solid.auth.currentSession());
                return [2 /*return*/];
            });
        }); };
        /**
         * Alternative login-popup function. This will open a popup that will allow you to choose an identity provider
         * without leaving the current page
         * This is recommended if you don't want to leave the current workflow.
         */
        this.solidLoginPopup = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, solid.auth.popupLogin({ popupUri: './login-popup' })];
                    case 1:
                        _a.sent();
                        // Check if session is valid to avoid redirect issues
                        return [4 /*yield*/, this.isSessionActive()];
                    case 2:
                        // Check if session is valid to avoid redirect issues
                        _a.sent();
                        // popupLogin success redirect to profile
                        this.router.navigate(['/card']);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log("Error: " + error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        /*
        * Signs out of Solid in this app, by calling the logout function and clearing the localStorage token
        */
        this.solidSignOut = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, solid.auth.logout()];
                    case 1:
                        _a.sent();
                        // Remove localStorage
                        localStorage.removeItem('solid-auth-client');
                        // Redirect to login page
                        this.router.navigate(['/']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log("Error: " + error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.saveOldUserData = function (profile) {
            if (!localStorage.getItem('oldProfileData')) {
                localStorage.setItem('oldProfileData', JSON.stringify(profile));
            }
        };
        this.getOldUserData = function () {
            return JSON.parse(localStorage.getItem('oldProfileData'));
        };
        /*
        *  Make a call to the solid auth endpoint. It requires an identity provider url, which here is coming from the dropdown, which
        *  is populated by the getIdentityProviders() function call. It currently requires a callback url and a storage option or else
        *  the call will fail.
        */
        this.solidLogin = function (idp) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, solid.auth.login(idp, {
                            callbackUri: window.location.href + "card",
                            storage: localStorage,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.isSessionActive();
    }
    /**
     * Function to get providers. This is to mimic the future provider registry
     *
     * @return {SolidProvider[]} A list of SolidProviders
     */
    AuthService.prototype.getIdentityProviders = function () {
        var inruptProvider = {
            name: 'Inrupt',
            image: '/assets/images/Inrupt.png',
            loginUrl: 'https://inrupt.net/auth',
            desc: 'Inrupt Inc. provider'
        };
        var solidCommunityProvider = {
            name: 'Solid Community',
            image: '/assets/images/Solid.png',
            loginUrl: 'https://solid.community',
            desc: 'A provider maintained by the Solid Community'
        };
        var otherProvider = {
            name: 'Other (Enter WebID)',
            image: '/assets/images/Generic.png',
            loginUrl: null,
            desc: 'Generic provider'
        };
        return [
            inruptProvider,
            solidCommunityProvider,
            otherProvider
        ];
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _rdf_service__WEBPACK_IMPORTED_MODULE_3__["RdfService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/useritem/useritem.component.css":
/*!*************************************************!*\
  !*** ./src/app/useritem/useritem.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n    overflow-y: hidden;\n    overflow-x: hidden;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.bodyWrapper {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    margin: 5em 2em;\n}\n\nh3 {\n    font-family: \"Circular\";\n    margin: 0;\n}\n\n.recentChatsWrapper{\n    background-color: white;\n    border-radius: 5px;\n    box-shadow: 0px 0px 16px rgba(54, 54, 54, 0.185);\n    margin-right: 2em;\n}\n\n.recentChatsWrapper h3{\n    margin: 1em 2em 1em;\n    text-align: center;\n}\n\n.recentChats {\n    padding: 0 2em 2em;\n    height: 70vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n\n.chatCard {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex-wrap: nowrap;\n    margin: 2.5em 0;\n}\n\n.chatName {\n    font-family: \"Circular\";\n}\n\n.chatImage {\n    margin-right: 1em;\n}\n\n.chatImage img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 3em;\n    width: 3em;\n    border-radius: 50%;\n    box-shadow: 0px 0px 6px rgba(54, 54, 54, 0.185);\n}\n\n.currentChat {\n    background-color: white;\n    border-radius: 5px;\n    box-shadow: 0px 0px 16px rgba(54, 54, 54, 0.185);\n    padding: 2em;\n    height: 80vh;\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.currentChatHeader{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding-bottom: 2em;\n    height: auto;\n}\n\n.currentChatHeader img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 3em;\n    width: 3em;\n    border-radius: 50%;\n    box-shadow: 0px 0px 6px rgba(54, 54, 54, 0.185);\n    margin-right: 2em;\n}\n\n.currentChatContent {\n    flex-grow: 1;\n    padding: 1em;\n    overflow-y: scroll;\n    display: flex;\n    flex-direction: column;\n}\n\n.message {\n    width: 16em;\n    border: 1px solid rgb(233, 233, 233);\n    box-shadow: 0px 0px 6px rgba(83, 83, 83, 0.13);\n    border-radius: 10px;\n    padding: 0.5em 1em;\n    margin-bottom: 1.5em;\n}\n\n.messageContent {\n    margin-bottom: 0.5em;\n}\n\n.messageTime {\n    text-align: end;\n}\n\n.received {\n    \n}\n\n.sent {\n    align-self: flex-end;\n    background-color: #ffc107;\n}\n\n.currentChatInput{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin: 2em 3em 0;\n}\n\n#inputMessage {\n    height: 2em;\n    border: 1px solid rgb(233, 233, 233);\n    box-shadow: 0px 0px 6px rgba(54, 54, 54, 0.185);\n    border-radius: 9999px;\n    flex-grow: 1;\n    margin-right: 2em;\n}\n\n#submitMessage {\n    border: none;\n    height:  2em;\n    width: 2em;\n    border-radius: 50%;\n    box-shadow: 0px 0px 6px rgba(54, 54, 54, 0.185);\n    background-color: #ffc107;\n    color: white;\n    font-weight: bolder;\n}\n\n/* @media(max-width: 800px) {\n    html {\n        overflow-y: scroll;\n    }\n\n    .bodyWrapper {\n        flex-direction: column;\n        margin: 5em 2em;\n    }\n\n    .recentChats {\n        padding: 0 2em 2em;\n        height: 7em;\n        overflow-x: scroll;\n        overflow-y: scroll;\n        display: flex;\n        flex-direction: row;\n    }\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcml0ZW0vdXNlcml0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdEQUFnRDtJQUNoRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0RBQWdEO0lBQ2hELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9DQUFvQztJQUNwQyw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztBQUVBOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtBQUM3Qjs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsK0NBQStDO0lBQy9DLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHIiwiZmlsZSI6InNyYy9hcHAvdXNlcml0ZW0vdXNlcml0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5ib2R5V3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIG1hcmdpbjogNWVtIDJlbTtcbn1cblxuaDMge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNpcmN1bGFyXCI7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ucmVjZW50Q2hhdHNXcmFwcGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE2cHggcmdiYSg1NCwgNTQsIDU0LCAwLjE4NSk7XG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XG59XG5cbi5yZWNlbnRDaGF0c1dyYXBwZXIgaDN7XG4gICAgbWFyZ2luOiAxZW0gMmVtIDFlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWNlbnRDaGF0cyB7XG4gICAgcGFkZGluZzogMCAyZW0gMmVtO1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uY2hhdENhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIG1hcmdpbjogMi41ZW0gMDtcbn1cblxuLmNoYXROYW1lIHtcbiAgICBmb250LWZhbWlseTogXCJDaXJjdWxhclwiO1xufVxuXG4uY2hhdEltYWdlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLmNoYXRJbWFnZSBpbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGhlaWdodDogM2VtO1xuICAgIHdpZHRoOiAzZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoNTQsIDU0LCA1NCwgMC4xODUpO1xufVxuXG4uY3VycmVudENoYXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE2cHggcmdiYSg1NCwgNTQsIDU0LCAwLjE4NSk7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGhlaWdodDogODB2aDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jdXJyZW50Q2hhdEhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmN1cnJlbnRDaGF0SGVhZGVyIGltZyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgd2lkdGg6IDNlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSg1NCwgNTQsIDU0LCAwLjE4NSk7XG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XG59XG5cbi5jdXJyZW50Q2hhdENvbnRlbnQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1lc3NhZ2Uge1xuICAgIHdpZHRoOiAxNmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDgzLCA4MywgODMsIDAuMTMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuXG4ubWVzc2FnZUNvbnRlbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG4ubWVzc2FnZVRpbWUge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLnJlY2VpdmVkIHtcbiAgICBcbn1cblxuLnNlbnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG59XG5cblxuLmN1cnJlbnRDaGF0SW5wdXR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyZW0gM2VtIDA7XG59XG5cbiNpbnB1dE1lc3NhZ2Uge1xuICAgIGhlaWdodDogMmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDU0LCA1NCwgNTQsIDAuMTg1KTtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG4jc3VibWl0TWVzc2FnZSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogIDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDU0LCA1NCwgNTQsIDAuMTg1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5cbi8qIEBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgaHRtbCB7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB9XG5cbiAgICAuYm9keVdyYXBwZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW46IDVlbSAyZW07XG4gICAgfVxuXG4gICAgLnJlY2VudENoYXRzIHtcbiAgICAgICAgcGFkZGluZzogMCAyZW0gMmVtO1xuICAgICAgICBoZWlnaHQ6IDdlbTtcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/useritem/useritem.component.html":
/*!**************************************************!*\
  !*** ./src/app/useritem/useritem.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userItem\">\n    <div class=\"chatCard\">\n            <div class=\"chatImage\">\n                    <img src=\"/assets/images/modular2.svg\" alt=\"\">\n                </div>\n    <div class=\"chatInfo\">\n            <div class=\"chatName\">\n                    <span class=\"userName\">\n                    <b>{{user.username}}</b> \n                   </span>\n                    <span class=\"status\" >\n                       <i> {{user.status}} </i>\n             </span>\n             </div>\n             <div class=\"chatPreview\">preview of message</div>\n    </div>\n    \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/useritem/useritem.component.ts":
/*!************************************************!*\
  !*** ./src/app/useritem/useritem.component.ts ***!
  \************************************************/
/*! exports provided: UseritemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseritemComponent", function() { return UseritemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UseritemComponent = /** @class */ (function () {
    function UseritemComponent() {
    }
    UseritemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UseritemComponent.prototype, "user", void 0);
    UseritemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-useritem',
            template: __webpack_require__(/*! ./useritem.component.html */ "./src/app/useritem/useritem.component.html"),
            styles: [__webpack_require__(/*! ./useritem.component.css */ "./src/app/useritem/useritem.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UseritemComponent);
    return UseritemComponent;
}());



/***/ }),

/***/ "./src/app/userlist/userlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/userlist/userlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n    overflow-y: hidden;\n    overflow-x: hidden;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.bodyWrapper {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    margin: 5em 2em;\n}\n\nh3 {\n    font-family: \"Circular\";\n    margin: 0;\n}\n\n.recentChatsWrapper{\n    background-color: white;\n    border-radius: 5px;\n    box-shadow: 0px 0px 16px rgba(54, 54, 54, 0.185);\n    margin-right: 2em;\n}\n\n.recentChatsWrapper h3{\n    margin: 1em 2em 1em;\n    text-align: center;\n}\n\n.recentChats {\n    padding: 0 2em 2em;\n    height: 80vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n\n.chatCard {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex-wrap: nowrap;\n    margin: 2.5em 0;\n}\n\n.chatName {\n    font-family: \"Circular\";\n}\n\n.chatImage {\n    margin-right: 1em;\n}\n\n.chatImage img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 3em;\n    width: 3em;\n    border-radius: 50%;\n    box-shadow: 0px 0px 6px rgba(54, 54, 54, 0.185);\n}\n\n.currentChat {\n    background-color: white;\n    border-radius: 5px;\n    box-shadow: 0px 0px 16px rgba(54, 54, 54, 0.185);\n    padding: 2em;\n    height: 80vh;\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.currentChatHeader{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding-bottom: 2em;\n    height: auto;\n}\n\n.currentChatHeader img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 3em;\n    width: 3em;\n    border-radius: 50%;\n    box-shadow: 0px 0px 6px rgba(54, 54, 54, 0.185);\n    margin-right: 2em;\n}\n\n.currentChatContent {\n    flex-grow: 1;\n    padding: 1em;\n    overflow-y: scroll;\n    display: flex;\n    flex-direction: column;\n}\n\n.message {\n    width: 16em;\n    border: 1px solid rgb(233, 233, 233);\n    box-shadow: 0px 0px 6px rgba(83, 83, 83, 0.13);\n    border-radius: 10px;\n    padding: 0.5em 1em;\n    margin-bottom: 1.5em;\n}\n\n.messageContent {\n    margin-bottom: 0.5em;\n}\n\n.messageTime {\n    text-align: end;\n}\n\n.received {\n    \n}\n\n.sent {\n    align-self: flex-end;\n    background-color: #ffc107;\n}\n\n.currentChatInput{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin: 2em 3em 0;\n}\n\n#inputMessage {\n    height: 2em;\n    border: 1px solid rgb(233, 233, 233);\n    box-shadow: 0px 0px 6px rgba(54, 54, 54, 0.185);\n    border-radius: 9999px;\n    flex-grow: 1;\n    margin-right: 2em;\n}\n\n#submitMessage {\n    border: none;\n    height:  2em;\n    width: 2em;\n    border-radius: 50%;\n    box-shadow: 0px 0px 6px rgba(54, 54, 54, 0.185);\n    background-color: #ffc107;\n    color: white;\n    font-weight: bolder;\n}\n\n/* @media(max-width: 800px) {\n    html {\n        overflow-y: scroll;\n    }\n\n    .bodyWrapper {\n        flex-direction: column;\n        margin: 5em 2em;\n    }\n\n    .recentChats {\n        padding: 0 2em 2em;\n        height: 7em;\n        overflow-x: scroll;\n        overflow-y: scroll;\n        display: flex;\n        flex-direction: row;\n    }\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmxpc3QvdXNlcmxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdEQUFnRDtJQUNoRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0RBQWdEO0lBQ2hELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9DQUFvQztJQUNwQyw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztBQUVBOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtBQUM3Qjs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsK0NBQStDO0lBQy9DLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHIiwiZmlsZSI6InNyYy9hcHAvdXNlcmxpc3QvdXNlcmxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5ib2R5V3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIG1hcmdpbjogNWVtIDJlbTtcbn1cblxuaDMge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNpcmN1bGFyXCI7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ucmVjZW50Q2hhdHNXcmFwcGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE2cHggcmdiYSg1NCwgNTQsIDU0LCAwLjE4NSk7XG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XG59XG5cbi5yZWNlbnRDaGF0c1dyYXBwZXIgaDN7XG4gICAgbWFyZ2luOiAxZW0gMmVtIDFlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWNlbnRDaGF0cyB7XG4gICAgcGFkZGluZzogMCAyZW0gMmVtO1xuICAgIGhlaWdodDogODB2aDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uY2hhdENhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIG1hcmdpbjogMi41ZW0gMDtcbn1cblxuLmNoYXROYW1lIHtcbiAgICBmb250LWZhbWlseTogXCJDaXJjdWxhclwiO1xufVxuXG4uY2hhdEltYWdlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLmNoYXRJbWFnZSBpbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGhlaWdodDogM2VtO1xuICAgIHdpZHRoOiAzZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoNTQsIDU0LCA1NCwgMC4xODUpO1xufVxuXG4uY3VycmVudENoYXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE2cHggcmdiYSg1NCwgNTQsIDU0LCAwLjE4NSk7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGhlaWdodDogODB2aDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jdXJyZW50Q2hhdEhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmN1cnJlbnRDaGF0SGVhZGVyIGltZyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgd2lkdGg6IDNlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSg1NCwgNTQsIDU0LCAwLjE4NSk7XG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XG59XG5cbi5jdXJyZW50Q2hhdENvbnRlbnQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1lc3NhZ2Uge1xuICAgIHdpZHRoOiAxNmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDgzLCA4MywgODMsIDAuMTMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuXG4ubWVzc2FnZUNvbnRlbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG4ubWVzc2FnZVRpbWUge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLnJlY2VpdmVkIHtcbiAgICBcbn1cblxuLnNlbnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG59XG5cblxuLmN1cnJlbnRDaGF0SW5wdXR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyZW0gM2VtIDA7XG59XG5cbiNpbnB1dE1lc3NhZ2Uge1xuICAgIGhlaWdodDogMmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDU0LCA1NCwgNTQsIDAuMTg1KTtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG4jc3VibWl0TWVzc2FnZSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogIDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDU0LCA1NCwgNTQsIDAuMTg1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5cbi8qIEBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgaHRtbCB7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB9XG5cbiAgICAuYm9keVdyYXBwZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW46IDVlbSAyZW07XG4gICAgfVxuXG4gICAgLnJlY2VudENoYXRzIHtcbiAgICAgICAgcGFkZGluZzogMCAyZW0gMmVtO1xuICAgICAgICBoZWlnaHQ6IDdlbTtcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxufSAqL1xuIl19 */"

/***/ }),

/***/ "./src/app/userlist/userlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/userlist/userlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userList\">\n    <div class=\"recentChats\">\n        <h3><Br>Recent Chats<br></h3> \n        \n        <app-useritem\n        [user]=user *ngFor=\"let user of dummyusers\">\n        </app-useritem>\n      </div>\n    \n  </div> "

/***/ }),

/***/ "./src/app/userlist/userlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/userlist/userlist.component.ts ***!
  \************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserlistComponent = /** @class */ (function () {
    function UserlistComponent() {
        this.dummyusers = [
            { username: 'user1', status: 'online', id: 20055 },
            { username: 'user2', status: 'offline', id: 20053 },
            { username: 'user3', status: 'online', id: 45652 }
        ];
    }
    UserlistComponent.prototype.ngOnInit = function () {
    };
    UserlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userlist',
            template: __webpack_require__(/*! ./userlist.component.html */ "./src/app/userlist/userlist.component.html"),
            styles: [__webpack_require__(/*! ./userlist.component.css */ "./src/app/userlist/userlist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/emiliocortina/ASW/dechat_en2b/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map