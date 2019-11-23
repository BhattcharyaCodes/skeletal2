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
function search_box() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield protractor_1.$('input.search-box.typeahead#input-search-box');
    });
}
exports.search_box = search_box;
function book_tickets() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield protractor_1.$('a.showtimes.btn._cuatro');
    });
}
exports.book_tickets = book_tickets;
;
function not_now_locator_btn() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield protractor_1.element(protractor_1.by.id('wzrk-cancel'));
    });
}
exports.not_now_locator_btn = not_now_locator_btn;
;
function tc_accept_btn() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield protractor_1.element(protractor_1.by.id('btnPopupAccept'));
    });
}
exports.tc_accept_btn = tc_accept_btn;
;
function movie_date_locator() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield protractor_1.$$('li._active').get(0);
    });
}
exports.movie_date_locator = movie_date_locator;
;
function movie_card_selector() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield protractor_1.$$('div.card-img').get(5);
    });
}
exports.movie_card_selector = movie_card_selector;
;
function dimension_pill() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield protractor_1.$$('a.dimension-pill').get(0);
    });
}
exports.dimension_pill = dimension_pill;
;
function movie_time_selector() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield protractor_1.$$('div.showtime-pill-container').get(0);
    });
}
exports.movie_time_selector = movie_time_selector;
;
function seats_needed() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield protractor_1.$('li#pop_1');
    });
}
exports.seats_needed = seats_needed;
;
function select_seats_button() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield protractor_1.element(protractor_1.by.id('proceed-Qty'));
    });
}
exports.select_seats_button = select_seats_button;
;
function seat_selector() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield protractor_1.$$('a._available').get(0);
    });
}
exports.seat_selector = seat_selector;
;
function pay_now_button() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield protractor_1.$$('a#btmcntbook').get(0);
    });
}
exports.pay_now_button = pay_now_button;
;
module.exports = { search_box,
    book_tickets,
    not_now_locator_btn,
    movie_card_selector,
    seat_selector,
    tc_accept_btn,
    movie_date_locator,
    dimension_pill,
    movie_time_selector,
    select_seats_button,
    seats_needed,
    pay_now_button,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va215c2hvdy5wYWdlX29iamVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib29rbXlzaG93LnBhZ2Vfb2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE2RjtBQUc3RixTQUFzQixVQUFVOztRQUM1QixPQUFPLE1BQU0sY0FBQyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7SUFDbEUsQ0FBQztDQUFBO0FBRkQsZ0NBRUM7QUFFRCxTQUFzQixZQUFZOztRQUM5QixPQUFPLE1BQU0sY0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUFBO0FBRkQsb0NBRUM7QUFBQSxDQUFDO0FBRUYsU0FBc0IsbUJBQW1COztRQUNyQyxPQUFPLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUFBO0FBRkQsa0RBRUM7QUFBQSxDQUFDO0FBRUYsU0FBc0IsYUFBYTs7UUFDL0IsT0FBTyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUFBO0FBRkQsc0NBRUM7QUFBQSxDQUFDO0FBQ0YsU0FBc0Isa0JBQWtCOztRQUNwQyxPQUFPLE1BQU0sZUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQUE7QUFGRCxnREFFQztBQUFBLENBQUM7QUFDRixTQUFzQixtQkFBbUI7O1FBQ3JDLE9BQU8sTUFBTSxlQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FBQTtBQUZELGtEQUVDO0FBQUEsQ0FBQztBQUVGLFNBQXNCLGNBQWM7O1FBQ2hDLE9BQU8sTUFBTSxlQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUFBO0FBRkQsd0NBRUM7QUFBQSxDQUFDO0FBRUYsU0FBc0IsbUJBQW1COztRQUNyQyxPQUFPLE1BQU0sZUFBRSxDQUFDLDZCQUE2QixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FBQTtBQUZELGtEQUVDO0FBQUEsQ0FBQztBQUNGLFNBQXNCLFlBQVk7O1FBQzlCLE9BQU8sTUFBTSxjQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUFBO0FBRkQsb0NBRUM7QUFBQSxDQUFDO0FBQ0YsU0FBc0IsbUJBQW1COztRQUNyQyxPQUFPLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUFBO0FBRkQsa0RBRUM7QUFBQSxDQUFDO0FBQ0YsU0FBc0IsYUFBYTs7UUFDL0IsT0FBTyxNQUFNLGVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUFBO0FBRkQsc0NBRUM7QUFBQSxDQUFDO0FBQ0YsU0FBc0IsY0FBYzs7UUFDaEMsT0FBTyxNQUFNLGVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUFBO0FBRkQsd0NBRUM7QUFBQSxDQUFDO0FBQ0YsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFDLFVBQVU7SUFDeEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7Q0FDakIsQ0FBQSJ9