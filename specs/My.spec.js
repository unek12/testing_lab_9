const LocalizationPage = require("./objects/localization_page");
const GenderPage = require("./objects/gender_page");
const ProductPage = require("./objects/product_page");
const Menu = require("./objects/menu");

const existRecord = '"Кожаная куртка с бахромой - Limited Edition"'
const existRecordWithSort = '"Серьги-кольца “Бабочка”"'
const existRecordXPath = `//span[contains(text(), ${ existRecord })][1]`
const existRecordWithSortXPath = `//span[contains(text(), ${ existRecordWithSort })][1]`


describe('pullandbeer', () => {
  before(async () => {
    await browser.url('https://www.pullandbear.com/');
    await browser.setWindowSize(1280, 720);
  })

  it('наличие товара в магазине', async () => {
    await LocalizationPage.selectDefaultLocalization();
    await GenderPage.selectGender();
    // browser.pause(3000)
    browser.pause(3000)
    await Menu.clickNoveltiesMenuButton();

    await expect(ProductPage.selectProduct(existRecordXPath)).toExist();
  });

  it('проверка сортироки', async () => {
    // await LocalizationPage.selectDefaultLocalization();
    // await GenderPage.selectGender();
    browser.pause(3000)
    await Menu.clickNoveltiesMenuButton();

    await expect(ProductPage.selectProduct(existRecordXPath)).toExist();
    browser.pause(3000)
    await ProductPage.openSortMenu();
    await ProductPage.sortAsc();

    await expect(ProductPage.selectProduct(existRecordWithSortXPath)).toExist();
  });

  // it('наличие размера товара в магазине', async () => {
  //   // await LocalizationPage.selectDefaultLocalization();
  //   // await GenderPage.selectGender();
  //   // browser.pause(3000)
  //
  //   await Menu.clickNoveltiesMenuButton();
  //
  //   await expect(ProductPage.selectProduct('//span[contains(text(), "Стеганые полусапоги")][1]')).toExist();
  //
  //   await $('//*[@id="productWrapper"]/a').click()
  //
  //   browser.pause(3000)
  // });
});
