const Page = require("./page");

class ProductPage extends Page {
    async selectProduct(product) {
        return await $(product)
    }
}

module.exports = new ProductPage()
