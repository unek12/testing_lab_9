// const LocalizationPage = require("./objects/localization_page");
// const GenderPage = require("./objects/gender_page");
// const ProductPage = require("./objects/product_page");
// const Menu = require("./objects/menu");
// const ShopPage = require("./objects/shops_page");
//
//
// describe('pullandbeer', () => {
//     before(async () => {
//         await browser.url('https://www.pullandbear.com/ww');
//         await browser.setWindowSize(1280, 720);
//         await GenderPage.selectGender();
//     })
//
//     beforeEach(async () => {
//         await browser.url('https://www.pullandbear.com/ww');
//     })
//
//     it('проверка меню для людей с ограниченными возможностями', async () => {
//         browser.pause(4000)
//         await $('//*[@class="is-home-page"]').click({ x: -10 });
//         await $('//*[@class="is-home-page"]').click({ x: -10 });
//         browser.pause(2000)
//
//         await expect($('#INDmenu-heading')).toExist();
//     });
//
//     it('поиск магазинов на карте', async () => {
//         await Menu.noveltiesMenuButton.moveTo();
//         await Menu.clickShopsButton();
//
//         await expect($('//html/body/div[5]/div[1]')).toExist();
//     });
// });
