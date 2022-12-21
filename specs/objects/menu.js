class Menu {
  get noveltiesMenuButtonSelector() {
    return '//a[@data-category-id="1030017536"]'
  }

  get noveltiesMenuButton() {
    return $(this.noveltiesMenuButtonSelector)
  }

  get shopsButtonSelector() {
    return '//a[@data-category-id="1030259513"]'
  }

  get shopsButton() {
    return $(this.shopsButtonSelector)
  }

  async clickShopsButton() {
    // await this.shopsButton.waitForExist({ timeout: 10000 })
    // await this.shopsButton.click()
    await browser.url('https://www.pullandbear.com/by/store-locator.html')
  }

  async clickNoveltiesMenuButton() {
    browser.pause(2000)
    await this.noveltiesMenuButton.waitForExist({ timeout: 10000 })
    await this.noveltiesMenuButton.click()
  }
}

module.exports = new Menu()
