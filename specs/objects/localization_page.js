const Page = require("./page");

class LocalizationPage extends Page {
    get defaultLocalizationButton() {
        return '#continueButton'
    }

    async selectDefaultLocalization() {
        await $(this.defaultLocalizationButton).click()
    }
}

module.exports = new LocalizationPage()
