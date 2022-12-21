const Page = require("./page");

class ProductPage extends Page {
    get sortButton() {
        return '//button[@class="filters-switch-display"][1]'
    }

    async selectProduct(product) {
        return $(product)
    }

    async openSortMenu(){
        await $(this.sortButton).click()
    }

    async sortAsc(){
        await $('//button[@id="sort-asc"][1]').click()
    }
}

module.exports = new ProductPage()
