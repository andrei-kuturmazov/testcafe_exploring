import Navbar from '../page-objects/components/Navbar'
import FeedbackPage from '../page-objects/pages/FeedbackPage'

const navbar = new Navbar()
const feedbackPage = new FeedbackPage()

// prettier-ignore
fixture `Feedback form`
  .page `http://zero.webappsecurity.com`

test("User can send feedback via form", async t => {
    await t.click(navbar.feedbackLink)
    feedbackPage.fillFormWithData('Name', 'email@gmail.com', 'Random feedback', 'Just a simple comment here')
    await t.expect(feedbackPage.responseMessage.innerText).contains('Thank you for your comment')
})