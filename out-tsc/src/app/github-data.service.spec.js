import { TestBed } from '@angular/core/testing';
import { GithubDataService } from './github-data.service';
describe('GithubDataService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(GithubDataService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=github-data.service.spec.js.map