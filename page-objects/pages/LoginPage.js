import { Selector, t } from 'testcafe'

class LoginPage {
    constructor() {
        this.loginForm = Selector('#login_form')
        this.userLogin = Selector('#user_login')
        this.userPassword = Selector('#user_password')
        this.submitButton = Selector('.btn-primary')
        this.errorMessage = Selector('.alert-error')
    }

    async loginToApp(username, password) {
        await t
        .typeText(this.userLogin, username, { paste : true, replace : true })
        .typeText(this.userPassword, password, { paste : true, replace : true })
        .click(this.submitButton)
    }
}


export default LoginPage