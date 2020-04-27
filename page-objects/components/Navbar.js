import { Selector, t } from 'testcafe'

class Navbar {
    constructor() {
        this.signInButton = Selector('#signin_button')
        this.userIcon = Selector('.icon-user')
        this.logoutButton = Selector('#logout_link')
        this.feedbackLink = Selector('#feedback')
    }
}

export default Navbar