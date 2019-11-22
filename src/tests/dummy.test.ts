import {element, by, By, $, $$, browser, protractor} from 'protractor';
import { getHeader } from '../page-objects/dummy.page';

describe('Flipkart',()=>{
    let homepage_url = "https://www.flipkart.com/";
    let  EC = protractor.ExpectedConditions;


    beforeEach(async()=>{
        await browser.get(homepage_url);
    });

    it('should verify the header.', async () => {
        let header = await getHeader();
        expect(header.isPresent()).toBeTruthy();
        expect(true).toBe(true);
    });


});