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
var item_service_1 = require('./item.service');
var PromoComponent = (function () {
    function PromoComponent(itemService) {
        this.itemService = itemService;
        this.promocodeFunction = {
            "ni16%": (function (price) { return price * 5 / 6; }),
            "ni33%": (function (price) { return price * 2 / 3; }),
            "ni10$": (function (price) { return price - 10; })
        };
    }
    PromoComponent.prototype.getTotalPrice = function () {
        console.log("entered function");
        var func = this.promocodeFunction[this.promocode];
        if (func == undefined)
            return this.itemService.getRetailPrice();
        else
            return Math.floor(func(this.itemService.getRetailPrice()));
    };
    PromoComponent = __decorate([
        core_1.Component({
            selector: 'promo-area',
            template: "\n    <label>Promocode: </label> <input [(ngModel)]=\"promocode\" value=\"ni16%\" />\n    <h3>Total Price: {{ getTotalPrice()}}</h3>\n  "
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService])
    ], PromoComponent);
    return PromoComponent;
}());
exports.PromoComponent = PromoComponent;
//# sourceMappingURL=promo.component.js.map