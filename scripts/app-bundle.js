define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App(message, title) {
            if (message === void 0) { message = 'To the Aurelia + TypeScript + PostCSS Skeleton'; }
            if (title === void 0) { title = 'Welcome!'; }
            this.message = message;
            this.title = title;
        }
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./app.css\"></require>\n  <nav class=\"app__navigation\">Nav stuff</nav>\n  <div class=\"app__flex-grid app__flex-grid--c6 app__flex-grid--start app__flex-grid--gutters\">\n    <div class=\"app__flex-grid__cell\">\n      <div class=\"app__sup\">\n        1/6\n      </div>\n    </div>\n  </div>\n  <div class=\"app__flex-grid app__flex-grid--c6 app__flex-grid--center app__flex-grid--gutters\">\n    <div class=\"app__flex-grid__cell\">\n      <div class=\"app__sup\">\n        1/6\n      </div>\n    </div>\n  </div>\n  <div class=\"app__flex-grid app__flex-grid--c6 app__flex-grid--end app__flex-grid--gutters\">\n    <div class=\"app__flex-grid__cell\">\n      <div class=\"app__sup\">\n        1/6\n      </div>\n    </div>\n  </div>\n\n  <div class=\"app__flex-grid app__flex-grid--c12 app__flex-grid--center app__flex-grid--gutters\">\n    <div class=\"app__flex-grid__cell\">\n      <div class=\"app__sup\">\n        1/12\n      </div>\n    </div>\n  </div>\n\n  <div class=\"app__flex-grid app__flex-grid--c2 app__flex-grid--start app__flex-grid--gutters\">\n    <div class=\"app__flex-grid__cell\">\n      <div class=\"app__sup\">\n        1/2\n      </div>\n    </div>\n  </div>\n</template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "/*@import './styles/_config.css';\n@import './styles/_grid.css';*/\n\nbody {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n.app__navigation {\n    background-color: blue;\n    width: 100%;\n    height: 100px;\n}\n\n/*.sup {\n    background-color: #ccc;\n    height: 100%;\n    padding: .8em 1em 0;\n    margin-bottom: 1em;\n}\n\n.flex-grid {\n    display: flex;\n    flex-direction: row;\n    &__container {\n        max-width: 100em;\n    }\n    &__cell {\n        flex: 1;\n        &>p {\n            background-color: #eee;\n        }\n        &--top {\n            align-self: flex-start;\n        }\n        &--center {\n            align-self: center;\n        }\n        &--bottom {\n            align-self: flex-end;\n        }\n    }\n    &--gutters {\n        margin: 1em 0 0 -1em;\n        &>.flex-grid__cell {\n            padding: 1em 0 0 1em;\n        }\n    }\n    &--start {\n        justify-content: flex-start;\n    }\n    &--center {\n        justify-content: center;\n    }\n    &--end {\n        justify-content: flex-end;\n    }\n}*/\n\n/*@for $i from 1 to 2 {\n    .flex-grid--c$(i) > .flex-grid__cell {\n        flex: 0 0 100%;\n    }\n}*/\n\n/* Defines how much width each column takes up per row with cN number of columns */\n\n.app__flex-grid--c1>.app__flex-grid__cell {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33%;\n            flex: 0 0 33%;\n}\n\n.app__flex-grid--c2>.app__flex-grid__cell {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n}\n\n.app__flex-grid--c3>.app__flex-grid__cell:first-of-type {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33%;\n            flex: 0 0 33%;\n}\n\n.app__flex-grid--c4>.app__flex-grid__cell:first-of-type {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n}\n\n.app__flex-grid--c6>.app__flex-grid__cell {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.67%;\n            flex: 0 0 16.67%;\n}\n\n.app__flex-grid--c12>.app__flex-grid__cell {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 6.25%;\n            flex: 0 0 6.25%;\n}\n\n.app__sup {\n    background-color: red;\n}\n\n@media all and (min-width: 768px) and (max-width: 1199px) {\n    .app__sup {\n        background-color: blue;\n    }\n}\n\n@media all and (min-width: 1200px) {\n    .app__sup {\n        background-color: #ccc;\n        height: 100%;\n        padding: .8em 1em 0;\n        margin-bottom: 1em;\n    }\n    .app__flex-grid {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n    }\n    .app__flex-grid__container {\n        max-width: 100em;\n    }\n    .app__flex-grid__cell {\n        -webkit-box-flex: 1;\n        -ms-flex: 1;\n        flex: 1;\n    }\n    .app__flex-grid__cell>p {\n        background-color: #eee;\n    }\n    .app__flex-grid__cell--top {\n        -ms-flex-item-align: start;\n        align-self: flex-start;\n    }\n    .app__flex-grid__cell--center {\n        -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    }\n    .app__flex-grid__cell--bottom {\n        -ms-flex-item-align: end;\n        align-self: flex-end;\n    }\n    .app__flex-grid--gutters {\n        margin: 1em 0 0 -1em;\n    }\n    .app__flex-grid--gutters>.app__flex-grid__cell {\n        padding: 1em 0 0 1em;\n    }\n    .app__flex-grid--start {\n        -webkit-box-pack: start;\n        -ms-flex-pack: start;\n        justify-content: flex-start;\n    }\n    .app__flex-grid--center {\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n    }\n    .app__flex-grid--end {\n        -webkit-box-pack: end;\n        -ms-flex-pack: end;\n        justify-content: flex-end;\n    }\n    /*@for $i from 1 to 2 {\n    .flex-grid--c$(i) > .flex-grid__cell {\n        flex: 0 0 100%;\n    }\n}*/\n    .app__flex-grid--c1>.app__flex-grid__cell {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 33%;\n                flex: 0 0 33%;\n    }\n    .app__flex-grid--c2>.app__flex-grid__cell {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 50%;\n                flex: 0 0 50%;\n    }\n    .app__flex-grid--c3>.app__flex-grid__cell:first-of-type {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 33%;\n                flex: 0 0 33%;\n    }\n    .app__flex-grid--c4>.app__flex-grid__cell:first-of-type {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 25%;\n                flex: 0 0 25%;\n    }\n    .app__flex-grid--c6>.app__flex-grid__cell {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 16.67%;\n                flex: 0 0 16.67%;\n    }\n    .app__flex-grid--c12>.app__flex-grid__cell {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 6.25%;\n                flex: 0 0 6.25%;\n    }\n    .app__navigation {\n        background-color: blue;\n        width: 100%;\n        height: 100px;\n    }\n}"; });
define('text!styles/_config.css', ['module'], function(module) { module.exports = "body {\n    height: 100%;\n    width:100%;\n    margin: 0;\n    padding: 0;\n}\n/* Mixins */\n/* Animations */\n@-webkit-keyframes _config__fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@keyframes _config__fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@-webkit-keyframes _config__fadeOut {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n@keyframes _config__fadeOut {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n"; });
define('text!styles/_grid.css', ['module'], function(module) { module.exports = "/*.flex-grid {\n    display: flex;\n    align-items: stretch;\n}\n\n.col {\n    flex: 1;\n    text-align: center;\n    margin: 10px;\n    /*@for $i from 0 to 12*/\n/*}*/\n/*.c {\n    &--8 {\n        margin-left: calc(3/8 * 100% + 10px);\n    }\n    &--9 {\n        margin-left: calc(4/8 * 100% + 10px);\n        margin-right: calc(2/8 * 100% + 10px);\n    }\n    &--10 {\n        margin-left: calc(5/8 * 100% + 10px);\n        margin-right: calc(2/8 * 100% + 10px);\n    }\n    &--11 {\n        margin-left: calc(6/8 * 100% + 10px);\n        margin-right: calc(1/8 * 100% + 10px);\n    }\n    &--12 {\n        margin-left: calc(7/8 * 100% + 10px);\n        margin-right: calc(0/8 * 100% + 10px);\n    }\n}*/\n/*.sup {\n    background-color: #ccc;\n    height: 100%;\n}\n\n.flex-grid {\n    display: flex;\n    flex-direction: row;\n    &__container {\n        max-width: 100em;\n    }\n    &--gutters {\n        margin: -1em 0 0 -1em;\n        & > .flex-grid__cell {\n            padding: 1em 0 0 1em;\n        }\n    }\n    &--start {\n        justify-content: flex-start;\n    }\n    &--center {\n        justify-content: center;\n    }\n    &--end {\n        justify-content: flex-end;\n    }\n    &--full {}\n}\n\n.flex-grid__cell {\n    flex: 1;\n    &>p {\n        background-color: #eee;\n    }\n    &--top {}\n    &--center {}\n    &--bottom {}\n}*/\n/*.grid--fit>.grid__cell {\n    flex: 1;\n}\n\n.grid--full>.grid__cell {\n    flex: 0 0 100%;\n}\n\n.grid--half>.grid__cell {\n    flex: 0 0 50%;\n}\n\n.grid--third>.grid-cell {\n    flex: 0 0 33.3333%;\n}\n\n.grid--fourth>.grid__cell {\n    flex: 0 0 25%;\n}*/\n@media (min-width: 25em) and (max-width: 48em) {}"; });
//# sourceMappingURL=app-bundle.js.map