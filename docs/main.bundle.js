webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center the-team-header justify-content-center\">\n  <div class=\"col-md-8\">\n    <h2>The Team</h2>  \n  </div>\n</div>\n\n<div class=\"team-container\">\n  <div class=\"member\">\n    <img class=\"member-photo\" src=\"https://mjstack.com.ng/images/images.png\"\n         alt=\"Meshach Joseph\">\n\n    <div class=\"row member-details\">\n      <div class=\"col-sm-9\">\n        <h3>\n         Meshach Joseph\n        </h3>\n\n        <h4>\n          Angular, Frontend Developer\n        </h4>\n      </div>\n\n\n    </div>\n\n    <div class=\"row\">\n\n\n      <div class=\"col-md-12\"><p>I am expert <strong>frontend developer</strong>, <strong>data analyst</strong>, <strong>research scholar</strong> with years of experience, passionate to develop outstanding design.</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"member\">\n    <img class=\"member-photo\" src=\"https://mjstack.com.ng/images/images.png\"\n         alt=\"Meshach Joseph\">\n\n    <div class=\"row member-details\">\n      <div class=\"col-sm-9\">\n        <h3>\n         Meshach Joseph\n        </h3>\n\n        <h4>\n          Angular, Frontend Developer\n        </h4>\n      </div>\n\n\n    </div>\n\n    <div class=\"row\">\n\n\n      <div class=\"col-md-12\"><p>I am expert <strong>frontend developer</strong>, <strong>data analyst</strong>, <strong>research scholar</strong> with years of experience, passionate to develop outstanding design.</p>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"member\">\n    <img class=\"member-photo\" src=\"https://mjstack.com.ng/images/images.png\"\n         alt=\"Meshach Joseph\">\n\n    <div class=\"row member-details\">\n      <div class=\"col-sm-9\">\n        <h3>\n         Meshach Joseph\n        </h3>\n\n        <h4>\n          Angular, Frontend Developer\n        </h4>\n      </div>\n\n\n    </div>\n\n    <div class=\"row\">\n\n\n      <div class=\"col-md-12\"><p>I am expert <strong>frontend developer</strong>, <strong>data analyst</strong>, <strong>research scholar</strong> with years of experience, passionate to develop outstanding design.</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ".the-team-header {\n  margin: 100px 0 90px; }\n  .the-team-header h2 {\n    color: #00a4e9;\n    margin-bottom: 20px;\n    font-size: 36px; }\n  .team-content {\n  margin: 0 auto;\n  max-width: 580px;\n  font-size: 18px; }\n  .team-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .member {\n  width: 24%;\n  margin: 0 0 150px; }\n  @media screen and (max-width: 1000px) {\n  .member {\n    width: 32%;\n    margin-bottom: 50px; } }\n  @media screen and (max-width: 900px) {\n  .member {\n    width: 49%; } }\n  @media screen and (max-width: 480px) {\n  .member {\n    width: 100%; } }\n  .member-photo {\n  max-width: 100%;\n  margin-bottom: 25px; }\n  h3 {\n  margin: 0 0 5px;\n  font-size: 20px; }\n  h4 {\n  font-size: 16px;\n  margin: 0 0 20px; }\n  .member-details {\n  position: relative; }\n  .member-details .member-social {\n    position: absolute;\n    top: 5px;\n    right: 0;\n    max-width: 100px; }\n  .member-details .member-social i {\n      padding-right: 15px;\n      float: left;\n      font-size: 16px;\n      color: #353535; }\n  .member-details .member-social a:last-of-type i {\n      padding-right: 0; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light bg-light\">\n  <a class=\"logo\" routerLink=\"/\">\n    <i class=\"fa fa-home fa-2x\" aria-hidden=\"true\"></i>\n  </a>\n\n  <ul class=\"nav justify-content-end align-items-center\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/about\">About</a>\n    </li>\n\n  </ul>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/app-header/app-header.component.scss":
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 30px; }\n"

/***/ }),

