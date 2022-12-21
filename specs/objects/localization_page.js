const Page = require("./page");

class LocalizationPage extends Page {
    get defaultLocalizationButton() {
        return '#continueButton'
    }

    async selectDefaultLocalization() {
        await $(this.defaultLocalizationButton).waitForExist({ timeout: 10000 })
        await $(this.defaultLocalizationButton).click()
    }

    async selectCanadaLocalization() {
        await $('.stores').shadow$('#boton').waitForExist({ timeout: 10000 })
        await $('.stores').shadow$('#boton').click()
        await $('.stores').shadow$('#option-CA').click()
        await $(this.defaultLocalizationButton).click()
    }
}

module.exports = new LocalizationPage()
