"use strict";
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
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var ControlOverviewMapComponent = (function (_super) {
    __extends(ControlOverviewMapComponent, _super);
    function ControlOverviewMapComponent(map) {
        var _this = 
        // console.log('instancing aol-control-overviewmap');
        _super.call(this) || this;
        _this.map = map;
        return _this;
    }
    ControlOverviewMapComponent.prototype.ngOnInit = function () {
        this.map.instance.addControl(this);
    };
    ControlOverviewMapComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-overviewmap');
        this.map.instance.removeControl(this);
    };
    return ControlOverviewMapComponent;
}(openlayers_1.control.OverviewMap));
ControlOverviewMapComponent = __decorate([
    core_1.Component({
        selector: 'aol-control-overviewmap',
        template: "<ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [map_component_1.MapComponent])
], ControlOverviewMapComponent);
exports.ControlOverviewMapComponent = ControlOverviewMapComponent;
//# sourceMappingURL=overviewmap.component.js.map