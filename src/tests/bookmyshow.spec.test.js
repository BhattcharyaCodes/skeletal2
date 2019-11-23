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
const bookmyshow_page_objects_1 = require("../page-objects/bookmyshow.page_objects");
const fs_1 = require("fs");
describe('BookMyShow', () => {
    let EC = protractor_1.protractor.ExpectedConditions;
    let homepage_url = 'https://in.bookmyshow.com/bengaluru';
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get(homepage_url);
    }));
    it('should verify the you can book a ticket and the seat next to you is vacant or not', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(protractor_1.browser.getCurrentUrl()).toEqual(homepage_url);
        let not_now_btn = yield bookmyshow_page_objects_1.not_now_locator_btn();
        if (protractor_1.browser.wait(EC.elementToBeClickable(not_now_btn))) {
            yield not_now_btn.click();
        }
        yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ESCAPE).perform();
        let movie_selector = yield bookmyshow_page_objects_1.movie_card_selector();
        yield protractor_1.browser.executeScript('window.scrollTo(0,100);');
        yield movie_selector.click();
        //await browser.actions().mouseMove(movie_selector).perform();  
        //
        //this was here
        let book_ticket = yield bookmyshow_page_objects_1.book_tickets();
        yield protractor_1.browser.wait(EC.elementToBeClickable(book_ticket));
        yield book_ticket.click();
        let dimension_selector = yield bookmyshow_page_objects_1.dimension_pill();
        if (dimension_selector.isPresent()) {
            yield dimension_selector.click();
        }
        //takes you to date, select 1st card
        let movie_date = yield bookmyshow_page_objects_1.movie_date_locator();
        yield movie_date.click();
        //select 1st time slot
        let time_slot_1 = yield bookmyshow_page_objects_1.movie_time_selector();
        yield time_slot_1.click();
        //accept the TC
        let tc_accept = yield bookmyshow_page_objects_1.tc_accept_btn();
        yield tc_accept.click();
        let seat_num = yield bookmyshow_page_objects_1.seats_needed();
        let sel_seat_btn = yield bookmyshow_page_objects_1.select_seats_button();
        yield seat_num.click();
        yield protractor_1.browser.wait(EC.elementToBeClickable(sel_seat_btn));
        yield sel_seat_btn.click();
        //select the seat position
        let select_seats_btn = yield bookmyshow_page_objects_1.seat_selector();
        yield protractor_1.browser.wait(EC.elementToBeClickable(select_seats_btn));
        yield select_seats_btn.click();
        yield protractor_1.browser.sleep(3000);
        //let pay_now = await pay_now_button();
        // await browser.wait(EC.elementToBeClickable(pay_now));
        //await pay_now.click();
        //check if seat on either side is vacant or not
        //Rough logic
        //     hasClass(element, cls) {
        //         return element.getAttribute('class').then(function (classes) {
        //             return classes.split(' ').indexOf(cls) !== -1;
        //         });
        //     }
        //     verifySeat() {
        //         let count = 0;
        //         let index = 0;
        //         $$('div.seatI').each((element) => {
        //             index += index;
        //             if (count == 3) {
        //                 return $$('div.seatI').get(index - 1);
        //             } else {
        //                 let temp = this.hasClass(element, '_available');
        //                 if (temp) {
        //                     count += count;
        //                 } else {
        //                     count = 0;
        //                 }
        //             }
        //         });
        //     };
        // hasClass(element, cls) {
        //         return element.getAttribute('class').then(function (classes) {
        //             return classes.split(' ').indexOf(cls) !== -1;
        //         });
        //     }
        //     verifySeat() {
        //         let count = 0;
        //         let index = 0;
        //         $$('div.seatI').each((element) => {
        //             index += index;
        //             if (count == 3) {
        //                 return $$('div.seatI').get(index - 1);
        //             } else {
        //                 let temp = this.hasClass(element.$('div.seatI a[href="javascript:;"]'), '_available');
        //                 if (temp) {
        //                     count += count;
        //                 } else {
        //                     count = 0;
        //                 }
        //             }
        //         });
        //     };
        // generate the report in the report generator
        //Implemented protractor beautiful reporter
        //implementing screenshot
        let png = yield protractor_1.browser.takeScreenshot();
        let stream = fs_1.createWriteStream("Reports/movieseat_payment_page_screenshot.png");
        stream.write(new Buffer(png, 'base64'));
        stream.end();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va215c2hvdy5zcGVjLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib29rbXlzaG93LnNwZWMudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUErQztBQUMvQyxxRkFHaUQ7QUFDakQsMkJBQXVDO0FBR3ZDLFFBQVEsQ0FBQyxZQUFZLEVBQUMsR0FBRSxFQUFFO0lBQ3RCLElBQUssRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7SUFDeEMsSUFBSSxZQUFZLEdBQUcscUNBQXFDLENBQUM7SUFFekQsVUFBVSxDQUFDLEdBQU8sRUFBRTtRQUNoQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXBDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUZBQW1GLEVBQUUsR0FBUyxFQUFFO1FBRS9GLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXRELElBQUksV0FBVyxHQUFHLE1BQU0sNkNBQW1CLEVBQUUsQ0FBQztRQUM5QyxJQUFJLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDO1lBQ25ELE1BQU0sV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzdCO1FBQ0QsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsRSxJQUFJLGNBQWMsR0FBRyxNQUFNLDZDQUFtQixFQUFFLENBQUM7UUFDakQsTUFBTSxvQkFBTyxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1FBQ3RELE1BQU0sY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTdCLGdFQUFnRTtRQUNoRSxFQUFF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