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
var mock_items_1 = require('./mock-items');
var ItemService = (function () {
    function ItemService() {
        this.items = mock_items_1.ITEMS;
    }
    ItemService.prototype.getItems = function () {
        return mock_items_1.ITEMS;
    };
    ItemService.prototype.decrement = function (item) { if (item.quantity > 1)
        item.quantity--; };
    ItemService.prototype.increment = function (item) { item.quantity++; };
    ItemService.prototype.removeItem = function (index) {
        console.log(index);
        this.items.splice(index, 1);
    };
    ItemService.prototype.getRetailPrice = function () {
        var total = 0;
        for (var i = 0; i < this.items.length; i++) {
            var thisItem = this.items[i];
            total += thisItem.itemPrice * thisItem.quantity;
        }
        return total;
    };
    ItemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map