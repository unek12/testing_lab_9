class Page {
    get url() {
        return 'https://www.pullandbear.com/'
    }

    async open() {
        await browser.url(this.open);
    }
}

module.exports = Page
