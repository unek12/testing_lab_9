class Menu {
    get noveltiesMenuButton() {
        return '//span[@class="c-main-nav-link-name" and contains(text(),"Новинки")]/parent::*/parent::a'
    }

    async clickNoveltiesMenuButton() {
        await $(this.noveltiesMenuButton).click()
    }
}

module.exports = new Menu()
