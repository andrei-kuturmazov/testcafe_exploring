import AccountSummary from '../page-objects/pages/AccountSummary'
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'

const navbar = new Navbar()
const loginPage = new LoginPage()
const accountSummary = new AccountSummary()

fixture `Login test`
    .page `http://zero.webappsecurity.com/`


    test ("User can't login with invalid credentials", async t => {
        await t.click(navbar.signInButton)
        loginPage.loginToApp('invalid_username', 'invalid_password')
        await t.expect(loginPage.errorMessage.innerText).contains('Login and/or password are wrong.')
    })

    test ("User can login with valid credentials", async t => {
        await t.click(navbar.signInButton)
        loginPage.loginToApp('username', 'password')
        await t.expect(accountSummary.summaryTab.exists).ok()
        await t.expect(loginPage.loginForm.exists).notOk()
        await t.click(navbar.userIcon)
        await t.click(navbar.logoutButton)
        await t.expect(navbar.logoutButton.exists).notOk()
        await t.expect(navbar.signInButton.exists).ok()
})