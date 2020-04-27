import { Selector } from 'testcafe';

//prettier-ignore
fixture `Getting started with Testafe`
    .page `https://devexpress.github.io/testcafe/example/`
    .beforeEach (async t => {
        await t.setTestSpeed(1)
        await t.setPageLoadTimeout(1000)
    })

test('First UI test', async t => {
    const articleText = Selector('#article-header').innerText
    await t.typeText("#developer-name", "John Doe")
    await t.click('#submit-button')

    await t.expect(articleText).contains('Doe')
})
