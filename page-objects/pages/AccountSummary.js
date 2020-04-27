import { Selector } from 'testcafe'

class AccountSummary {
    constructor() {
        this.summaryTab = Selector('#account_summary_tab')
    }
}

export default AccountSummary