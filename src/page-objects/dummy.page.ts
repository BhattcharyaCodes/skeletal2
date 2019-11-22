import { browser, element, by, By, $, $$, ExpectedConditions, protractor } from 'protractor';


    
export async function getHeader() {
    return await $('img._1e_EAo');
};

module.exports = {getHeader}
