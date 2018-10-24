var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { GithubDataService } from '../github-data.service';
var SiderBarComponent = /** @class */ (function () {
    function SiderBarComponent(githubDataService) {
        this.githubDataService = githubDataService;
        this.Categories = new Array();
    }
    SiderBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.githubDataService.getCategories().subscribe(function (categories) {
            _this.Categories = categories;
        }, function (err) { console.log(err); });
    };
    SiderBarComponent = __decorate([
        Component({
            selector: 'app-sider-bar',
            templateUrl: './sider-bar.component.html',
            styleUrls: ['./sider-bar.component.css']
        }),
        __metadata("design:paramtypes", [GithubDataService])
    ], SiderBarComponent);
    return SiderBarComponent;
}());
export { SiderBarComponent };
//# sourceMappingURL=sider-bar.component.js.map