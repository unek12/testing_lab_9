const LocalizationPage = require("./objects/localization_page");
const GenderPage = require("./objects/gender_page");
const ProductPage = require("./objects/product_page");
const Menu = require("./objects/menu");


describe('pullandbeer', () => {
    beforeEach(async () => {
        await browser.url('https://www.pullandbear.com/');
        await browser.setWindowSize(1280, 720);
    })

    it('should display product', async () => {
        await LocalizationPage.selectDefaultLocalization();
        await GenderPage.selectGender();
        await Menu.clickNoveltiesMenuButton();

        await expect(ProductPage.selectProduct('//span[contains(text(), "Длинное двубортное пальто")][1]')).toExist()
    });
});
