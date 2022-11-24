describe('pullandbeer', () => {
    beforeEach(async () => {
        await browser.url('https://www.pullandbear.com/')
        await browser.setWindowSize(1280, 720)
    })

    it('should display product', async () => {
        await $('#continueButton').click()
        await $('.c-genre-selector-item').click()
        await $('//span[@class="c-main-nav-link-name" and contains(text(),"Обувь")]/parent::*/parent::a').click()
        
        await expect((await $('//span[contains(text(), "Босоножки с ремешками, на каблуке")][1]'))).toExist()
    });
});
