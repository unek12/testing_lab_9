// const LocalizationPage = require("./objects/localization_page");
// const GenderPage = require("./objects/gender_page");
// const ProductPage = require("./objects/product_page");
// const Menu = require("./objects/menu");
// const ShopPage = require("./objects/shops_page");
//
//
// describe('pullandbeer', () => {
//   beforeEach(async () => {
//     await browser.url('https://www.pullandbear.com/');
//     await browser.setWindowSize(1280, 720);
//   })
//
//   it('проверка меню для людей с ограниченными возможностями', async () => {
//     await LocalizationPage.selectDefaultLocalization();
//     await browser.pause(3000);
//     await GenderPage.selectGender();
//     await $('//*[@class="is-home-page"]').shadow$('button').click();
//
//     await expect($('//*[@id="INDmenu-heading"]')).toExist();
//   });
//
//   it('поиск магазинов на карте', async () => {
//     await LocalizationPage.selectDefaultLocalization();
//     await browser.pause(3000);
//     await GenderPage.selectGender();
//     await Menu.noveltiesMenuButton.moveTo();
//     await Menu.clickShopsButton();
//
//     await expect($('/html/body/div[5]/div[1]/map-search-app"]')).toExist();
//   });
//
//
// });
