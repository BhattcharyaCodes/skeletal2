"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const dummy_page_1 = require("../page-objects/dummy.page");
describe('Flipkart', () => {
    let homepage_url = "https://www.flipkart.com/";
    let EC = protractor_1.protractor.ExpectedConditions;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get(homepage_url);
    }));
    it('should verify the header.', () => __awaiter(void 0, void 0, void 0, function* () {
        let header = yield dummy_page_1.getHeader();
        expect(header.isPresent()).toBeTruthy();
        expect(true).toBe(true);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtbXkudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImR1bW15LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBdUU7QUFDdkUsMkRBQXVEO0FBRXZELFFBQVEsQ0FBQyxVQUFVLEVBQUMsR0FBRSxFQUFFO0lBQ3BCLElBQUksWUFBWSxHQUFHLDJCQUEyQixDQUFDO0lBQy9DLElBQUssRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7SUFHeEMsVUFBVSxDQUFDLEdBQU8sRUFBRTtRQUNoQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkJBQTJCLEVBQUUsR0FBUyxFQUFFO1FBQ3ZDLElBQUksTUFBTSxHQUFHLE1BQU0sc0JBQVMsRUFBRSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHUCxDQUFDLENBQUMsQ0FBQyJ9