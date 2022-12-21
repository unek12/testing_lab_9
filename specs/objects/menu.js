class Menu {
    get noveltiesMenuButtonSelector() {
        return '//span[@class="c-main-nav-link-name" and contains(text(),"Новинки")]/parent::*/parent::a'
    }

    get noveltiesMenuButton() {
        return $(this.noveltiesMenuButtonSelector)
    }

    get shopsButtonSelector() {
        return '/html/body/div[4]/div[3]/div/div/ul/li[14]/a/p/span'
    }

    get shopsButton() {
        return $(this.shopsButtonSelector)
    }

    async clickShopsButton() {
        await this.shopsButton.click()
    }

    async clickNoveltiesMenuButton() {
        await this.noveltiesMenuButton.click()
    }
}

module.exports = new Menu()
