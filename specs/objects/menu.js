class Menu {
    get noveltiesMenuButtonSelector() {
        return '//span[@class="c-main-nav-link-name" and contains(text(),"Новинки")]/parent::*/parent::a'
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
    await this.noveltiesMenuButton.waitForExist({ timeout: 10000 })
    await this.noveltiesMenuButton.click()
    }
}

module.exports = new Menu()