/***/ "./src/app/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__application_state_service__ = __webpack_require__("./src/app/application-state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppHeaderComponent = (function () {
    function AppHeaderComponent(applicationStateService, router) {
        this.applicationStateService = applicationStateService;
        this.router = router;
        this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
        this.isToShowUserProfile = false;
    }
    AppHeaderComponent.prototype.onUserProfileClick = function () {
        if (!this.isMobileResolution) {
            if (this.isToShowUserProfile) {
                this.isToShowUserProfile = false;
            }
            else {
                this.isToShowUserProfile = true;
            }
        }
        else {
            this.router.navigate(['/user-profile']);
        }
    };
    AppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/app-header/app-header.component.html"),
            styles: [__webpack_require__("./src/app/app-header/app-header.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('userProfileAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0, marginTop: 500 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, marginTop: 50 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('150ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0, marginTop: 500 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__application_state_service__["a" /* ApplicationStateService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n <app-header></app-header>\n\n  <main id=\"main-content\">\n    <div class=\"container main-content\">\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentModel; });
var AppComponentModel = (function () {
    function AppComponentModel() {
        this.isToShowUserProfile = false;
    }
    AppComponentModel.prototype.clone = function () {
        var model = new AppComponentModel();
        model.isToShowUserProfile = this.isToShowUserProfile;
        return model;
    };
    return AppComponentModel;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-content {\n  margin-top: 100px;\n  margin-bottom: 50px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component_model__ = __webpack_require__("./src/app/app.component.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__application_state_service__ = __webpack_require__("./src/app/application-state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(applicationStateService) {
        this.applicationStateService = applicationStateService;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__app_component_model__["a" /* AppComponentModel */]();
        this.myViewModel = new __WEBPACK_IMPORTED_MODULE_1__app_component_model__["a" /* AppComponentModel */]();
        this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
    }
    AppComponent.prototype.onUserProfileClick = function () {
        if (this.model.isToShowUserProfile) {
            this.model.isToShowUserProfile = false;
        }
        else {
            this.model.isToShowUserProfile = true;
        }
        this.updateView();
    };
    AppComponent.prototype.updateView = function () {
        this.myViewModel = this.model.clone();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["m" /* trigger */])('userProfileAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* style */])({ opacity: 0, marginTop: 500 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* style */])({ opacity: 1, marginTop: 50 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('150ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* style */])({ opacity: 0, marginTop: 500 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__application_state_service__["a" /* ApplicationStateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_module__ = __webpack_require__("./src/app/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__frontpage_desktop_desktop_frontpage_component__ = __webpack_require__("./src/app/frontpage/desktop/desktop-frontpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__frontpage_mobile_mobile_frontpage_component__ = __webpack_require__("./src/app/frontpage/mobile/mobile-frontpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_header_app_header_component__ = __webpack_require__("./src/app/app-header/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_product_component_mobile__ = __webpack_require__("./src/app/product/product.component.mobile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_product_component_desktop__ = __webpack_require__("./src/app/product/product.component.desktop.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__product_product_component_desktop__["a" /* ProductComponentDesktop */],
                __WEBPACK_IMPORTED_MODULE_11__product_product_component_mobile__["a" /* ProductComponentMobile */],
                __WEBPACK_IMPORTED_MODULE_7__frontpage_desktop_desktop_frontpage_component__["a" /* DesktopFrontpageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__frontpage_mobile_mobile_frontpage_component__["a" /* MobileFrontpageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__app_header_app_header_component__["a" /* AppHeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatTabsModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__frontpage_mobile_mobile_frontpage_component__["a" /* MobileFrontpageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__product_product_component_mobile__["a" /* ProductComponentMobile */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__frontpage_desktop_desktop_frontpage_component__ = __webpack_require__("./src/app/frontpage/desktop/desktop-frontpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__frontpage_mobile_mobile_frontpage_component__ = __webpack_require__("./src/app/frontpage/mobile/mobile-frontpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__application_state_service__ = __webpack_require__("./src/app/application-state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product_component_desktop__ = __webpack_require__("./src/app/product/product.component.desktop.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product_component_mobile__ = __webpack_require__("./src/app/product/product.component.mobile.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var desktop_routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__frontpage_desktop_desktop_frontpage_component__["a" /* DesktopFrontpageComponent */], children: [
            { path: 'products/:productName', component: __WEBPACK_IMPORTED_MODULE_6__product_product_component_desktop__["a" /* ProductComponentDesktop */] }
        ]
    },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    // directs all other routes to the main page
    { path: '**', redirectTo: '' }
];
var mobile_routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__frontpage_mobile_mobile_frontpage_component__["a" /* MobileFrontpageComponent */] },
    { path: 'products/:productName', component: __WEBPACK_IMPORTED_MODULE_7__product_product_component_mobile__["a" /* ProductComponentMobile */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    // directs all other routes to the main page
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule(router, applicationStateService) {
        this.router = router;
        this.applicationStateService = applicationStateService;
        if (applicationStateService.getIsMobileResolution()) {
            router.resetConfig(mobile_routes);
        }
    }
    /**
     * this function inject new routes for the given module instead the current routes. the operation happens on the given current routes object so after
     * this method a call to reset routes on router should be called with the the current routes object.
     * @param currentRoutes
     * @param routesToInject
     * @param childNameToReplaceRoutesUnder - the module name to replace its routes.
     */
    AppRoutingModule.prototype.injectModuleRoutes = function (currentRoutes, routesToInject, childNameToReplaceRoutesUnder) {
        for (var i = 0; i < currentRoutes.length; i++) {
            if (currentRoutes[i].loadChildren != null &&
                currentRoutes[i].loadChildren.toString().indexOf(childNameToReplaceRoutesUnder) != -1) {
                // we found it. taking the route prefix
                var prefixRoute = currentRoutes[i].path;
                // first removing the module line
                currentRoutes.splice(i, 1);
                // now injecting the new routes
                // we need to add the prefix route first
                this.addPrefixToRoutes(routesToInject, prefixRoute);
                for (var _i = 0, routesToInject_1 = routesToInject; _i < routesToInject_1.length; _i++) {
                    var route = routesToInject_1[_i];
                    currentRoutes.push(route);
                }
                // since we found it we can break the injection
                return;
            }
            if (currentRoutes[i].children != null) {
                this.injectModuleRoutes(currentRoutes[i].children, routesToInject, childNameToReplaceRoutesUnder);
            }
        }
    };
    AppRoutingModule.prototype.addPrefixToRoutes = function (routes, prefix) {
        for (var i = 0; i < routes.length; i++) {
            routes[i].path = prefix + '/' + routes[i].path;
        }
    };
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            // as default we set the desktop routing configuration. if mobile will be started it will be replaced below.
            // note that we must specify some routes here (not an empty array) otherwise the trick below doesn't work...
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(desktop_routes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* PreloadAllModules */] })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__application_state_service__["a" /* ApplicationStateService */]])
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/application-state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationStateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApplicationStateService = (function () {
    function ApplicationStateService() {
        if (window.innerWidth < 768) {
            this.isMobileResolution = true;
        }
        else {
            this.isMobileResolution = false;
        }
    }
    ApplicationStateService.prototype.getIsMobileResolution = function () {
        return this.isMobileResolution;
    };
    ApplicationStateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ApplicationStateService);
    return ApplicationStateService;
}());



/***/ }),

/***/ "./src/app/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__application_state_service__ = __webpack_require__("./src/app/application-state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * this module include services that must be singeltons. it should only be included in the app module
 * in order to work like that. see here for more info under core module:
 * https://angular.io/docs/ts/latest/guide/ngmodule.html#!#shared-module-for-root
 */
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__application_state_service__["a" /* ApplicationStateService */]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/frontpage/desktop/desktop-frontpage.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  Cracking the Challenge - Multiple Views on Angular\n</h1>\n\n<div class=\"slider\" #slider *ngIf=\"myViewModel.sliderItems\">\n  <ul class=\"slides\">\n    <li class=\"slide\" *ngFor=\"let sliderItem of myViewModel.sliderItems\">\n      <a [routerLink]=\"'products/' + [sliderItem.productName]\">\n        <img [src]=\"sliderItem.imageSafeUrl\" [alt]=\"sliderItem.productName\">\n      </a>\n    </li>\n  </ul>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/frontpage/desktop/desktop-frontpage.component.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopFrontpageComponentModel; });
var DesktopFrontpageComponentModel = (function () {
    function DesktopFrontpageComponentModel() {
        this.sliderItems = [];
    }
    DesktopFrontpageComponentModel.prototype.clone = function () {
        var clonedModel = new DesktopFrontpageComponentModel();
        clonedModel.sliderItems = Array.from(this.sliderItems);
        return clonedModel;
    };
    return DesktopFrontpageComponentModel;
}());



/***/ }),

/***/ "./src/app/frontpage/desktop/desktop-frontpage.component.scss":
/***/ (function(module, exports) {

module.exports = ":host::before {\n  content: '';\n  width: 100vw;\n  height: 100vh;\n  background: #353535;\n  position: fixed;\n  top: 0;\n  left: 0; }\n\nh1 {\n  color: #fff;\n  text-align: center; }\n\n.slider {\n  margin-bottom: 30px; }\n\n.flipster img {\n  width: 600px; }\n"

/***/ }),

/***/ "./src/app/frontpage/desktop/desktop-frontpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopFrontpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__desktop_frontpage_component_model__ = __webpack_require__("./src/app/frontpage/desktop/desktop-frontpage.component.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homepage_item__ = __webpack_require__("./src/app/frontpage/homepage-item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DesktopFrontpageComponent = (function () {
    function DesktopFrontpageComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__desktop_frontpage_component_model__["a" /* DesktopFrontpageComponentModel */]();
        this.myViewModel = new __WEBPACK_IMPORTED_MODULE_1__desktop_frontpage_component_model__["a" /* DesktopFrontpageComponentModel */]();
    }
    DesktopFrontpageComponent.prototype.ngOnInit = function () {
        this.updateImageUrls();
        this.updateView();
    };
    DesktopFrontpageComponent.prototype.ngAfterViewInit = function () {
        this.initFlipster();
    };
    DesktopFrontpageComponent.prototype.updateView = function () {
        this.myViewModel = this.model.clone();
    };
    DesktopFrontpageComponent.prototype.updateImageUrls = function () {
        var _this = this;
        var imagesUrls = [];
        imagesUrls.push('../../../assets/images/front-page/xbox.jpg', '../../../assets/images/front-page/iphone.jpg', '../../../assets/images/front-page/ipad.jpg', '../../../assets/images/front-page/hoverboard.jpg', '../../../assets/images/front-page/banana-guard.jpg');
        imagesUrls.forEach(function (imageUrl, index) {
            var homepageItem = new __WEBPACK_IMPORTED_MODULE_3__homepage_item__["a" /* HomepageItem */]();
            var productName = '';
            if (index % 2) {
                productName = 'chair';
            }
            else {
                productName = 'funnel';
            }
            homepageItem.imageSafeUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
            homepageItem.productName = productName;
            _this.model.sliderItems.push(homepageItem);
        });
    };
    DesktopFrontpageComponent.prototype.initFlipster = function () {
        window.jQuery(this.slider.nativeElement).flipster({
            style: 'flat',
            scrollwheel: true,
            loop: true,
            spacing: -0.35,
            buttons: true
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DesktopFrontpageComponent.prototype, "slider", void 0);
    DesktopFrontpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-desktop-frontpage',
            template: __webpack_require__("./src/app/frontpage/desktop/desktop-frontpage.component.html"),
            styles: [__webpack_require__("./src/app/frontpage/desktop/desktop-frontpage.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], DesktopFrontpageComponent);
    return DesktopFrontpageComponent;
}());



/***/ }),

/***/ "./src/app/frontpage/homepage-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageItem; });
var HomepageItem = (function () {
    function HomepageItem() {
        this.imageSafeUrl = '';
        this.productName = '';
    }
    return HomepageItem;
}());



/***/ }),

