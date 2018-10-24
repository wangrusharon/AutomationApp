var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
var GithubDataService = /** @class */ (function () {
    function GithubDataService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = "https://api.github.com/repos/wangrusharon/MySampleRepository/git/trees/7d4ec02921ec1d13edb41f084819fc8e176983fa?recursive=1  ";
    }
    GithubDataService.prototype.getCategories = function () {
        return this.httpClient
            .get(this.apiUrl).pipe(this.extractData);
    };
    GithubDataService.prototype.extractData = function (response) {
        var body = response.json;
        return body || {};
    };
    GithubDataService.prototype.handleError = function (error) {
    };
    GithubDataService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], GithubDataService);
    return GithubDataService;
}());
export { GithubDataService };
//# sourceMappingURL=github-data.service.js.map