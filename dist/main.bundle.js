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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class = \"container\">\n    <app-messages></app-messages>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//angular imports
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
//local imports
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var nav_component_1 = __webpack_require__("./src/app/nav/nav.component.ts");
var messages_component_1 = __webpack_require__("./src/app/messages/messages.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var game_component_1 = __webpack_require__("./src/app/game/game.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                messages_component_1.MessagesComponent,
                home_component_1.HomeComponent,
                game_component_1.GameComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'game', component: game_component_1.GameComponent },
                    { path: '', redirectTo: '/home', pathMatch: 'full' }
                ])
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent] //put AppComponent right inside index.html.
        })
    ], AppModule);
    return AppModule;
}()); //put nothing in the module
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/game/game.component.css":
/***/ (function(module, exports) {

module.exports = ".my-quotes {\n    cursor: not-allowed;\n}\n\n.my-quotes .enabled {\n    cursor: pointer;\n}\n\n.my-quotes .enabled:hover {\n    background-color: #DDEEFF;\n}"

/***/ }),

/***/ "./src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"row\" *ngIf = \"!Me\">\n  <input #Name /><button (click) = \"login(Name.value)\" >Login</button>\n</div>\n<div class = \"row\" *ngIf = \"Me\">\n  <div class = \"col-md-4\">\n    <div class=\"card\">\n    <div class = \"card-header\">My Quotes ({{Me.Name}})</div>\n      <ul class=\"list-group list-group-flush my-quotes\">\n          <li *ngFor = \"let quote of Me.MyQuotes\" \n              (click) = \"submitQuote($event, quote)\"\n              [ngClass] = \"{ enabled: !MyPlayedQuote() }\" \n              class=\"list-group-item\">\n              <!-- [ngClass] -> if it's not already selected, enable it. [] information from controller to the view. generate anything(string, array, json,...)-->\n              {{quote}}\n          </li>\n      </ul>\n    </div>\n  </div>\n  <div class = \"col-md-8\">\n    <div class=\"card bg-success mb-3\">\n      <div class = \"card-header text-white\">Played Quotes</div>\n        <ul class=\"list-group list-group-flush\">\n          <li *ngFor = \"let quote of Model.PlayedQuotes\" \n              [ngClass] = \"{'list-group-item-success': quote.Chosen}\"\n              class=\"list-group-item d-flex justify-content-between align-items-center\">\n              {{quote.Text}}\n            <span *ngIf = \"!IsEveryoneDone() || (!IAmTheDealer() && !ChosenQuote())\" \n                  class = \"badge badge-light\">hidden</span>\n            <span *ngIf = \"ChosenQuote()\" class = \"badge badge-primary\">{{quote.PlayerId}}</span>\n            <button *ngIf = \"IsEveryoneDone() && IAmTheDealer() && !ChosenQuote()\" \n                    (click) = \"chooseQuote($event, quote)\"\n                    class = \"btn btn-sm btn-primary\">\n                    Choose\n            </button>\n          </li>\n        </ul>\n    </div>\n    <div class = \"card\">\n      <img class = \"card-img-top card-img-bottom\" *ngIf = \"Model.Picture\" [src] = \"Model.Picture.url\"> <!-- [] around an attribute tells angular to bind data (without the curly braces {{Model.Picture}}(input text))- model pushing a view -->\n      <div class = \"card-img-overlay\" style = \"text-align: center\">\n        <button class = \"btn btn-success btn-lg\" (click) = \"flipPicture($event)\">Flip the Picture</button>\n      </div>\n  </div> \n  <div class = \"col-md-4\">\n    <div class=\"card\">\n      <div class = \"card-header\">Other Players</div>\n        <ul class=\"list-group list-group-flush\">\n          <li *ngFor = \"let player of Model.Players\" class=\"list-group-item\">\n            <img style=\"height: 16px; width: 16px\" class=\"rounded\">\n            {{player.Name}}\n          </li>\n        </ul>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var game_1 = __webpack_require__("./src/app/models/game.ts");
var GameComponent = /** @class */ (function () {
    function GameComponent(http) {
        var _this = this;
        this.http = http;
        this.Model = new game_1.Game();
        this._apiUrl = "http://localhost:8080/game";
        this.MyPlayedQuote = function () { return _this.Model.PlayedQuotes.find(function (x) { return x.PlayerId == _this.Me.Name; }); }; //null;
        //WinPlayer = () => this.ChosenQuote().PlayerId;
        //give us the chosen quote (it actually belong to Model)
        this.ChosenQuote = function () { return _this.Model.PlayedQuotes.find(function (x) { return x.Chosen; }); };
        //belong to Model
        this.IsEveryoneDone = function () { return _this.Model.PlayedQuotes.length == _this.Model.Players.length - 1; };
        //dynamic function using fat arrow function. Not just static. It fetches and sets the variable refresh.
        this.IAmTheDealer = function () { return _this.Me.Name == _this.Model.DealerId; };
        //this.Me.Name = "Jinsoo Choi"
        //http.get(this._apiUrl + "/quote", { params : { playerId: this.Me.Name } }).subscribe(data => this.Me.MyQuotes = data.json())//make data an object
        //this.Me.MyQuotes = http.get(this._apiUrl + "/quote") -> would have been if we were synchronous.
        setInterval(function () { return _this.refresh(); }, 1000); //we made a function that calls the function. defined by where its defined.
    }
    GameComponent.prototype.ngOnInit = function () {
    };
    //get the game state, store in our local. Load it every few seconds
    GameComponent.prototype.refresh = function () {
        var _this = this;
        this.http.get(this._apiUrl + "/state")
            .subscribe(function (data) { return _this.Model = data.json(); });
    }; //this makes it local property. We don't have a local variable http in this function
    //we are replacing our Model whenever refreshing. We don't want to have 7 quotes every few seconds. 
    GameComponent.prototype.flipPicture = function (e) {
        if (this.IAmTheDealer() == true && this.Model.PlayedQuotes.length == 0) {
            this.http.post(this._apiUrl + "/picture", {})
                .subscribe(); //we update our model in a second
        }
    }; //rx.js is a functional programming, nothing happens until subscribe activates
    GameComponent.prototype.chooseQuote = function (e, quote) {
        e.preventDefault();
        this.http.post(this._apiUrl + "/quote", { Winner: quote.PlayerId, Text: quote.Text })
            .subscribe();
    };
    //function on the component (in controller, we can specify as much, but in Model, we don't care)
    //add event object inside parameter. e -> DOM object
    GameComponent.prototype.submitQuote = function (e, text) {
        var _this = this;
        e.preventDefault(); //do not create a browser event. I've already handled it.
        if (!this.IAmTheDealer() == true) {
            if (this.MyPlayedQuote())
                return; //If I've summited a quote, don't do anything.
            //falsy that returns false
            //is not a boolean?? -> means : if there's anything there
            this.http.post(this._apiUrl + "/quote", { Text: text, PlayerId: this.Me.Name })
                .subscribe(function (data) {
                if (data.json().sucess) {
                    _this.Me.MyQuotes.splice(_this.Me.MyQuotes.indexOf(text), 1); //Only if there's one quote submitted
                }
            });
        }
        //if not, push the quote and splice
        //this.Model.PlayedQuote.push();
    };
    /*
    //quote that I submmited already. How do we keep track of it?
    MyPlayedQuote(): Quote | null {
      //putting types together, typescript specific.
      //a function can return any type we want. If it's not null, it can't have null
  
      //fat arrow function
      return this.Model.PlayedQuote.find( x => x.PlayerName == this.Me.Name ); //null;
    }
    */
    GameComponent.prototype.login = function (name) {
        var _this = this;
        this.http.get(this._apiUrl + "/quote", { params: { playerId: name } })
            .subscribe(function (data) { return _this.Me = { Name: name, MyQuotes: data.json() }; });
    };
    GameComponent = __decorate([
        core_1.Component({
            selector: 'app-game',
            template: __webpack_require__("./src/app/game/game.component.html"),
            styles: [__webpack_require__("./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"row\">\n  <div class=\"col\">     \n    <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../masakinewhair.gif\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Card title</h5>\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n    </div>\n  </div>\n  <div class=\"col\">     \n      <div class=\"card\">\n          <img class=\"card-img-top\" src=\"masakinewhair.gif\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div>\n      </div>\n  </div>\n  <div class=\"col\">     \n    <div class=\"card\">\n        <img class=\"card-img-top\" src=\"masakinewhair.gif\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Card title</h5>\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = "#messages {\n    padding-top: .5rem;\n}"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div id = \"messages\">\n  <div class = \"alert alert-success\">\n      {{Messages[0]}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
        this.Messages = ['You can now choose your own pictures.'];
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;


/***/ }),

/***/ "./src/app/models/game.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
    function Game() {
        this.Players = [];
        this.PlayedQuotes = [];
    }
    return Game;
}());
exports.Game = Game;
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var Quote = /** @class */ (function () {
    function Quote() {
        this.Chosen = false;
    }
    return Quote;
}());
exports.Quote = Quote;


/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\n    padding: 0 1rem;\n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n    /*\n    .col-lg-4 div {background:rgb(114, 114, 163);\n            height:400px;\n            }  \n    .navbar {\n      padding: 0 1rem;\n    }*/\n</style>\n\n<nav class=\"navbar navbar-expand-sm navbar-dark bg-primary\">\n      <div class = \"container\">\n          <a class=\"navbar-brand\" href=\"#\">What Do You MEME?</a>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n          <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n            <ul class=\"navbar-nav\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(current)</span></a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/game\" routerLinkActive=\"active\">Play</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link disabled\" routerLink=\"#\">Disabled</a>\n              </li>\n            </ul>\n          </div>\n     \n      </div><!-- navbar container -->\n    </nav> <!-- nav bar -->"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NavComponent = /** @class */ (function () {
    //declare here to make it global
    function NavComponent() {
        //var somthing = new Component({});
        //something.animations.find();
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map