/***/ "./src/app/frontpage/mobile/mobile-frontpage.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  Cracking the Challenge - Multiple Views on Angular\n</h1>\n\n<ul class=\"images-list\" *ngIf=\"myViewModel.sliderItems\">\n  <li class=\"image-item\" *ngFor=\"let sliderItem of myViewModel.sliderItems\">\n    <a [routerLink]=\"'products/' + [sliderItem.productName]\">\n      <img [src]=\"sliderItem.imageSafeUrl\" alt=\"{{sliderItem.productName}}\">\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/frontpage/mobile/mobile-frontpage.component.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileFrontpageComponentModel; });
var MobileFrontpageComponentModel = (function () {
    function MobileFrontpageComponentModel() {
        this.sliderItems = [];
    }
    MobileFrontpageComponentModel.prototype.clone = function () {
        var clonedModel = new MobileFrontpageComponentModel();
        clonedModel.sliderItems = Array.from(this.sliderItems);
        return clonedModel;
    };
    return MobileFrontpageComponentModel;
}());



/***/ }),

/***/ "./src/app/frontpage/mobile/mobile-frontpage.component.scss":
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-bottom: 25px;\n  text-align: center;\n  font-size: 20px; }\n\n.images-list {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.images-list .image-item {\n    margin-bottom: 30px; }\n\n.images-list .image-item:last-child {\n      margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/frontpage/mobile/mobile-frontpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileFrontpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mobile_frontpage_component_model__ = __webpack_require__("./src/app/frontpage/mobile/mobile-frontpage.component.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homepage_item__ = __webpack_require__("./src/app/frontpage/homepage-item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MobileFrontpageComponent = (function () {
    function MobileFrontpageComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__mobile_frontpage_component_model__["a" /* MobileFrontpageComponentModel */]();
        this.myViewModel = new __WEBPACK_IMPORTED_MODULE_1__mobile_frontpage_component_model__["a" /* MobileFrontpageComponentModel */]();
    }
    MobileFrontpageComponent.prototype.ngOnInit = function () {
        this.updateImageUrls();
        this.updateView();
    };
    MobileFrontpageComponent.prototype.ngAfterViewInit = function () {
        window.scrollTo(0, 0);
    };
    MobileFrontpageComponent.prototype.updateView = function () {
        this.myViewModel = this.model.clone();
    };
    MobileFrontpageComponent.prototype.updateImageUrls = function () {
        var _this = this;
        var imagesUrls = [];
        imagesUrls.push('../../../assets/images/front-page/xbox.jpg', '../../../assets/images/front-page/iphone.jpg', '../../../assets/images/front-page/ipad.jpg', '../../../assets/images/front-page/hoverboard.jpg', '../../../assets/images/front-page/banana-guard.jpg');
        imagesUrls.forEach(function (imageUrl, index) {
            var homepageItem = new __WEBPACK_IMPORTED_MODULE_3__homepage_item__["a" /* HomepageItem */]();
            var productName = '';
            if (index % 2) {
                productName = 'chair';
            }
            else {
                productName = 'funnel';
            }
            homepageItem.imageSafeUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
            homepageItem.productName = productName;
            _this.model.sliderItems.push(homepageItem);
        });
    };
    MobileFrontpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mobile-frontpage',
            template: __webpack_require__("./src/app/frontpage/mobile/mobile-frontpage.component.html"),
            styles: [__webpack_require__("./src/app/frontpage/mobile/mobile-frontpage.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], MobileFrontpageComponent);
    return MobileFrontpageComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.desktop.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"product-title\">\n  {{myViewModel.name}}\n</h1>\n\n<img [src]=\"myViewModel.imageUrl\" alt=\"{{myViewModel.name}} name\">\n\n<p>\n  {{myViewModel.description}}\n</p>\n\n<mat-tab-group class=\"product-tab-group\">\n  <mat-tab label=\"Description\">\n    <div>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n      Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n      In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n      feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n      orci enim rutrum enim, vel tempor sapien arcu a tellus.\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"Details\">\n    <div>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n        Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n        In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n        feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n        orci enim rutrum enim, vel tempor sapien arcu a tellus.\n      </p>\n\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n        Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n        In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n        feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n        orci enim rutrum enim, vel tempor sapien arcu a tellus.\n      </p>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"Moar Details\">\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n      Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n      In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n      feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n      orci enim rutrum enim, vel tempor sapien arcu a tellus.\n    </p>\n  </mat-tab>\n\n  <mat-tab label=\"Specs\">\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n      Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n      In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n      feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n      orci enim rutrum enim, vel tempor sapien arcu a tellus.\n    </p>\n  </mat-tab>\n</mat-tab-group>\n\n\n"

/***/ }),

/***/ "./src/app/product/product.component.desktop.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 10vh;\n  right: 10vw;\n  bottom: 10vh;\n  left: 10vw;\n  padding: 25px;\n  background: #fff;\n  border-radius: 10px;\n  z-index: 1000; }\n\nimg {\n  width: 25%;\n  float: left;\n  margin: 0 30px 30px 0; }\n\n:host ::ng-deep .mat-tab-label {\n  text-transform: uppercase; }\n"

/***/ }),

/***/ "./src/app/product/product.component.desktop.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponentDesktop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_component__ = __webpack_require__("./src/app/product/product.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponentDesktop = (function (_super) {
    __extends(ProductComponentDesktop, _super);
    function ProductComponentDesktop(router, sanitizer) {
        return _super.call(this, router, sanitizer) || this;
    }
    ProductComponentDesktop = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-desktop',
            template: __webpack_require__("./src/app/product/product.component.desktop.html"),
            styles: [__webpack_require__("./src/app/product/product.component.desktop.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ProductComponentDesktop);
    return ProductComponentDesktop;
}(__WEBPACK_IMPORTED_MODULE_3__product_component__["a" /* ProductComponent */]));



/***/ }),

/***/ "./src/app/product/product.component.mobile.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"product-title\">\n  {{myViewModel.name}}\n</h1>\n\n<img [src]=\"myViewModel.imageUrl\" alt=\"{{myViewModel.name}} name\">\n\n<p>\n  {{myViewModel.description}}\n</p>\n\n"

/***/ }),

