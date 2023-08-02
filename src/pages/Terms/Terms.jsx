import React from 'react'
import './Terms.scss'
import Jumbotron from '../../components/Jumbotron/Jumbotron'

function Terms () {
  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Terms of service'
    }
  ]
  return (
    <div className='terms'>
      <Jumbotron
      pageTitle={'Terms of service'}
      backgroundClassName="terms__bg"
      breadcrumb={breadcrumb}
      />
      <div className='terms__content'>
        <p className='terms__content-update'>This Terms of Service was last updated on September 1, 2022.</p>
        <h3 className='terms__content-subtitle'>
          <span>1.</span>
            Our website
        </h3>
        <p className='terms__content-p'>Our website address is: http://mebid.com</p>
        <blockquote>
          <p className='terms__content-p'>
            We collect certain data from you directly like information you enter yourself data about your
            participation in courses and data from third-party platforms you connect with mebid.
            We also collect some data automatically information about your device and what parts of our
            Services you interact with or spend time using.
          </p>
        </blockquote>
        <h3 className='terms__content-subtitle'>
          <span>2.</span>
             Data you provide to us
        </h3>
        <p className='terms__content-p'>We may collect different data from or about
          you depending on how you use the Services.Below are some examples to help
          you better understand the data we collect.</p>
        <h3 className='terms__content-subtitle'>
        <span>3.</span>
          How we get data about you
        </h3>
        <p className='terms__content-p'>
          We use tools like cookies, web beacons, analytics services, and advertising providers
          to gather the data listed above. Some of these tools offer you the ability
          to opt out of datacollection.
        </p>
        <h3 className='terms__content-subtitle'>
        <span>4.</span>
          What we use your data for
        </h3>
        <ol>
          <li>Responding to your questions and concerns;</li>
          <li>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        </ol>
        <h3 className='terms__content-subtitle'>
        <span>5.</span>
          Your choices about the use of your data
        </h3>
        <p className='terms__content-p'>
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
            To get information and control cookies used for tailored advertising
            from participating companies, see the consumer opt-out pages for the
            Network Advertising Initiative and Digital Advertising Alliance,
            or if you’re located in the European Union, visit the Your Online Choices site.
            To opt out of Google’s display advertising or customize Google Display Network ads,
            visit the Google Ads Settings page. To opt out of Taboola’s targeted ads,
            see the Opt-out Link in their Cookie Policy.
          </li>
          <li>
            To update data you provide directly, log into your account and update your account at any time.
          </li>
        </ul>
        <h3 className='terms__content-subtitle'>
        <span>6.</span>
          Our policy concerning children
        </h3>
        <p className='terms__content-p'>
          We recognize the privacy interests of children and encourage parents and guardians
          to take an active role in their children’s online activities and interests.
          Children under 13 (or under 16 in the European Economic Area) should not use the Services.
          If we learn that we’ve collected personal data from a child under those ages.
        </p>
      </div>
    </div>
  )
}

export default Terms
