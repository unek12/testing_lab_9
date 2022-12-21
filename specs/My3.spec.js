const LocalizationPage = require("./objects/localization_page");
const GenderPage = require("./objects/gender_page");
const ProductPage = require("./objects/product_page");
const Menu = require("./objects/menu");
const ShopPage = require("./objects/shops_page");


describe('pullandbeer', () => {
  before(async () => {
    await browser.url('https://www.pullandbear.com/ww');
    await browser.setWindowSize(1280, 720);
    await LocalizationPage.selectCanadaLocalization();
    await GenderPage.selectGender();
  })

  beforeEach(async () => {
    await browser.url('https://www.pullandbear.com/ww');
    // await LocalizationPage.selectCanadaLocalization();
  })

  it('sing up', async () => {
    await $('//button[@class="c-button c-button--secondary-nav-link"]').click();
    await $('#email').setValue('rudman.14@mail.ru')
    await $('#continueOtpLogin').shadow$('button').click({ x: 1 })

    await $('#password').setValue('EEm**yHW6+2c$-X')
    await $('//login-password').shadow$('.continue-button').click({ x: 1 })

    await browser.pause(5000)
  });
});
