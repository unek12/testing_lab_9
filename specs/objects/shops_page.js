const Page = require("./page");

class ShopsPage extends Page {
  get countryInputSelector() {
    return '/html/body/div[5]/div[1]/map-search-app//div/div[2]/map-search-form//form/input'
  }

  get countryInput() {
    return $(this.countryInputSelector)
  }

  async setValueToCountryInput(value) {
    return $('/html/body/div[5]/div[1]/map-search-app').shadow$('input').setValue(value);
    // return this.countryInput.setValue(value)
  }

  get countryInputSubmitSelector() {
    return '/html/body/div[5]/div[1]/map-search-app//div/div[2]/map-search-form//form/button-element[2]//button'
  }

  async countryInputSubmit() {
    await $('/html/body/div[5]/div[1]/map-search-app//div/div[2]/map-search-form').shadow$('//*[@class="button-search-map"]').click();
    // await $(this.countryInputSubmitSelector).click()
  }
}

module.exports = new ShopsPage()
