const Page = require("./page");

class GenderPage extends Page {
    get genderButton() {
        return '.c-genre-selector-item'
    }

    async selectGender() {
        await $(this.genderButton).waitForExist({ timeout: 10000 })
        await $(this.genderButton).click()
    }
}

module.exports = new GenderPage()
