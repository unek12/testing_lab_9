// describe('pastebin', () => {
//     const text = 'Hello from WebDriver'
//     const title = 'helloweb'
    
//     beforeEach(async () => {
//         await browser.url('https://pastebin.com')
//         await browser.setWindowSize(1280, 720)
//     })
    
//     it('Bring It On', async () => {
//         await $('#postform-text').setValue(text)
//         await $('#postform-expiration').parentElement().$('.selection').click()
//         await $('//li[text()="10 Minutes"]').click()
//         await $('#postform-name').setValue(title)
//         await $('.btn.-big').click()

//         await expect(browser).toHaveTitle('helloweb - Pastebin.com')
//         await expect(await $('//a[contains(text(), "text")]')).toHaveText('text')
//         await expect(await $('ol')).toHaveText(text)
//     });
// });
