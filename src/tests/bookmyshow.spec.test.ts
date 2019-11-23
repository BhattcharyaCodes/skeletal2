import {browser, protractor} from 'protractor';
import { not_now_locator_btn, movie_card_selector, tc_accept_btn, 
    dimension_pill, movie_date_locator, movie_time_selector,
    seats_needed, book_tickets, seat_selector, select_seats_button
} from '../page-objects/bookmyshow.page_objects';
import { createWriteStream } from 'fs';


describe('BookMyShow',()=>{
    let  EC = protractor.ExpectedConditions;
    let homepage_url = 'https://in.bookmyshow.com/bengaluru';

    beforeEach(async()=>{
        await browser.get(homepage_url);

    });

    it('should verify the you can book a ticket and the seat next to you is vacant or not', async () => {
       
        expect(browser.getCurrentUrl()).toEqual(homepage_url); 
        
        let not_now_btn = await not_now_locator_btn();
        if (browser.wait(EC.elementToBeClickable(not_now_btn))){
            await not_now_btn.click();
        }
        await browser.actions().sendKeys(protractor.Key.ESCAPE).perform();   
        let movie_selector = await movie_card_selector();
        await browser.executeScript('window.scrollTo(0,100);')
        await movie_selector.click();
    
        let book_ticket = await book_tickets();
        await browser.wait(EC.elementToBeClickable(book_ticket));  
        await book_ticket.click();

        let dimension_selector = await dimension_pill();
        if (dimension_selector.isPresent()){
            await dimension_selector.click();
        }
        //takes you to date, select 1st card
        let movie_date = await movie_date_locator();
        await movie_date.click();
        //select 1st time slot
        let time_slot_1 = await movie_time_selector();
        await time_slot_1.click();

        //accept the TC
        let tc_accept = await tc_accept_btn();
        await tc_accept.click();

        let seat_num = await seats_needed();
        let sel_seat_btn = await select_seats_button();
        await seat_num.click();
        await browser.wait(EC.elementToBeClickable(sel_seat_btn));
        await sel_seat_btn.click();
        //select the seat position
        let select_seats_btn = await seat_selector();
        await browser.wait(EC.elementToBeClickable(select_seats_btn));
        await select_seats_btn.click();
        await browser.sleep(3000);

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
        let png = await browser.takeScreenshot();
        let stream = createWriteStream("movieseat_payment_page_screenshot.png");
        stream.write(new Buffer(png, 'base64'));
        stream.end(); 
    });


});