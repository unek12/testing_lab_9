describe('pastebin', () => {
    const text = 'git config --global user.name  \"New Sheriff in Town\" \ngit reset $(git commit-tree HEAD^{tree} -m \"Legacy code\")\ngit push origin master --force'
    const title = 'how to gain dominance among developers'
    
    beforeEach(async () => {
        await browser.url('https://pastebin.com')
        await browser.setWindowSize(1280, 720)
    })
    
    it('I Can Win', async () => {
        await $('#postform-text').setValue(text)
        await $('#postform-format').parentElement().$('.selection').click()
        await $('//li[text()="Bash"]').click()
        await $('#postform-name').setValue(title)
        await $('.btn.-big').click()
    });
});
