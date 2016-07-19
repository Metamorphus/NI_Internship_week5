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
var core_1 = require('@angular/core');
var promo_component_1 = require('./promo.component');
var item_service_1 = require('./item.service');
var AppComponent = (function () {
    function AppComponent(itemService) {
        this.itemService = itemService;
    }
    AppComponent.prototype.getItems = function () {
        this.items = this.itemService.getItems();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t<div class=\"container\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<h2 class=\"text-center\">Shopping cart</h2>\n\t\t\t<table align=\"center\">\n\t\t\t\t<thead>\n\t\t\t\t\t<th style=\"width:61%\">Item name</th>\n\t\t\t\t\t<th style=\"width:13%\">Price $</th>\n\t\t\t\t\t<th style=\"width:13%\">Quantity</th>\n\t\t\t\t\t<th style=\"width:13%\">Total $</th>\n\t\t\t\t</thead>\n\n\t\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let item of items; let i=index\">\n\t\t\t\t\t<td class=\"vertical-align-center\">\n\t\t\t\t\t\t<img class=\"image-preview-card\" src={{item.url}}> {{item.name}} \n\t\t\t\t\t\t<button (click)=\"itemService.removeItem(i)\" class=\"delete-button\"><span class=\"glyphicon glyphicon-trash\"></span></button>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"vertical-align-center\">{{item.itemPrice}}</td>\n\t\t\t\t\t<td class=\"vertical-align-center\">\n\t\t\t\t\t\t<button (click)=\"itemService.decrement(item)\" type=\"button\">-</button>\n\t\t\t\t\t\t<input size=\"10px\" [(ngModel)]=\"item.quantity\" value=\"{{item.quantity}}\" type=\"number\" maxlength=\"1\"/>\n\t\t\t\t\t\t<button (click)=\"itemService.increment(item)\" type=\"button\">+</button>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"vertical-align-center\">{{item.quantity*item.itemPrice}}</td>\n\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\n\t\t<div class=\"col-sm-12\">\n\t    <div align=\"right\">\n\t      <h3>Retail Price: {{ itemService.getRetailPrice() }}</h3>\n\t      <promo-area></promo-area>\n\t    </div>\n\t    </div>\n\t</div>\n\t",
            directives: [promo_component_1.PromoComponent],
            providers: [item_service_1.ItemService]
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map