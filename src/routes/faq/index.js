import { h, Component } from 'preact';
import IoLogo from '../../components/io_logo';
import SocialFooter from '../../components/social_footer';
import Footer from '../../components/footer';
import style from './style';
import { Link } from 'preact-router';

export default class Faq extends Component {
  handleScroll() {
    const ele = document.querySelector('.topappbar.mdc-top-app-bar');
    if (document.documentElement.scrollTop < 56) {
      ele.setAttribute('top', true);
    } else {
      ele.removeAttribute('top');
    }
  }

  componentDidMount() {
    document.title = 'FAQ - GDG Kolkata DevFest 2019';
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.querySelector('.topappbar.mdc-top-app-bar').removeAttribute('top');
  }

  render({ rootPath }) {
    return (
      <div>
        <div class="hero">
          
          <h2>FAQ</h2>
        </div>
        <div class={style.faq}>
          <div class={style.faq_item}>
            <div class={style.faq_title}>Call for Speakers, Volunteers</div>
            <div class={style.faq_content}>
              <p><b>Call for Speakers</b></p>
              <p>The Call for Speaker sessions can be found <a href="https://sessionize.com/devfest-kolkata-2019">here</a>.</p>
              <br />
              <p><b>Call for Volunteers</b></p>
              <p>The Call for event volunteers can be found <a href="http://tiny.cc/devfest19-volunteers">here</a>.</p>

             
            </div>
          </div>
        </div>
        <div class={style.faq}>
          <div class={style.faq_item}>
            <div class={style.faq_title}>General</div>
            <div class={style.faq_content}>
            
              <p><b>Community Guidelines</b></p>
              <p>Be nice to each other, and be respectful and constructive.</p>
              <br />
              <p><b>Date and location</b></p>
              <p>GDG Kolkata DevFest 2019 is tentatively taking place on 3rd August, 2019. Venue is yet to be announced.</p>
              <br />
              <p><b>Stay Informed</b></p>
              <p>To stay up to date on the latest information on sessions, speakers, and activities, be sure to visit the GDG Kolkata DevFest 2019 website, and follow us on <a href="https://www.facebook.com/GDGKolkata/" target="_blank" rel="noopener noreferrer">Facebook Page</a>. You can also follow and join the social conversation about GDG Kolkata DevFest 2019 via official hashtags <b>#DevFestKol19</b>. In addition, we'll be emailing important information to all registered attendees, along with check-in instructions prior to the conference.</p>
              <br />
              <p><b>Content Formats</b></p>
              <p>During the conference, attendees will be able to attend sessions and hands-on workshops, chat with experts and attendees.</p>
              <br />
              <p><b>Language</b></p>
              <p>All presentations at GDG Kolkata DevFest 2019 will be in English.</p>
            </div>
          </div>
        </div>
        <div class={style.faq}>
          <div class={style.faq_item}>
            <div class={style.faq_title}>Attendance Details</div>
            <div class={style.faq_content}>
              <p><b>Event Attire</b></p>
              <p>GDG Kolkata DevFest 2019 is a developer event, so please be comfortable and casual. There is no enforced dress code.</p>
              <br />
              <p><b>Onsite food &amp; beverages</b></p>
              <p>Attendees are offered complimentary breakfast, lunch, and tea break.</p>
              <br />
              <p><b>Smoking</b></p>
              <p>Smoking is strictly prohibited in the venue.</p>
              <br />
              <p><b>No Soliciting</b></p>
              <p>No solicitation or selling of items or services is allowed at GDG Kolkata DevFest 2019. Any attendee conducting these activities may be removed from the conference.</p>
              <br />
            
            </div>
          </div>
        </div>

        <SocialFooter rootPath={rootPath} />
        <Footer rootPath={rootPath} />
      </div>
    );
  }
}
