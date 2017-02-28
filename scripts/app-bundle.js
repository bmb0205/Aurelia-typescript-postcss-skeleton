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

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./styles/app.css\"></require>\n  <div class=\"app__home__container\">\n    <article class=\"app__home__article\">\n      <header>\n        <h1>${title}</h1>\n      </header>\n      <section class=\"app__home__text\">\n        ${message}\n      </section>\n    </article>\n    <article class=\"app__home__article\">\n      <p>Asuhhhh dude</p>\n    </article>\n  </div>\n</template>"; });
define('text!styles/_config.css', ['module'], function(module) { module.exports = "body {\n    height: 100%;\n    width:100%;\n    margin: 0;\n    padding: 0;\n}\n/* Mixins */\n/* Animations */\n@keyframes _config__fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@keyframes _config__fadeOut {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}"; });
define('text!styles/app.css', ['module'], function(module) { module.exports = "body {\n    height: 100%;\n    width:100%;\n    margin: 0;\n    padding: 0;\n}\n/* Mixins */\n/* Animations */\n@keyframes app__fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@keyframes app__fadeOut {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n.app__home__container {\n    color: blue;\n}\n.app__home__article {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.app__home__text {\n    color: green;\n}"; });
//# sourceMappingURL=app-bundle.js.map