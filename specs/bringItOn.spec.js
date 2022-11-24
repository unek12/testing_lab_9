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

//         const textareaText = 'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force'

//         await expect(browser).toHaveTitle('how to gain dominance among developers - Pastebin.com')
//         await expect(await $('//a[contains(text(), "Bash")]')).toHaveText('Bash')
//         await expect(await $('ol')).toHaveText(textareaText)
//     });
// });