/***/ "./src/app/product/product.component.mobile.scss":
/***/ (function(module, exports) {

module.exports = "img {\n  width: 100%;\n  margin-bottom: 15px; }\n"

/***/ }),

/***/ "./src/app/product/product.component.mobile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponentMobile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_component__ = __webpack_require__("./src/app/product/product.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponentMobile = (function (_super) {
    __extends(ProductComponentMobile, _super);
    function ProductComponentMobile(router, sanitizer) {
        return _super.call(this, router, sanitizer) || this;
    }
    ProductComponentMobile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-mobile',
            template: __webpack_require__("./src/app/product/product.component.mobile.html"),
            styles: [__webpack_require__("./src/app/product/product.component.mobile.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ProductComponentMobile);
    return ProductComponentMobile;
}(__WEBPACK_IMPORTED_MODULE_3__product_component__["a" /* ProductComponent */]));



/***/ }),

/***/ "./src/app/product/product.component.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponentModel; });
var ProductComponentModel = (function () {
    function ProductComponentModel(sanitizer) {
        this.sanitizer = sanitizer;
        this.name = '';
        this.description = '';
        this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
    }
    ProductComponentModel.prototype.clone = function () {
        var clonedModel = new ProductComponentModel(this.sanitizer);
        clonedModel.name = this.name;
        clonedModel.description = this.description;
        clonedModel.imageUrl = this.imageUrl;
        return clonedModel;
    };
    return ProductComponentModel;
}());



