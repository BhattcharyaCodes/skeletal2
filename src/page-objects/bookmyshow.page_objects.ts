import { browser, element, by, By, $, $$, ExpectedConditions, protractor } from 'protractor';
import { elementTextContains } from 'selenium-webdriver/lib/until';

export async function search_box(){
    return await $('input.search-box.typeahead#input-search-box');
}
    
export async function book_tickets() {
    return await $('a.showtimes.btn._cuatro');
};
    
export async function not_now_locator_btn() {
    return await element(by.id('wzrk-cancel'));
};
   
export async function tc_accept_btn() {
    return await element(by.id('btnPopupAccept'));
};    
export async function movie_date_locator() {
    return await $$('li._active').get(0);
};    
export async function movie_card_selector() {
    return await $$('div.card-img').get(5);
};    

export async function dimension_pill() {
    return await $$('a.dimension-pill').get(0);
};

export async function movie_time_selector() {
    return await $$('div.showtime-pill-container').get(0);
};
export async function seats_needed() {
    return await $('li#pop_1');
};
export async function select_seats_button() {
    return await element(by.id('proceed-Qty'));
};
export async function seat_selector() {
    return await $$('a._available').get(0);
};
export async function pay_now_button() {
    return await $$('a#btmcntbook').get(0);
};
module.exports = {search_box,
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
}
