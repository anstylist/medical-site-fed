import React from 'react'
import './Privacy.scss'
import Jumbotron from '../../components/Jumbotron/Jumbotron'

function Privacy () {
  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Privacy Policy'
    }
  ]
  return (
    <div className='privacy'>
      <Jumbotron
      pageTitle={'Privacy Policy'}
      backgroundClassName="privacy__bg"
      breadcrumb={breadcrumb}
      />
      <div className='privacy__content'>
        <p className='privacy__content-update'>This Privacy Policy was last updated on September 1, 2022.</p>
        <h3 className='privacy__content-subtitle'>
          <span>1.</span>
            What data we get
        </h3>
        <blockquote>
          <p className='privacy__content-p'>
          We collect certain data from you directly like information you enter yourself data about your
          participation in courses and data from third-party platforms you connect with Augu.
          We also collect some data automatically information about your device and what
          parts of our Services you interact with or spend time using.
          </p>
        </blockquote>
        <h3 className='privacy__content-subtitle'>
          <span>2.</span>
            Data you provide to us
        </h3>
        <p className='privacy__content-p'>We may collect different data from or about you depending on how you use the Services.
          Below are some examples to help you better understand the data we collect.</p>
        <h3 className='privacy__content-subtitle'>
        <span>3.</span>
          How we get data about you
        </h3>
        <p className='privacy__content-p'>
          We use tools like cookies, web beacons, analytics services, and advertising providers
          to gather the data listed above. Some of these tools offer you the ability
          to opt out of datacollection.
        </p>
        <h3 className='privacy__content-subtitle'>
        <span>4.</span>
          What we use your data for
        </h3>
        <ol>
          <li>Responding to your questions and concerns;</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        </ol>
        <h3 className='privacy__content-subtitle'>
        <span>5.</span>
          How we get data about you
        </h3>
        <p className='privacy__content-p'>
          You can choose not to provide certain data to us, but you may not be able to use certain
           features of the Services.
        </p>
        <ul>
          <li>To stop receiving promotional communications from us, you can opt out by using the
            unsubscribe mechanism in the promotional communication you receive or by changing the email
            preferences in your account. Note that regardless of your email preference settings,
            we will send you transactional and relationship messages regarding the Services,
            including administrative confirmations, order confirmations, important updates about the
            Services, and notices about our policies.</li>
          <li>
            The browser or device you use may allow you to control cookies and other types of local
            data storage. Your wireless device may also allow you to control whether location or other
            data is collected and shared. You can manage Adobe LSOs through their Website Storage
            Settings panel.
          </li>
          <li>
            The browser or device you use may allow you to control cookies and other types of local
            data storage. Your wireless device may also allow you to control whether location or other data
            is collected and shared. You can manage Adobe LSOs through their Website Storage Settings panel.
          </li>
          <li>
          To update data you provide directly, log into your account and update your account at any time.
          </li>
        </ul>
        <h3 className='privacy__content-subtitle'>
        <span>6.</span>
          Our policy concerning children
        </h3>
        <p className='privacy__content-p'>
          We recognize the privacy interests of children and encourage parents and guardians
          to take an active role in their children’s online activities and interests.
          Children under 13 (or under 16 in the European Economic Area) should not use the Services.
          If we learn that we’ve collected personal data from a child under those ages.
        </p>
      </div>
    </div>
  )
}

export default Privacy