/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_component_model__ = __webpack_require__("./src/app/product/product.component.model.ts");

var ProductComponent = (function () {
    function ProductComponent(router, sanitizer) {
        this.router = router;
        this.sanitizer = sanitizer;
        this.model = new __WEBPACK_IMPORTED_MODULE_0__product_component_model__["a" /* ProductComponentModel */](sanitizer);
        this.myViewModel = new __WEBPACK_IMPORTED_MODULE_0__product_component_model__["a" /* ProductComponentModel */](sanitizer);
        this.loadProduct();
        this.updateView();
    }
    ProductComponent.prototype.getProductNameParam = function () {
        var routeSnapshot = this.router.routerState.snapshot.root;
        // the trip title in the last tree node so we will find it
        while (routeSnapshot.firstChild !== null) {
            routeSnapshot = routeSnapshot.firstChild;
        }
        var tripTitle = routeSnapshot.params['productName'];
        return tripTitle;
    };
    ProductComponent.prototype.updateView = function () {
        this.myViewModel = this.model.clone();
    };
    ProductComponent.prototype.loadProduct = function () {
        if (this.getProductNameParam() === 'funnel') {
            this.model.name = 'Funnel';
            this.model.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus sem, consectetur consequat hendrerit in, volutpat sit amet lectus. Nullam sed pretium dolor. Nam sit amet bibendum nibh, ac hendrerit elit. Curabitur scelerisque placerat suscipit. Fusce vitae interdum lacus. Aliquam et massa arcu. Duis eget aliquet erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sagittis sed eros vehicula pulvinar. Nunc tempus nunc vitae magna sollicitudin tincidunt. Curabitur semper tincidunt lorem. Cras venenatis tincidunt arcu, id convallis urna aliquet quis. It putes the "fun" in funnel!';
            this.model.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/images/product-1.jpg');
        }
        else {
            this.model.name = 'Chair';
            this.model.description = 'Suspendisse potenti. Mauris volutpat massa id erat congue, ac ornare nisl dictum. Duis tincidunt ipsum tellus, ac consectetur metus fringilla sed. Suspendisse massa eros, lobortis nec tortor id, sollicitudin auctor ipsum. Vestibulum laoreet, erat sed porttitor sagittis, ex velit pulvinar tellus, a rutrum elit lectus et nisl. Aenean pulvinar lacus tellus, ac finibus dui suscipit at. Nunc bibendum pharetra magna, et consequat urna vestibulum vitae. Vivamus in nulla pulvinar, tempor lorem vel, condimentum massa. Cras fermentum quam finibus dui fringilla, eget luctus sem vehicula. Fusce maximus massa sit amet diam tincidunt, vel feugiat quam venenatis. Cras bibendum turpis vel est ornare venenatis. Donec hendrerit rhoncus erat in vestibulum. Nam hendrerit, magna non imperdiet semper, nisi risus tincidunt ligula, ac euismod libero enim ut massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin placerat ante bibendum libero consequat pulvinar.';
            this.model.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/images/product-2.jpg');
        }
    };
    return ProductComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map